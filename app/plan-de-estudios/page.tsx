import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FileText, Download } from "lucide-react"
import Link from "next/link"

const basePath = process.env.NODE_ENV === "production" ? "/cduabc" : ""

const withBasePath = (path: string) => `${basePath}${path}`

// Mock data for courses
const courses = [
    // Etapa Básica
    { name: "Comunicación Oral y Escrita", stage: "Básica", semester: 1, pdf: "Comunicacion.pdf" },
    { name: "Diseño de Algoritmos", stage: "Básica", semester: 1, pdf: "DisenoAlgoritmos.pdf" },
    { name: "Cálculo Diferencial", stage: "Básica", semester: 1, pdf: "CalculoDiferencial.pdf" },
    { name: "Álgebra Superior", stage: "Básica", semester: 1, pdf: "AlgebraSuperior.pdf" },
    { name: "Geometría Vectorial", stage: "Básica", semester: 1, pdf: "GeometriaVectorial.pdf" },
    { name: "Historia e Impacto de la Computación", stage: "Básica", semester: 1, pdf: "HistoriaImpacto.pdf" },
    { name: "Aspectos Legales, Sociales y Éticos de la Computación", stage: "Básica", semester: 2, pdf: "AspectosLegales.pdf" },
    { name: "Introducción a la Programación", stage: "Básica", semester: 2, pdf: "IntroProgramacion.pdf" },
    { name: "Cálculo Integral", stage: "Básica", semester: 2, pdf: "CalculoIntegral.pdf" },
    { name: "Álgebra Lineal", stage: "Básica", semester: 2, pdf: "AlgebraLineal.pdf" },
    { name: "Sistemas Operativos tipo Unix", stage: "Básica", semester: 2, pdf: "SistemasOperativos.pdf" },
    { name: "Estructuras de Datos y Algoritmos", stage: "Básica", semester: 3, pdf: "EstructurasDatos.pdf" },
    { name: "Programación Orientada a Objetos", stage: "Básica", semester: 3, pdf: "ProgramacionOrientada.pdf" },
    { name: "Cálculo Vectorial", stage: "Básica", semester: 3, pdf: "CalculoVectorial.pdf" },
    { name: "Matemáticas Discretas", stage: "Básica", semester: 3, pdf: "MatematicasDiscretas.pdf" },
    { name: "Probabilidad", stage: "Básica", semester: 3, pdf: "Probabilidad.pdf" },

    // Etapa Disciplinaria
    { name: "Análisis de Algoritmos", stage: "Disciplinaria", semester: 4, pdf: "AnalisisAlgoritmos.pdf" },
    { name: "Programación para Ciencia de Datos", stage: "Disciplinaria", semester: 4, pdf: "ProgramacionCienciaDatos.pdf" },
    { name: "Ecuaciones Diferenciales Ordinarias", stage: "Disciplinaria", semester: 4, pdf: "EcuacionesDiferenciales.pdf" },
    { name: "Bases de Datos", stage: "Disciplinaria", semester: 4, pdf: "BasesDatos.pdf" },
    { name: "Probabilidad y Estadística", stage: "Disciplinaria", semester: 4, pdf: "ProbabilidadEstadistica.pdf" },
    { name: "Métodos Numéricos I", stage: "Disciplinaria", semester: 5, pdf: "MetodosNumericos.pdf" },
    { name: "Adquisición y Tratamiento de la Información", stage: "Disciplinaria", semester: 5, pdf: "AdquisicionInformacion.pdf" },
    { name: "Aprendizaje Automático Supervisado", stage: "Disciplinaria", semester: 5, pdf: "AprendizajeSupervisado.pdf" },
    { name: "Bases de Datos Avanzadas", stage: "Disciplinaria", semester: 5, pdf: "BasesDatosAvanzadas.pdf" },
    { name: "Análisis de Regresión y Correlación", stage: "Disciplinaria", semester: 5, pdf: "RegresionCorrelacion.pdf" },
    { name: "Criptografía", stage: "Disciplinaria", semester: 6, pdf: "Criptografia.pdf" },
    { name: "Minería de Datos", stage: "Disciplinaria", semester: 6, pdf: "MineriaDatos.pdf" },
    { name: "Reconocimiento de Patrones", stage: "Disciplinaria", semester: 6, pdf: "ReconocimientoPatrones.pdf" },
    { name: "Datos Masivos", stage: "Disciplinaria", semester: 6, pdf: "BigData.pdf" },

    // Etapa Terminal
    { name: "Ciberseguridad", stage: "Terminal", semester: 7, pdf: "Ciberseguridad.pdf" },
    { name: "Mineria de Textos", stage: "Terminal", semester: 7, pdf: "MineriaTextos.pdf" },
    { name: "Procesamiento de Señales e Imágenes", stage: "Terminal", semester: 7, pdf: "ProcesamientoSenalesImagenes.pdf" },
    { name: "Analítica y Visualización de Datos", stage: "Terminal", semester: 7, pdf: "AnaliticaVisualizacion.pdf" },
    { name: "Liderazgo Estratégico y Gestión de Negocios en Ciencia de Datos", stage: "Terminal", semester: 8, pdf: "Liderazgo.pdf" },
    { name: "Administración de Proyectos en Ciencia de Datos", stage: "Terminal", semester: 8, pdf: "AdminProyectos.pdf" },
    { name: "Aprendizaje Automático No Supervisado", stage: "Terminal", semester: 8, pdf: "AprendizajeNoSupervisado.pdf" },
    { name: "Procesamiento de Lenguaje Natural", stage: "Terminal", semester: 8, pdf: "PLN.pdf" },

    // Optativas
    { name: "Deep Learning", stage: "Optativa", semester: 8, pdf: "DeepLearning.pdf" },
    { name: "Computación en la Nube", stage: "Optativa", semester: 8, pdf: "CloudComputing.pdf" },
    { name: "Bioinformática", stage: "Optativa", semester: 8, pdf: "Bioinformatica.pdf" },
    { name: "Análisis de Datos en Investigación Social", stage: "Optativa", semester: 8, pdf: "InvestigacionSocial.pdf" },
    { name: "Ciencia de Datos Aplicada a Tecnologías Vestibles", stage: "Optativa", semester: 8, pdf: "TecnologiasVestibles.pdf" },
    { name: "Emprendimiento", stage: "Optativa", semester: 8, pdf: "Emprendimiento.pdf" },
    { name: "Procesamiento de Bioseñales e Imágenes", stage: "Optativa", semester: 8, pdf: "BioseñalesImagenes.pdf" },
    { name: "Modelación Lineal", stage: "Optativa", semester: 8, pdf: "ModelacionLineal.pdf" },
    { name: "Simulación Determinística", stage: "Optativa", semester: 8, pdf: "SimulacionDeterminista.pdf" },
    { name: "Recuperación de Información", stage: "Optativa", semester: 8, pdf: "RecuperacionInformacion.pdf" },
    { name: "Métodos Numéricos II", stage: "Optativa", semester: 8, pdf: "MetodosNumericosII.pdf" },
    { name: "Introducción a los Procesos Estocásticos y Simulación", stage: "Optativa", semester: 8, pdf: "ProcesosEstocasticos.pdf" },
    { name: "Internet de las cosas", stage: "Optativa", semester: 8, pdf: "InternetCosas.pdf" },
]

