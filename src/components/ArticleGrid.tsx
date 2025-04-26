"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSearchParams, useRouter } from "next/navigation";

interface Article {
  slug: string;
  title: string;
  date: string;
  coverImage: string;
  tags: string[];
  excerpt: string;
}

interface ArticleGridProps {
  articles: Article[];
  initialTags: string[];
}

export default function ArticleGrid({
  articles,
  initialTags,
}: ArticleGridProps) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const initialTagFromUrl = searchParams.get("tag");

  const [selectedTags, setSelectedTags] = useState<string[]>(
    initialTagFromUrl ? [initialTagFromUrl] : []
  );

  // Update URL when tags change
  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    if (selectedTags.length === 0) {
      params.delete("tag");
    } else {
      params.set("tag", selectedTags[selectedTags.length - 1]);
    }
    router.replace(`/articles?${params.toString()}`);
  }, [selectedTags, router, searchParams]);

  const toggleTag = (tag: string) => {
    setSelectedTags(
      (prev) => (prev.includes(tag) ? prev.filter((t) => t !== tag) : [tag]) // Only allow one tag at a time for simplicity
    );
  };

  const filteredArticles = articles.filter(
    (article) =>
      selectedTags.length === 0 ||
      selectedTags.every((tag) => article.tags.includes(tag))
  );

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-lg font-semibold mb-3">Filter by Topic</h2>
        <div className="flex flex-wrap gap-2">
          {initialTags.map((tag) => (
            <button
              key={tag}
              onClick={() => toggleTag(tag)}
              className={`px-4 py-2 rounded-full text-sm transition-colors ${
                selectedTags.includes(tag)
                  ? "bg-primary text-primary-content"
                  : "bg-base-200 text-base-content hover:bg-base-300"
              }`}
            >
              {tag}
              {selectedTags.includes(tag) && <span className="ml-2">×</span>}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredArticles.map((article) => (
          <Link
            key={article.slug}
            href={`/articles/${article.slug}`}
            className="group h-full"
          >
            <div className="rounded-xl overflow-hidden shadow-lg bg-white transition-transform hover:-translate-y-1 h-full flex flex-col">
              <div className="relative h-30">
                <Image
                  src={article.coverImage}
                  alt={article.title}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h2 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {article.title}
                </h2>
                <div className="text-base-content/70 text-sm mb-3">
                  {new Date(article.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </div>
                <p className="text-base-content/70 mb-4 line-clamp-3 flex-grow">
                  {article.excerpt}
                </p>
                <div className="flex flex-wrap gap-2">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`px-2 py-1 text-sm rounded ${
                        selectedTags.includes(tag)
                          ? "bg-primary/20 text-primary"
                          : "bg-base-200 text-base-content"
                      }`}
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
  );
}
