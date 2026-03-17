const basePath = process.env.NODE_ENV === "production" ? "/cduabc" : ""

const withBasePath = (path: string) => `${basePath}${path}`

export default function ProgramInfo() {
  return (
    <section className="py-20 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="mb-8 rounded-2xl border border-green-200 bg-green-50 dark:border-green-900/40 dark:bg-green-900/10 p-5 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-green-700 dark:text-green-400">
                Promoción especial
              </p>
              <h3 className="text-xl md:text-2xl font-bold text-foreground mt-1">
                Inscríbete y participa para ganar 1 mes de Spotify Premium
              </h3>
              <p className="text-foreground/75 mt-2">
                Registra tus datos en nuestro formulario y entra al sorteo.
              </p>
            </div>

            <a
              href="https://forms.gle/DxZ1xFEqkgZHRutt7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg bg-green-600 px-5 py-3 text-white font-medium hover:bg-green-700 transition-colors"
            >
              Ir al formulario
            </a>
          </div>
        </div>

        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Sobre Nuestra Carrera</h2>
          <div className="h-1 w-20 bg-primary mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-2xl overflow-hidden shadow-xl group">
            <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-300 z-10"></div>
            <img
              src={withBasePath("/inicioa.jpg")}
              alt="Estudiantes2026"
              className="w-full h-100 object-cover transform group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          <div className="space-y-6">
            <p className="text-lg text-foreground/80 leading-relaxed">
              El programa de Licenciatura en Ciencia de Datos, tiene
              la misión de formar profesionales de excelencia en esta
              área de estudio, con un alto nivel competitivo y sólida
              formación en los fundamentos teóricos y metodológicos de la disciplina.
              Capaces de interactuar en un campo de estudio multi e interdisciplinario,
              encargados de manipular y procesar datos, a través de modelos
              predictivos y descriptivos, donde identificarán y extraerán patrones
              que permitan inferir relaciones entre ellos. Lo anterior, con el fin
              de proponer soluciones ya sea de negocios, fenómenos naturales
              o sociales, así como detectar tendencias útiles en diferentes
              procesos de las organizaciones, garantizando la integridad de los
              datos con ética y profesionalismo, acorde a los retos del
              desarrollo sostenible.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="bg-primary/10 p-4 rounded-lg">
                <div className="text-3xl font-bold text-primary">4</div>
                <div className="text-sm text-foreground/60">Años de duración</div>
              </div>
              <div className="bg-secondary/10 p-4 rounded-lg">
                <div className="text-3xl font-bold text-secondary">10+</div>
                <div className="text-sm text-foreground/60">Docentes especializados</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}