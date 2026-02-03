//este componente sirve como carrito de compras
//indica los productos comprados o en ejecucion
//en un futuro podremos darle funcionalidad como abrirlo y mostrar los productos, eliminarlos, etc

import { ShoppingCart } from 'lucide-react';

export const CartWidget = () => {
  return (
    <div className="rounded-full relative flex items-center p-2 cursor-pointer hover:bg-gray-100">
      <ShoppingCart />
      <span className="absolute -top-1 -right-1 grid place-items-center h-5 w-5 rounded-full bg-red-600 text-[10px] font-bold text-white border-2 border-white">
        2
      </span>
    </div>
  );
};
