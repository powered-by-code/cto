import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export interface Article {
  slug: string
  title: string
  date: string
  coverImage: string
  tags: string[]
  excerpt: string
  content: string
}

const articlesDirectory = path.join(process.cwd(), 'content/articles')

export async function getAllArticles(): Promise<Article[]> {
  // Create directory if it doesn't exist
  if (!fs.existsSync(articlesDirectory)) {
    fs.mkdirSync(articlesDirectory, { recursive: true })
    return [] // Return empty array if no articles yet
  }

  const fileNames = fs.readdirSync(articlesDirectory)
  
  const articles = fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map(fileName => {
      const slug = fileName.replace(/\.md$/, '')
      const fullPath = path.join(articlesDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data } = matter(fileContents)
      
      return {
        slug,
        ...(data as {
          title: string
          date: string
          coverImage: string
          tags: string[]
          excerpt: string
        }),
      } as Article
    })
  
  // Sort articles by date in descending order
  return articles.sort((a, b) => (new Date(b.date).getTime() - new Date(a.date).getTime()))
}

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  try {
    const fullPath = path.join(articlesDirectory, `${slug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)
    
    return {
      slug,
      content,
      ...(data as {
        title: string
        date: string
        coverImage: string
        tags: string[]
        excerpt: string
      }),
    } as Article
  } catch (error) {
    return null
  }
} 