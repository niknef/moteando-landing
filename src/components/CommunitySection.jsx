import img1 from '../assets/comunidad-moteros-1.jpg';
import img2 from '../assets/comunidad-moteros-2.jpg';
import img3 from '../assets/comunidad-moteros-3.jpg';
import img4 from '../assets/comunidad-moteros-4.jpg';

export default function CommunitySection() {
  return (
    <section id="community" className="bg-[#202020] text-light px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* Texto emocional */}
        <div className="text-center md:text-left md:h-[400px] md:flex md:flex-col md:justify-center">
          <h2 className="text-3xl md:text-4xl font-medium mb-6 text-orange">
          Una comunidad que vibra sobre dos ruedas
        </h2>

        <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
          <p>
            <span className='font-medium'>Mote</span><span className='font-bold text-orange'>ando</span> no nació en una oficina. Nació en cada mensaje entre moteros que querían salir, en cada curva compartida y en las ganas de no rodar más solos.
          </p>
          <p>
            <em><span className='text-orange'>Sabemos lo que se siente:</span></em> el viento que te despeja, la adrenalina en el pecho, y ese instante mágico en el que cruzás miradas con otro rider y sabés que están en la misma.
          </p>
          <p>
            Nuestra <span className="font-semibold">misión</span> es simple: que cada viaje sea más <strong>seguro</strong>, más <strong>auténtico</strong> y más <strong>compartido</strong>. Porque <span className='font-medium'>Mote</span><span className='font-bold text-orange'>ando</span> no es una app: es una comunidad hecha camino.
          </p>
        </div>
        </div>

        
        <div className="grid grid-cols-3 gap-4 ">
          
          <img
            src={img1}
            alt="Grupo de moteros rodando"
            className="col-span-2 row-span-3 rounded-xl object-cover "
          />

          
          <div className="flex flex-col gap-5 h-full">
            <img
              src={img2}
              alt="3 Moteros en la ruta"
              className="rounded-xl object-cover h-1/3 w-full"
            />
            <img
              src={img3}
              alt="Grupo de moteras en la ruta"
              className="rounded-xl object-cover h-1/3 w-full"
            />
            <img
              src={img4}
              alt="Pareja andando en moto"
              className="rounded-xl object-cover h-1/3 w-full"
            />
          </div>
        </div>
      </div>
      <div className="mt-10 text-center">
        <p className="text-sm text-orange-400 italic pb-10">+2.500 riders ya son parte. ¿Y vos?</p>
      </div>
    </section>
  );
}
