export default function BenefitsSection() {
    const items = [
      { emoji: '🗺️', text: 'Planificá rutas personalizadas' },
      { emoji: '📍', text: 'Encontrá eventos cerca tuyo' },
      { emoji: '🧑‍🤝‍🧑', text: 'Sumá amigos moteros' },
      { emoji: '🚨', text: 'Alertas de emergencia en tiempo real' },
    ]
  
    return (
      <section className="bg-background text-light py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ¿Listo para llevar tus viajes en moto al próximo nivel?
          </h2>
          <p className="text-gray max-w-2xl mx-auto mb-10">
            Olvidate de perderte rutas increíbles o andar solo. Con Moteando podés planificar viajes, descubrir eventos moteros cerca tuyo, crear grupos de amigos y hasta recibir alertas de seguridad en tiempo real.
          </p>
  
          <div className="grid gap-6 md:grid-cols-2 mt-8">
            {items.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-4 bg-[#2a2a2a] p-4 rounded-lg shadow-sm"
              >
                <span className="text-2xl">{item.emoji}</span>
                <p className="text-light font-medium">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  