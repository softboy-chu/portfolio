import { useScrollReveal } from '../hooks/useScrollReveal'

const PLANS = [
  {
    name:  'Starter',
    desc:  'Single-page site, responsive, up to 3 sections',
    price: '₦150,000',
    unit:  '/ project',
  },
  {
    name:  'Pro',
    desc:  'Multi-page app, custom components, CMS integration',
    price: '₦300,000',
    unit:  '/ project',
  },
  {
    name:  'Enterprise',
    desc:  'Full-scale app, design system, API integrations',
    price: 'Custom',
    unit:  null,
  },
]

function PricingRow({ plan, index, isFirst }) {
  const ref = useScrollReveal({ threshold: 0.2 })

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${index * 100}ms` }}
      className={`flex justify-between items-center py-7 border-b border-border gap-6
        max-[600px]:flex-col max-[600px]:items-start max-[600px]:gap-2
        ${isFirst ? 'border-t border-border' : ''}`}
    >
      <div>
        <div className="font-serif text-[1.4rem] font-semibold text-site-text">{plan.name}</div>
        <div className="text-[0.8rem] text-muted mt-1">{plan.desc}</div>
      </div>

      <div className="font-serif text-[1.6rem] font-semibold whitespace-nowrap text-site-text">
        {plan.price}
        {plan.unit && (
          <span className="text-[0.72rem] font-sans font-normal text-muted ml-1">{plan.unit}</span>
        )}
      </div>
    </div>
  )
}

export default function Pricing() {
  const titleRef = useScrollReveal()
  const ctaRef   = useScrollReveal()

  return (
    <section id="pricing" className="px-[60px] py-[80px] border-t border-border bg-bg max-md:px-6 transition-colors duration-300">
      <p ref={titleRef} className="text-[0.72rem] tracking-[0.18em] uppercase text-muted mb-12">
        Pricing
      </p>

      <div>
        {PLANS.map((plan, i) => (
          <PricingRow key={plan.name} plan={plan} index={i} isFirst={i === 0} />
        ))}
      </div>

      <p ref={ctaRef} className="text-center mt-10 text-[0.8rem] text-muted">
        All projects include source code handoff and a 30-day support period. Need something custom?{' '}
        <a href="#contact" className="text-accent no-underline hover:underline">
          Let's talk →
        </a>
      </p>
    </section>
  )
}
