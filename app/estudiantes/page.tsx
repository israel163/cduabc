import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import StudentsSection from "@/components/students-section"

export const metadata = {
  title: "Estudiantes - Ciencia de Datos",
  description: "Información para estudiantes de la carrera de Licenciatura en Ciencia de Datos",
}

export default function EstudiantesPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-16">
        <StudentsSection />
      </main>
      <Footer />
    </>
  )
}
