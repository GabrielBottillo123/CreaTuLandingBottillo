import { useCart } from '../Context/CartContext';

export const CartItem = ({ item }) => {
  const { removeItem } = useCart();

  return (
    <div className="flex items-center gap-6 border-b pb-6">
      {/* Imagen del producto */}
      <img src={item.url} alt={item.name} className="w-20 h-20 object-contain" />
      
      {/* Info del producto */}
      <div className="flex-1">
        <h3 className="font-bold">{item.name}</h3>
        <p className="text-sm text-gray-500">Cantidad: {item.quantity}</p>
      </div>

      {/* Precio y Botón Eliminar */}
      <div className="text-right flex flex-col items-end gap-2">
        <p className="font-bold">${(item.price * item.quantity).toFixed(2)}</p>
        
        <button 
          onClick={() => removeItem(item.id)} 
          className="bg-red-500 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full hover:bg-red-600 transition-all duration-300"
        >
          Eliminar 🗑️
        </button>
      </div>
    </div>
  );
};