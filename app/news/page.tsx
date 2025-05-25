import { getNewsArticles } from '@/lib/mdx';
import Link from 'next/link';

export default function NewsPage() {
  const articles = getNewsArticles();

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-12">
          AI News & Insights
        </h1>
        
        <div className="max-w-4xl mx-auto space-y-8">
          {articles.map((article, i) => (
            <article key={i} className="border rounded-xl p-8 hover:shadow-lg transition-shadow bg-card">
              <div className="flex items-start justify-between mb-4">
                <span className="inline-block px-3 py-1 text-xs bg-primary/10 text-primary rounded-full">
                  {article.metadata.tag}
                </span>
                <time className="text-sm text-muted-foreground">
                  {new Date(article.metadata.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </time>
              </div>
              
              <h2 className="text-2xl font-bold mb-3">
                <Link 
                  href={`/news/${article.slug}`}
                  className="hover:text-primary transition-colors"
                >
                  {article.metadata.title}
                </Link>
              </h2>
              
              <p className="text-muted-foreground mb-4">
                {article.metadata.description}
              </p>
              
              <Link 
                href={`/news/${article.slug}`}
                className="text-primary hover:underline font-medium inline-flex items-center gap-1"
              >
                Read more →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}