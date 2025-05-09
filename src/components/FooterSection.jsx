import logo from '../assets/logo-banner-blanco.svg';

export default function FooterSection() {
  return (
    <footer className="bg-[#121212] text-gray-400 text-sm py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
      
        <div className="flex items-center gap-3">
          <img src={logo} alt="Logo Moteando" className="h-10 w-auto" />
          <span className="text-white font-light">Moteando – Motos, amigos y aventuras. 🇦🇷</span>
        </div>

    
        <div className="flex gap-6">
          <a href="#" className="hover:text-orange transition">Política de privacidad</a>
          <a href="#cta" className="hover:text-orange transition">Descarga</a>
          <a href="#" className="hover:text-orange transition">Inicio</a>
        
        </div>
      </div>

      <div className="mt-8 border-t border-[#2a2a2a] pt-4 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Moteando. Todos los derechos reservados.
      </div>
    </footer>
  );
}
