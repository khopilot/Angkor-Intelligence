import { getNewsArticles } from '@/lib/mdx';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { notFound } from 'next/navigation';

interface NewsPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function NewsPage({ params }: NewsPageProps) {
  const { slug } = await params;
  const articles = getNewsArticles();
  const article = articles.find(a => a.slug === slug);

  if (!article) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <span className="inline-block px-2 py-1 text-xs bg-primary/10 text-primary rounded mb-4">
              {article.metadata.tag}
            </span>
            <h1 className="text-4xl font-bold mb-4">
              {article.metadata.title}
            </h1>
            <p className="text-xl text-muted-foreground mb-4">
              {article.metadata.description}
            </p>
            <div className="text-sm text-muted-foreground">
              {new Date(article.metadata.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </div>
          </div>
          
          <div className="prose prose-invert max-w-none">
            <MDXRemote source={article.content} />
          </div>
        </div>
      </div>
    </div>
  );
}

export function generateStaticParams() {
  const articles = getNewsArticles();
  return articles.map((article) => ({
    slug: article.slug,
  }));
}