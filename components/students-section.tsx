import { BookOpen, Users, Award, Code, Briefcase, GraduationCap, Target } from "lucide-react"
import Link from "next/link"

export default function StudentsSection() {
  const programs = [
    {
      icon: BookOpen,
      title: "Plan de Estudios",
      description:
        "Conoce la estructura de nuestro programa de 4 años con enfoque en análisis de datos y machine learning.",
      link: "/plan-de-estudios",
    },
    {
      icon: Code,
      title: "Laboratorios",
      description: "Acceso a laboratorios equipados con computadoras de alto rendimiento y software especializado.",
      link: "#",
    },
    {
      icon: Briefcase,
      title: "Prácticas Profesionales",
      description: "Oportunidades de internados en empresas líderes durante tus estudios.",
      link: "#",
    },
    {
      icon: Users,
      title: "Comunidad Estudiantil",
      description: "Únete a clubes de ciencia de datos, grupos de estudio y comunidades profesionales.",
      link: "#",
    },
  ]

  const resources = [
    {
      title: "Plataforma de Aprendizaje",
      description: "Acceso a cursos en línea, videos tutoriales y materiales de estudio.",
    },
    {
      title: "Biblioteca Digital",
      description: "Acceso a libros, artículos científicos y recursos de investigación.",
    },
    {
      title: "Asesorías Académicas",
      description: "Sesiones de tutoría personalizada con docentes especializados.",
    },
    {
      title: "Servicios de Apoyo",
      description: "Orientación vocacional, asesorías de carrera y apoyo psicosocial.",
    },
  ]

  const requirements = [
    "Bachillerato completado o equivalente",
    "Aptitud en matemáticas y ciencias",
    "Examen de admisión universitario",
    "Entrevista con la comisión de admisiones",
  ]

  return (
    <section className="bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary to-accent py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-primary-foreground mb-4 text-balance">Página de Estudiantes</h1>
          <p className="text-xl text-primary-foreground/90 text-balance">
            Todo lo que necesitas saber para triunfar en la Licenciatura en Ciencia de Datos
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Main Programs */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Programas y Oportunidades</h2>
            <div className="h-1 w-20 bg-primary mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programs.map((program, index) => {
              const Icon = program.icon
              return (
                <Link
                  key={index}
                  href={program.link}
                  className="group bg-card rounded-lg p-6 shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
                >
                  <div className="flex items-center justify-center w-12 h-12 bg-primary/10 group-hover:bg-primary/20 rounded-lg mb-4 transition-colors">
                    <Icon className="text-primary group-hover:scale-110 transition-transform" size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{program.title}</h3>
                  <p className="text-sm text-foreground/70 leading-relaxed">{program.description}</p>
                </Link>
              )
            })}
          </div>
        </div>

        {/* Requisitos de Admisión */}
        <div className="mb-20">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                <GraduationCap className="text-primary" />
                Requisitos de Admisión
              </h2>
              <ul className="space-y-4">
                {requirements.map((req, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                    </div>
                    <span className="text-foreground/80 text-sm leading-relaxed">{req}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="https://admisiones.uabc.mx/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-8 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
              >
                Solicitar Admisión
              </Link>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                <Target className="text-accent" />
                Perfil del Estudiante
              </h2>
              <div className="bg-card rounded-lg p-6 border border-border">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-lg text-accent">✓</span>
                    <span className="text-foreground/80 text-sm">
                      Pasión por la resolución de problemas mediante datos
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-lg text-accent">✓</span>
                    <span className="text-foreground/80 text-sm">
                      Habilidades en matemáticas y pensamiento analítico
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-lg text-accent">✓</span>
                    <span className="text-foreground/80 text-sm">Interés en programación y tecnología</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-lg text-accent">✓</span>
                    <span className="text-foreground/80 text-sm">Capacidad de trabajo en equipo y comunicación</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-lg text-accent">✓</span>
                    <span className="text-foreground/80 text-sm">
                      Curiosidad intelectual y disposición para aprender
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Recursos Disponibles */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4 flex items-center justify-center gap-3">
              <Award className="text-primary" />
              Recursos Disponibles
            </h2>
            <div className="h-1 w-20 bg-primary mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {resources.map((resource, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-primary/5 to-accent/5 border border-border rounded-lg p-6 hover:border-primary/50 transition-colors"
              >
                <h3 className="text-xl font-bold text-foreground mb-2 flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-primary"></div>
                  {resource.title}
                </h3>
                <p className="text-foreground/70 text-sm leading-relaxed">{resource.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-8 text-center border border-border">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            ¿Listo para iniciar tu carrera en Ciencia de Datos?
          </h2>
          <p className="text-foreground/70 text-lg mb-6">Contáctanos para conocer más detalles sobre el programa</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="mailto:cienciadatos@universidad.edu"
              className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
            >
              Enviar Correo
            </Link>
            <Link
              href="#"
              className="px-8 py-3 border-2 border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors font-medium"
            >
              Agendar Cita
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
