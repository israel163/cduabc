import Link from "next/link"
import { ArrowRight, BookOpen, Code, Brain } from "lucide-react"

const basePath = process.env.NODE_ENV === "production" ? "/cduabc" : ""

const withBasePath = (path: string) => `${basePath}${path}`

export default function StudyPlan() {
    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-primary sm:text-4xl">Plan de Estudios</h2>
                    <div className="mt-4 h-1 w-20 bg-secondary mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="relative rounded-2xl overflow-hidden shadow-xl group">
                        <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-300 z-10"></div>
                        <img
                            src={withBasePath("/iniciob.jpg")}
                            alt="Plan de Estudios"
                            className="w-full h-140 object-cover transform group-hover:scale-105 transition-transform duration-500"
                        />
                    </div>

                    <div className="space-y-8">
                        <div className="space-y-6">
                            <div className="flex gap-4 items-start">
                                <div className="mt-1 bg-white p-2 rounded-lg shadow-sm text-primary">
                                    <BookOpen size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">Etapa Básica</h3>
                                    <p className="text-gray-600">
                                        Cálculo, álgebra, programación, estructuras de datos, ética, matemáticas discretas, probabilidad,
                                        etc.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4 items-start">
                                <div className="mt-1 bg-white p-2 rounded-lg shadow-sm text-primary">
                                    <Code size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">Etapa Disciplinaria</h3>
                                    <p className="text-gray-600">
                                        Ecuaciones diferenciales, bases de datos, minería de datos, machine learning supervisado, datos
                                        masivos, métodos numéricos, algoritmos, regresión, etc.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4 items-start">
                                <div className="mt-1 bg-white p-2 rounded-lg shadow-sm text-primary">
                                    <Brain size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">Etapa Terminal</h3>
                                    <p className="text-gray-600">
                                        Ciberseguridad, minería de textos, señales e imágenes, visualización, liderazgo, administración de
                                        proyectos, machine learning no supervisado, PLN.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="pt-4">
                            <Link
                                href="/plan-de-estudios"
                                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 md:text-lg transition-colors shadow-lg hover:shadow-xl"
                            >
                                Ver Plan de Estudios Completo
                                <ArrowRight className="ml-2 -mr-1 h-5 w-5" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}