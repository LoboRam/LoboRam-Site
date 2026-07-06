import Image from 'next/image'
import ProductShowcase from './components/ProductShowcase'

const pipelineStages = [
  { step: '01', label: 'Open' },
  { step: '02', label: 'Render' },
  { step: '03', label: 'Detect' },
  { step: '04', label: 'OCR' },
  { step: '05', label: 'Context' },
  { step: '06', label: 'Audit' },
  { step: '07', label: 'Balloons' },
]

export default function Home() {
  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen">

      {/* ─── NAV ─────────────────────────────────────────────────── */}
      <nav className="sticky top-0 z-50 bg-[#0a0a0a]/95 backdrop-blur-sm border-b border-neutral-900">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Image
            src="/LOGO.jpg"
            alt="LOBORAM"
            width={200}
            height={50}
            priority
            style={{ width: 'auto', height: '44px', filter: 'invert(1)' }}
          />
          <a
            href="#demo"
            className="bg-green-500 text-black text-sm font-semibold px-5 py-2 hover:bg-green-400 transition-colors duration-150"
          >
            Request a Demo
          </a>
        </div>
      </nav>

      {/* ─── HERO ────────────────────────────────────────────────── */}
      <section className="min-h-[60vh]">
        <div className="max-w-7xl mx-auto px-6 pt-20 pb-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2.5 border border-neutral-800 px-3 py-1 mb-10">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
              <span className="text-[11px] font-mono text-neutral-500 tracking-[0.12em] uppercase">
                First Article Inspection · AS9102
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]">
              AS9102 FAI Documentation.{' '}
              <span className="text-green-500">Automated.</span>
            </h1>

            <p className="mt-8 text-lg text-neutral-400 leading-relaxed max-w-2xl">
              One continuous pass from drawing to complete AS9102 package — every dimension
              found, every form populated, every callout audited.
            </p>

            <div className="mt-12 flex flex-wrap gap-4">
              <a
                href="#demo"
                className="bg-green-500 text-black font-semibold px-7 py-3 hover:bg-green-400 transition-colors duration-150"
              >
                Request a Demo
              </a>
              <button
                type="button"
                className="border border-neutral-700 text-white font-semibold px-7 py-3 hover:border-neutral-500 transition-colors duration-150"
              >
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PIPELINE ────────────────────────────────────────────── */}
      <section className="py-24 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-[11px] font-mono text-neutral-600 tracking-[0.12em] uppercase mb-2">
            Architecture
          </p>
          <h2 className="text-2xl font-bold tracking-tight mb-16">One Continuous Pass</h2>

          <div className="overflow-x-auto -mx-6 px-6">
            <div className="min-w-[580px] relative">
              <div className="absolute top-5 left-5 right-5 h-px bg-neutral-800" />
              <div className="relative flex justify-between z-10">
                {pipelineStages.map((stage) => (
                  <div key={stage.step} className="flex flex-col items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#0a0a0a] border border-green-500 flex items-center justify-center">
                      <span className="text-green-500 text-[11px] font-mono font-bold">
                        {stage.step}
                      </span>
                    </div>
                    <span className="text-xs font-mono text-neutral-500 tracking-wide whitespace-nowrap">
                      {stage.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <p className="mt-16 text-neutral-500 max-w-2xl leading-relaxed">
            Every dimension found. Every form populated. Every callout audited. Nothing exports
            until critical issues hit zero.
          </p>
        </div>
      </section>

      <ProductShowcase />

      {/* ─── STAT SECTION ────────────────────────────────────────── */}
      <section className="py-32 border-t border-neutral-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-[11px] font-mono text-neutral-700 tracking-[0.12em] uppercase mb-8">
            Field Result
          </p>
          <div
            className="font-bold text-green-500 leading-none tracking-tight"
            style={{ fontSize: 'clamp(5rem, 18vw, 10rem)' }}
          >
            75%
          </div>
          <p className="mt-8 text-2xl sm:text-3xl font-semibold text-white leading-snug">
            of an inspector's day back — on first use, untrained.
          </p>
          <p className="mt-6 text-neutral-500 text-base max-w-xl mx-auto leading-relaxed">
            That's not a benchmark run. That's a real quality inspector using LOBORAM for the
            first time.
          </p>
        </div>
      </section>

      {/* ─── DEMO REQUEST FORM ────────────────────────────────────── */}
      <section id="demo" className="py-24 border-t border-neutral-900">
        <div className="max-w-xl mx-auto px-6">
          <h2 className="text-3xl font-bold tracking-tight mb-3">See it on your drawings.</h2>
          <p className="text-neutral-500 mb-12 leading-relaxed">
            See how LOBORAM handles your drawings.
          </p>

          <form
            action="https://formspree.io/f/mykqldny"
            method="POST"
            className="space-y-5"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-[11px] font-mono text-neutral-500 tracking-[0.1em] uppercase mb-2"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                required
                className="w-full bg-neutral-900 border border-neutral-800 text-white px-4 py-3 text-sm focus:outline-none focus:border-green-500 transition-colors duration-150"
              />
            </div>

            <div>
              <label
                htmlFor="company"
                className="block text-[11px] font-mono text-neutral-500 tracking-[0.1em] uppercase mb-2"
              >
                Company
              </label>
              <input
                id="company"
                type="text"
                name="company"
                required
                className="w-full bg-neutral-900 border border-neutral-800 text-white px-4 py-3 text-sm focus:outline-none focus:border-green-500 transition-colors duration-150"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-[11px] font-mono text-neutral-500 tracking-[0.1em] uppercase mb-2"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                required
                className="w-full bg-neutral-900 border border-neutral-800 text-white px-4 py-3 text-sm focus:outline-none focus:border-green-500 transition-colors duration-150"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-[11px] font-mono text-neutral-500 tracking-[0.1em] uppercase mb-2"
              >
                Message{' '}
                <span className="text-neutral-700 normal-case font-sans tracking-normal font-normal">
                  (optional)
                </span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full bg-neutral-900 border border-neutral-800 text-white px-4 py-3 text-sm focus:outline-none focus:border-green-500 transition-colors duration-150 resize-none"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="bg-green-500 text-black font-semibold px-8 py-3 text-sm hover:bg-green-400 transition-colors duration-150"
              >
                Request a Demo
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* ─── FOOTER ──────────────────────────────────────────────── */}
      <footer className="border-t border-neutral-900 py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <Image
            src="/LOGO.jpg"
            alt="LOBORAM"
            width={180}
            height={44}
            style={{ width: 'auto', height: '28px', filter: 'invert(1)' }}
          />
          <a
            href="mailto:lrsoft@loboram.com"
            className="text-neutral-600 text-sm hover:text-neutral-400 transition-colors duration-150 font-mono"
          >
            lrsoft@loboram.com
          </a>
          <p className="text-neutral-700 text-sm">© 2026 LOBORAM. All rights reserved.</p>
        </div>
      </footer>

    </div>
  )
}
