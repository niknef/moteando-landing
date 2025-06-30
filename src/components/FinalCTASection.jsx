import GooglePlayButton from './GooglePlayButton';
import AppStoreButton from './AppStoreButton';
import paternBg from '../assets/patron.svg'

export default function FinalCTASection() {
  return (
    <section
        id="cta"
        className="relative bg-[#1c1c1c] text-light py-24 px-6 text-center overflow-hidden"
      >
        {/* Fondo patrón */}
        <div
          className="absolute inset-0 bg-repeat opacity-10"
          style={{
            backgroundImage: `url(${paternBg})`,
            backgroundSize: '600px',
          }}

          aria-hidden="true"
        ></div>

        {/* Contenedor con fondo opaco */}
        <div className="relative z-10 max-w-3xl mx-auto bg-[#2a2a2a] bg-opacity-80 backdrop-blur-sm p-10 rounded-2xl shadow-lg">
          <h2 className="text-3xl md:text-4xl font-medium text-orange mb-6">
            ¿Rodamos juntos?
          </h2>

          <p className="text-lg text-gray-300 mb-10">
            Sumate a <span className='font-medium'>Mote</span><span className='font-bold text-orange'>ando</span> y descubrí lo que pasa cuando la tecnología se cruza con la pasión de rodar.  
            Rutas compartidas, comunidad real y una app pensada por y para moteros.
          </p>

          <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-6">
            <GooglePlayButton href="#" />
            <AppStoreButton href="#" />
          </div>

          <p className="text-sm text-gray-500">
            Disponible para <span className="text-white font-semibold">Android</span> | Muy pronto en <span className="text-white font-semibold">iOS</span>
          </p>

          <p className="text-sm text-orange font-semibold mt-6">
            La ruta ya empezó. Vos elegís cuándo sumarte.
          </p>
        </div>
      </section>

    

  );
}
