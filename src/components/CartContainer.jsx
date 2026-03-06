import { useContext } from 'react';
import { CartContext } from '../Context/CartContext';
import { Link } from 'react-router-dom';
import CartList from './CartList';

export const CartContainer = () => {
  const { cart } = useContext(CartContext);

  // Calculamos el total de la compra
  const total = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  if (cart.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[500px] gap-4">
        <h2 className="text-2xl font-bold text-gray-800">Tu carrito está vacío!!</h2>
        <Link to="/" className="btn bg-black text-white px-6 py-2 rounded-lg">
          Volver a comprar
        </Link>
      </div>
    );
  }

  return (
<CartList cart={cart} total={total} />  );
};