import styles from './BookingForm.module.css'
import ui from '../styles/shared.module.css'
import { useState } from 'react'
import type { FormEvent } from 'react'
import { hotel, rooms } from '../data/hotel'
import { buildBookingUrl, getNextDay, getToday, validateBooking } from '../services/booking'
import Icon from './Icon'

interface BookingFormProps {
  selectedRoom: string
  onSelectRoom: (room: string) => void
}

export default function BookingForm({ selectedRoom, onSelectRoom }: BookingFormProps) {
  const [checkIn, setCheckIn] = useState('')
  const [error, setError] = useState('')
  const [whatsappUrl, setWhatsappUrl] = useState('')
  const today = getToday()

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const fields = new FormData(event.currentTarget)
    const booking = {
      name: String(fields.get('name') || ''),
      checkIn: String(fields.get('checkIn') || ''),
      checkOut: String(fields.get('checkOut') || ''),
      adults: Number(fields.get('adults')),
      children: Number(fields.get('children')),
      accommodation: rooms.find((room) => room.id === selectedRoom)?.name || '',
      notes: String(fields.get('notes') || ''),
    }
    const validationError = validateBooking(booking)
    setError(validationError || '')
    if(validationError) return
    const url = buildBookingUrl(booking)
    setWhatsappUrl(url)
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <section className={styles.bookingSection} id="reservas" aria-labelledby="booking-title" data-reveal>
      <form className={styles.bookingForm} onSubmit={handleSubmit} onChange={() => { setError(''); setWhatsappUrl('') }}>
        <div className={styles.formHeading}>
          <h2 id="booking-title">Planeje sua estadia</h2>
        </div>
        <div className={styles.formGrid}>
          <label className={`${styles.field} ${styles.fullField}`}>Seu nome<input name="name" autoComplete="name" placeholder="Como podemos chamar você?" minLength={2} maxLength={100} required />
          </label>
          <label className={styles.field}>Check-in<input name="checkIn" type="date" min={today} value={checkIn} onChange={(event) => setCheckIn(event.target.value)} required />
          </label>
          <label className={styles.field}>Check-out<input name="checkOut" type="date" min={checkIn ? getNextDay(checkIn) : getNextDay(today)} required />
          </label>
          <label className={styles.field}>Adultos<input name="adults" type="number" min="1" step="1" defaultValue="2" required />
          </label>
          <label className={styles.field}>Crianças<input name="children" type="number" min="0" step="1" defaultValue="0" required />
          </label>
          <label className={`${styles.field} ${styles.fullField}`}>Acomodação de interesse <span className={styles.optional}>(opcional)</span>
            <select name="accommodation" value={selectedRoom} onChange={(event) => onSelectRoom(event.target.value)}>
              <option value="">Quero conhecer as opções</option>{rooms.map((room) => <option key={room.id} value={room.id}>{room.name} · demonstrativa</option>)}</select>
          </label>
          <label className={`${styles.field} ${styles.fullField}`}>Algo que gostaria de nos contar? <span className={styles.optional}>(opcional)</span>
            <textarea name="notes" rows={2} maxLength={1000} placeholder="Uma ocasião especial, uma dúvida, um pedido…" />
          </label>
        </div>
        {error && <p className={styles.formError} role="alert">{error}</p>}
        <button className={`${ui.button} ${ui.buttonGreen} ${styles.bookingSubmit}`} type="submit">
          <Icon name="whatsapp" /> Solicitar reserva pelo WhatsApp <Icon name="arrow" />
        </button>
        <p className={styles.formNote}>Solicitação de orçamento e disponibilidade. Sua reserva será confirmada somente após o atendimento.</p>
        <p className={styles.demoContact}>Demonstração: atendimento no WhatsApp do desenvolvedor, {hotel.phoneLabel}.</p>
        {whatsappUrl && <p className={styles.formSuccess} role="status">Sua mensagem está pronta. Se o WhatsApp não abriu, <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">continue por este link</a>.</p>}
      </form>
    </section>
  )
}
