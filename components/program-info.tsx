const basePath = process.env.NODE_ENV === "production" ? "/cduabc" : ""

const withBasePath = (path: string) => `${basePath}${path}`

export default function ProgramInfo() {
  return (
    <section className="py-20 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Sobre Nuestra Carrera</h2>
          <div className="h-1 w-20 bg-primary mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="/cduabc/inicioa.jpg"
              alt="Estudiantes2026"
              className="rounded-lg shadow-lg"
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
            {/* <p className="text-lg text-foreground/80 leading-relaxed">
              Durante tu formación, aprenderás a identificar patrones, construir modelos
              predictivos y descriptivos, evaluar fenómenos complejos y diseñar soluciones
              basadas en datos con ética, creatividad y profesionalismo. El programa
              promueve un enfoque multi e interdisciplinario, preparando a los estudiantes
              para enfrentar los retos actuales de la ciencia, la industria y la sociedad.
            </p> */}

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