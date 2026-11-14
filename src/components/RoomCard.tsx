import { Link, useNavigate } from 'react-router-dom'
import type { Room } from '../data/hotel'
import Icon from './Icon'
import RoomPhotos from './RoomPhotos'
import styles from './RoomCard.module.css'
import ui from '../styles/shared.module.css'

export default function RoomCard({ room }: { room: Room }) {
  const navigate = useNavigate()
  const detailsPath = `/acomodacoes/${room.id}`

  function selectRoom() {
    navigate(`/reservas?acomodacao=${room.id}`)
  }

  return (
    <article className={styles.roomCard}>
      <RoomPhotos photos={room.photos} roomName={room.name} detailsPath={detailsPath} />
      <div className={styles.roomContent}>
        <span className={ui.eyebrow}>{room.subtitle}</span>
        <h3><Link to={detailsPath}>{room.name}</Link></h3>
        <p>{room.description}</p>
        <div className={styles.roomCapacity}>
          <Icon name="people" />
          Proposta para até {room.capacity} pessoas
        </div>
        <div className={styles.roomActions}>
          <Link className={ui.textLink} to={detailsPath}>
            Ver detalhes <span>↗</span>
          </Link>
          <button className={styles.roomBook} type="button" onClick={selectRoom}>
            Tenho interesse <Icon name="arrow" />
          </button>
        </div>
      </div>
    </article>
  )
}
