import { useRef } from 'react'
import { rooms } from '../data/hotel'
import Icon from './Icon'
import RoomCard from './RoomCard'
import styles from './RoomsCarousel.module.css'

export default function RoomsCarousel() {
  const trackRef = useRef<HTMLDivElement>(null)

  function moveCarousel(direction: number) {
    const track = trackRef.current
    const firstCard = track?.firstElementChild

    if (!track || !(firstCard instanceof HTMLElement)) return

    const gap = parseFloat(getComputedStyle(track).columnGap)
    const step = firstCard.offsetWidth + gap
    const lastPosition = track.scrollWidth - track.clientWidth
    let nextPosition = track.scrollLeft + direction * step

    if (direction > 0 && track.scrollLeft >= lastPosition - 1) {
      nextPosition = 0
    } else if (direction < 0 && track.scrollLeft <= 1) {
      nextPosition = lastPosition
    }

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    track.scrollTo({ left: nextPosition, behavior: reducedMotion ? 'instant' : 'smooth' })
  }

  return (
    <div role="region" aria-roledescription="carrossel" aria-label="Acomodações">
      <div className={styles.toolbar}>
        <p>Explore as acomodações e encontre o seu lugar.</p>
        <div className={styles.controls}>
          <button
            className={styles.previous}
            type="button"
            aria-label="Acomodações anteriores"
            aria-controls="rooms-carousel"
            onClick={() => moveCarousel(-1)}
          >
            <Icon name="chevron" />
          </button>
          <button
            type="button"
            aria-label="Próximas acomodações"
            aria-controls="rooms-carousel"
            onClick={() => moveCarousel(1)}
          >
            <Icon name="chevron" />
          </button>
        </div>
      </div>
      <div
        className={styles.track}
        ref={trackRef}
        id="rooms-carousel"
        tabIndex={0}
        aria-label="Lista de quartos. Use as setas do teclado ou deslize para explorar."
      >
        {rooms.map((room) => (
          <RoomCard key={room.id} room={room} />
        ))}
      </div>
    </div>
  )
}
