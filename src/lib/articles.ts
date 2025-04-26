import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const articlesDirectory = path.join(process.cwd(), 'content/articles')

export async function getAllArticles() {
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
      }
    })
  
  // Sort articles by date in descending order
  return articles.sort((a, b) => (new Date(b.date).getTime() - new Date(a.date).getTime()))
}

export async function getArticleBySlug(slug: string) {
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
  }
} 