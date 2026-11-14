import styles from './Gallery.module.css'
import ui from '../styles/shared.module.css'
import { useRef, useState } from 'react'
import { gallery } from '../data/hotel'
import Icon from './Icon'

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState(0)
  const dialogRef = useRef<HTMLDialogElement>(null)
  const activePhoto = gallery[activeIndex]

  function movePhoto(direction: number) {
    setActiveIndex((index) => (index + direction + gallery.length) % gallery.length)
  }

  return (
    <section className={`${ui.sectionSpace} ${ui.container}`} id="galeria" aria-labelledby="gallery-title">
      <div className={styles.sectionHeading} data-reveal>
        <div>
          <span className={ui.eyebrow}>UM OLHAR MAIS DE PERTO</span>
          <h2 id="gallery-title">Imagine-se <em>aqui.</em>
          </h2>
        </div>
        <p>Um passeio pelos cenários que fazem<br className={ui.desktopBreak} /> parte da nossa história.</p>
      </div>
      <div className={styles.galleryGrid} data-reveal>{gallery.map((photo, index) => <button className={`${styles.galleryPhoto} ${styles[`galleryPhoto${index + 1}`] || ''}`} key={photo.src} onClick={() => { setActiveIndex(index); dialogRef.current?.showModal() }} aria-label={`Ampliar foto: ${photo.label}`}>
        <img src={photo.src} alt={photo.alt} width="800" height="600" loading="lazy" />
        <span>{photo.label}</span>
        <Icon name="expand" />
      </button>)}</div>
      <p className={styles.galleryNote}>Registros públicos do hotel usados nesta prévia. Galeria final sujeita à atualização com fotografias atuais.</p>
      <dialog className={styles.galleryDialog} ref={dialogRef} aria-label="Galeria ampliada" onClick={(event) => { if(event.target === event.currentTarget) dialogRef.current?.close() }} onKeyDown={(event) => { if(event.key === 'ArrowRight') movePhoto(1); if(event.key === 'ArrowLeft') movePhoto(-1) }}>
        <button className={ui.dialogClose} onClick={() => dialogRef.current?.close()} aria-label="Fechar galeria">
          <Icon name="close" />
        </button>
        <img src={activePhoto.src} alt={activePhoto.alt} width="1200" height="800" />
        <div className={styles.galleryControls}>
          <button className={styles.galleryPrevious} onClick={() => movePhoto(-1)} aria-label="Foto anterior">
            <Icon name="chevron" />
          </button>
          <p aria-live="polite">{activePhoto.label} <span>{activeIndex + 1} / {gallery.length}</span>
          </p>
          <button onClick={() => movePhoto(1)} aria-label="Próxima foto">
            <Icon name="chevron" />
          </button>
        </div>
      </dialog>
    </section>
  )
}
