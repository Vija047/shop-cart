
import React, { createContext, useContext, useState } from 'react';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity?: number;
}

interface CartContextType {
  items: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  getQuantity: (productId: number) => number;
  total: number;
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [items, setItems] = useState<Product[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const addToCart = (product: Product) => {
    setItems(currentItems => {
      const existingItem = currentItems.find(item => item.id === product.id);
      
      if (existingItem) {
        return currentItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: (item.quantity || 0) + 1 }
            : item
        );
      }
      
      return [...currentItems, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId: number) => {
    setItems(currentItems => {
      const existingItem = currentItems.find(item => item.id === productId);
      
      if (existingItem?.quantity === 1) {
        return currentItems.filter(item => item.id !== productId);
      }
      
      return currentItems.map(item =>
        item.id === productId
          ? { ...item, quantity: (item.quantity || 0) - 1 }
          : item
      );
    });
  };

  const getQuantity = (productId: number) => {
    return items.find(item => item.id === productId)?.quantity || 0;
  };

  const total = items.reduce((sum, item) => sum + (item.price * (item.quantity || 0)), 0);

  return (
    <CartContext.Provider value={{
      items,
      addToCart,
      removeFromCart,
      getQuantity,
      total,
      isOpen,
      openCart: () => setIsOpen(true),
      closeCart: () => setIsOpen(false),
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
