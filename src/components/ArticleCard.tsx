import Link from 'next/link';
import Image from 'next/image';
import { Article } from '@/lib/articles';

interface ArticleCardProps {
  article: Article;
  className?: string;
}

export default function ArticleCard({ article, className = '' }: ArticleCardProps) {
  return (
    <Link href={`/articles/${article.slug}`} className={`card bg-base-100 shadow-lg hover:shadow-xl transition-all h-full ${className}`}>
      <figure className="relative h-20">
        <Image
          src={article.coverImage}
          alt={article.title}
          fill
          className="object-contain p-2"
        />
      </figure>
      <div className="card-body p-4">
        <div className="flex justify-between items-start mb-2 flex-wrap gap-2">
          <div className="flex flex-wrap gap-1">
            {article.tags.slice(0, 2).map(tag => (
              <span key={tag} className="badge badge-primary text-xs">{tag}</span>
            ))}
          </div>
          <span className="text-xs text-gray-500">
            {new Date(article.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'short',
              day: 'numeric',
            })}
          </span>
        </div>
        <h3 className="card-title text-lg">{article.title}</h3>
        <p className="mt-2 text-sm line-clamp-2">{article.excerpt}</p>
      </div>
    </Link>
  );
} 