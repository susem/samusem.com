import { getPostBySlug } from '@/lib/markdown'
import { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Hospital Trustee Work | Sam Usem',
    description: 'Elected board member at North Shore Health. On healthcare governance, equity, and rural health innovation.',
  }
}

export default async function HospitalTrusteePage() {
  const post = await getPostBySlug('hospital-trustee')

  return (
    <main className="bg-white px-8 py-12">
      <article className="max-w-3xl mx-auto">
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-serif font-normal mb-4 leading-tight">
            {post.metadata.title}
          </h1>
        </header>

        <div
          className="prose prose-lg max-w-none text-[#1a1a1a] leading-relaxed"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <footer className="mt-12 pt-8 border-t border-[#E0E0E0]">
          <a href="/" className="text-[#534AB7] font-medium hover:border-b-2 border-[#534AB7] inline-block">
            ← Back to home
          </a>
        </footer>
      </article>
    </main>
  )
}
