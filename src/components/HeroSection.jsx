
import phoneMockup from '../assets/mockupMobile.png'
import GooglePlayButton from './GooglePlayButton';
import AppStoreButton from './AppStoreButton';

export default function HeroSection() {
  return (
    <section className="bg-background text-light py-20 px-6">
      
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Moteando: Rutas, Amigos y Aventuras en Dos Ruedas.
          </h1>
          <p className="text-lg text-gray mb-8 max-w-xl">
            Descubrí nuevas rutas, sumate a eventos moteros y conectá con la comunidad. Todo en una sola app pensada para vos y tu moto.
          </p>
          <div className="flex flex-col w-full sm:flex-row sm:justify-center md:justify-start gap-4 items-center sm:items-stretch">
            <GooglePlayButton href="#cta" />
            <AppStoreButton href="#cta" />
          </div>
        </div>

        <div className="relative w-full max-w-sm mx-auto overflow-hidden">
          <img
            src={phoneMockup}
            alt="Vista previa de Moteando"
            className="w-full"
          />
        
          <div className="absolute bottom-0 left-0 right-0 h-56 bg-gradient-to-t from-background to-transparent pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 h-36 bg-gradient-to-t from-background to-transparent pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 h-36 bg-gradient-to-t from-background to-transparent pointer-events-none" />
        </div>
      </div>
      
    </section>
  );
}
