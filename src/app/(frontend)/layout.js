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
     

<title>AV Consulting, AV Design & AV Distribution Company in Nigeria | CED Africa</title>

<meta charset="utf-8" />

<meta
  name="description"
  content="CED Africa is a leading AV consulting, AV design, and audiovisual distribution company in Nigeria, delivering design-led, vendor-neutral solutions for architects, developers, and enterprises."
/>

<meta
  name="keywords"
  content="AV consulting Nigeria, AV design Nigeria, audiovisual distribution Nigeria, AV company Nigeria, AV consultants Lagos, smart building AV Nigeria, commercial AV solutions Nigeria, audiovisual design Africa"
/>

<meta name="robots" content="index, follow" />
<meta name="googlebot" content="index, follow" />

<link rel="canonical" href="https://www.ced.africa/" />

<meta name="viewport" content="width=device-width, initial-scale=1" />



<meta property="og:type" content="website" />
<meta property="og:site_name" content="CED Africa" />
<meta property="og:locale" content="en_NG" />

<meta
  property="og:title"
  content="AV Consulting, AV Design & AV Distribution Company in Nigeria | CED Africa"
/>

<meta
  property="og:description"
  content="Design-led audiovisual consulting, AV system design, and premium AV distribution for architects, developers, and enterprises across Nigeria."
/>

<meta property="og:url" content="https://www.ced.africa/" />

<meta
  property="og:image"
  content="https://www.ced.africa/services/2"
/>

<meta property="og:image:alt" content="Audiovisual consulting, AV design, and distribution by CED Africa" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />



<meta name="twitter:card" content="summary_large_image" />

<meta
  name="twitter:title"
  content="AV Consulting, AV Design & AV Distribution Company in Nigeria | CED Africa"
/>

<meta
  name="twitter:description"
  content="CED Africa delivers consulting-led AV design and premium audiovisual distribution services for modern buildings across Nigeria."
/>

<meta
  name="twitter:image"
  content="https://www.ced.africa/services/2"
/>



<meta name="author" content="CED Africa" />
<meta name="publisher" content="CED Africa" />
<meta name="copyright" content="CED Africa" />

<meta name="language" content="en" />
<meta name="distribution" content="global" />
<meta name="rating" content="general" />

<meta name="theme-color" content="#000000" />
<meta name="application-name" content="CED Africa" />
<meta name="apple-mobile-web-app-title" content="CED Africa" />

      </Head>
      <body suppressHydrationWarning={true}>

        <div className="min-h-screen flex flex-col bg-black">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
