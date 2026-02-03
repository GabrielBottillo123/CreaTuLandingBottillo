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
    <nav className="fixed w-full z-50 bg-white shadow-sm flex justify-between items-center px-10 py-5">
      <Link to="/" className="text-2xl font-black text-blue-600">BOURY</Link>

      <ul className="flex gap-10 font-bold text-gray-600 uppercase text-xs tracking-widest">
        <li><Link to="/">Inicio</Link></li>
        <li className="relative group cursor-pointer">
          Categorías
          <ul className="absolute hidden group-hover:grid grid-cols-3 gap-4 bg-white shadow-xl p-6 w-[500px] -left-40 rounded-xl border">
            {cats.map(c => (
              <li key={c}>
                <Link to={`/category/${c}`} className="hover:text-blue-600 capitalize">
                  {c.replace('-', ' ')}
                </Link>
              </li>
            ))}
          </ul>
        </li>
      </ul>

      <CartWidget />
    </nav>
  );
};