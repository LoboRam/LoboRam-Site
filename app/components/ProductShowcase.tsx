'use client'
import { useState } from 'react'
import Image from 'next/image'

interface Slide {
  src: string
  alt: string
  eyebrow: string
  eyebrowColor: 'green' | 'amber'
  heading: string
  body: string
  section: string
}

const slides: Slide[] = [
  {
    src: '/screenshots/balloons-app.png',
    alt: 'LOBORAM drawing view with numbered balloons placed on every dimension',
    eyebrow: 'Ballooning',
    eyebrowColor: 'green',
    heading: 'Ballooning. Done.',
    body: 'Every dimension on the print detected, numbered, and placed. Balloon positions lock to the AS9102 forms — before you touch a caliper.',
    section: 'ballooning',
  },
  {
    src: '/screenshots/balloons-pdf.png',
    alt: 'Exported ballooned drawing PDF with all callouts numbered',
    eyebrow: 'Ballooning',
    eyebrowColor: 'green',
    heading: 'The ballooned drawing.',
    body: 'A clean, export-ready PDF with every callout numbered and positioned — exactly what a customer or auditor expects to see.',
    section: 'ballooning',
  },
  {
    src: '/screenshots/balloons-add.png',
    alt: 'Add Balloon dialog for manually placing a dimension',
    eyebrow: 'Ballooning',
    eyebrowColor: 'green',
    heading: 'Manual placements.',
    body: 'If a dimension was missed or needs manual placement, select it from the Auditor list and click its location on the drawing.',
    section: 'ballooning',
  },
  {
    src: '/screenshots/form1.png',
    alt: 'Form 1 Part Accountability populated from title block',
    eyebrow: 'AS9102 Forms',
    eyebrowColor: 'amber',
    heading: 'Form 1. Part Accountability.',
    body: 'Part number, revision, organization, drawing number — pulled directly from the title block. No re-typing.',
    section: 'forms',
  },
  {
    src: '/screenshots/form2.png',
    alt: 'Form 2 Materials and Processes populated from drawing notes',
    eyebrow: 'AS9102 Forms',
    eyebrowColor: 'amber',
    heading: 'Form 2. Materials & Processes.',
    body: 'Material specification and finish callouts land here automatically from the drawing notes.',
    section: 'forms',
  },
  {
    src: '/screenshots/context1.png',
    alt: 'Drawing Context tab showing extracted material and notes',
    eyebrow: 'AS9102 Forms',
    eyebrowColor: 'amber',
    heading: 'Drawing context extracted.',
    body: 'Material, finish, and notes parsed and classified before any form is populated. This is the source of truth for Forms 1 and 2.',
    section: 'forms',
  },
  {
    src: '/screenshots/context2.png',
    alt: 'Drawing Context showing general tolerances from title block',
    eyebrow: 'AS9102 Forms',
    eyebrowColor: 'amber',
    heading: 'General tolerances parsed.',
    body: 'Two-place, three-place, angular, fractional — read from the title block and applied as defaults across all Form 3 characteristics.',
    section: 'forms',
  },
  {
    src: '/screenshots/audit-queue.png',
    alt: 'Drawing Audit review queue showing stacked callout items',
    eyebrow: 'Audit',
    eyebrowColor: 'amber',
    heading: 'The Auditor.',
    body: 'A second pass surfaces stacked callouts, unresolved features, and context gaps. Every item shows a plain-English reason and a one-click response.',
    section: 'audit',
  },
  {
    src: '/screenshots/audit-note-verify.png',
    alt: 'Auto-fill from Notes dialog surfacing material and finish data',
    eyebrow: 'Audit',
    eyebrowColor: 'amber',
    heading: 'Note-driven data.',
    body: 'Material and finish found in drawing notes gets surfaced as a fill prompt — one click populates Form 2.',
    section: 'audit',
  },
  {
    src: '/screenshots/audit-notes.png',
    alt: 'Promote Notes to Form 3 dialog',
    eyebrow: 'Audit',
    eyebrowColor: 'amber',
    heading: 'Notes to Form 3.',
    body: 'Inspection-scope items in drawing notes get promoted as note callouts on Form 3. Check what applies, skip what does not.',
    section: 'audit',
  },
  {
    src: '/screenshots/form3-p1.png',
    alt: 'Form 3 Characteristic Accountability list page 1',
    eyebrow: 'Inspection',
    eyebrowColor: 'green',
    heading: 'Inspection is a walk-the-list job.',
    body: 'Every characteristic with its requirement and tolerance already set. Enter the measured value and move to the next row.',
    section: 'inspection',
  },
  {
    src: '/screenshots/form3-p2.png',
    alt: 'Form 3 Characteristic Accountability list page 2',
    eyebrow: 'Inspection',
    eyebrowColor: 'green',
    heading: 'Every feature accounted for.',
    body: 'Compound features like countersinks break into sub-rows automatically. No characteristics missed, no manual setup required.',
    section: 'inspection',
  },
  {
    src: '/screenshots/export-reports.png',
    alt: 'Reports tab with export buttons and run summary',
    eyebrow: 'Export',
    eyebrowColor: 'green',
    heading: 'The full package. One click.',
    body: 'AS9102 workbook, ballooned PDF, audit log — every artifact a customer or auditor could ask for, out of a single run.',
    section: 'export',
  },
  {
    src: '/screenshots/export-excel1.png',
    alt: 'Exported AS9102 Form 1 in Excel',
    eyebrow: 'Export',
    eyebrowColor: 'green',
    heading: 'Form 1 exported.',
    body: 'Part Accountability form with all fields populated, ready for review and signature.',
    section: 'export',
  },
  {
    src: '/screenshots/export-excel2.png',
    alt: 'Exported AS9102 Form 2 in Excel',
    eyebrow: 'Export',
    eyebrowColor: 'green',
    heading: 'Form 2 exported.',
    body: 'Materials and Processes form with material specs, finish callouts, and spec numbers.',
    section: 'export',
  },
  {
    src: '/screenshots/export-excel3.png',
    alt: 'Exported AS9102 Form 3 in Excel with all 66 characteristics',
    eyebrow: 'Export',
    eyebrowColor: 'green',
    heading: 'Form 3 exported.',
    body: 'Characteristic Accountability with all requirements, tolerances, and inspection methods pre-filled.',
    section: 'export',
  },
]

