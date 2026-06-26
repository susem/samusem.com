import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="bg-white px-8 py-24">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-6xl font-serif font-normal mb-4">404</h1>
        <p className="text-xl text-[#666666] mb-8">This page doesn't exist.</p>
        <Link href="/" className="inline-block text-[#534AB7] font-medium hover:border-b-2 border-[#534AB7] px-4 py-2">
          Back to home
        </Link>
      </div>
    </main>
  )
}
