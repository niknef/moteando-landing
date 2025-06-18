  import { MapPinned, CalendarClock, Users, ShieldCheck } from 'lucide-react';

  export default function HowItWorksSection() {
  const steps = [
    {
      icon: <MapPinned className="w-8 h-8 text-orange mb-2" />,
      title: 'Elegí la ruta',
      description: 'Explorá recorridos creados por otros moteros o subí el tuyo con solo un par de toques.',
    },
    {
      icon: <CalendarClock className="w-8 h-8 text-orange mb-2" />,
      title: 'Sumate a un evento',
      description: 'Conocé eventos grupales por zona, horarios, tipo de moto y estilo de viaje.',
    },
    {
      icon: <Users className="w-8 h-8 text-orange mb-2" />,
      title: 'Rodá en comunidad',
      description: 'Seguí a otros riders, compartí rutas y organizá salidas desde la app.',
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-orange mb-2" />,
      title: 'Conectate con seguridad',
      description: 'Usá alertas, compartí ubicación en tiempo real y rodá con tranquilidad.',
    },
  ];

  return (
    <section id="how" className="bg-background text-light py-24 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-medium mb-12">
          ¿Cómo funciona <span className='font-medium'>Mote</span><span className='font-bold text-orange'>ando</span>?
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <article
              key={index}
              className="bg-[#2a2a2a] p-6 rounded-xl shadow-md flex flex-col items-center text-center"
            >
              {step.icon}
              <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
              <p className="text-sm text-gray">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
