import { createContext, useContext, useState } from "react";
import { ReactNode } from "react";
import { CartItem } from "../types/CartItem";

interface CartContextType {
    cart: CartItem[];
    addToCart: (Item: CartItem) => void;
    removeFromCart: (projectId: number) => void;
    clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [cart, setCart] = useState<CartItem[]>([]);

    const addToCart = (Item: CartItem) => {
        setCart((prevCart) => {
            const existingItem = prevCart.find((c) => c.projectId === Item.projectId);
            const updatedCart = prevCart.map((c) => 
                c.projectId === Item.projectId ? { ...c, donationAmount: c.donationAmount + Item.donationAmount } : c
            );

            return existingItem ? updatedCart : [...prevCart, Item];
        });
    };

    const removeFromCart = (projectId: number) => {
        setCart((prevCart) => prevCart.filter((c) => c.projectId !== projectId));
    };

    const clearCart = () => {
        setCart(() => []);
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
}