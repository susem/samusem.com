import { getAllPosts } from '@/lib/markdown'

export default async function IdeasPage() {
  const ideas = await getAllPosts('ideas')

  return (
    <main className="bg-white px-8 py-12">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-serif font-normal mb-6">Ideas</h1>
        <p className="text-lg text-[#666666] mb-12 max-w-2xl leading-relaxed">
          Things I'm thinking about: governance, rural innovation, healthcare systems, and the hard problems.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ideas.map((idea) => (
            <a key={idea.metadata.slug} href={`/ideas/${idea.metadata.slug}`} className="border border-[#E0E0E0] rounded-lg p-6 hover:border-[#1D9E75] transition-colors block">
              <h3 className="text-base font-medium mb-3 text-[#1a1a1a]">{idea.metadata.title}</h3>
              <p className="text-sm text-[#666666] leading-relaxed mb-4">{idea.metadata.excerpt}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {idea.metadata.tags?.map((tag) => (
                  <span key={tag} className="inline-block bg-[#F9F9F9] text-[#534AB7] text-xs font-semibold px-2 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="text-xs text-[#666666]">
                {new Date(idea.metadata.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </div>
            </a>
          ))}
        </div>
      </div>
    </main>
  )
}
