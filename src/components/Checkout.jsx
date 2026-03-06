import { useCart } from '../Context/CartContext';
import { createOrder } from '../firebase/db';
import { serverTimestamp } from 'firebase/firestore';
import { useState } from 'react';
import toast from 'react-hot-toast'; 
import { useNavigate } from 'react-router-dom'; 

export const Checkout = () => {
    const { cart, clearCart } = useCart();
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate(); 

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true); 
        const form = e.target;
        
        const order = {
            buyer: {
                email: form.email.value,
                name: form.name.value,
                phone: form.phone.value,
                address: form.address.value
            },
            items: cart,
            time: serverTimestamp()
        };

        const orderId = await createOrder(order);
        setLoading(false); 

        if (orderId) {
            toast.success('¡Compra realizada con éxito!', {
                style: {
                    borderRadius: '20px',
                    background: '#1e1b4b',
                    color: '#fff',
                    padding: '20px 40px',
                    fontSize: '18px',
                    fontWeight: 'bold',
                    maxWidth: '500px'
                },
                iconTheme: {
                    primary: '#60a5fa',
                    secondary: '#fff',
                },
            });
            
            clearCart();
            
            setTimeout(() => {
                navigate('/'); 
            }, 1500);
            
        } else {
            toast.error('Hubo un error al procesar tu compra.');
        }
    };

    return (
        <div className="pt-32 pb-20 min-h-screen bg-gray-50 flex justify-center items-center px-4">
            <form 
                className="bg-white/80 backdrop-blur-sm p-10 rounded-3xl shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),10px_10px_30px_4px_rgba(45,78,255,0.15)] border border-gray-100 w-full max-w-lg transition-all duration-300"
                onSubmit={handleSubmit}
            >
                <h2 className="text-3xl font-black text-indigo-950 tracking-tighter text-center mb-2">
                    Finalizar Compra
                </h2>
                <p className="text-center text-gray-500 text-sm mb-10 font-medium">
                    Completa tus datos para procesar el pedido
                </p>
           <div className="space-y-6">
    <div className="relative group">
        <input 
            id="name" 
            name="name"
            type="text" 
            className="w-full px-6 py-4 border-2 border-gray-100 rounded-full text-sm font-medium focus:outline-none focus:border-blue-300 focus:ring-4 focus:ring-blue-100 transition-all duration-300 peer placeholder-transparent"
            placeholder="Nombre Completo" 
            defaultValue="Juan Perez" 
            required 
        />
        <label htmlFor="name" className="absolute left-6 -top-2.5 bg-white px-2 text-xs font-bold text-indigo-900 transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-focus:-top-2.5 peer-focus:text-blue-600 peer-focus:font-bold peer-focus:text-xs">
            Nombre Completo
        </label>
    </div>

    <div className="relative group">
        <input 
            id="email" 
            name="email"
            type="email" 
            className="w-full px-6 py-4 border-2 border-gray-100 rounded-full text-sm font-medium focus:outline-none focus:border-blue-300 focus:ring-4 focus:ring-blue-100 transition-all duration-300 peer placeholder-transparent"
            placeholder="Email" 
            defaultValue="juanperez@ejemplo.com" 
            required 
        />
        <label htmlFor="email" className="absolute left-6 -top-2.5 bg-white px-2 text-xs font-bold text-indigo-900 transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-focus:-top-2.5 peer-focus:text-blue-600 peer-focus:font-bold peer-focus:text-xs">
            Email
        </label>
    </div>

    <div className="relative group">
        <input 
            id="phone" 
            name="phone"
            type="tel" 
            className="w-full px-6 py-4 border-2 border-gray-100 rounded-full text-sm font-medium focus:outline-none focus:border-blue-300 focus:ring-4 focus:ring-blue-100 transition-all duration-300 peer placeholder-transparent"
            placeholder="Celular" 
            defaultValue="1122334455"
            required 
        />
        <label htmlFor="phone" className="absolute left-6 -top-2.5 bg-white px-2 text-xs font-bold text-indigo-900 transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-focus:-top-2.5 peer-focus:text-blue-600 peer-focus:font-bold peer-focus:text-xs">
            Celular
        </label>
    </div>

    <div className="relative group">
        <input 
            id="address" 
            name="address"
            type="text" 
            className="w-full px-6 py-4 border-2 border-gray-100 rounded-full text-sm font-medium focus:outline-none focus:border-blue-300 focus:ring-4 focus:ring-blue-100 transition-all duration-300 peer placeholder-transparent"
            placeholder="Dirección" 
            defaultValue="Calle Falsa 123"
            required 
        />
        <label htmlFor="address" className="absolute left-6 -top-2.5 bg-white px-2 text-xs font-bold text-indigo-900 transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-focus:-top-2.5 peer-focus:text-blue-600 peer-focus:font-bold peer-focus:text-xs">
            Dirección
        </label>
    </div>
</div>
                
                <button 
                    type="submit" 
                    className={`w-full bg-indigo-950 text-white text-[11px] font-bold uppercase tracking-[0.2em] px-8 py-5 rounded-full mt-12 hover:bg-blue-600 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
                    disabled={loading}
                >
                    {loading ? (
                        <>
                            <span className="loading loading-spinner loading-xs"></span>
                            Procesando...
                        </>
                    ) : (
                        'Confirmar Pedido'
                    )}
                </button>
            </form>
        </div>
    );
};