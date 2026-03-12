import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Branding */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary-foreground rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold text-sm">CD</span>
              </div>
              <span className="font-bold">Ciencia de Datos</span>
            </div>
            <p className="text-sm text-primary-foreground/80">Formando científicos de datos del futuro</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#inicio" className="hover:underline text-primary-foreground/80 hover:text-primary-foreground">
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  href="/academicos"
                  className="hover:underline text-primary-foreground/80 hover:text-primary-foreground"
                >
                  Académicos
                </Link>
              </li>
              <li>
                <Link
                  href="/estudiantes"
                  className="hover:underline text-primary-foreground/80 hover:text-primary-foreground"
                >
                  Estudiantes
                </Link>
              </li>
              <li>
                <Link
                  href="/eventos"
                  className="hover:underline text-primary-foreground/80 hover:text-primary-foreground"
                >
                  Eventos
                </Link>
              </li>
            </ul>
          </div>

          {/* More Links */}
          <div>
            <h4 className="font-bold mb-4">Recursos</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="https://bibliotecas.uabc.mx/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline text-primary-foreground/80 hover:text-primary-foreground"
                >
                  Biblioteca
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline text-primary-foreground/80 hover:text-primary-foreground">
                  Publicaciones
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline text-primary-foreground/80 hover:text-primary-foreground">
                  Laboratorios
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline text-primary-foreground/80 hover:text-primary-foreground">
                  Preguntas Frecuentes
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold mb-4">Contacto</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <span>lcd.fc@uabc.edu.mx</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <span>+52 (646) 152 8211</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5" />
                <span>Facultad de Ciencias</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-primary-foreground/70">
            &copy; {currentYear} Desarrollado por la licenciatura en Ciencia de Datos. Todos los derechos reservados.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="#" className="text-sm text-primary-foreground/70 hover:text-primary-foreground">
              Privacidad
            </Link>
            <Link href="#" className="text-sm text-primary-foreground/70 hover:text-primary-foreground">
              Términos
            </Link>
            <Link href="#" className="text-sm text-primary-foreground/70 hover:text-primary-foreground">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
