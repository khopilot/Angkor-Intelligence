import { getNewsArticles } from '@/lib/mdx';
import HomeClient from '@/components/home-client';

export default function HomePage() {
  const newsArticles = getNewsArticles().slice(0, 3);

  return <HomeClient newsArticles={newsArticles} />;
}