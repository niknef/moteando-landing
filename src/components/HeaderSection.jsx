import logo from '../assets/Logo-banner-blanco.svg';
import ButtonPrincipal from './ButtonPrincipal';

export default function HeaderSection() {
  const navLinks = [
    { label: 'Inicio', href: '#hero' },
    { label: 'Cómo funciona', href: '#how' },
    { label: 'Comunidad', href: '#community' },
  ];

  return (
    <header className="bg-background py-6">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-center md:justify-between items-center">
        <div className="flex items-center gap-3">
        <a href="#">
          <img src={logo} alt="Logo de Moteando" className="h-12 w-auto" />
        </a>
          <span className="sr-only">Moteando - Comunidad motera</span>
        </div>

        
        <nav className="hidden md:flex items-center gap-6 font-thin text-light">
          {navLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              className="hover:text-orange transition text-lg font-thin"
            >
              {link.label}
            </a>
          ))}
          <ButtonPrincipal href="#cta" className="text-lg font-medium px-4 py-2">
            Descargar
          </ButtonPrincipal>
        </nav>
      </div>
    </header>
  );
}
