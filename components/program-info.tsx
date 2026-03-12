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
            <img src="/diverse-students-classroom.png" alt="Aula de clase" className="rounded-lg shadow-lg" />
          </div>

          <div className="space-y-6">
            <p className="text-lg text-foreground/80 leading-relaxed">
              La Licenciatura en Ciencia de Datos de la UABC forma profesionales capaces de
              analizar, procesar y transformar grandes volúmenes de información para generar
              conocimiento valioso y apoyar la toma de decisiones. Nuestro programa combina
              una sólida formación en matemáticas, estadística y computación con el uso de
              tecnologías modernas para el análisis de datos, aprendizaje automático y
              visualización.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              Durante tu formación, aprenderás a identificar patrones, construir modelos
              predictivos y descriptivos, evaluar fenómenos complejos y diseñar soluciones
              basadas en datos con ética, creatividad y profesionalismo. El programa
              promueve un enfoque multi e interdisciplinario, preparando a los estudiantes
              para enfrentar los retos actuales de la ciencia, la industria y la sociedad.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="bg-primary/10 p-4 rounded-lg">
                <div className="text-3xl font-bold text-primary">4</div>
                <div className="text-sm text-foreground/60">Años de duración</div>
              </div>
              <div className="bg-secondary/10 p-4 rounded-lg">
                <div className="text-3xl font-bold text-secondary">3+</div>
                <div className="text-sm text-foreground/60">Docentes especializados</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
