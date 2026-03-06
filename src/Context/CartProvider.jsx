import { CartContext } from './CartContext';
import { useState } from 'react';

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const clearCart = () => {
        setCart([]);
    };

    const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
};

    const addToCart = (product, quantity) => {
        const isInCart = cart.some((item) => item.id === product.id);

        if (isInCart) {
            setCart(cart.map((item) => 
                item.id === product.id 
                ? { ...item, quantity: item.quantity + quantity } 
                : item
            ));
        } else {
            setCart([...cart, { ...product, quantity }]);
        }
        
        console.log("Producto agregado/actualizado:", product.title);
    };

    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <CartContext.Provider value={{ cart, addToCart, totalItems, clearCart, removeItem }}>
            {children}
        </CartContext.Provider>
    );
};