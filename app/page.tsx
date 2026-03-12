import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import ProgramInfo from "@/components/program-info"
import AboutProgram from "@/components/ui/AboutProgram"
import StudyPlan from "@/components/ui/StudyPlan"
import Features from "@/components/features"
import Map from "@/components/map"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <ProgramInfo />
      <AboutProgram />
      <StudyPlan />
      <Features />
      <Map />
      <Footer />
    </main>
  )
}
