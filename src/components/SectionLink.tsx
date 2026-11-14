import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

interface SectionLinkProps {
  sectionId: string
  children: ReactNode
  className?: string
  ariaLabel?: string
  onClick?: () => void
}

export default function SectionLink({ sectionId, children, className, ariaLabel, onClick }: SectionLinkProps) {
  return (
    <Link
      to="/"
      state={{ sectionId }}
      className={className}
      aria-label={ariaLabel}
      onClick={onClick}
    >
      {children}
    </Link>
  )
}
