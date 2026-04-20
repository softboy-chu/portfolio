import { useScrollReveal } from '../hooks/useScrollReveal'

export default function Hero() {
  const ref = useScrollReveal()

  return (
    <section
      ref={ref}
      className="px-[60px] pt-[100px] pb-[80px] max-w-[800px] max-md:px-6 max-md:pt-16 max-md:pb-14"
    >
      {/* Availability badge */}
      <div className="inline-flex items-center gap-2 border border-green-400 text-green-600 dark:text-green-400 px-3 py-1 mb-8 text-[0.68rem] tracking-[0.12em] uppercase">
        <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
        Available for projects — 2026
      </div>

      <p className="text-[0.70rem] tracking-[0.18em] uppercase text-accent mb-6">
        Frontend Developer | Building clean UIs
      </p>

      <h1 className="font-serif text-[clamp(3rem,6vw,5.5rem)] font-normal leading-[1.05] mb-7 text-site-text">
        Building the web<br />with <em>clean code</em>
      </h1>

      <p className="text-[1rem] text-muted max-w-[460px] leading-[1.75] mb-10">
        I craft fast, accessible, and beautifully detailed interfaces — turning designs into
        pixel-perfect, production-ready experiences.
      </p>

      <a
        href="#work"
        className="inline-block text-[0.78rem] tracking-[0.12em] uppercase text-site-text border border-site-text px-7 py-[13px] no-underline transition-all duration-[250ms] hover:bg-site-text hover:text-bg"
      >
        View Work
      </a>
    </section>
  )
}
