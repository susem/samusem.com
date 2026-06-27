import type { Metadata } from 'next'
import Script from 'next/script'
import '../styles/globals.css'

export const metadata: Metadata = {
  title: 'Sam Usem — Thinking at the intersection of rural innovation and systems change',
  description: 'Essays on governance, healthcare, and building things that work in places where conventional playbooks don\'t fit.',
  authors: [{ name: 'Sam Usem' }],
  openGraph: {
    title: 'Sam Usem',
    description: 'Essays on governance, healthcare, and building things that work.',
    url: 'https://samusem.com',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <Script src="https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.min.js" />
        <Script id="mermaid-init" strategy="afterInteractive">
          {`
            if (typeof mermaid !== 'undefined') {
              mermaid.contentLoaded();
            }
          `}
        </Script>
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}

function Header() {
  return (
    <header className="border-b border-[#E0E0E0] py-8 px-8 mb-12">
      <nav className="flex justify-between items-center mb-12 max-w-5xl mx-auto">
        <h1 className="text-xl font-normal font-serif">Sam Usem</h1>
        <ul className="flex gap-6 list-none">
          <li><a href="/ideas" className="text-sm hover:border-b-2 border-[#534AB7]">Ideas</a></li>
          <li><a href="/about" className="text-sm hover:border-b-2 border-[#534AB7]">About</a></li>
          <li><a href="mailto:sam.usem@gmail.com" className="text-sm hover:border-b-2 border-[#534AB7]">Contact</a></li>
        </ul>
      </nav>
    </header>
  )
}

function Footer() {
  return (
    <footer className="bg-[#534AB7] text-white py-12 px-8 mt-16" id="about">
      <div className="max-w-5xl mx-auto">
        <h3 className="text-xs font-bold uppercase tracking-wide mb-4 opacity-90">Get in touch</h3>
        <p className="text-sm">
          <a href="mailto:sam.usem@gmail.com" className="border-b border-white hover:opacity-80">sam.usem@gmail.com</a>
        </p>
      </div>
    </footer>
  )
}
