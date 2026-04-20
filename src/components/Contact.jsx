import { useScrollReveal } from '../hooks/useScrollReveal'

const SOCIALS = [
  { label: 'GitHub',      href: 'https://github.com/softboy-chu' },
  { label: 'LinkedIn',    href: 'https://www.linkedin.com/in/okeke-gabriel-871159249/' },
  { label: 'Twitter / X', href: 'https://x.com/devchu_' },
]

export default function Contact() {
  const ref = useScrollReveal()

  return (
    <>
      <section
        id="contact"
        ref={ref}
        className="px-[60px] py-[80px] border-t border-border text-center bg-[#1a1a18] dark:bg-[#161e2e] max-md:px-6"
      >
        <h2 className="font-serif text-[clamp(2.5rem,5vw,4.5rem)] font-normal leading-[1.1] mb-5 text-[#666660]">
          Let's build<br /><em>something great</em>
        </h2>

        <p className="mb-9 text-[0.93rem] text-white">
          Open to freelance projects, contracts, and full-time roles.
        </p>

        <a
          href="mailto:okekechukwuma88@gmail.com"
          className="block font-serif text-[clamp(1.3rem,2.5vw,1.9rem)] no-underline mb-12 text-[#666660] transition-opacity duration-200 hover:opacity-70"
        >
          okekechukwuma88@gmail.com
        </a>

        <div className="flex justify-center gap-8 flex-wrap">
          {SOCIALS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="text-[0.72rem] tracking-[0.15em] uppercase text-[#666660] no-underline transition-opacity duration-200 hover:opacity-60"
            >
              {label}
            </a>
          ))}
        </div>
      </section>

      <footer className="bg-[#1a1a18] dark:bg-[#161e2e] px-[60px] pb-7 pt-7 border-t border-[rgba(26,26,24,0.2)] flex justify-between items-center text-[0.80rem] text-white max-md:px-6 max-md:flex-col max-md:gap-2 max-md:text-center">
        <span>© 2026 Okeke Chukwuma</span>
        <span>Frontend Developer — Lagos, NG</span>
      </footer>
    </>
  )
}
