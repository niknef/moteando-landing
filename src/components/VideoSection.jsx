    import motoLoop from '../assets/moto-loop.mp4';
    import { CalendarClock, Users, Map } from 'lucide-react';

    export default function VideoSection() {
    return (
        <section className="relative h-[400px] md:h-[500px] overflow-hidden">
        {/* Video de fondo */}
        <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover opacity-60"
        >
            <source src={motoLoop} type="video/mp4" />
            Tu navegador no soporta videos HTML5.
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>

        {/* Contenido */}
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-light text-center ">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:gap-14 gap-2 font-medium text-md">

            <div className="flex flex-col items-center gap-4">
                <Users className="w-8 h-8" />
                <span className="text-3xl">+3.245</span>
                <p className="text-sm text-gray-200">Riders activos</p>
            </div>
            <div className="flex flex-col items-center gap-4">
                <CalendarClock className="w-8 h-8" />
                <span className="text-3xl">15</span>
                <p className="text-sm text-gray-200">Eventos activos</p>
            </div>
            <div className="flex flex-col items-center gap-4">
                <Map className="w-8 h-8" />
                <span className="text-3xl">4.928</span>
                <p className="text-sm text-gray-200">Rutas compartidas</p>
            </div>
            </div>
        </div>
        </section>
    );
    }
