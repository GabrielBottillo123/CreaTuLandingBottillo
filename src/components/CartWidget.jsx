import { useContext } from 'react'
import { CartContext } from '../Context/CartContext'
import { ShoppingCart } from 'lucide-react';
import { useNavigate } from 'react-router-dom'; 

export const CartWidget = () => {
  const { totalItems } = useContext(CartContext)
  const navigate = useNavigate(); 

  return (
    <div 
      className="rounded-full relative flex items-center p-2 cursor-pointer hover:bg-gray-100"
      onClick={() => navigate('/cart')} 
    >
      <ShoppingCart />
      
      <span className="absolute -top-1 -right-1 grid place-items-center h-5 w-5 rounded-full bg-red-600 text-[10px] font-bold text-white border-2 border-white">
        {totalItems || 0} 
      </span>
    </div>
  );
};