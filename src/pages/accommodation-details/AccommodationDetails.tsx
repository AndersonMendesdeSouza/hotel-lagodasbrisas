import { Link, useParams } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Icon from '../../components/Icon'
import RoomPhotos from '../../components/RoomPhotos'
import SectionLink from '../../components/SectionLink'
import { rooms } from '../../data/hotel'
import styles from './AccommodationDetails.module.css'
import ui from '../../styles/shared.module.css'

export default function AccommodationDetails() {
  const { id } = useParams()
  const room = rooms.find((accommodation) => accommodation.id === id)

  if (!room) {
    return (
      <>
        <Header />
        <main className={`${styles.notFound} ${ui.container}`}>
          <span className={ui.eyebrow}>ACOMODAÇÕES</span>
          <h1>Acomodação não encontrada.</h1>
          <p>Esta opção não está disponível. Conheça as acomodações da nossa demonstração.</p>
          <SectionLink className={`${ui.button} ${ui.buttonGreen}`} sectionId="acomodacoes">
            Ver acomodações <Icon name="arrow" />
          </SectionLink>
        </main>
        <Footer />
      </>
    )
  }

  const bookingPath = `/reservas?acomodacao=${room.id}`

  return (
    <>
      <button className={styles.skipLink} type="button" onClick={() => document.getElementById('detalhes')?.focus()}>Pular para os detalhes</button>
      <Header />
      <main className={styles.detailsPage} id="detalhes" tabIndex={-1}>
        <div className={ui.container}>
          <nav className={styles.breadcrumb} aria-label="Localização na página">
            <Link to="/">Início</Link>
            <span aria-hidden="true">/</span>
            <SectionLink sectionId="acomodacoes">Acomodações</SectionLink>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{room.name}</span>
          </nav>
          <div className={styles.pageHeading} data-reveal>
            <div>
              <span className={ui.eyebrow}>{room.subtitle}</span>
              <h1>{room.name}</h1>
              <p>Uma pausa na rotina. Um convite para ficar.</p>
            </div>
            <SectionLink className={ui.textLink} sectionId="acomodacoes">
              Todas as acomodações <Icon name="arrow" />
            </SectionLink>
          </div>
          <RoomPhotos key={room.id} photos={room.photos} roomName={room.name} variant="details" />
          <p className={styles.photoNote}>Imagens ilustrativas de banco de fotos · Não representam as acomodações reais do hotel</p>
          <div className={styles.detailsLayout}>
            <div className={styles.roomInformation} data-reveal>
              <span className={ui.eyebrow}>O SEU PRÓXIMO REFÚGIO</span>
              <h2>Tempo para descansar.<br /><em>Espaço para aproveitar.</em></h2>
              <p>{room.description}</p>
              <div className={styles.capacity}>
                <Icon name="people" />
                <span>Proposta de capacidade: até {room.capacity} pessoas</span>
              </div>
              <section className={styles.amenities} aria-labelledby="amenities-title">
                <h3 id="amenities-title">Comodidades propostas</h3>
                <ul>
                  {room.amenities.map((amenity) => (
                    <li key={amenity}><span aria-hidden="true">✓</span>{amenity}</li>
                  ))}
                </ul>
              </section>
              <div className={styles.demoNote}>
                <strong>Sobre esta demonstração</strong>
                <p>Nome, capacidade e comodidades desta categoria são ilustrativos e precisam ser confirmados pelo hotel. As imagens são referências visuais de banco de fotos e serão substituídas pelas fotografias reais das acomodações.</p>
              </div>
            </div>
            <aside className={styles.bookingCard} aria-labelledby="room-booking-title" data-reveal>
              <span className={ui.eyebrow}>COMECE A PLANEJAR</span>
              <h2 id="room-booking-title">Seus próximos<br /><em>dias mais leves.</em></h2>
              <p>Informe as datas e quem vem com você. Consulte a disponibilidade e os valores pelo WhatsApp.</p>
              <div className={styles.bookingSummary}>
                <span>Acomodação de interesse</span>
                <strong>{room.name}</strong>
              </div>
              <Link className={`${ui.button} ${ui.buttonGreen}`} to={bookingPath}>
                Solicitar esta acomodação <Icon name="arrow" />
              </Link>
              <small>A solicitação depende da confirmação de disponibilidade. Atendimento de demonstração no WhatsApp do desenvolvedor.</small>
            </aside>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
