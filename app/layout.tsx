import type { Metadata } from "next"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import WhatsAppFloat from "@/components/whatsapp-float"

export const metadata: Metadata = {
  title: "Villamayor & Asociados | Estudio Jurídico — Derecho Civil y Comercial",
  description: "Estudio jurídico en Paraguay especializado en derecho civil, comercial, corporativo, inmobiliario, laboral y de familia. Asesoría legal integral en Asunción.",
  keywords: "abogados Paraguay, estudio jurídico Asunción, derecho civil Paraguay, derecho comercial, abogado corporativo, contratos Paraguay, divorcio, inversiones Paraguay",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  )
}
