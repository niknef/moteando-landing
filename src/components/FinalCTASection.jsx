import GooglePlayButton from './GooglePlayButton';
import AppStoreButton from './AppStoreButton';

export default function FinalCTASection() {
  return (
    <section id="cta" className="bg-[#1c1c1c] text-light py-24 px-6 text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-orange mb-6">
          🚀 Tu próxima aventura empieza hoy.
        </h2>
        <p className="text-lg text-gray-300 mb-10">
          Bajá <strong className="text-orange">Mote<span className='font-extrabold'>ando</span></strong> gratis y descubrí todo lo que la ruta tiene para ofrecerte.
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-6">
          <GooglePlayButton href="#" />
          <AppStoreButton href="#" />
        </div>

        <p className="text-sm text-gray-500">
          Disponible para <span className="text-white font-semibold">Android</span> | Muy pronto en <span className="text-white font-semibold">iOS</span>
        </p>
      </div>
    </section>
  );
}