export default function PlanEstudiosPage() {
    const stages = ["Todos", "Básica", "Disciplinaria", "Terminal", "Optativa"]

    return (
        <main className="min-h-screen bg-gray-50 flex flex-col">
            <Navbar />

            <div className="flex-grow pt-24 pb-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold text-primary mb-4">Plan de Estudios</h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Conoce las materias que conforman nuestra Licenciatura en Ciencia de Datos, organizadas por etapas formativas.
                        </p>
                    </div>

                    <div className="w-full h-[800px] mb-12 border rounded-lg overflow-hidden shadow-md bg-white">
                        <iframe
                            src={withBasePath("/pdf/materias/MapaCurricular.pdf")}
                            className="w-full h-full"
                            title="Mapa Curricular - Guía de Materias"
                        />
                    </div>

                    <Tabs defaultValue="Todos" className="w-full">
                        <div className="flex justify-center mb-8">
                            <TabsList className="grid grid-cols-2 md:grid-cols-5 w-full max-w-3xl bg-white p-1 shadow-sm rounded-lg">
                                {stages.map((stage) => (
                                    <TabsTrigger
                                        key={stage}
                                        value={stage}
                                        className="data-[state=active]:bg-primary data-[state=active]:text-white"
                                    >
                                        {stage}
                                    </TabsTrigger>
                                ))}
                            </TabsList>
                        </div>

                        {stages.map((stage) => (
                            <TabsContent key={stage} value={stage} className="mt-0">
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {courses
                                        .filter((course) => stage === "Todos" || course.stage === stage)
                                        .map((course, index) => (
                                            <Card key={index} className="hover:shadow-lg transition-shadow border-t-4 border-t-primary">
                                                <CardHeader className="pb-2">
                                                    <div className="flex justify-between items-start">
                                                        <Badge
                                                            variant={
                                                                course.stage === "Básica"
                                                                    ? "default"
                                                                    : course.stage === "Disciplinaria"
                                                                        ? "secondary"
                                                                        : course.stage === "Terminal"
                                                                            ? "destructive"
                                                                            : "outline"
                                                            }
                                                            className="mb-2"
                                                        >
                                                            {course.stage}
                                                        </Badge>
                                                        <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded">
                                                            Semestre {course.semester}
                                                        </span>
                                                    </div>
                                                    <CardTitle className="text-lg text-gray-900 leading-tight min-h-[3rem] flex items-center">
                                                        {course.name}
                                                    </CardTitle>
                                                </CardHeader>
                                                <CardContent>
                                                    <a
                                                        href={withBasePath(`/pdf/materias/${course.pdf}`)}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="flex items-center justify-center w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors group"
                                                    >
                                                        <FileText className="mr-2 h-4 w-4 text-primary group-hover:text-primary/80" />
                                                        Ver Temario
                                                        <Download className="ml-auto h-4 w-4 text-gray-400 group-hover:text-gray-600" />
                                                    </a>
                                                </CardContent>
                                            </Card>
                                        ))}
                                </div>
                            </TabsContent>
                        ))}
                    </Tabs>

                    <div className="mt-12 text-center">
                        <Link href="/" className="text-primary hover:text-primary/80 font-medium underline underline-offset-4">
                            &larr; Volver al Inicio
                        </Link>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    )
}