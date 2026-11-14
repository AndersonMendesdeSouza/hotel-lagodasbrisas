import { Link } from 'react-router-dom'
import styles from './Header.module.css'
import ui from '../styles/shared.module.css'
import { useState } from 'react'
import { hotel, navigation } from '../data/hotel'
import Icon from './Icon'
import SectionLink from './SectionLink'

export default function Header({ showBookingButton = true }: { showBookingButton?: boolean }) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className={styles.siteHeader}>
      <div className={`${styles.headerInner} ${ui.container} ${showBookingButton ? '' : styles.withoutBooking}`}>
        <Link className={styles.brand} to="/" aria-label={`${hotel.name} — início`} onClick={() => setMenuOpen(false)}>
          <img src="/images/logo.png" alt="Hotel Lago das Brisas" width="94" height="94" />
        </Link>
        <nav className={`${styles.mainNav} ${menuOpen ? styles.isOpen : ''}`} id="main-navigation" aria-label="Navegação principal" onKeyDown={(event) => { if(event.key === 'Escape') setMenuOpen(false) }}>
          {navigation.map((link) => (
            <SectionLink key={link.sectionId} sectionId={link.sectionId} onClick={() => setMenuOpen(false)}>
              {link.label}
            </SectionLink>
          ))}
          {showBookingButton && (
            <Link className={styles.mobileBooking} to="/reservas" onClick={() => setMenuOpen(false)}>
              Solicitar reserva <Icon name="arrow" />
            </Link>
          )}
        </nav>
        {showBookingButton && (
          <Link className={`${ui.button} ${ui.buttonGreen} ${styles.headerBooking}`} to="/reservas">
            Solicitar reserva <Icon name="arrow" />
          </Link>
        )}
        <button className={styles.menuToggle} aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'} aria-expanded={menuOpen} aria-controls="main-navigation" onClick={() => setMenuOpen(!menuOpen)}>
          <Icon name={menuOpen ? 'close' : 'menu'} />
        </button>
      </div>
    </header>
  )
}
