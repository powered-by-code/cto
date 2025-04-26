import { getArticleBySlug, getAllArticles } from "@/lib/articles";
import Image from "next/image";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import PageLayout from "@/components/PageLayout";
import { markdown } from "markdown";
import { ArrowLeftIcon } from "lucide-react";

export async function generateStaticParams() {
  const articles = await getAllArticles();
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

type Params = Promise<{ slug: string }>;

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  if (!article) {
    return {
      title: "Article Not Found",
    };
  }

  return {
    title: `${article.title} | Cubeunity`,
    description: article.excerpt,
  };
}

export default async function ArticlePage({ params }: { params: Params }) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  return (
    <PageLayout showCTA={false}>
      <main className="flex-1 mb-12">
        <article className="container mx-auto px-4 py-8 max-w-4xl">
          <div className="bg-gradient-to-b from-white to-gray-50">
            <div className="container mx-auto px-4 py-4">
              <Link
                href="/articles"
                className="flex items-center gap-2 text-gray-600 hover:text-gray-800"
              >
                <ArrowLeftIcon className="w-4 h-4" /> Back to Articles
              </Link>
            </div>
          </div>
          <div className="relative h-[200px] mb-8 rounded-xl overflow-hidden">
            <Image
              src={article.coverImage}
              alt={article.title}
              fill
              className="object-contain"
              priority
            />
          </div>

          <div className="prose prose-lg max-w-none">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 !mt-0">
              {article.title}
            </h1>

            <div className="text-gray-600 mb-8 flex items-center gap-4">
              <time dateTime={article.date}>
                {new Date(article.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
              <span className="text-gray-300">•</span>
              <div className="flex flex-wrap gap-2">
                {article.tags.map((tag) => (
                  <Link
                    key={tag}
                    href={`/articles?tag=${encodeURIComponent(tag)}`}
                    className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-full text-sm text-gray-700 no-underline"
                  >
                    {tag}
                  </Link>
                ))}
              </div>
            </div>

            <div
              className="prose "
              dangerouslySetInnerHTML={{
                __html: markdown.toHTML(article.content),
              }}
            />
          </div>
        </article>
      </main>
    </PageLayout>
  );
}
