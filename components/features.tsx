import { BarChart3, Users, BookOpen, Lightbulb } from "lucide-react"

export default function Features() {
  const features = [
    {
      icon: BarChart3,
      title: "Análisis de Datos",
      description: "Aprende a extraer insights de grandes volúmenes de datos con herramientas modernas.",
    },
    {
      icon: Lightbulb,
      title: "Machine Learning",
      description: "Desarrolla modelos de inteligencia artificial para resolver problemas complejos.",
    },
    {
      icon: Users,
      title: "Investigación",
      description: "Participa en proyectos de investigación de vanguardia con nuestro equipo de académicos.",
    },
    {
      icon: BookOpen,
      title: "Recursos Educativos",
      description: "Acceso a libros, artículos y herramientas esenciales para tu desarrollo profesional.",
    },
  ]

  return (
    <section className="py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Lo que Ofrecemos</h2>
          <div className="h-1 w-20 bg-primary mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="bg-white dark:bg-slate-900 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
                  <Icon className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{feature.title}</h3>
                <p className="text-foreground/70 text-sm leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
