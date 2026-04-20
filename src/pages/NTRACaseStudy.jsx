import { Link } from 'react-router-dom'
import { useScrollReveal } from '../hooks/useScrollReveal'

/* ── Small reusable atoms ──────────────────────── */
function Tag({ children }) {
  return (
    <span className="inline-block text-[0.65rem] tracking-[0.1em] uppercase border border-accent text-accent px-2 py-[3px] font-sans mr-2 mb-2">
      {children}
    </span>
  )
}

function SectionLabel({ children }) {
  return (
    <p className="text-[0.68rem] tracking-[0.18em] uppercase text-muted mb-5">{children}</p>
  )
}

function Reveal({ children, delay = 0, className = '' }) {
  const ref = useScrollReveal({ threshold: 0.1 })
  return (
    <div ref={ref} style={{ transitionDelay: `${delay}ms` }} className={className}>
      {children}
    </div>
  )
}

/* ── SVG placeholder screens ───────────────────── */
function MockScreen({ label, accent = '#4f7ef7', bg = '#f0f4ff' }) {
  return (
    <div
      className="w-full aspect-video rounded-sm flex flex-col overflow-hidden"
      style={{ background: bg }}
    >
      {/* fake browser chrome */}
      <div className="flex items-center gap-1.5 px-3 py-2" style={{ background: 'rgba(0,0,0,0.06)' }}>
        <span className="w-2 h-2 rounded-full bg-red-300 opacity-60" />
        <span className="w-2 h-2 rounded-full bg-yellow-300 opacity-60" />
        <span className="w-2 h-2 rounded-full bg-green-300 opacity-60" />
        <div className="flex-1 mx-3 h-3 rounded" style={{ background: 'rgba(0,0,0,0.08)' }} />
      </div>
      {/* fake content */}
      <div className="flex-1 flex items-center justify-center flex-col gap-2 p-4 opacity-50">
        <div className="w-8 h-8 rounded-sm mb-1" style={{ background: accent }} />
        <div className="w-32 h-2 rounded" style={{ background: accent, opacity: 0.5 }} />
        <div className="w-24 h-1.5 rounded" style={{ background: accent, opacity: 0.3 }} />
      </div>
      <p
        className="text-center pb-3 text-[0.6rem] tracking-[0.1em] uppercase"
        style={{ color: accent, opacity: 0.7 }}
      >
        {label}
      </p>
    </div>
  )
}

/* ── Stat card ─────────────────────────────────── */
function Stat({ n, label, sub }) {
  return (
    <div className="border border-border p-6">
      <div className="font-serif text-[3rem] font-semibold leading-none mb-2 text-site-text">{n}</div>
      <div className="text-[0.78rem] font-medium text-site-text mb-1">{label}</div>
      {sub && <div className="text-[0.72rem] text-muted">{sub}</div>}
    </div>
  )
}

/* ── Feature card ──────────────────────────────── */
function FeatureCard({ icon, title, desc, delay }) {
  return (
    <Reveal delay={delay} className="border border-border p-6 hover:border-accent transition-colors duration-300">
      <div className="text-2xl mb-4">{icon}</div>
      <h3 className="font-serif text-[1.1rem] font-semibold mb-2 text-site-text">{title}</h3>
      <p className="text-[0.82rem] text-muted leading-relaxed">{desc}</p>
    </Reveal>
  )
}

/* ── Challenge / solution row ──────────────────── */
function Challenge({ number, challenge, solution }) {
  const ref = useScrollReveal({ threshold: 0.1 })
  return (
    <div
      ref={ref}
      className="grid grid-cols-[48px_1fr_1fr] gap-8 py-8 border-b border-border items-start max-md:grid-cols-1 max-md:gap-3"
    >
      <div className="font-serif text-[2rem] font-semibold text-muted leading-none">{String(number).padStart(2,'0')}</div>
      <div>
        <p className="text-[0.65rem] tracking-[0.15em] uppercase text-muted mb-2">Challenge</p>
        <p className="text-[0.9rem] text-site-text leading-relaxed">{challenge}</p>
      </div>
      <div>
        <p className="text-[0.65rem] tracking-[0.15em] uppercase text-accent mb-2">Solution</p>
        <p className="text-[0.9rem] text-muted leading-relaxed">{solution}</p>
      </div>
    </div>
  )
}

