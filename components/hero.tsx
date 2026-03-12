"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const basePath = process.env.NODE_ENV === "production" ? "/cduabc" : ""

const withBasePath = (path: string) => `${basePath}${path}`

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      title: "Facultad de Ciencias",
      subtitle: "Ensenada Baja California",
      image: withBasePath("/20170313_100529-1-scaled.jpg"),
      color: "from-blue-100 to-yellow-900",
    },
    {
      title: "Facultad de Ciencias",
      subtitle: "Ensenada Baja California",
      image: withBasePath("/20170313_100529-1-scaled.jpg"),
      color: "from-blue-100 to-yellow-900",
    },
    {
      title: "Facultad de Ciencias",
      subtitle: "Ensenada Baja California",
      image: withBasePath("/20170313_100529-1-scaled.jpg"),
      color: "from-blue-100 to-yellow-900",
    },
    // {
    //   title: "Licenciatura en Ciencia de Datos",
    //   subtitle: "Forma parte de la próxima generación de científicos de datos",
    //   image: withBasePath("/data-science-students-working.jpg"),
    //   color: "from-blue-600 to-blue-900",
    // },
    // {
    //   title: "Investigación de Vanguardia",
    //   subtitle: "Colabora con nuestros investigadores en proyectos innovadores",
    //   image: withBasePath("/research-laboratory.png"),
    //   color: "from-indigo-600 to-indigo-900",
    // },
    // {
    //   title: "Oportunidades Profesionales",
    //   subtitle: "Acceso a internados y oportunidades en la industria",
    //   image: withBasePath("/students-networking.jpg"),
    //   color: "from-purple-600 to-purple-900",
    // },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [slides.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <section className="relative h-[600px] overflow-hidden mt-16">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
        >
          <img
            src={slide.image || withBasePath("/placeholder.svg")}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className={`absolute inset-0 bg-gradient-to-r ${slide.color} opacity-50`} />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 text-balance">
              {slide.title}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl text-balance">
              {slide.subtitle}
            </p>
          </div>
        </div>
      ))}

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/40 text-white p-2 rounded-lg transition-all"
        aria-label="Slide anterior"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/40 text-white p-2 rounded-lg transition-all"
        aria-label="Slide siguiente"
      >
        <ChevronRight size={24} />
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all ${index === currentSlide ? "bg-white w-8" : "bg-white/50 w-2 hover:bg-white/70"
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}