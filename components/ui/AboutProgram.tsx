import { Target, GraduationCap, Briefcase } from "lucide-react"

export default function AboutProgram() {
    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-primary sm:text-4xl">Ciencia de Datos</h2>
                    <div className="mt-4 h-1 w-20 bg-secondary mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                    {/* Misión */}
                    <div className="flex flex-col items-center text-center p-6 rounded-xl bg-gray-50 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                        <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mb-6 text-primary">
                            <Target size={32} />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Misión del Programa</h3>
                        <p className="text-gray-600 leading-relaxed">
                            Formar profesionales con fundamentos teóricos y metodológicos sólidos, capaces de manipular, procesar y
                            analizar información mediante modelos predictivos y descriptivos, identificando patrones para comprender
                            fenómenos y proponer soluciones éticas y sostenibles.
                        </p>
                    </div>

                    {/* Perfil de Egreso */}
                    <div className="flex flex-col items-center text-center p-6 rounded-xl bg-gray-50 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                        <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mb-6 text-primary">
                            <GraduationCap size={32} />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Perfil de Egreso</h3>
                        <p className="text-gray-600 leading-relaxed">
                            El egresado puede procesar datos estructurados y no estructurados, crear modelos matemáticos y de machine
                            learning, visualizar información para decisiones estratégicas y trabajar interdisciplinariamente.
                        </p>
                    </div>

                    {/* Campo Laboral */}
                    <div className="flex flex-col items-center text-center p-6 rounded-xl bg-gray-50 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                        <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mb-6 text-primary">
                            <Briefcase size={32} />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Campo Laboral</h3>
                        <p className="text-gray-600 leading-relaxed">
                            Industria, negocios, finanzas, salud, gobierno y consultoría independiente. Actividades: análisis de
                            datos, modelado predictivo, optimización de procesos, análisis financiero, monitoreo de clientes,
                            desarrollo de soluciones basadas en datos.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