/* ══ MAIN PAGE ══════════════════════════════════ */
export default function NTRACaseStudy() {
  return (
    <main className="bg-bg min-h-screen transition-colors duration-300">

      {/* ── HERO ──────────────────────────────── */}
      <section className="px-[60px] pt-[80px] pb-[72px] border-b border-border max-md:px-6 max-md:pt-14">
        <Reveal>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-[0.7rem] tracking-[0.12em] uppercase text-muted no-underline hover:text-site-text transition-colors duration-200 mb-10"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
              <path d="M19 12H5M12 5l-7 7 7 7"/>
            </svg>
            Back to Work
          </Link>
        </Reveal>

        <div className="grid grid-cols-[1fr_auto] gap-10 items-end max-md:grid-cols-1">
          <Reveal delay={60}>
            <p className="text-[0.7rem] tracking-[0.18em] uppercase text-accent mb-5">Case Study · 2024 – 2025</p>
            <h1 className="font-serif text-[clamp(2.8rem,5vw,5rem)] font-normal leading-[1.05] mb-6 text-site-text">
              NTRA<br /><em>TaxGuide</em>
            </h1>
            <p className="text-[1rem] text-muted max-w-[520px] leading-[1.8]">
              A full-stack tax compliance and training platform for Nigerian businesses — built to simplify
              tax education, automate regulatory workflows, and give compliance officers a single place to manage everything.
            </p>
          </Reveal>

          <Reveal delay={120} className="flex flex-col gap-2 max-md:flex-row max-md:flex-wrap">
            <Tag>React 18</Tag>
            <Tag>Vite</Tag>
            <Tag>Tailwind CSS</Tag>
            <Tag>NestJS API</Tag>
            <Tag>TypeScript</Tag>
            <Tag>Playwright</Tag>
            <Tag>Docker</Tag>
          </Reveal>
        </div>
      </section>

      {/* ── STATS ─────────────────────────────── */}
      <section className="px-[60px] py-[64px] border-b border-border max-md:px-6">
        <div className="grid grid-cols-4 gap-5 max-md:grid-cols-2 max-[480px]:grid-cols-1">
          {[
            { n: '2',      label: 'Applications',   sub: 'Main platform + Admin console', delay: 0 },
            { n: '8+',     label: 'Core modules',   sub: 'Auth, Training, Tax Config…',   delay: 80 },
            { n: '401',    label: 'Auto-intercept',  sub: 'Custom apiFetch wrapper',       delay: 160 },
            { n: '100%',   label: 'DTO aligned',    sub: 'Frontend ↔ NestJS contracts',   delay: 240 },
          ].map(s => (
            <Reveal key={s.label} delay={s.delay}>
              <Stat n={s.n} label={s.label} sub={s.sub} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── OVERVIEW ──────────────────────────── */}
      <section className="px-[60px] py-[64px] border-b border-border grid grid-cols-2 gap-16 max-md:grid-cols-1 max-md:px-6">
        <Reveal>
          <SectionLabel>Overview</SectionLabel>
          <h2 className="font-serif text-[clamp(1.8rem,2.5vw,2.4rem)] font-normal leading-[1.2] mb-6 text-site-text">
            Tax compliance,<br /><em>reimagined</em> for Nigeria
          </h2>
          <p className="text-[0.9rem] text-muted leading-[1.85] mb-4">
            NTRA TaxGuide is built for Nigerian businesses navigating an evolving tax regulatory landscape.
            The platform combines a structured training engine with real-time compliance tooling — giving
            finance teams, accountants, and compliance officers a single source of truth.
          </p>
          <p className="text-[0.9rem] text-muted leading-[1.85]">
            My role was leading the entire React frontend — from initial architecture decisions through to
            production-ready delivery — consuming a NestJS API built by a separate backend team. A second
            application, the admin console, was built in parallel as a standalone Vite app.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <SectionLabel>My Role</SectionLabel>
          <ul className="space-y-4 mt-[26px]">
            {[
              ['Frontend Architecture', 'Designed the React/Vite/Tailwind project structure, routing strategy, and component hierarchy from scratch.'],
              ['API Integration Layer', 'Built a custom apiFetch wrapper with 401 interception and VITE_API_URL build-time injection.'],
              ['Auth Flows', 'Implemented full login, session restore, forgot password, and reset flows with sessionReady gating.'],
              ['Training Engine', 'Developed Training, Lesson, and Remediation pages with progress tracking and backend DTO alignment.'],
              ['Admin Console', 'Separate Vite app — auth, nav layout, Tax Config CRUD, and notification components.'],
              ['Testing & DevOps', 'Set up Docker environment and Playwright E2E test scaffolding.'],
            ].map(([title, desc]) => (
              <li key={title} className="flex gap-4 items-start">
                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                <div>
                  <span className="text-[0.82rem] font-medium text-site-text">{title} — </span>
                  <span className="text-[0.82rem] text-muted">{desc}</span>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      {/* ── MOCK SCREENS ──────────────────────── */}
      <section className="px-[60px] py-[64px] border-b border-border max-md:px-6">
        <Reveal>
          <SectionLabel>Interface</SectionLabel>
          <p className="text-[0.82rem] text-muted mb-10 max-w-[400px]">
            Screenshots to be added after production handoff. Placeholders show the key views.
          </p>
        </Reveal>

        <div className="grid grid-cols-3 gap-5 mb-5 max-md:grid-cols-1">
          <Reveal delay={0}>
            <MockScreen label="Login / Auth" accent="#4f7ef7" bg="#f0f4ff" />
          </Reveal>
          <Reveal delay={80}>
            <MockScreen label="Dashboard" accent="#3a5ab0" bg="#eef2f8" />
          </Reveal>
          <Reveal delay={160}>
            <MockScreen label="Training Engine" accent="#5a4080" bg="#f4f0f8" />
          </Reveal>
        </div>
        <div className="grid grid-cols-2 gap-5 max-md:grid-cols-1">
          <Reveal delay={0}>
            <MockScreen label="Tax Config CRUD" accent="#406030" bg="#f0f4ee" />
          </Reveal>
          <Reveal delay={80}>
            <MockScreen label="Admin Console" accent="#305880" bg="#eef2f6" />
          </Reveal>
        </div>
      </section>

      {/* ── FEATURES ──────────────────────────── */}
      <section className="px-[60px] py-[64px] border-b border-border max-md:px-6">
        <Reveal><SectionLabel>Key Features</SectionLabel></Reveal>

        <div className="grid grid-cols-3 gap-5 mt-2 max-md:grid-cols-1">
          <FeatureCard delay={0}   icon="🔐" title="Session-aware Auth" desc="sessionReady gate in App.jsx prevents route flicker on refresh. Full forgot/reset password flow with sessionStorage flag messaging." />
          <FeatureCard delay={80}  icon="📚" title="Training Engine" desc="Structured lesson flow across Training → Lesson → Remediation pages, DTO-aligned with NestJS enums for seamless backend sync." />
          <FeatureCard delay={160} icon="⚙️" title="Tax Config CRUD" desc="Admin console module for managing tax configurations — create, read, update, delete with real-time feedback and validation." />
          <FeatureCard delay={0}   icon="🔁" title="401 Auto-intercept" desc="Custom apiFetch wrapper detects expired tokens, clears session, and redirects to login — no manual error handling needed anywhere." />
          <FeatureCard delay={80}  icon="🎛️" title="Dual Applications" desc="Main platform for end users and a separate admin console app — both built on React/Vite/Tailwind, sharing design conventions." />
          <FeatureCard delay={160} icon="🧪" title="E2E Test Setup" desc="Docker environment and Playwright scaffolding configured for integration testing — covering auth flows and core user journeys." />
        </div>
      </section>

      {/* ── CHALLENGES ────────────────────────── */}
      <section className="px-[60px] py-[64px] border-b border-border max-md:px-6">
        <Reveal><SectionLabel>Technical Challenges</SectionLabel></Reveal>

        <div className="mt-6">
          {[
            {
              challenge: 'Session restore race condition — App.jsx mounted before auth state resolved, causing protected routes to flash unauthenticated.',
              solution: 'Introduced a sessionReady boolean gate. All protected routes render null until the session check resolves, eliminating the flicker entirely.',
            },
            {
              challenge: 'Frontend/backend DTO misalignment — onboarding enums were drifting from the NestJS contract, causing silent 400 errors.',
              solution: 'Audited all form payloads against backend DTOs and established a contract-first discipline: no frontend field ships without a confirmed backend enum match.',
            },
            {
              challenge: 'Handling token expiry gracefully across 20+ API-calling components without duplicating error logic.',
              solution: 'Built a centralised apiFetch wrapper that intercepts every 401, clears auth state, and triggers a redirect — components just await the call.',
            },
            {
              challenge: 'Coordinating frontend delivery against an in-progress NestJS API with pending endpoints.',
              solution: 'Documented all pending endpoints (avatar upload, payment initiation, notifications) with expected shapes, so UI was built and MSW-mocked ahead of time.',
            },
          ].map((item, i) => (
            <Challenge key={i} number={i + 1} challenge={item.challenge} solution={item.solution} />
          ))}
        </div>
      </section>

      {/* ── ARCHITECTURE ──────────────────────── */}
      <section className="px-[60px] py-[64px] border-b border-border max-md:px-6">
        <div className="grid grid-cols-2 gap-16 max-md:grid-cols-1">
          <Reveal>
            <SectionLabel>Architecture Decisions</SectionLabel>
            <h2 className="font-serif text-[clamp(1.6rem,2.2vw,2.1rem)] font-normal leading-[1.2] mb-6 text-site-text">
              Built to scale<br />with the <em>backend team</em>
            </h2>
            <p className="text-[0.88rem] text-muted leading-[1.85] mb-5">
              With a separate backend team on NestJS, the frontend needed clear contracts and resilience
              against API instability during development. Every architectural decision was made with
              that constraint in mind.
            </p>
            <p className="text-[0.88rem] text-muted leading-[1.85]">
              VITE_API_URL build-time injection means the same codebase deploys to staging and production
              without code changes — just environment variables.
            </p>
          </Reveal>

          <Reveal delay={100}>
            <SectionLabel>Project Structure</SectionLabel>
            <pre className="mt-[26px] text-[0.75rem] leading-[1.9] text-muted font-mono bg-site-text/[0.04] dark:bg-white/[0.04] p-5 overflow-x-auto">
{`src/
├── App.jsx           ← sessionReady gate + routes
├── api/
│   └── apiFetch.js   ← 401 intercept wrapper
├── pages/
│   ├── Login.jsx
│   ├── Dashboard.jsx
│   ├── Training.jsx
│   ├── Lesson.jsx
│   └── Remediation.jsx
├── components/       ← shared UI
├── hooks/            ← auth, data fetching
└── utils/

admin-console/        ← separate Vite app
├── src/
│   ├── pages/
│   │   ├── TaxConfig.jsx
│   │   └── Notifications.jsx
│   └── components/`}
            </pre>
          </Reveal>
        </div>
      </section>

      {/* ── LESSONS ───────────────────────────── */}
      <section className="px-[60px] py-[64px] border-b border-border max-md:px-6">
        <Reveal><SectionLabel>Lessons Learned</SectionLabel></Reveal>
        <div className="grid grid-cols-3 gap-8 mt-6 max-md:grid-cols-1">
          {[
            { n: '01', title: 'Contract-first beats patch-later', body: 'Aligning DTOs early saved more time than any individual feature. The cost of misalignment compounds silently until something breaks in production.' },
            { n: '02', title: 'Centralise cross-cutting concerns', body: 'Auth interception, error boundaries, and loading states belong in one place. Spreading them across components creates maintenance debt that is brutal to unwind.' },
            { n: '03', title: 'Two apps is a deployment strategy', body: 'Running the admin console as a separate Vite app gave clean separation of concerns and independent deploy cycles — the right call for a platform with distinct user types.' },
          ].map((l, i) => (
            <Reveal key={l.n} delay={i * 80}>
              <div className="font-serif text-[2.4rem] font-semibold text-border mb-4 leading-none">{l.n}</div>
              <h3 className="font-serif text-[1.05rem] font-semibold mb-3 text-site-text">{l.title}</h3>
              <p className="text-[0.82rem] text-muted leading-relaxed">{l.body}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── LINKS / NEXT ──────────────────────── */}
      <section className="px-[60px] py-[64px] max-md:px-6">
        <div className="flex justify-between items-center flex-wrap gap-8">
          <Reveal>
            <SectionLabel>Links</SectionLabel>
            <div className="flex gap-5 mt-4 flex-wrap">
              <a
                href="https://github.com/softboy-chu"
                target="_blank"
                rel="noreferrer"
                className="text-[0.75rem] tracking-[0.1em] uppercase text-site-text border border-site-text px-5 py-3 no-underline transition-all duration-200 hover:bg-site-text hover:text-bg"
              >
                GitHub →
              </a>
              <span className="text-[0.75rem] tracking-[0.1em] uppercase text-muted border border-border px-5 py-3 cursor-default">
                Live Demo — Coming Soon
              </span>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <Link
              to="/#work"
              className="text-[0.75rem] tracking-[0.1em] uppercase text-muted no-underline hover:text-site-text transition-colors duration-200 flex items-center gap-2"
            >
              ← All Projects
            </Link>
          </Reveal>
        </div>
      </section>

    </main>
  )
}
