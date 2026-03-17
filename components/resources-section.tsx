"use client"

import { useState } from "react"
import { BookOpen, Code, Database, Brain, BarChart3, Layers, Download, ExternalLink, Search } from "lucide-react"
import Link from "next/link"

export default function ResourcesSection() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const resources = [
    {
      id: 1,
      title: "Introduction to Statistical Learning",
      type: "Libro",
      category: "libros",
      authors: "James, Witten, Hastie, Tibshirani",
      description: "Libro fundamental sobre machine learning e introducción a la estadística con aplicaciones en R.",
      link: "https://www.amazon.com.mx/Introduction-Statistical-Learning-Applications/dp/1461471370",
      icon: BookOpen,
    },
    {
      id: 2,
      title: "Python para Análisis de Datos",
      type: "Libro",
      category: "libros",
      authors: "Wes McKinney",
      description: "Guía completa sobre manipulación, limpieza y análisis de datos con Python.",
      link: "https://www.amazon.com.mx/Python-para-an%C3%A1lisis-datos-McKinney/dp/8441546835",
      icon: BookOpen,
    },
    {
      id: 3,
      title: "Deep Learning Specialization",
      type: "Curso Online",
      category: "cursos",
      authors: "Andrew Ng - Coursera",
      description: "Especialización en profundidad sobre redes neuronales y aprendizaje profundo.",
      link: "https://www.coursera.org/specializations/deep-learning?utm_medium=sem&utm_source=gg&utm_campaign=b2c_latam_deep-learning_deeplearning-ai_ftcof_specializations_cx_dr_bau_gg_sem_pr_mx_es_m_hyb_26-03_x&campaignid=23652248767&adgroupid=199841759971&device=c&keyword=coursera%20deep%20learning%20andrew%20ng&matchtype=p&network=g&devicemodel=&creativeid=799957543138&assetgroupid=&targetid=kwd-1662013125043&extensionid=&placement=&gad_source=1&gad_campaignid=23652248767&gbraid=0AAAAADdKX6Z-B73te7vzH1ExNH8ghiISU&gclid=Cj0KCQjw9-PNBhDfARIsABHN6-0qI_mPDG4QN_N5ty91alns0gx98OefWH4NqDu_-HE_wYCM5JcY7rMaAm43EALw_wcB",
      icon: Brain,
    },
    {
      id: 4,
      title: "SQL para Ciencia de Datos",
      type: "Curso Online",
      category: "cursos",
      authors: "Don Noxon - Coursera",
      description: "Guía práctica sobre consultas SQL optimizadas para análisis de datos.",
      link: "https://www.coursera.org/specializations/learn-sql-basics-data-science?utm_medium=sem&utm_source=gg&utm_campaign=b2c_latam_learn-sql-basics-data-science_ucdavis_ftcof_specializations_cx_dr_bau_gg_sem_pr_mx_es_m_hyb_26-03_x&campaignid=23648412614&adgroupid=194248954236&device=c&keyword=sql&matchtype=p&network=g&devicemodel=&creativeid=799996517683&assetgroupid=&targetid=kwd-31722291&extensionid=&placement=&gad_source=1&gad_campaignid=23648412614&gbraid=0AAAAADdKX6YbpdUv8709gqGtOOYrUGOs5&gclid=Cj0KCQjw9-PNBhDfARIsABHN6-0U3BeErLjWgWFp2aEImviIyIQB7Zm9KYnhpYXG8xzcngQddGCJVd8aAgVlEALw_wcB",
      icon: Database,
    },
    {
      id: 5,
      title: "Pandas Documentation",
      type: "Documentación",
      category: "herramientas",
      authors: "Comunidad Pandas",
      description: "Referencia oficial de la librería Pandas para manipulación de datos en Python.",
      link: "https://pandas.pydata.org/",
      icon: Code,
    },
    {
      id: 6,
      title: "Scikit-learn Guide",
      type: "Documentación",
      category: "herramientas",
      authors: "Comunidad Scikit-learn",
      description: "Guía completa de la librería Scikit-learn para machine learning en Python.",
      link: "https://scikit-learn.org/stable/",
      icon: Code,
    },
    {
      id: 7,
      title: "Visualización de Datos con Matplotlib",
      type: "Tutorial",
      category: "tutoriales",
      authors: "Carlos Alarcón",
      description: "Técnicas de visualización avanzadas usando Matplotlib, Seaborn y Plotly.",
      link: "https://deepnote.com/app/a_mas/Curso-de-Visualizacion-de-Datos-con-Matplotlib-y-Seaborn-a5cbcd22-59a5-4f17-af14-92866ad80a76",
      icon: BarChart3,
    },
    {
      id: 8,
      title: "Regression Modeling Strategies",
      type: "Libro",
      category: "libros",
      authors: "Frank E. Harrell Jr.",
      description: "Estrategias avanzadas de modelado de regresión con aplicaciones prácticas.",
      link: "https://www.amazon.com/Regression-Modeling-Strategies-Applications-Statistics/dp/331933039X",
      icon: BookOpen,
    },
    {
      id: 9,
      title: "TensorFlow Tutorials",
      type: "Documentación",
      category: "herramientas",
      authors: "Google - TensorFlow",
      description: "Tutoriales oficiales de TensorFlow para deep learning y IA.",
      link: "https://www.tensorflow.org/?hl=es-419",
      icon: Layers,
    },
    {
      id: 10,
      title: "Kaggle Competitions",
      type: "Plataforma",
      category: "practica",
      authors: "Kaggle Community",
      description: "Competiciones de ciencia de datos para practicar y mejorar tus habilidades.",
      link: "https://www.kaggle.com/competitions",
      icon: BarChart3,
    },
    {
      id: 11,
      title: "Estadística Bayesiana en la Práctica",
      type: "Curso Online",
      category: "cursos",
      authors: "Equipo de Enseñanza",
      description: "Curso sobre métodos bayesianos con aplicaciones a problemas reales.",
      link: "https://www.quantstart.com/articles/Bayesian-Statistics-A-Beginners-Guide/",
      icon: Brain,
    },
    {
      id: 12,
      title: "The Art of Feature Engineering: Essentials for Machine Learning",
      type: "Libro",
      category: "libros",
      authors: "Pablo Duboue",
      description: "Guía práctica sobre ingeniería de características para mejorar modelos.",
      link: "https://www.amazon.com/Art-Feature-Engineering-Essentials-Learning/dp/1108709389",
      icon: BookOpen,
    },
  ]

  const categories = [
    { value: "all", label: "Todos los Recursos" },
    { value: "libros", label: "Libros" },
    { value: "cursos", label: "Cursos Online" },
    { value: "tutoriales", label: "Tutoriales" },
    { value: "herramientas", label: "Herramientas" },
    { value: "practica", label: "Práctica" },
  ]

  const filteredResources = resources.filter((resource) => {
    const matchesSearch =
      resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "all" || resource.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-foreground mb-4">Centro de Recursos</h1>
          <p className="text-xl text-foreground/70 mb-4">
            Acceso a libros, cursos, herramientas y tutoriales para tu desarrollo académico
          </p>
          <div className="h-1 w-20 bg-primary mx-auto"></div>
        </div>

        {/* Search Bar */}
        <div className="bg-card rounded-lg p-4 shadow-sm mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-3 text-foreground/50" size={20} />
            <input
              type="text"
              placeholder="Buscar recursos por título o contenido..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
            />
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category.value}
              onClick={() => setSelectedCategory(category.value)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${selectedCategory === category.value
                ? "bg-primary text-primary-foreground"
                : "bg-card border border-border text-foreground hover:border-primary"
                }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Results Info */}
        <p className="text-sm text-foreground/60 mb-6">{filteredResources.length} recurso(s) encontrado(s)</p>

        {/* Resources Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResources.length > 0 ? (
            filteredResources.map((resource) => {
              const Icon = resource.icon
              return (
                <div
                  key={resource.id}
                  className="bg-card rounded-lg p-6 shadow-sm hover:shadow-md transition-all border border-border hover:border-primary/50 flex flex-col"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon className="text-primary" size={24} />
                    </div>
                    <span className="text-xs font-semibold bg-accent/10 text-accent px-2 py-1 rounded">
                      {resource.type}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-foreground mb-2 flex-grow">{resource.title}</h3>

                  <p className="text-sm text-foreground/70 mb-2">
                    <strong>Por:</strong> {resource.authors}
                  </p>

                  <p className="text-sm text-foreground/70 mb-4 flex-grow">{resource.description}</p>

                  <div className="flex gap-2 pt-4 border-t border-border">
                    <Link
                      href={resource.link}
                      className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-sm font-medium"
                    >
                      <Download size={16} />
                      Acceder
                    </Link>
                    <Link
                      href={resource.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center p-2 border border-border text-foreground hover:bg-muted rounded-lg transition-colors"
                      title="Abrir en nueva ventana"
                    >
                      <ExternalLink size={16} />
                    </Link>
                  </div>
                </div>
              )
            })
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-foreground/70 text-lg">No se encontraron recursos con los criterios de búsqueda.</p>
            </div>
          )}
        </div>

        {/* Additional Resources Section */}
        <div className="mt-20 grid md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg p-8 border border-border">
            <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
              <BookOpen className="text-primary" />
              Biblioteca Digital
            </h3>
            <p className="text-foreground/70 text-sm leading-relaxed mb-4">
              Acceso a miles de libros, artículos científicos y revistas especializadas en ciencia de datos.
            </p>
            <Link href="https://bibliotecas.uabc.mx/" className="text-primary hover:underline font-medium text-sm">
              Visitar Biblioteca →
            </Link>
          </div>

          <div className="bg-gradient-to-br from-secondary/10 to-accent/10 rounded-lg p-8 border border-border">
            <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
              <Code className="text-secondary" />
              Repositorio de Código
            </h3>
            <p className="text-foreground/70 text-sm leading-relaxed mb-4">
              Colección de ejemplos, notebooks y proyectos de estudiantes y docentes.
            </p>
            <Link href="#" className="text-secondary hover:underline font-medium text-sm">
              Ver Repositorio →
            </Link>
          </div>

          <div className="bg-gradient-to-br from-accent/10 to-primary/10 rounded-lg p-8 border border-border">
            <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
              <Brain className="text-accent" />
              Plataforma de Aprendizaje
            </h3>
            <p className="text-foreground/70 text-sm leading-relaxed mb-4">
              LMS con cursos interactivos, videoconferencias y evaluaciones en línea.
            </p>
            <Link href="#" className="text-accent hover:underline font-medium text-sm">
              Acceder Plataforma →
            </Link>
          </div>
        </div>

        {/* Support Section */}
        <div className="mt-16 bg-muted/50 rounded-lg p-8 border border-border">
          <h2 className="text-2xl font-bold text-foreground mb-4">¿Necesitas Ayuda?</h2>
          <p className="text-foreground/70 mb-6">
            Si tienes dudas sobre cómo usar algún recurso o necesitas asistencia, no dudes en contactarnos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="mailto:lcd.fc@uabc.edu.mx"
              className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
            >
              Enviar Mensaje
            </Link>
            <Link
              href="#"
              className="px-6 py-3 border-2 border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors font-medium"
            >
              Agendar Consulta
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
