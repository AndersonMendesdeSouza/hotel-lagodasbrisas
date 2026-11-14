import { useId, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import type { RoomPhoto } from '../data/hotel'
import Icon from './Icon'
import styles from './RoomPhotos.module.css'

interface RoomPhotosProps {
  photos: RoomPhoto[]
  roomName: string
  detailsPath?: string
  variant?: 'card' | 'details'
}

export default function RoomPhotos({ photos, roomName, detailsPath, variant = 'card' }: RoomPhotosProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const viewportRef = useRef<HTMLDivElement>(null)
  const viewportId = useId()

  if (photos.length === 0) return null

  function goToPhoto(index: number) {
    const viewport = viewportRef.current
    if (!viewport) return

    const nextIndex = (index + photos.length) % photos.length
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    viewport.scrollTo({
      left: nextIndex * viewport.clientWidth,
      behavior: reducedMotion ? 'instant' : 'smooth',
    })
  }

  function updateActivePhoto() {
    const viewport = viewportRef.current
    if (!viewport || viewport.clientWidth === 0) return

    const index = Math.round(viewport.scrollLeft / viewport.clientWidth)
    setActiveIndex(Math.max(0, Math.min(index, photos.length - 1)))
  }

  return (
    <div className={styles[variant]} role="region" aria-roledescription="carrossel" aria-label={`Fotos de ${roomName}`} data-reveal={variant === 'details' ? '' : undefined}>
      <div className={styles.photoFrame}>
        <div
          className={styles.viewport}
          ref={viewportRef}
          id={viewportId}
          tabIndex={0}
          onScroll={updateActivePhoto}
          onKeyDown={(event) => {
            if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
              event.preventDefault()
              goToPhoto(activeIndex + (event.key === 'ArrowRight' ? 1 : -1))
            }
          }}
        >
          {photos.map((photo, index) => (
            <div
              className={styles.slide}
              key={photo.src}
              role="group"
              aria-roledescription="slide"
              aria-label={`Foto ${index + 1} de ${photos.length}`}
              aria-hidden={index !== activeIndex}
            >
              {detailsPath ? (
                <Link to={detailsPath} tabIndex={index === activeIndex ? 0 : -1} aria-label={`Ver detalhes de ${roomName}`}>
                  <img src={photo.src} alt={photo.alt} width="1200" height="800" loading="lazy" />
                </Link>
              ) : (
                <img src={photo.src} alt={photo.alt} width="1200" height="800" loading={index === 0 ? 'eager' : 'lazy'} />
              )}
            </div>
          ))}
        </div>
        <span className={styles.photoTag}>IMAGENS ILUSTRATIVAS</span>
        {photos.length > 1 && (
          <>
            <button
              className={`${styles.photoControl} ${styles.previous}`}
              type="button"
              aria-label={`Foto anterior de ${roomName}`}
              aria-controls={viewportId}
              onClick={() => goToPhoto(activeIndex - 1)}
            >
              <Icon name="chevron" />
            </button>
            <button
              className={`${styles.photoControl} ${styles.next}`}
              type="button"
              aria-label={`Próxima foto de ${roomName}`}
              aria-controls={viewportId}
              onClick={() => goToPhoto(activeIndex + 1)}
            >
              <Icon name="chevron" />
            </button>
          </>
        )}
        <span className={styles.counter} aria-live="polite" aria-atomic="true">
          {activeIndex + 1} / {photos.length}
        </span>
      </div>
      {variant === 'details' && photos.length > 1 && (
        <div className={styles.thumbnails} role="group" aria-label="Escolher foto">
          {photos.map((photo, index) => (
            <button
              className={index === activeIndex ? styles.activeThumbnail : undefined}
              type="button"
              key={photo.src}
              aria-label={`Ver foto ${index + 1}: ${photo.alt}`}
              aria-pressed={index === activeIndex}
              aria-controls={viewportId}
              onClick={() => goToPhoto(index)}
            >
              <img src={photo.src} alt="" width="140" height="90" loading="lazy" />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
