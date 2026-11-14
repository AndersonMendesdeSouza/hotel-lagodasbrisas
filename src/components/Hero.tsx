import { Link } from 'react-router-dom'
import SectionLink from './SectionLink'
import styles from './Hero.module.css'
import ui from '../styles/shared.module.css'
import Icon from './Icon'

export default function Hero() {
  return (
    <section className={styles.heroSection} aria-labelledby="hero-title" id="inicio">
      <img className={styles.heroImage} src="/images/lago.jpg" alt="Jardins do Hotel Lago das Brisas com palmeiras e vista para o lago" width="2400" height="1600" fetchPriority="high" />
      <div className={styles.heroShade} />
      <div className={`${styles.heroContent} ${ui.container}`}>
        <span className={`${ui.eyebrow} ${styles.heroLocation}`}>
          <span /> BURITI ALEGRE · GOIÁS</span>
        <h1 id="hero-title">O tempo desacelera.<br />A vida <em>acontece.</em>
        </h1>
        <p>Entre o verde e a imensidão do Lago das Brisas,<br className={ui.desktopBreak} /> encontre o seu lugar para viver dias mais leves.</p>
        <div className={styles.heroActions}>
          <Link className={`${ui.button} ${ui.buttonGreen}`} to="/reservas">Quero viver essa experiência <Icon name="arrow" />
          </Link>
          <SectionLink className={styles.heroSecondary} sectionId="hotel">Conheça o hotel <span>↗</span>
          </SectionLink>
        </div>
      </div>
      <div className={`${styles.heroBottom} ${ui.container}`}>
        <span>Às margens do lago. Longe da rotina.</span>
        <SectionLink sectionId="hotel" ariaLabel="Explorar o hotel">EXPLORE <span>↓</span>
        </SectionLink>
      </div>
      <span className={styles.heroSideLabel} aria-hidden="true">NATUREZA · DESCANSO · BONS MOMENTOS</span>
    </section>
  )
}
