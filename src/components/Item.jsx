//este componente se encarga de establecer el estilo y estructura de un card individual
//todos los cards se veran iguales
//traemos mediante inyeccion el titulo, descrpcion, imagen, etc. de cada producto
//linea 18: sirve para redirigir hacia una url nueva de un producto especifico al clikearlo - alternativa de Navigate

import {Link} from 'react-router-dom';

const Item = ({producto}) => {
  return (
    <div className="card bg-white shadow-xl border p-4">
      <figure>
        <img src={producto.thumbnail} alt={producto.title} className="rounded-xl h-48 w-full object-cover" />
      </figure>
      <div className="card-body mt-4">
        <h2 className="card-title font-bold text-lg uppercase">{producto.title}</h2>
        <p className="text-gray-600 text-sm line-clamp-2">{producto.description}</p>
        <div className="card-actions justify-center mt-4">
     <Link 
          to={`/item/${producto.id}`} 
          className="btn btn-primary"
        >
          <a href="" className="inline-block bg-blue-600 text-white text-sm font-bold uppercase tracking-wider px-8 py-3 rounded-full hover:bg-blue-700 hover:scale-105 hover:shadow-xl transition-all duration-300 ease-in-out shadow-md">
            Ver más
          </a>
        </Link>
      </div>
      </div>
    </div>
  );
};

export default Item;

//