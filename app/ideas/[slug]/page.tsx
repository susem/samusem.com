import { getPostBySlug, getAllSlugs } from '@/lib/markdown'
import { Metadata } from 'next'

export async function generateStaticParams() {
  const slugs = getAllSlugs('ideas')
  return slugs.map((slug) => ({ slug: slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await getPostBySlug(`ideas/${params.slug}`)
  return {
    title: `${post.metadata.title} | Sam Usem`,
    description: post.metadata.excerpt,
  }
}

export default async function IdeaPage({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(`ideas/${params.slug}`)

  return (
    <main className="bg-white px-8 py-12">
      <article className="max-w-3xl mx-auto">
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-serif font-normal mb-4 leading-tight">
            {post.metadata.title}
          </h1>
          <div className="flex flex-wrap gap-3 items-center text-sm text-[#666666]">
            <time dateTime={post.metadata.date}>
              {new Date(post.metadata.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
            {post.metadata.tags && post.metadata.tags.length > 0 && (
              <>
                <span>•</span>
                <div className="flex gap-2 flex-wrap">
                  {post.metadata.tags.map((tag) => (
                    <span key={tag} className="bg-[#F9F9F9] text-[#534AB7] text-xs font-semibold px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </>
            )}
          </div>
        </header>

        <div
          className="prose prose-lg max-w-none text-[#1a1a1a] leading-relaxed"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <footer className="mt-12 pt-8 border-t border-[#E0E0E0]">
          <a href="/ideas" className="text-[#534AB7] font-medium hover:border-b-2 border-[#534AB7] inline-block">
            ← Back to ideas
          </a>
        </footer>
      </article>
    </main>
  )
}
