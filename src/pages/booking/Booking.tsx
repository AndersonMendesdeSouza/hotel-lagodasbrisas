import { useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import BookingForm from '../../components/BookingForm'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Icon from '../../components/Icon'
import { rooms } from '../../data/hotel'
import styles from './Booking.module.css'

export default function Booking() {
  const [searchParams] = useSearchParams()
  const requestedRoom = searchParams.get('acomodacao') || ''
  const [selectedRoom, setSelectedRoom] = useState(() => (
    rooms.some((room) => room.id === requestedRoom) ? requestedRoom : ''
  ))

  return (
    <>
      <button className={styles.skipLink} type="button" onClick={() => document.getElementById('conteudo-reservas')?.focus()}>
        Pular para o formulário de reserva
      </button>
      <Header showBookingButton={false} />
      <main id="conteudo-reservas" tabIndex={-1} className={styles.page}>
        <div className={styles.content}>
          <div className={styles.pageTop} data-reveal>
            <Link className={styles.backLink} to="/" aria-label="Voltar para a página inicial">
              <Icon name="arrow" />
            </Link>
            <h1 className={styles.pageTitle}>Reservas</h1>
          </div>
          <p className={styles.pageDescription}>Escolha as datas e envie sua solicitação pelo WhatsApp.</p>
          <BookingForm selectedRoom={selectedRoom} onSelectRoom={setSelectedRoom} />
        </div>
      </main>
      <Footer />
    </>
  )
}
