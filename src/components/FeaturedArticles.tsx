import Link from 'next/link';
import { getAllArticles } from '@/lib/articles';
import ArticleCard from './ArticleCard';

export default async function FeaturedArticles() {
  // Get the articles
  const allArticles = await getAllArticles();
  
  // Get the first 3 articles
  const featuredArticles = allArticles.slice(0, 3);

  return (
    <section className="py-10 bg-base-200">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-3">Featured Articles</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Access our collection of guides, templates, and case studies designed to help you build and scale your technical organization effectively.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredArticles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="/articles" className="btn btn-primary">
            VIEW ALL ARTICLES
          </Link>
        </div>
      </div>
    </section>
  );
} 