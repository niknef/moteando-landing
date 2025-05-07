
import phoneMockup from '../assets/mockupMobile.png'

export default function HeroSection() {
  return (
    <section className="bg-background text-light py-20 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        
        {/* Texto */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Moteando: Rutas, Amigos y Aventuras en Dos Ruedas.
          </h1>
          <p className="text-lg text-gray mb-8 max-w-xl">
            Descubrí nuevas rutas, sumate a eventos moteros y conectá con la comunidad. Todo en una sola app pensada para vos y tu moto.
          </p>
          <a
            href="#download"
            className="inline-block bg-orange hover:bg-orange-dark transition text-white font-semibold px-6 py-3 rounded-full"
          >
            🚀 ¡Descargala gratis ahora!
          </a>
        </div>

        {/* Imagen */}
        <div className="flex-1">
          <img
            src={phoneMockup}
            alt="Vista previa de Moteando"
            className="w-full max-w-sm mx-auto"
          />
        </div>
      </div>
    </section>
  );
}
