type IconName = 'arrow' | 'pin' | 'sun' | 'leaf' | 'waves' | 'people' | 'instagram' | 'whatsapp' | 'close' | 'menu' | 'chevron' | 'expand'

const paths: Record<IconName, string> = {
  arrow: 'M4 12h16m-6-6 6 6-6 6',
  pin: 'M20 10c0 6-8 11-8 11S4 16 4 10a8 8 0 1 1 16 0ZM15 10a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z',
  sun: 'M12 3V1m0 22v-2M3 12H1m22 0h-2M5.6 5.6 4.2 4.2m15.6 15.6-1.4-1.4M5.6 18.4l-1.4 1.4M19.8 4.2l-1.4 1.4M17 12a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z',
  leaf: 'M20 3C6 2 2 9 6 15s15 5 14-12ZM4 21 16 8M8 17v-6m0 6h6',
  waves: 'M2 6c3-4 5 4 10 0s7 4 10 0M2 12c3-4 5 4 10 0s7 4 10 0M2 18c3-4 5 4 10 0s7 4 10 0',
  people: 'M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2m20 0v-2a4 4 0 0 0-3-3.87M13 3.13a4 4 0 0 1 0 7.75M13 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z',
  instagram: 'M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5ZM16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Zm1.5-5.5h.01',
  whatsapp: 'M21 11.5a9 9 0 0 1-13.4 7.8L2 21l1.7-5.6A9 9 0 1 1 21 11.5ZM8 7c0 5 4 9 8 9l1-3-3-1-1 1c-1.5-.5-2.5-1.5-3-3l1-1-1-3Z',
  close: 'm6 6 12 12M6 18 18 6',
  menu: 'M4 6h16M4 12h16M4 18h16',
  chevron: 'm8 4 8 8-8 8',
  expand: 'M8 3H3v5m13-5h5v5M3 16v5h5m13-5v5h-5',
}

export default function Icon({ name, className = '' }: { name: IconName; className?: string }) {
  return <svg className={className} width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d={paths[name]} />
  </svg>
}
