import '../globals.css'
import Shell from './components/Shell'

export const metadata = {
  title: 'CED Africa',
  description: 'Delivering world-class audiovisual and automation experiences from West Africa.',
  icons: {
    icon: '/favicon.ico',
    apple: '/favicon.ico',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <Shell>{children}</Shell>
      </body>
    </html>
  )
}
