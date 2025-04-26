import { getAllArticles } from "@/lib/articles";
import { Metadata } from "next";

import ArticleGrid from "@/components/ArticleGrid";
import PageLayout from "@/components/PageLayout";

export const metadata: Metadata = {
  title: "Articles | Cubeunity",
  description: "Technical articles and insights from Cubeunity",
};

export default async function ArticlesPage() {
  const articles = await getAllArticles();

  // Get unique tags from all articles
  const allTags = Array.from(
    new Set(articles.flatMap((article) => article.tags))
  ).sort();

  return (
    <PageLayout>
      <main className="flex-1">
        <div>
          <div className="container mx-auto px-4 py-12">
            <h1 className="text-4xl md:text-5xl font-bold">Articles</h1>
            <p className="text-xl text-gray-600">
              Technical insights and best practices from our team
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 mb-12">
          <ArticleGrid articles={articles} initialTags={allTags} />
        </div>
      </main>
    </PageLayout>
  );
}
