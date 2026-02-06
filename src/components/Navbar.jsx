import { useState, useEffect } from 'react';
import { CartWidget } from './CartWidget.jsx';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products/category-list')
      .then(res => res.json())
      .then(data => setCats(data.slice(0, 24)));
  }, []);

  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 flex justify-between items-center px-12 py-4 transition-all duration-300">
      {/* Logo con espaciado elegante */}
      <Link to="/" className="text-2xl font-black tracking-tighter text-indigo-900 hover:opacity-80 transition-opacity">
        BOURY<span className="text-blue-600">.</span>
      </Link>

      {/* Links de Navegación */}
      <ul className="flex gap-12 font-medium text-gray-500 text-[11px] uppercase tracking-[0.2em] items-center">
        <li>
          <Link to="/" className="hover:text-blue-600 transition-colors duration-300 relative group">
            Inicio
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
          </Link>
        </li>

        {/* Mega Menú de Categorías */}
        <li className="relative group cursor-pointer py-2">
          <span className="group-hover:text-blue-600 transition-colors duration-300 flex items-center gap-2">
            Categorías
            <svg className="w-3 h-3 opacity-50 group-hover:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
          </span>
          
          {/* Panel Desplegable Estiloso */}
          <div className="absolute hidden group-hover:block pt-4 -left-64 w-[650px]">
            <ul className="grid grid-cols-4 gap-x-8 gap-y-3 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.1)] p-8 rounded-2xl border border-gray-50 animate-in fade-in slide-in-from-top-2 duration-300">
              {cats.map(c => (
                <li key={c}>
                  <Link 
                    to={`/category/${c}`} 
                    className="text-gray-400 hover:text-blue-600 text-[10px] font-bold transition-all block py-1 hover:translate-x-1 capitalize"
                  >
                    {c.replace('-', ' ')}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </li>
      </ul>
     
      
      {/* Carrito con estilo */}
      <div className="hover:scale-110 transition-transform duration-300">
        <CartWidget />
      </div>
    </nav>
  );
};