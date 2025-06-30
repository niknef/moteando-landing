import moteros from '../assets/moteros.jpg';
import { Route, CalendarClock, Users, AlertTriangle } from 'lucide-react';


export default function BenefitsSection() {
  const items = [
    {
      icon: <Route className="w-8 h-8 text-orange" />,
      text: 'Planificá rutas personalizadas',
    },
    {
      icon: <CalendarClock className="w-8 h-8 text-orange" />,
      text: 'Encontrá eventos moteros cerca tuyo',
    },
    {
      icon: <Users className="w-8 h-8 text-orange" />,
      text: 'Sumate a grupos y rodadas',
    },
    {
      icon: <AlertTriangle className="w-8 h-8 text-orange" />,
      text: 'Activá alertas de emergencia en la ruta',
    },
  ];

  return (
    <section className="bg-[#202020] text-light py-24 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Texto */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-medium mb-6 text-balance">
            Beneficios que te acompañan en cada kilómetro<span className='text-orange'>.</span>
          </h2>
          <p className="text-gray max-w-xl mx-auto md:mx-0">
            <span className='font-medium'>Mote</span><span className='font-bold text-orange'>ando</span> es tu copiloto en cada salida. Organizá rutas, conectate con otros moteros y sentite parte de una comunidad que vive la ruta con vos.
          </p>
        </div>

        {/* Imagen */}
        <div className="flex-1">
          <img
            src={moteros}
            alt="Grupo de amigos moteros"
            className="w-full max-w-sm mx-auto rounded-xl shadow-xl"
          />
        </div>
      </div>

      {/* Beneficios */}
      <ul className="max-w-6xl mx-auto grid gap-6 md:grid-cols-2 mt-16">
        {items.map((item, idx) => (
          <li
            key={idx}
            className="flex flex-col items-center text-center gap-3 bg-[#2a2a2a] p-6 rounded-lg shadow-md"
          >
            {item.icon}
            <p className="text-light font-medium">{item.text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

