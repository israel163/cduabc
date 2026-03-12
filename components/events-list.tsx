"use client"

import { useState } from "react"
import { Calendar, MapPin, Users, Clock, ArrowRight, Filter } from "lucide-react"
import Link from "next/link"

const basePath = process.env.NODE_ENV === "production" ? "/cduabc" : ""

const withBasePath = (path: string) => `${basePath}${path}`

export default function EventsList() {
  const [selectedCategory, setSelectedCategory] = useState("all")

  const events = [
    {
      id: 1,
      title: "Seminario: Tendencias en Machine Learning",
      description: "Aprende sobre las últimas tendencias en aprendizaje automático con expertos del área.",
      date: "2025-01-15",
      time: "10:00 AM",
      location: "Aula Magna - Facultad de Ciencias",
      speaker: "Dr. Carlos Mendez",
      category: "seminario",
      capacity: 150,
      image: withBasePath("/placeholder.svg?key=event1"),
    },
    {
      id: 2,
      title: "Taller: Análisis Exploratorio con Python",
      description: "Taller práctico sobre técnicas de análisis exploratorio usando Python y librerías modernas.",
      date: "2025-01-22",
      time: "2:00 PM",
      location: "Laboratorio de Computación L-2",
      speaker: "Ing. Juan Carlos López",
      category: "taller",
      capacity: 50,
      image: withBasePath("/placeholder.svg?key=event2"),
    },
    {
      id: 3,
      title: "Conferencia: Big Data en la Industria",
      description: "Profesionales de empresas líderes compartirán sus experiencias con big data y aplicaciones reales.",
      date: "2025-01-29",
      time: "11:00 AM",
      location: "Auditorio Principal",
      speaker: "Equipo de Especialistas",
      category: "conferencia",
      capacity: 300,
      image: withBasePath("/placeholder.svg?key=event3"),
    },
    {
      id: 4,
      title: "Mesa Redonda: Ciencia de Datos en Startups",
      description: "Conversatorio con emprendedores sobre la aplicación de ciencia de datos en empresas emergentes.",
      date: "2025-02-05",
      time: "3:00 PM",
      location: "Sala de Conferencias B",
      speaker: "Emprendedores del Sector",
      category: "mesa-redonda",
      capacity: 100,
      image: withBasePath("/placeholder.svg?key=event4"),
    },
    {
      id: 5,
      title: "Workshop: Visualización de Datos Avanzada",
      description: "Aprende técnicas avanzadas de visualización con Tableau, Power BI y herramientas especializadas.",
      date: "2025-02-12",
      time: "9:00 AM",
      location: "Laboratorio de Computación L-1",
      speaker: "Dra. Sofia Rodriguez",
      category: "taller",
      capacity: 60,
      image: withBasePath("/placeholder.svg?key=event5"),
    },
    {
      id: 6,
      title: "Foro de Carreras y Oportunidades Profesionales",
      description: "Conecta con empresas que buscan talento en ciencia de datos y explora oportunidades laborales.",
      date: "2025-02-19",
      time: "1:00 PM",
      location: "Centro de Convenciones",
      speaker: "Equipo de Recursos Humanos",
      category: "networking",
      capacity: 200,
      image: withBasePath("/placeholder.svg?key=event6"),
    },
  ]

  const categories = [
    { value: "all", label: "Todos" },
    { value: "seminario", label: "Seminarios" },
    { value: "taller", label: "Talleres" },
    { value: "conferencia", label: "Conferencias" },
    { value: "mesa-redonda", label: "Mesas Redondas" },
    { value: "networking", label: "Networking" },
  ]

  const filteredEvents =
    selectedCategory === "all" ? events : events.filter((event) => event.category === selectedCategory)

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("es-MX", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  return (
    <section className="py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-foreground mb-4">Eventos y Actividades</h1>
          <p className="text-xl text-foreground/70 mb-4">
            Seminarios, talleres y conferencias para ampliar tu conocimiento en ciencia de datos
          </p>
          <div className="h-1 w-20 bg-primary mx-auto"></div>
        </div>

        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {categories.map((category) => (
            <button
              key={category.value}
              onClick={() => setSelectedCategory(category.value)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${selectedCategory === category.value
                  ? "bg-primary text-primary-foreground"
                  : "bg-white dark:bg-slate-900 text-foreground border border-border hover:border-primary"
                }`}
            >
              <div className="flex items-center gap-2">
                <Filter size={14} />
                {category.label}
              </div>
            </button>
          ))}
        </div>

        <div className="space-y-6">
          {filteredEvents.length > 0 ? (
            filteredEvents.map((event) => (
              <div
                key={event.id}
                className="bg-white dark:bg-slate-900 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow flex flex-col md:flex-row"
              >
                <div className="md:w-64 h-64 md:h-auto overflow-hidden flex-shrink-0">
                  <img
                    src={event.image || withBasePath("/placeholder.svg")}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex-1 p-6 flex flex-col justify-between">
                  <div>
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full mb-3">
                      {categories.find((c) => c.value === event.category)?.label}
                    </span>

                    <h3 className="text-2xl font-bold text-foreground mb-2">{event.title}</h3>
                    <p className="text-foreground/70 mb-4 leading-relaxed">{event.description}</p>

                    <div className="grid md:grid-cols-2 gap-3 mb-4">
                      <div className="flex items-center gap-2 text-foreground/70 text-sm">
                        <Calendar size={18} className="text-primary" />
                        <span>{formatDate(event.date)}</span>
                      </div>
                      <div className="flex items-center gap-2 text-foreground/70 text-sm">
                        <Clock size={18} className="text-primary" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2 text-foreground/70 text-sm">
                        <MapPin size={18} className="text-primary" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-foreground/70 text-sm">
                        <Users size={18} className="text-primary" />
                        <span>Capacidad: {event.capacity} personas</span>
                      </div>
                    </div>

                    <div className="text-sm text-foreground/60">
                      <strong>Conferencista:</strong> {event.speaker}
                    </div>
                  </div>

                  <div className="flex gap-3 mt-6 pt-6 border-t border-border">
                    <Link
                      href="#"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium text-sm"
                    >
                      Registrarse
                      <ArrowRight size={16} />
                    </Link>
                    <Link
                      href="#"
                      className="inline-flex items-center gap-2 px-4 py-2 border border-border text-foreground rounded-lg hover:bg-muted transition-colors font-medium text-sm"
                    >
                      Más Detalles
                    </Link>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-12 bg-white dark:bg-slate-900 rounded-lg">
              <p className="text-foreground/70 text-lg">No hay eventos en esta categoría en este momento.</p>
            </div>
          )}
        </div>

        <div className="mt-16 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-8 text-center border border-border">
          <h2 className="text-2xl font-bold text-foreground mb-2">Mantente Informado</h2>
          <p className="text-foreground/70 mb-6">
            Suscríbete a nuestro boletín para recibir notificaciones de próximos eventos
          </p>
          <form className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Tu correo electrónico"
              className="flex-1 px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
              required
            />
            <button
              type="submit"
              className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
            >
              Suscribirse
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}