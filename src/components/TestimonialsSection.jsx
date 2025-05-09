import profile1 from '../assets/profile-1.jpg';
import profile2 from '../assets/profile-2.jpg';
import profile3 from '../assets/profile-3.jpg';

const testimonials = [
  {
    name: 'Lucas García',
    role: 'KTM Adventure Rider',
    rating: 5,
    avatar: profile1,
    text: 'La experiencia con Moteando fue excelente. Organizamos una salida grupal en minutos y conocí gente nueva con la misma pasión.',
  },
  {
    name: 'María Fernández',
    role: 'Harley Davidson Sportster',
    rating: 5,
    avatar: profile3,
    text: 'Me encantó la facilidad para unirme a rutas cercanas. La comunidad es muy activa y la app se siente fluida y confiable.',
  },
  {
    name: 'Pablo Sosa',
    role: 'Royal Enfield Meteor',
    rating: 4,
    avatar: profile2,
    text: 'Lo que más valoro es el sistema de alertas. Me dio mucha tranquilidad viajando solo, sobre todo en trayectos largos.',
  },
];

export default function TestimonialsSection() {
  return (
    <section className="bg-[#1c1c1c] text-light py-24 px-6">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-light">
          ¿Qué dicen los primeros en probarla?
        </h2>
      </div>

      <div className="grid gap-10 md:grid-cols-3">
        {testimonials.map((t, idx) => (
          <figure
            key={idx}
            className="bg-[#2a2a2a] text-center p-10 rounded-lg flex flex-col items-center h-full"
          >
         
            <svg
              className="h-10 mb-4 text-orange"
              viewBox="0 0 24 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.017 18V10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983V18H0Z"
                fill="currentColor"
              />
            </svg>

            <blockquote>
              <p className="text-xl md:text-2xl font-light italic text-gray-200 leading-relaxed min-h-[100px]">
                “{t.text}”
              </p>
            </blockquote>

        
            <figcaption className="flex flex-col items-center mt-6 space-y-3">
              <img
                src={t.avatar}
                className="w-12 h-12 rounded-full object-cover"
                alt={`Foto de ${t.name}`}
              />
              <div className="flex flex-col items-center text-sm text-gray-300">
                <span className="font-light">{t.name}</span>
                <span className="text-xs text-gray-400">{t.role}</span>
              </div>

           
              <div className="flex justify-center mt-2">
                {Array.from({ length: 5 }, (_, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${
                      i < t.rating ? 'text-orange' : 'text-gray-500'
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 00.95.69h4.179c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.974c.3.921-.755 1.688-1.538 1.118l-3.38-2.455a1 1 0 00-1.176 0l-3.38 2.455c-.783.57-1.838-.197-1.538-1.118l1.287-3.974a1 1 0 00-.364-1.118L2.045 9.401c-.783-.57-.38-1.81.588-1.81h4.179a1 1 0 00.95-.69l1.286-3.974z" />
                  </svg>
                ))}
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
