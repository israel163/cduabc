export default function Map() {
  return (
    <section className="py-20 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Ubicación</h2>
          <p className="text-foreground/70 text-lg">Visítanos en la Facultad de Ciencias</p>
          <div className="h-1 w-20 bg-primary mx-auto mt-4"></div>
        </div>

        <div className="rounded-lg overflow-hidden shadow-lg h-96">
          <iframe
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen={true}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3388.505481044054!2d-116.66907322437459!3d31.865669474057746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d893089d4efed1%3A0x5d670a5eecc44424!2sFacultad%20de%20Ciencias%2C%20Universidad%20Aut%C3%B3noma%20de%20Baja%20California!5e0!3m2!1ses-419!2smx!4v1764868675201!5m2!1ses-419!2smx"
          />
        </div>

        <div className="mt-8 p-6 bg-primary/10 rounded-lg">
          <h3 className="text-xl font-bold text-foreground mb-2">Información de Contacto</h3>
          <p className="text-foreground/70">
            <strong>Dirección:</strong> Facultad de Ciencias, Carretera Transpeninsular 3917, Playitas, 22860 Ensenada, B.C.
          </p>
          <p className="text-foreground/70">
            <strong>Teléfono:</strong> +52 (646)  152 8211
          </p>
          <p className="text-foreground/70">
            <strong>Email:</strong> lcd.fc@uabc.edu.mx
          </p>
        </div>
      </div>
    </section>
  )
}
