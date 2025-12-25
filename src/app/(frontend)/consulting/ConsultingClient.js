// src/app/(frontend)/consulting/page.js

import ConsultingClient from "./ConsultingClient"

export const dynamic = "force-dynamic"
export const revalidate = 0
export const fetchCache = "force-no-store"

export async function generateMetadata() {
  return {
    title:
      "AV Consulting Company in Nigeria | Audiovisual Design & Strategy | CED Africa",
    description:
      "CED Africa is a leading AV consulting company in Nigeria delivering audiovisual design, acoustic consulting, and AV strategy for luxury homes, commercial spaces, and large venues.",
    keywords: [
      "AV consulting Nigeria",
      "audiovisual consulting Lagos",
      "AV design Nigeria",
      "acoustic consulting Nigeria",
      "commercial AV systems Nigeria",
      "AV consultants in Lagos",
      "AV design for architects Nigeria",
    ],
    alternates: {
      canonical: "https://www.ced.africa/consulting",
    },
    openGraph: {
      title: "AV Consulting & AV Design in Nigeria | CED Africa",
      description:
        "Consulting-led AV design for luxury residential, hospitality, corporate, and large-scale projects across Nigeria and West Africa.",
      url: "https://www.ced.africa/consulting",
      siteName: "CED Africa",
      images: [
        {
          url: "https://www.ced.africa/consult.webp",
          width: 1200,
          height: 630,
          alt: "AV Consulting in Nigeria",
        },
      ],
      type: "website",
    },
  }
}

export default function ConsultingPage() {
  return <ConsultingClient />
}
