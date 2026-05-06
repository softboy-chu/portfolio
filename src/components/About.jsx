import { useScrollReveal } from '../hooks/useScrollReveal'

const STATS = [
  { n: '4+',  label: 'Years'    },
  { n: '7+',  label: 'Projects' },
  { n: '12+', label: 'Clients'  },
]

const STACK = ['React / Next.js', 'TypeScript', 'Tailwind CSS']

export default function About() {
  const leftRef  = useScrollReveal()
  const rightRef = useScrollReveal({ threshold: 0.15 })

  return (
    <section
      id="about"
      className="
        px-[60px] py-[80px] border-t border-border
        grid grid-cols-2 gap-[80px] items-start
        bg-[#1a1a18] dark:bg-[#161e2e]
        text-white
        max-md:grid-cols-1 max-md:gap-12 max-md:px-6
        transition-colors duration-300
      "
    >
      <div ref={leftRef}>
        <p className="text-[0.72rem] tracking-[0.18em] uppercase text-[#666660] mb-12">About</p>

        <h2 className="font-serif text-[clamp(2rem,3.5vw,3rem)] font-normal leading-[1.15] mb-6">
          Building the web<br /><em>one component</em><br />at a time
        </h2>

        <p className="text-[#888880] leading-[1.8] mb-4 text-[0.93rem]">
          I'm Okeke Gabriel Chukwuma, a frontend developer with years of experience building
          performant, accessible websites and design systems for startups and growing teams.
        </p>
        <p className="text-[#888880] leading-[1.8] text-[0.93rem]">
          I care deeply about clean code, great UX, and the tiny details that make an interface
          feel right.
        </p>

        <div className="flex gap-12 mt-10 pt-8 border-t border-[#2a2a28]">
          {STATS.map(({ n, label }) => (
            <div key={label}>
              <div className="font-serif text-[2.6rem] font-semibold leading-none mb-1">{n}</div>
              <div className="text-[0.7rem] tracking-[0.12em] uppercase text-[#888880]">{label}</div>
            </div>
          ))}
        </div>
      </div>

      <div ref={rightRef} style={{ transitionDelay: '120ms' }}>
        <p className="text-[0.72rem] tracking-[0.18em] uppercase text-[#666660] mb-12">Tech Stack</p>

        <ul className="list-none">
          {STACK.map(item => (
            <li
              key={item}
              className="flex justify-between items-center py-[18px] border-b border-[#2a2a28] text-[0.9rem] text-[#888880] transition-colors duration-200 hover:text-white"
            >
              {item}
              <span className="text-accent">→</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
