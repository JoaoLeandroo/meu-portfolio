import { Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({ subsets: ['latin'], weight: [
  '300',
  '400',
  '500',
  '600',
  '700',
  '800',
  '900'
] })

export const metadata = {
  title: 'João Leandro',
  description: 'Projeto Portfolio joão Leandro',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={`${poppins.className} bg-primary-purple`}>{children}</body>
    </html>
  )
}
