import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import EventsList from "@/components/events-list"

export const metadata = {
  title: "Eventos - Ciencia de Datos",
  description: "Descubre los eventos, seminarios y conferencias de la carrera de Ciencia de Datos",
}

export default function EventosPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-16">
        <EventsList />
      </main>
      <Footer />
    </>
  )
}
