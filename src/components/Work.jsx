import { Link } from 'react-router-dom'
import { useScrollReveal } from '../hooks/useScrollReveal'

const PROJECTS = [
  {
    id: 1,
    from: '#ece6d8', to: '#d4c9a8',
    cat: 'React · Tailwind',
    title: 'Admin Dashboard',
    href: 'https://github.com/softboy-chu/admin-dashboard-template',
    template: true,
    svg: (
      <svg viewBox="0 0 80 80" fill="none" className="w-full h-full">
        <rect x="10" y="20" width="60" height="40" rx="3" stroke="#3a5ab0" strokeWidth="1"/>
        <line x1="10" y1="30" x2="70" y2="30" stroke="#3a5ab0" strokeWidth="0.7"/>
        <circle cx="17" cy="25" r="2" fill="#3a5ab0" opacity="0.5"/>
        <circle cx="24" cy="25" r="2" fill="#3a5ab0" opacity="0.5"/>
        <circle cx="31" cy="25" r="2" fill="#3a5ab0" opacity="0.5"/>
        <text x="18" y="46" fontSize="7" fill="#3a5ab0" opacity="0.6" fontFamily="monospace">{'<App />'}</text>
      </svg>
    ),
  },
  {
    id: 2,
    from: '#e8ddd4', to: '#c9b8a8',
    cat: 'React · Tailwind',
    title: 'Haven E-commerce',
    href: 'https://github.com/softboy-chu/e-commerce-template',
    template: true,
    svg: (
      <svg viewBox="0 0 80 80" fill="none" className="w-full h-full">
        <rect x="12" y="14" width="56" height="52" rx="2" stroke="#5a4080" strokeWidth="1"/>
        <line x1="12" y1="28" x2="68" y2="28" stroke="#5a4080" strokeWidth="0.7"/>
        <rect x="20" y="36" width="16" height="22" rx="1" stroke="#5a4080" strokeWidth="0.6"/>
        <rect x="44" y="36" width="16" height="10" rx="1" stroke="#5a4080" strokeWidth="0.6"/>
        <rect x="44" y="50" width="16" height="8" rx="1" stroke="#5a4080" strokeWidth="0.6"/>
      </svg>
    ),
  },
  // {
  //   id: 3,
  //   from: '#d8e4f0', to: '#b0c8e0',
  //   cat: 'React · Vite · Tailwind',
  //   title: 'NTRA TaxGuide',
  //   href: '/work/ntra-taxguide',
  //   svg: (
  //     <svg viewBox="0 0 80 80" fill="none" className="w-full h-full">
  //       <rect x="16" y="10" width="38" height="50" rx="2" stroke="#305880" strokeWidth="1"/>
  //       <path d="M42 10 L54 22 L42 22 Z" fill="#b0c8e0" stroke="#305880" strokeWidth="0.7"/>
  //       <rect x="16" y="10" width="26" height="12" rx="2" fill="#d8e4f0"/>
  //       <text x="24" y="44" fontSize="14" fill="#305880" opacity="0.7" fontFamily="serif" fontWeight="600">₦</text>
  //       <line x1="24" y1="52" x2="46" y2="52" stroke="#305880" strokeWidth="0.6" opacity="0.5"/>
  //       <line x1="24" y1="56" x2="40" y2="56" stroke="#305880" strokeWidth="0.6" opacity="0.5"/>
  //       <circle cx="56" cy="56" r="10" fill="#4f7ef7" opacity="0.85"/>
  //       <polyline points="50,56 54,60 62,51" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
  //     </svg>
  //   ),
  // },
  {
    id: 4,
    from: '#e4e8d8', to: '#c4caa8',
    cat: 'React · Tailwind',
    title: 'Clothing Store',
    href: 'https://github.com/softboy-chu/clothing-store',
    template: true,
    svg: (
      <svg viewBox="0 0 80 80" fill="none" className="w-full h-full">
        <rect x="10" y="10" width="26" height="26" rx="2" stroke="#406030" strokeWidth="1"/>
        <rect x="44" y="10" width="26" height="26" rx="2" stroke="#406030" strokeWidth="1"/>
        <rect x="10" y="44" width="26" height="26" rx="2" stroke="#406030" strokeWidth="1"/>
        <rect x="44" y="44" width="26" height="26" rx="2" stroke="#406030" strokeWidth="0.7" strokeDasharray="3 2"/>
      </svg>
    ),
  },
]

function Card({ project, delay }) {
  const ref = useScrollReveal({ threshold: 0.1 })
  const inner = (
    <div
      ref={ref}
      className="cursor-pointer group"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="w-full aspect-[4/3] overflow-hidden bg-border mb-4 relative">
        <div
          className="w-full h-full flex items-center justify-center transition-transform duration-500 ease-in-out group-hover:scale-[1.04]"
          style={{ background: `linear-gradient(135deg, ${project.from} 0%, ${project.to} 100%)` }}
        >
          <div className="w-[40%] h-[40%] opacity-45">{project.svg}</div>
        </div>
        {project.template && (
          <span className="absolute top-3 right-3 text-[0.58rem] tracking-[0.1em] uppercase bg-site-text text-bg px-2 py-[3px] font-sans">
            Template
          </span>
        )}
        {project.href && (
          <div className="absolute inset-0 bg-site-text/0 group-hover:bg-site-text/10 transition-all duration-300 flex items-end justify-end p-3">
            <span className="text-[0.6rem] tracking-[0.1em] uppercase bg-accent text-white px-2 py-[3px] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Case Study →
            </span>
          </div>
        )}
      </div>
      <p className="text-[0.68rem] tracking-[0.14em] uppercase text-accent mb-1">{project.cat}</p>
      <p className="font-serif text-[1.15rem] font-semibold text-site-text">{project.title}</p>
    </div>
  )

  if (project.href) 
    
    return <Link to={project.href} className="no-underline" target='_blank' rel="noreferrer">{inner}</Link>
  return inner
}

export default function Work() {
  const titleRef = useScrollReveal()

  return (
    <section id="work" className="px-[60px] py-[80px] border-t border-border max-md:px-6 bg-bg transition-colors duration-300">
      <p ref={titleRef} className="text-[0.72rem] tracking-[0.18em] uppercase text-muted mb-12">
        Selected Projects
      </p>

      <div className="grid grid-cols-3 gap-7 max-[900px]:grid-cols-2 max-[480px]:grid-cols-1">
        {PROJECTS.map((p, i) => (
          <Card key={p.id} project={p} delay={i * 80} />
        ))}
      </div>
    </section>
  )
}
