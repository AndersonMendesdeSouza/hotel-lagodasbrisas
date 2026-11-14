import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import styles from './ScrollEffects.module.css'

export default function ScrollEffects() {
  const { pathname } = useLocation()

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reducedMotion || !('IntersectionObserver' in window)) return

    const elements = document.querySelectorAll<HTMLElement>('[data-reveal]')
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue

        entry.target.classList.add(styles.revealed)
        observer.unobserve(entry.target)
      }
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -24px 0px',
    })

    for (const element of elements) observer.observe(element)

    return () => {
      observer.disconnect()
      for (const element of elements) element.classList.remove(styles.revealed)
    }
  }, [pathname])

  return null
}
