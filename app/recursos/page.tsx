import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ResourcesSection from "@/components/resources-section"

export const metadata = {
  title: "Recursos - Ciencia de Datos",
  description:
    "Acceso a recursos educativos, libros, herramientas y materiales de estudio para la carrera de Ciencia de Datos",
}

export default function RecursosPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-16">
        <ResourcesSection />
      </main>
      <Footer />
    </>
  )
}
