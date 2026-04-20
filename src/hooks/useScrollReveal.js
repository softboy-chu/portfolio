import { useEffect, useRef } from 'react'

/**
 * Attach `ref` to any element. When it enters the viewport the
 * CSS class `reveal visible` is applied (defined in index.css).
 *
 * @param {IntersectionObserverInit} [options]
 */
export function useScrollReveal(options = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    el.classList.add('reveal')

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible')
          observer.disconnect()
        }
      },
      { threshold: 0.1, ...options }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return ref
}
