import { Link } from 'react-router-dom';

const Item = ({ producto }) => {
  return (
    <div className="group relative bg-white rounded-[2rem] overflow-hidden transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-gray-100 flex flex-col h-full">
      
      {/* Contenedor de Imagen con Zoom y Badge */}
      <div className="relative overflow-hidden bg-[#f9f9f9] aspect-square flex items-center justify-center p-8">
        <div className="absolute top-4 left-4 z-10">
          <span className="bg-white/90 backdrop-blur-md text-[10px] font-black px-3 py-1 rounded-full shadow-sm text-indigo-950 uppercase tracking-widest">
            {producto.category.replace('-', ' ')}
          </span>
        </div>
        
        <img 
          src={producto.thumbnail} 
          alt={producto.title} 
          className="object-contain w-full h-full transform transition-transform duration-700 group-hover:scale-110 mix-blend-multiply" 
        />
        
        {/* Overlay sutil al hacer hover */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
      </div>

      {/* Cuerpo de la Card */}
      <div className="p-8 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-3">
          <h2 className="text-xl font-black text-indigo-950 tracking-tighter leading-tight group-hover:text-blue-600 transition-colors">
            {producto.title}
          </h2>
        </div>
        
        <p className="text-gray-400 text-xs leading-relaxed mb-6 line-clamp-2 font-medium">
          {producto.description}
        </p>

        {/* Precio y Botón */}
        <div className="mt-auto flex items-center justify-between pt-4 border-t border-gray-50">
          <span className="text-2xl font-light text-gray-900">
            ${producto.price}
          </span>

          <Link 
            to={`/item/${producto.id}`} 
            className="bg-indigo-950 text-white text-[10px] font-bold uppercase tracking-[0.2em] px-6 py-3 rounded-full hover:bg-blue-600 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
          >
            Detalles
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Item;