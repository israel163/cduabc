import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import AcademicsList from "@/components/academics-list"

export const metadata = {
  title: "Académicos e Investigadores - Ciencia de Datos",
  description: "Conoce a nuestro equipo de académicos e investigadores especializados en ciencia de datos",
}

export default function AcademicosPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-16">
        <AcademicsList />
      </main>
      <Footer />
    </>
  )
}
