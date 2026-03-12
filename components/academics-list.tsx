"use client"

import { useState } from "react"
import { Mail, ExternalLink, Search } from "lucide-react"
import Link from "next/link"

export default function AcademicsList() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedDept, setSelectedDept] = useState("all")

  // Datos de los académicos
  const academics = [
    {
      id: 1,
      name: "Dr. Luis Pellegrin",
      title: "Profesor Investigador Titular",
      department: "Ciencia de Datos",
      email: "luis.pellegrini@uabc.edu.mx",
      photo: "/placeholder.svg?key=prof1",
      bio: "Especialista en Vision y Lenguaje",
      profiles: {
        googleScholar: "https://scholar.google.com/citations?user=mRWayw0AAAAJ&hl=es&oi=ao",
        researchGate: "https://researchgate.net",
        github: "https://github.com",
        orcid: "https://orcid.org",
      },
    },
    {
      id: 2,
      name: "Dr. Raul Casillas",
      title: "Profesor Titular",
      department: "Ciencia de Datos",
      email: "rcasillas@uabc.edu.mx",
      photo: "/placeholder.svg?key=prof2",
      bio: "Interacción humano computadora",
      profiles: {
        googleScholar: "https://scholar.google.com/citations?user=pUiGvyUAAAAJ&hl=es&oi=ao",
        researchGate: "https://researchgate.net",
        github: "https://github.com",
        linkedin: "https://linkedin.com",
      },
    },
    {
      id: 3,
      name: "Dr. José  I. Paez Ornelas",
      title: "Profesor Investigador Titular",
      department: "Ciencia de Datos",
      email: "jose.paez.ornelas@uabc.edu.mx",
      photo: "/placeholder.svg?key=prof3",
      bio: "Informática de materiales",
      profiles: {
        googleScholar: "https://scholar.google.com/citations?user=XOnxqzYAAAAJ&hl=es",
        github: "https://github.com",
        twitter: "https://twitter.com",
        orcid: "https://orcid.org/0000-0002-3037-5386",
      },
    },
    {
      id: 4,
      name: "Dr. Irvin Hussein López-Nava",
      title: "Profesor Investigador CICESE",
      department: "Ciencias Computacionales",
      email: "irvin.lopez.navas@uabc.edu.mx",
      photo: "/placeholder.svg?key=prof4",
      bio: "Ciencia de Datos y Aprendizaje Automático",
      profiles: {
        googleScholar: "https://scholar.google.com/citations?user=_o-o254AAAAJ&hl=es&oi=sra",
        researchGate: "https://researchgate.net",
        orcid: "https://orcid.org",
        linkedin: "https://linkedin.com",
      },

    },
    {
      id: 5,
      name: "Dra. D. Marcela Muñoz Pizza",
      title: "Profesora Investigadora",
      department: "Análisis de Datos",
      email: "X@uabc.edu.mx",
      photo: "/placeholder.svg?key=prof4",
      bio: "Investigadora en minería de datos y análisis de redes complejas.",
      profiles: {
        googleScholar: "https://scholar.google.com/citations?user=_o-o254AAAAJ&hl=es&oi=sra",
        researchGate: "https://researchgate.net",
        orcid: "https://orcid.org",
        linkedin: "https://linkedin.com",
      },

    },
    {
      id: 6,
      name: "Dr. Julio Duran",
      title: "Profesor de Asignatura",
      department: "Ciencia de Datos",
      email: "julio.duran@uabc.edu.mx",
      photo: "/placeholder.svg?key=prof3",
      bio: "Matemáticas discretas",
      profiles: {
        googleScholar: "https://scholar.google.com/citations?user=XOnxqzYAAAAJ&hl=es",
        github: "https://github.com",
        twitter: "https://twitter.com",
        orcid: "https://orcid.org/0000-0002-3037-5386",
      },
    },
    {
      id: 7,
      name: "Dr. Ariel Camacho ",
      title: "Profesor de Asignatura",
      department: "Matemáticas",
      email: "julio.duran@uabc.edu.mx",
      photo: "/placeholder.svg?key=prof3",
      bio: "Matemáticas discretas",
      profiles: {
        googleScholar: "https://scholar.google.com/citations?user=XOnxqzYAAAAJ&hl=es",
        github: "https://github.com",
        twitter: "https://twitter.com",
        orcid: "https://orcid.org/0000-0002-3037-5386",
      },
    },
  ]

  const departments = ["all", "Análisis de Datos", "Machine Learning", "Ciencia de Datos"]

  const filteredAcademics = academics.filter((academic) => {
    const matchesSearch =
      academic.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      academic.department.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesDept = selectedDept === "all" || academic.department === selectedDept
    return matchesSearch && matchesDept
  })

  return (
    <section className="py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-foreground mb-4">Nuestro Equipo Académico</h1>
          <p className="text-xl text-foreground/70 mb-4">
            Conoce a los investigadores y docentes que lideran la educación en Ciencia de Datos
          </p>
          <div className="h-1 w-20 bg-primary mx-auto"></div>
        </div>

        {/* Search and Filter */}
        <div className="bg-white dark:bg-slate-900 rounded-lg p-6 mb-8 shadow-sm">
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-3 text-foreground/50" size={20} />
              <input
                type="text"
                placeholder="Buscar académicos por nombre o área..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
              />
            </div>

            {/* Department Filter */}
            <select
              value={selectedDept}
              onChange={(e) => setSelectedDept(e.target.value)}
              className="px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
            >
              {departments.map((dept) => (
                <option key={dept} value={dept}>
                  {dept === "all" ? "Todos los departamentos" : dept}
                </option>
              ))}
            </select>
          </div>

          <p className="text-sm text-foreground/60">Se encontraron {filteredAcademics.length} académico(s)</p>
        </div>

        {/* Academics Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredAcademics.length > 0 ? (
            filteredAcademics.map((academic) => (
              <div
                key={academic.id}
                className="bg-white dark:bg-slate-900 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                {/* Photo */}
                <div className="h-64 overflow-hidden bg-muted">
                  <img
                    src={academic.photo || "/placeholder.svg"}
                    alt={academic.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-foreground mb-1">{academic.name}</h3>
                  <p className="text-primary font-semibold text-sm mb-1">{academic.title}</p>
                  <p className="text-sm text-foreground/60 mb-3">{academic.department}</p>

                  {/* Bio */}
                  <p className="text-foreground/70 text-sm leading-relaxed mb-4">{academic.bio}</p>

                  {/* Email */}
                  <div className="flex items-center gap-2 mb-4 pb-4 border-b border-border">
                    <Mail size={18} className="text-primary" />
                    <a href={`mailto:${academic.email}`} className="text-primary hover:underline text-sm break-all">
                      {academic.email}
                    </a>
                  </div>

                  {/* Scientific Profiles */}
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-foreground mb-2">Perfiles Científicos</p>
                    <div className="flex flex-wrap gap-2">
                      {academic.profiles.googleScholar && (
                        <Link
                          href={academic.profiles.googleScholar}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 bg-primary/10 hover:bg-primary/20 text-primary px-3 py-1 rounded text-xs font-medium transition-colors"
                          title="Google Scholar"
                        >
                          Scholar
                          <ExternalLink size={12} />
                        </Link>
                      )}
                      {academic.profiles.researchGate && (
                        <Link
                          href={academic.profiles.researchGate}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 bg-accent/10 hover:bg-accent/20 text-accent px-3 py-1 rounded text-xs font-medium transition-colors"
                          title="ResearchGate"
                        >
                          ResearchGate
                          <ExternalLink size={12} />
                        </Link>
                      )}
                      {academic.profiles.github && (
                        <Link
                          href={academic.profiles.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 bg-foreground/10 hover:bg-foreground/20 text-foreground px-3 py-1 rounded text-xs font-medium transition-colors"
                          title="GitHub"
                        >
                          GitHub
                          <ExternalLink size={12} />
                        </Link>
                      )}
                      {academic.profiles.orcid && (
                        <Link
                          href={academic.profiles.orcid}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 bg-secondary/10 hover:bg-secondary/20 text-secondary px-3 py-1 rounded text-xs font-medium transition-colors"
                          title="ORCID"
                        >
                          ORCID
                          <ExternalLink size={12} />
                        </Link>
                      )}
                      {academic.profiles.linkedin && (
                        <Link
                          href={academic.profiles.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 bg-blue-100 hover:bg-blue-200 text-blue-700 px-3 py-1 rounded text-xs font-medium transition-colors dark:bg-blue-900/30 dark:text-blue-300 dark:hover:bg-blue-900/50"
                          title="LinkedIn"
                        >
                          LinkedIn
                          <ExternalLink size={12} />
                        </Link>
                      )}
                      {academic.profiles.twitter && (
                        <Link
                          href={academic.profiles.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 bg-sky-100 hover:bg-sky-200 text-sky-700 px-3 py-1 rounded text-xs font-medium transition-colors dark:bg-sky-900/30 dark:text-sky-300 dark:hover:bg-sky-900/50"
                          title="Twitter"
                        >
                          Twitter
                          <ExternalLink size={12} />
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-foreground/70 text-lg">No se encontraron académicos con los criterios de búsqueda.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
