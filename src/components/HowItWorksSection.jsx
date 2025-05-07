export default function HowItWorksSection() {
    const steps = [
      {
        icon: '🗺️',
        title: 'Explorá rutas',
        description: 'Buscá por distancia, dificultad o interés.',
      },
      {
        icon: '📆',
        title: 'Unite a eventos',
        description: 'Encontrá salidas grupales o armá la tuya.',
      },
      {
        icon: '👥',
        title: 'Armá tu red',
        description: 'Agregá amigos y chateá desde la app.',
      },
      {
        icon: '🛡️',
        title: 'Viajá más seguro',
        description: 'Activá alertas y compartí ubicación.',
      },
    ];
  
    return (
      <section className="bg-background text-light py-10 px-2">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-16">
            ¿Cómo funciona Moteando?
          </h2>
  
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <div
                key={index}
                className="bg-[#2b2b2b] p-6 rounded-lg shadow-sm flex flex-col items-center mb-16"
              >
                <div className="text-4xl mb-4">{step.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-gray text-center">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  