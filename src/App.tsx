import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import Home from './pages/home/Home'
import AccommodationDetails from './pages/accommodation-details/AccommodationDetails'
import Booking from './pages/booking/Booking'
import ScrollEffects from './components/ScrollEffects'

function RouteScroll() {
  const { pathname, hash, search, state, key } = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    if (hash) {
      // Mantém os links antigos funcionando e substitui a URL com fragmento.
      if (hash === '#reservas') {
        navigate(`/reservas${search}`, { replace: true })
      } else {
        navigate('/', { replace: true, state: { sectionId: hash.slice(1) } })
      }
      return
    }

    if (pathname === '/' && typeof state?.sectionId === 'string') {
      const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      document.getElementById(state.sectionId)?.scrollIntoView({
        behavior: reducedMotion ? 'instant' : 'smooth',
      })
      return
    }

    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname, hash, search, state, key, navigate])

  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <RouteScroll />
      <ScrollEffects />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/acomodacoes/:id" element={<AccommodationDetails />} />
        <Route path="/reservas" element={<Booking />} />
      </Routes>
    </BrowserRouter>
  )
}
