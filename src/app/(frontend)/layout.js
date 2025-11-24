import '../globals.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Head from 'next/head'

export const metadata = {
  title: 'CED Africa',
  description: 'Delivering world-class audiovisual and automation experiences from West Africa.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <title>CED Africa</title>
        <meta
          name="description"
          content="Delivering world-class audiovisual and automation experiences from West Africa."
        />
      </Head>
      <body>
        <div className="min-h-screen flex flex-col bg-black">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
