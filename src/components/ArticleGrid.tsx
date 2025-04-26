"use client";

import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import ArticleCard from "./ArticleCard";
import { Article } from "@/lib/articles";

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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredArticles.map((article) => (
          <ArticleCard key={article.slug} article={article} />
        ))}
      </div>
    </div>
  );
}
