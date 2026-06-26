import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About | Sam Usem',
  description: 'Learn about Sam Usem and his work in rural innovation and healthcare governance.',
}

export default function AboutPage() {
  return (
    <main className="bg-white px-8 py-12">
      <article className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-serif font-normal mb-8 leading-tight">About Sam Usem</h1>

        <div className="prose prose-lg max-w-none text-[#1a1a1a] leading-relaxed space-y-6">
          <p>My mind lives on the edge—of small towns, big systems, and the things people are usually too polite to say out loud. My work sits at the intersection of community, change, and accountability, rooted in rural places like the one I call home.</p>

          <p>I use plain language, lived experience, and the occasional cartoon to explore the real stuff: who decides, what gets preserved, and what we risk by staying quiet.</p>

          <h2 className="text-2xl font-serif font-normal mt-8 mb-4">Professional</h2>

          <p>Based in Grand Marais, Minnesota, I'm a strategist, builder, and advocate. At Mayo Clinic, I lead long-term innovation and R&D as a Senior Enterprise Architect, with a focus on generative AI and digital platforms. Outside of that, I work on projects connecting rural life to modern systems—from digital banking and healthcare governance to ideas sparked in the woods.</p>

          <h2 className="text-2xl font-serif font-normal mt-8 mb-4">Community</h2>

          <p>I believe rural communities aren't just worth preserving—they're worth reimagining. That belief drives my role as an elected board member at North Shore Health and powers initiatives like the Rural Lab and Vital North Collaborative, where we turn bold, local ideas into real-world solutions across healthcare, housing, and tech.</p>

          <h2 className="text-2xl font-serif font-normal mt-8 mb-4">Personal</h2>

          <p>At heart, I'm a dad, a husband, a tinkerer, and someone who still believes in campfires and town halls. I build alongside my wife and life partner—at home, in business, and in belief. Whether we're developing property, running a rural innovation workshop, or writing a strategy memo, I try to live by a few core values: assume best intent, don't be fooled, and build things that make people stronger.</p>

          <p>I believe in showing up, telling the truth, and making space for others to do the same.</p>

          <h2 className="text-2xl font-serif font-normal mt-8 mb-4">Connect</h2>

          <p>
            <a href="mailto:sam.usem@gmail.com" className="text-[#534AB7] font-medium">sam.usem@gmail.com</a>
          </p>
        </div>
      </article>
    </main>
  )
}
