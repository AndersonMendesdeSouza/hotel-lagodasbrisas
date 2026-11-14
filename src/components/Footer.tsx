import { Link } from 'react-router-dom'
import styles from './Footer.module.css'
import ui from '../styles/shared.module.css'
import { hotel, navigation } from '../data/hotel'
import Icon from './Icon'
import SectionLink from './SectionLink'

export default function Footer() {
  return (
    <footer className={styles.siteFooter}>
      <div className={`${styles.footerMain} ${ui.container}`}>
        <div className={styles.footerBrand}>
          <Link to="/">
            <img src="/images/logo.png" alt={hotel.name} width="110" height="110" loading="lazy" />
          </Link>
          <p>Um lugar para desacelerar.<br />Uma experiência para guardar.</p>
        </div>
        <div>
          <span className={ui.eyebrow}>EXPLORE</span>
          <nav className={styles.footerLinks} aria-label="Navegação do rodapé">{navigation.map((link) => (
              <SectionLink key={link.sectionId} sectionId={link.sectionId}>{link.label}</SectionLink>
            ))}</nav>
        </div>
        <div className={styles.footerContact}>
          <span className={ui.eyebrow}>ESTAMOS POR AQUI</span>
          <p>Às margens do Lago das Brisas<br />Buriti Alegre · Goiás</p>
          <a href={`https://wa.me/${hotel.whatsapp}`} target="_blank" rel="noopener noreferrer">
            <Icon name="whatsapp" /> {hotel.phoneLabel}</a>
          <a href={hotel.instagram} target="_blank" rel="noopener noreferrer">
            <Icon name="instagram" /> Acompanhe no Instagram</a>
        </div>
        <div className={styles.footerInvitation}>
          <span className={ui.eyebrow}>DIAS MAIS LEVES ESPERAM POR VOCÊ</span>
          <Link to="/reservas">Vamos planejar<br />
            <em>sua próxima pausa?</em> <Icon name="arrow" />
          </Link>
        </div>
      </div>
      <div className={`${styles.footerBottom} ${ui.container}`}>
        <span>© {new Date().getFullYear()} {hotel.name}.</span>
        <span>Demonstração comercial · Contato do desenvolvedor</span>
        <span>Desenvolvido por <strong>Loog Software</strong>
        </span>
      </div>
    </footer>
  )
}
