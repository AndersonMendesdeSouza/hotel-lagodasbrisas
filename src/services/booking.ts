import { hotel } from '../data/hotel'

export interface BookingRequest {
  name: string
  checkIn: string
  checkOut: string
  adults: number
  children: number
  accommodation: string
  notes: string
}

export function getToday() {
  const today = new Date()
  const year = today.getFullYear()
  const month = String(today.getMonth() + 1).padStart(2, '0')
  const day = String(today.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}

export function getNextDay(date: string) {
  const nextDay = new Date(`${date}T12:00:00`)
  nextDay.setDate(nextDay.getDate() + 1)
  const year = nextDay.getFullYear()
  const month = String(nextDay.getMonth() + 1).padStart(2, '0')
  const day = String(nextDay.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}

export function validateBooking(booking: BookingRequest, today = getToday()) {
  if (booking.name.trim().length < 2) return 'Informe seu nome com pelo menos 2 caracteres.'

  for (const date of [booking.checkIn, booking.checkOut]) {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) return 'Informe as datas de entrada e saída.'
    const parsed = new Date(`${date}T12:00:00Z`)
    if (Number.isNaN(parsed.getTime()) || parsed.toISOString().slice(0, 10) !== date) return 'Informe datas válidas para sua estadia.'
  }

  if (booking.checkIn < today) return 'A data de entrada não pode ser anterior a hoje.'
  if (booking.checkOut <= booking.checkIn) return 'A saída precisa ser depois da entrada.'
  if (!Number.isInteger(booking.adults) || booking.adults < 1) return 'Informe pelo menos 1 adulto.'
  if (!Number.isInteger(booking.children) || booking.children < 0) return 'Informe uma quantidade válida de crianças.'
  return null
}

export function buildBookingUrl(booking: BookingRequest) {
  const formatDate = (date: string) => date.split('-').reverse().join('/')
  const message = [
    'Olá! Gostaria de solicitar uma reserva no Hotel Lago das Brisas.',
    '',
    `Nome: ${booking.name.trim()}`,
    `Check-in: ${formatDate(booking.checkIn)}`,
    `Check-out: ${formatDate(booking.checkOut)}`,
    `Adultos: ${booking.adults}`,
    `Crianças: ${booking.children}`,
    `Acomodação: ${booking.accommodation || 'Gostaria de conhecer as opções disponíveis'}`,
    ...(booking.notes.trim() ? [`Observações: ${booking.notes.trim()}`] : []),
    '',
    'Gostaria de consultar a disponibilidade e os valores para esse período.',
  ].join('\n')

  return `https://wa.me/${hotel.whatsapp}?text=${encodeURIComponent(message)}`
}
