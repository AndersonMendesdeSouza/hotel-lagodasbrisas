export const hotel = {
  name: 'Hotel Lago das Brisas',
  whatsapp: '5564999999687',
  phoneLabel: '(64) 99999-9687',
  instagram: 'https://www.instagram.com/_hotellagodasbrisas/',
  location: 'Buriti Alegre, Goiás',
  maps: 'https://www.google.com/maps/search/?api=1&query=Hotel+Lago+das+Brisas+Buriti+Alegre+GO',
}

export const navigation = [
  { label: 'O hotel', sectionId: 'hotel' },
  { label: 'Acomodações', sectionId: 'acomodacoes' },
  { label: 'Experiências', sectionId: 'experiencias' },
  { label: 'Guarda-barcos', sectionId: 'guarda-barcos' },
  { label: 'Gastronomia', sectionId: 'gastronomia' },
  { label: 'Galeria', sectionId: 'galeria' },
  { label: 'Contato', sectionId: 'contato' },
]

export interface RoomPhoto {
  src: string
  alt: string
}

export interface Room {
  id: string
  name: string
  subtitle: string
  description: string
  photos: RoomPhoto[]
  capacity: number
  amenities: string[]
}

// Categorias e capacidades ilustrativas: confirmar com o hotel antes da publicação.
// Fotos de banco de imagens: não representam as acomodações reais do hotel.
export const rooms: Room[] = [
  {
    id: 'casal',
    name: 'Refúgio a dois',
    subtitle: 'ACOMODAÇÃO CASAL',
    description: 'Uma proposta de descanso a dois, com o verde dos jardins e a tranquilidade do lago como companhia.',
    photos: [
      { src: '/images/quarto-casal-1.jpg', alt: 'Imagem ilustrativa de quarto com cama de casal e decoração em madeira' },
      { src: '/images/quarto-casal-2.jpg', alt: 'Imagem ilustrativa de quarto com cama de casal junto à janela' },
      { src: '/images/quarto-natureza-1.jpg', alt: 'Imagem ilustrativa de cama com toalhas e cabeceira de madeira' },
    ],
    capacity: 2,
    amenities: ['Quarto privativo', 'Ar-condicionado', 'Frigobar'],
  },
  {
    id: 'familia',
    name: 'Memórias em família',
    subtitle: 'ACOMODAÇÃO FAMÍLIA',
    description: 'Uma opção pensada para compartilhar dias leves e reunir quem faz parte das suas melhores histórias.',
    photos: [
      { src: '/images/quarto-familia-2.jpg', alt: 'Imagem ilustrativa de quarto com cama e área de estar' },
      { src: '/images/quarto-familia-1.jpg', alt: 'Imagem ilustrativa de quarto com cama ampla e banheiro ao fundo' },
      { src: '/images/quarto-casal-1.jpg', alt: 'Imagem ilustrativa de quarto com cama de casal e poltronas' },
    ],
    capacity: 4,
    amenities: ['Quarto privativo', 'Ar-condicionado', 'Frigobar'],
  },
  {
    id: 'lago',
    name: 'Perto da natureza',
    subtitle: 'ACOMODAÇÃO LAGO',
    description: 'Para quem quer trocar o ritmo da cidade por uma estadia cercada de natureza e momentos ao ar livre.',
    photos: [
      { src: '/images/quarto-natureza-2.jpg', alt: 'Imagem ilustrativa de quarto com janela voltada para o verde' },
      { src: '/images/quarto-natureza-1.jpg', alt: 'Imagem ilustrativa de quarto com cama e móveis de madeira' },
      { src: '/images/quarto-casal-2.jpg', alt: 'Imagem ilustrativa de quarto com luz natural e cortinas verdes' },
    ],
    capacity: 3,
    amenities: ['Quarto privativo', 'Ar-condicionado', 'Frigobar'],
  },
]

export const gallery = [
  { src: '/images/lago.jpg', alt: 'Palmeiras e áreas de descanso às margens do Lago das Brisas', label: 'O lago e a brisa' },
  { src: '/images/piscina.jpg', alt: 'Piscina azul com espreguiçadeiras no hotel', label: 'Dias de sol' },
  { src: '/images/jardim.jpg', alt: 'Jardins verdes com quiosque entre as acomodações', label: 'Natureza por perto' },
  { src: '/images/varanda.jpg', alt: 'Varanda coberta das acomodações', label: 'Nosso jeito de acolher' },
  { src: '/images/restaurante.jpg', alt: 'Mesas e área de convivência entre palmeiras', label: 'Encontros sem pressa' },
]

// Referências dos arquivos locais usados nesta demonstração:
// Logo: https://linktr.ee/hotel.lagodasbrisas
// lago.jpg e piscina.jpg: https://www.tripadvisor.com.br/Hotel_Review-g2577992-d2665443-Reviews-Hotel_Lago_Das_Brisas-Buriti_Alegre_State_of_Goias.html
// jardim.jpg, varanda.jpg, lazer.jpg e restaurante.jpg: https://goianiaeventos.com.br/estabelecimentos/hotel-fazenda-no-lago-das-brisas-hflb-as-margens-do-lago/
// Imagens ilustrativas de quartos e guarda-barcos, obtidas no Pexels:
// quarto-casal-1.jpg: https://www.pexels.com/photo/modern-hotel-room-with-cozy-decor-and-double-bed-40665020/
// quarto-casal-2.jpg: https://www.pexels.com/photo/a-hotel-room-with-a-bed-and-a-window-28011238/
// quarto-familia-1.jpg: https://www.pexels.com/photo/bed-bedroom-comfort-furniture-164595/
// quarto-familia-2.jpg: https://www.pexels.com/photo/bedroom-door-entrance-guest-room-271618/
// quarto-natureza-1.jpg: https://www.pexels.com/photo/cozy-hotel-room-with-neatly-made-bed-33753444/
// quarto-natureza-2.jpg: https://www.pexels.com/photo/contemporary-hotel-room-with-a-double-bed-5539613/
// guarda-barcos.jpg: https://www.pexels.com/photo/boats-stored-in-warehouse-12324262/
// marina-barcos.jpg: https://www.pexels.com/photo/aerial-photography-of-motorboats-docked-at-the-marina-12116615/
// Substituir pelos arquivos atuais fornecidos pelo hotel para a versão definitiva.
