import { useState, useContext, useEffect } from 'react';
import { CartContext } from '../Context/CartContext';

const ItemQuantitySelector = ({ stock = 10, product }) => {
    const [quantity, setQuantity] = useState(1);
    const { addToCart } = useContext(CartContext);

    const increment = () => { if (quantity < stock) setQuantity(prev => prev + 1); };
    const decrement = () => { if (quantity > 1) setQuantity(prev => prev - 1); };

    return (
        <section className="flex flex-col w-full max-w-xs items-center gap-6 p-4 border rounded-xl bg-gray-50 shadow-sm">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500">Cantidad</h3>
            
            <div className="flex items-center gap-8">
                <p className="text-4xl font-mono font-black text-gray-800 tabular-nums">
                    {quantity.toString().padStart(2, '0')}
                </p>
            </div>

            <div className="flex flex-wrap justify-center gap-3">
                <button onClick={decrement} disabled={quantity <= 1} className="flex h-10 w-12 items-center justify-center rounded-lg bg-white border border-red-200 text-red-600 transition-all hover:bg-red-50 disabled:opacity-30"> - </button>
                <button onClick={increment} disabled={quantity >= stock} className="flex h-10 w-12 items-center justify-center rounded-lg bg-white border border-green-200 text-green-600 transition-all hover:bg-green-50 disabled:opacity-30"> + </button>

                <button 
                    onClick={() => {
                        if (product) {
                            addToCart(product, quantity);
                        } else {
                            console.error("No se pudo agregar el producto es undefined");
                        }
                    }}
                    className="w-full mt-2 px-6 py-3 bg-black text-white text-xs font-bold uppercase rounded-md tracking-widest hover:bg-gray-800 transition-colors shadow-lg active:scale-95"
                >
                    Agregar al carrito
                </button>
            </div>
        </section>
    );
};

export default ItemQuantitySelector;