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
      description: 'Agregá amigos y chateá en la app.',
    },
    {
      icon: '🛡️',
      title: 'Viajá más seguro',
      description: 'Activá alertas y compartí ubicación.',
    },
  ];

  return (
    <section id="how" className="bg-background text-light py-24 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          ¿Cómo funciona Moteando?
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <article
              key={index}
              className="bg-[#2a2a2a] p-6 rounded-xl shadow-md"
            >
              <div className="text-4xl mb-4">{step.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
              <p className="text-sm text-gray">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
