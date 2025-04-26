'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

interface Article {
  slug: string
  title: string
  date: string
  coverImage: string
  tags: string[]
  excerpt: string
}

export default function ArticleList({ articles }: { articles: Article[] }) {
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  
  // Get unique tags from all articles
  const allTags = Array.from(
    new Set(articles.flatMap(article => article.tags))
  )
  
  // Filter articles based on selected tags
  const filteredArticles = articles.filter(article =>
    selectedTags.length === 0 || 
    selectedTags.every(tag => article.tags.includes(tag))
  )
  
  const toggleTag = (tag: string) => {
    setSelectedTags(prev =>
      prev.includes(tag)
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    )
  }

  return (
    <div>
      <div className="mb-8 flex flex-wrap gap-2">
        {allTags.map(tag => (
          <button
            key={tag}
            onClick={() => toggleTag(tag)}
            className={`px-3 py-1 rounded-full text-sm ${
              selectedTags.includes(tag)
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 text-gray-700'
            }`}
          >
            {tag}
          </button>
        ))}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredArticles.map(article => (
          <Link 
            key={article.slug}
            href={`/articles/${article.slug}`}
            className="group"
          >
            <div className="rounded-lg overflow-hidden shadow-lg">
              <div className="relative h-48">
                <Image
                  src={article.coverImage}
                  alt={article.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2 group-hover:text-blue-500">
                  {article.title}
                </h2>
                <p className="text-gray-600 mb-4">{article.excerpt}</p>
                <div className="flex flex-wrap gap-2">
                  {article.tags.map(tag => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-gray-100 text-sm rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
} 