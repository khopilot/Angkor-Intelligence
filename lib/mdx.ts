import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'content');

export interface NewsArticle {
  slug: string;
  metadata: {
    title: string;
    description: string;
    tag: string;
    date: string;
    featured?: boolean;
  };
  content: string;
}

export function getMDXData(slug: string, locale: string = 'en') {
  try {
    const filePath = path.join(contentDirectory, locale, `${slug}.mdx`);
    
    if (!fs.existsSync(filePath)) {
      return null;
    }
    
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data, content } = matter(fileContent);
    
    return {
      metadata: data,
      content,
    };
  } catch (error) {
    console.error(`Error reading MDX file: ${slug}`, error);
    return null;
  }
}

export function getNewsArticles(): NewsArticle[] {
  try {
    const newsDirectory = path.join(contentDirectory, 'news');
    
    if (!fs.existsSync(newsDirectory)) {
      return [];
    }
    
    const files = fs.readdirSync(newsDirectory);
    
    const articles: NewsArticle[] = [];
    
    for (const file of files) {
      if (!file.endsWith('.mdx')) continue;
      
      try {
        const filePath = path.join(newsDirectory, file);
        const fileContent = fs.readFileSync(filePath, 'utf-8');
        const { data, content } = matter(fileContent);
        
        const article: NewsArticle = {
          slug: file.replace('.mdx', ''),
          metadata: {
            title: data.title || '',
            description: data.description || '',
            tag: data.tag || '',
            date: data.date || '',
            featured: data.featured,
          },
          content,
        };
        
        articles.push(article);
      } catch (error) {
        console.error(`Error reading news file: ${file}`, error);
      }
    }
    
    return articles.sort((a, b) => new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime());
  } catch (error) {
    console.error('Error reading news directory:', error);
    return [];
  }
}