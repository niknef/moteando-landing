import moteros from '../assets/moteros.jpg';

export default function BenefitsSection() {
  const items = [
    { emoji: '🗺️', text: 'Planificá rutas personalizadas' },
    { emoji: '📍', text: 'Encontrá eventos cerca tuyo' },
    { emoji: '🧑‍🤝‍🧑', text: 'Sumá amigos moteros' },
    { emoji: '🚨', text: 'Alertas de emergencia en tiempo real' },
  ];

  return (
    <section className="bg-[#202020] text-light py-24 px-6">
      
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-center gap-12">
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ¿Listo para llevar tus viajes en moto al próximo nivel?
          </h2>
          <p className="text-gray max-w-xl mx-auto md:mx-0">
            Olvidate de perderte rutas increíbles o andar solo. Con Moteando podés planificar viajes, descubrir eventos moteros cerca tuyo, crear grupos de amigos y hasta recibir alertas de seguridad en tiempo real.
          </p>
        </div>

        <div className="flex-1">
          <img
            src={moteros}
            alt="Grupo de amigos moteros"
            className="w-full max-w-sm mx-auto rounded-xl shadow-xl"
          />
        </div>
      </div>

      
      <ul className="max-w-6xl mx-auto grid gap-6 md:grid-cols-2 mt-16">
        {items.map((item, idx) => (
          <li
            key={idx}
            className="flex flex-col items-center text-center gap-3 bg-[#2a2a2a] p-6 rounded-lg shadow-md"
          >
            <span className="text-3xl">{item.emoji}</span>
            <p className="text-light font-medium">{item.text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
