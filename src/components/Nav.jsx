import { useState, useEffect } from 'react'

const NAV_LINKS = ['pricing', 'work', 'about', 'contact']

/* ── Dark-mode icon ────────────────────────────── */
function DarkIcon({ dark }) {
  return dark ? (
    /* Sun */
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
      <circle cx="12" cy="12" r="5"/>
      <line x1="12" y1="2"  x2="12" y2="4" />
      <line x1="12" y1="20" x2="12" y2="22"/>
      <line x1="4.22"  y1="4.22"  x2="5.64"  y2="5.64"/>
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
      <line x1="2"  y1="12" x2="4"  y2="12"/>
      <line x1="20" y1="12" x2="22" y2="12"/>
      <line x1="4.22"  y1="19.78" x2="5.64"  y2="18.36"/>
      <line x1="18.36" y1="5.64"  x2="19.78" y2="4.22"/>
    </svg>
  ) : (
    /* Moon */
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
      <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/>
    </svg>
  )
}

export default function Nav({ dark, onToggleDark }) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const close = () => setOpen(false)

  return (
    <>
      <nav className="flex justify-between items-center px-[60px] py-8 border-b border-border relative z-[200] bg-bg max-md:px-6 max-md:py-6 transition-colors duration-300">
        <a
          href="#"
          className="font-serif text-[1.3rem] font-semibold tracking-[0.02em] no-underline text-site-text"
        >
          CHU
        </a>

        {/* Desktop */}
        <ul className="hidden md:flex gap-9 list-none items-center">
          {NAV_LINKS.map(item => (
            <li key={item}>
              <a
                href={`#${item}`}
                className="text-[0.8rem] text-muted no-underline tracking-[0.05em] transition-colors duration-200 hover:text-site-text capitalize"
              >
                {item}
              </a>
            </li>
          ))}

          {/* Dark toggle */}
          <li>
            <button
              onClick={onToggleDark}
              aria-label="Toggle dark mode"
              className="text-muted hover:text-site-text transition-colors duration-200 flex items-center"
            >
              <DarkIcon dark={dark} />
            </button>
          </li>
        </ul>

        {/* Mobile: dark toggle + hamburger */}
        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={onToggleDark}
            aria-label="Toggle dark mode"
            className="text-muted hover:text-site-text transition-colors duration-200"
          >
            <DarkIcon dark={dark} />
          </button>

          <button
            className="flex flex-col justify-center gap-[5px] w-8 h-8 bg-transparent border-none cursor-pointer p-1 z-[200]"
            onClick={() => setOpen(o => !o)}
            aria-label="Toggle menu"
          >
            <span className={`block h-[1.5px] bg-site-text transition-all duration-300 origin-center ${open ? 'translate-y-[6.5px] rotate-45' : ''}`} />
            <span className={`block h-[1.5px] bg-site-text transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
            <span className={`block h-[1.5px] bg-site-text transition-all duration-300 origin-center ${open ? '-translate-y-[6.5px] -rotate-45' : ''}`} />
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`md:hidden fixed inset-0 bg-bg z-[150] flex flex-col justify-center items-center gap-3 transition-opacity duration-300 ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {['work', 'about', 'contact'].map(item => (
          <a
            key={item}
            href={`#${item}`}
            onClick={close}
            className="font-serif text-[2.8rem] font-normal text-site-text no-underline tracking-[0.02em] transition-colors duration-200 hover:text-accent capitalize"
          >
            {item}
          </a>
        ))}
        <p className="absolute bottom-10 text-[0.7rem] text-muted tracking-[0.1em]">
          okekechukwuma88@gmail.com
        </p>
      </div>
    </>
  )
}