const sectionGroups = [
  { key: 'ballooning', label: 'Ballooning', color: 'green' },
  { key: 'forms',      label: 'Forms',      color: 'amber' },
  { key: 'audit',      label: 'Audit',      color: 'amber' },
  { key: 'inspection', label: 'Inspection', color: 'green' },
  { key: 'export',     label: 'Export',     color: 'green' },
] as const

export default function ProductShowcase() {
  const [current, setCurrent] = useState(0)

  const slide = slides[current]
  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length)
  const next = () => setCurrent((c) => (c + 1) % slides.length)

  const sectionSlides = slides.filter((s) => s.section === slide.section)
  const posInSection = slides.slice(0, current + 1).filter((s) => s.section === slide.section).length

  return (
    <section className="py-24 border-t border-neutral-900">
      <div className="max-w-6xl mx-auto px-6">

        {/* Image — full width, large */}
        <div className="aspect-video relative overflow-hidden bg-[#0d0d0d] border border-neutral-800/60">
          {slides.map((s, i) => (
            <div
              key={i}
              className={`absolute inset-0 transition-opacity duration-300 ${
                i === current ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
            >
              <Image
                src={s.src}
                alt={s.alt}
                fill
                className="object-contain"
                unoptimized
                priority={i === 0}
              />
            </div>
          ))}
        </div>

        {/* Caption row */}
        <div className="mt-8 flex flex-col sm:flex-row sm:items-start gap-6 sm:gap-12">

          {/* Changing text */}
          <div className="flex-1 min-w-0">
            <span
              className={`block text-[11px] font-mono tracking-[0.12em] uppercase mb-3 ${
                slide.eyebrowColor === 'green' ? 'text-green-500' : 'text-amber-500'
              }`}
            >
              {slide.eyebrow}
            </span>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight mb-2">
              {slide.heading}
            </h2>
            <p className="text-neutral-400 leading-relaxed text-base max-w-2xl">
              {slide.body}
            </p>
          </div>

          {/* Arrows + in-section counter */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={prev}
              aria-label="Previous"
              className="w-9 h-9 border border-neutral-700 text-neutral-400 text-sm flex items-center justify-center hover:border-green-500 hover:text-green-500 transition-colors duration-150"
            >
              ←
            </button>
            <span className="text-[11px] font-mono text-neutral-600 w-12 text-center tabular-nums">
              {String(posInSection).padStart(2, '0')} / {String(sectionSlides.length).padStart(2, '0')}
            </span>
            <button
              onClick={next}
              aria-label="Next"
              className="w-9 h-9 border border-neutral-700 text-neutral-400 text-sm flex items-center justify-center hover:border-green-500 hover:text-green-500 transition-colors duration-150"
            >
              →
            </button>
          </div>
        </div>

        {/* Section dot navigation */}
        <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3">
          {sectionGroups.map((group) => {
            const groupSlides = slides
              .map((s, i) => ({ ...s, index: i }))
              .filter((s) => s.section === group.key)
            const isActive = slide.section === group.key

            return (
              <div key={group.key} className="flex items-center gap-2">
                <span
                  className={`text-[10px] font-mono tracking-wider uppercase transition-colors duration-300 ${
                    isActive
                      ? group.color === 'green' ? 'text-green-500' : 'text-amber-500'
                      : 'text-neutral-700'
                  }`}
                >
                  {group.label}
                </span>
                <div className="flex gap-1">
                  {groupSlides.map((s) => (
                    <button
                      key={s.index}
                      onClick={() => setCurrent(s.index)}
                      aria-label={`${group.label} slide ${s.index + 1}`}
                      className={`w-1.5 h-1.5 rounded-full transition-colors duration-150 ${
                        s.index === current
                          ? group.color === 'green' ? 'bg-green-500' : 'bg-amber-500'
                          : isActive ? 'bg-neutral-600' : 'bg-neutral-800'
                      }`}
                    />
                  ))}
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
