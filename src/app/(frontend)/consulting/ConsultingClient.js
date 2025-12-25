export async function generateMetadata() {
  return {
    title:
      'AV Consulting Company in Nigeria | Audiovisual Design & Strategy | CED Africa',

    description:
      'CED Africa provides professional AV consulting and audiovisual design services in Nigeria, helping architects, developers, and enterprises design performance-led, fully coordinated AV systems.',

    keywords: [
      'AV consulting Nigeria',
      'audiovisual consulting Nigeria',
      'AV design Nigeria',
      'AV consultants Lagos',
      'audiovisual design company Nigeria',
      'AV strategy for architects',
      'commercial AV consulting Nigeria',
      'smart building AV Nigeria',
      'enterprise AV design Nigeria',
    ],

    alternates: {
      canonical: 'https://www.ced.africa/consulting',
    },

    openGraph: {
      type: 'website',
      locale: 'en_NG',
      url: 'https://www.ced.africa/consulting',
      siteName: 'CED Africa',
      title:
        'AV Consulting in Nigeria | Audiovisual Design & Engineering | CED Africa',
      description:
        'Independent AV consulting and audiovisual design for high-end residential, hospitality, enterprise, and large-scale projects across Nigeria.',
      images: [
        {
          url: 'https://www.ced.africa/services/2',
          width: 1200,
          height: 630,
          alt: 'AV consulting and audiovisual design by CED Africa',
        },
      ],
    },

    twitter: {
      card: 'summary_large_image',
      title:
        'AV Consulting Company in Nigeria | CED Africa',
      description:
        'CED Africa delivers independent AV consulting and audiovisual design services for architects and developers in Nigeria.',
      images: ['https://www.ced.africa/services/2'],
    },

    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
      },
    },
  }
}
