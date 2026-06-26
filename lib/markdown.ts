import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import remarkGfm from 'remark-gfm'
import remarkHtml from 'remark-html'

export interface PostMetadata {
  title: string
  date: string
  excerpt: string
  tags?: string[]
  slug?: string
}

export interface Post {
  metadata: PostMetadata
  content: string
}

const contentDir = path.join(process.cwd(), 'content')

export async function getPostBySlug(slug: string): Promise<Post> {
  const filePath = path.join(contentDir, `${slug}.md`)
  const fileContents = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(fileContents)

  const processedContent = await remark()
    .use(remarkGfm)
    .use(remarkHtml)
    .process(content)

  return {
    metadata: {
      title: data.title,
      date: data.date,
      excerpt: data.excerpt,
      tags: data.tags || [],
      slug: slug,
    },
    content: processedContent.toString(),
  }
}

export async function getAllPosts(type: string = ''): Promise<Post[]> {
  let searchDir = contentDir

  if (type) {
    searchDir = path.join(contentDir, type)
  }

  if (!fs.existsSync(searchDir)) {
    return []
  }

  const files = fs.readdirSync(searchDir).filter((file) => file.endsWith('.md'))
  const posts = await Promise.all(
    files.map(async (file) => {
      const slug = file.replace(/\.md$/, '')
      return getPostBySlug(type ? `${type}/${slug}` : slug)
    })
  )

  return posts.sort((a, b) => {
    return new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime()
  })
}

export function getAllSlugs(type: string = ''): string[] {
  let searchDir = contentDir

  if (type) {
    searchDir = path.join(contentDir, type)
  }

  if (!fs.existsSync(searchDir)) {
    return []
  }

  const files = fs.readdirSync(searchDir).filter((file) => file.endsWith('.md'))
  return files.map((file) => file.replace(/\.md$/, ''))
}
