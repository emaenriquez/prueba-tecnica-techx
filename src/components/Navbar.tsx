import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <nav className="max-w-6xl mx-auto px-4 py-5 flex justify-between items-center">
        <p className="text-xl font-bold text-gray-800">TechX</p>
        <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <li><a href="#productos" className="hover:text-blue-600">Productos</a></li>
          <li><a href="#contacto" className="hover:text-blue-600">Contacto</a></li>
        </ul>

        {/* menu icon móvil */}
        <button
          className="md:hidden text-gray-800"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Menú móvil */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg px-4 pb-4">
          <ul className="space-y-2 text-gray-700 font-medium">
            <li><a href="#productos" onClick={() => setIsOpen(false)}>Productos</a></li>
            <li><a href="#contacto" onClick={() => setIsOpen(false)}>Contacto</a></li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
