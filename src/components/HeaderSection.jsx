export default function Header() {
    return (
      <header className="bg-gray-900 text-white shadow-md">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold tracking-wide">Moteando</h1>
          <nav className="space-x-6 text-sm uppercase font-semibold">
            <a href="#features" className="hover:text-orange-400">Características</a>
            <a href="#screenshots" className="hover:text-orange-400">Capturas</a>
            <a href="#download" className="hover:text-orange-400">Descargar</a>
          </nav>
        </div>
      </header>
    );
  }
  