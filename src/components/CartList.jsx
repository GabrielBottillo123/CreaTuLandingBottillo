import { CartItem } from './CartItem'; 
import { Link } from 'react-router-dom';


const CartList = ({ cart, total }) => {
  return (
    <div className="max-w-4xl mx-auto p-10 pt-24">
      <h1 className="text-3xl font-black mb-8">Tu Carrito</h1>
      
      <div className="space-y-6">
        {cart.map((item) => (
           <CartItem key={item.id} item={item} />
        ))}
      </div>

      <div className="mt-10 flex justify-end">
        <div className="text-right">
          <p className="text-xl font-bold">Total: ${total.toFixed(2)}</p>
          <Link to="/checkout">

          
   <button 
    type="submit" 
    className="w-full bg-indigo-950 text-white text-[11px] font-bold uppercase tracking-[0.2em] px-8 py-5 rounded-full mt-12 hover:bg-blue-600 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2"
>
    Finalizar Compra 🚀
</button>
  </Link>
</div>

        </div>
      </div>
   
  );
};

export default CartList;