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
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-orange">
            Creada por y para motociclistas.
          </h2>

          <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
            <p>
              <strong>Moteando</strong> no nació en un escritorio: nació en la ruta, en los encuentros, en los mensajes entre moteros que querían salir a rodar.
            </p>
            <p>
              <em>Sabemos lo que se siente:</em> el viento en la cara, la hermandad en cada curva, y la necesidad de estar conectados sin perder la esencia de la aventura.
            </p>
            <p>
              Nuestra <span className="font-semibold">misión</span> es simple: que cada viaje sea más <strong>seguro</strong>, más <strong>divertido</strong> y más <strong>compartido</strong>.
            </p>
          </div>
        </div>

        {/* Collage de imágenes */}
        <div className="grid grid-cols-3 gap-4 ">
          {/* Imagen vertical grande */}
          <img
            src={img1}
            alt="Moteros comunidad 1"
            className="col-span-2 row-span-3 rounded-xl object-cover "
          />

          {/* Columnita de 3 imágenes chicas */}
          <div className="flex flex-col gap-5 h-full">
            <img
              src={img2}
              alt="Moteros comunidad 2"
              className="rounded-xl object-cover h-1/3 w-full"
            />
            <img
              src={img3}
              alt="Moteros comunidad 3"
              className="rounded-xl object-cover h-1/3 w-full"
            />
            <img
              src={img4}
              alt="Moteros comunidad 4"
              className="rounded-xl object-cover h-1/3 w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
