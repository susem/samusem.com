export default function Home() {
  return (
    <main className="bg-white">
      <div className="px-8 mb-16 max-w-5xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-normal mb-4 leading-tight">
            Thinking at the intersection of rural innovation and systems change
          </h2>
          <p className="text-lg text-[#666666] leading-relaxed max-w-2xl">
            Essays on governance, healthcare, and building things that work in places where conventional playbooks don't fit.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 items-center">
          <div className="md:col-span-2">
            <p className="text-xs font-bold uppercase tracking-wide text-[#534AB7] mb-3">Latest essay</p>
            <h3 className="text-2xl font-serif font-normal mb-3 leading-snug">
              Why rural broadband requires local solutions
            </h3>
            <p className="text-base text-[#666666] leading-relaxed mb-4">
              Federal infrastructure money alone won't close the gap—rural communities need to own the problem. An exploration of governance, cooperatives, and why the market failed.
            </p>
            <div className="flex gap-4 text-xs text-[#999999] mb-4">
              <span>June 20, 2026</span>
              <span>•</span>
              <span>7 min read</span>
            </div>
            <a href="/ideas/rural-broadband" className="inline-block text-[#534AB7] font-medium hover:border-b-2 border-[#534AB7]">
              Read essay →
            </a>
          </div>
          <div className="bg-gradient-to-br from-[#534AB7] to-[#1D9E75] rounded-lg h-60 flex items-center justify-center text-white text-center px-4 order-first md:order-last">
            [Hero image]
          </div>
        </div>

        <div id="ideas" className="mb-12">
          <p className="text-xs font-bold uppercase tracking-widest text-[#534AB7] pb-2 mb-6 inline-block border-b-2 border-[#1D9E75]">
            Work & Ideas
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <a href="/hospital-trustee" className="border border-[#E0E0E0] rounded-lg p-6 hover:border-[#1D9E75] transition-colors block">
              <h4 className="text-base font-medium mb-3 text-[#1a1a1a]">Hospital Trustee Work</h4>
              <p className="text-sm text-[#666666] leading-relaxed mb-3">Elected board member at North Shore Health. On governance, healthcare equity, and innovative rural health solutions.</p>
              <span className="inline-block bg-[#F9F9F9] text-[#534AB7] text-xs font-semibold px-2 py-1 rounded mb-3">Healthcare</span>
              <div className="text-xs text-[#666666]">Ongoing</div>
            </a>

            <div className="border border-[#E0E0E0] rounded-lg p-6 hover:border-[#1D9E75] transition-colors">
              <h4 className="text-base font-medium mb-3 text-[#1a1a1a]">On agile governance in rural healthcare</h4>
              <p className="text-sm text-[#666666] leading-relaxed mb-3">How small boards can move fast without losing community accountability.</p>
              <span className="inline-block bg-[#F9F9F9] text-[#534AB7] text-xs font-semibold px-2 py-1 rounded mb-3">Governance</span>
              <div className="text-xs text-[#666666]">May 2026</div>
            </div>

            <div className="border border-[#E0E0E0] rounded-lg p-6 hover:border-[#1D9E75] transition-colors">
              <h4 className="text-base font-medium mb-3 text-[#1a1a1a]">What we risk by staying quiet</h4>
              <p className="text-sm text-[#666666] leading-relaxed mb-3">On speaking up in board rooms and institutions that would prefer silence.</p>
              <span className="inline-block bg-[#F9F9F9] text-[#534AB7] text-xs font-semibold px-2 py-1 rounded mb-3">Systems thinking</span>
              <div className="text-xs text-[#666666]">April 2026</div>
            </div>

            <a href="/ideas" className="border border-[#E0E0E0] rounded-lg p-6 hover:border-[#1D9E75] transition-colors flex items-center justify-center">
              <span className="text-center">
                <p className="text-base font-medium text-[#534AB7]">Explore all ideas →</p>
                <p className="text-xs text-[#666666] mt-2">Full list of essays</p>
              </span>
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}
