
import React from 'react';
import { Button } from "@/components/ui/button";
import { useCart } from '@/hooks/useCart';
import { MinusIcon, PlusIcon, ShoppingCart, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { isOpen, closeCart, items, addToCart, removeFromCart, total } = useCart();
  const navigate = useNavigate();

  const handleCheckout = () => {
    closeCart();
    navigate('/payment');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50">
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl transform transition-transform duration-300 ease-in-out">
        <div className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center">
            <ShoppingCart className="h-6 w-6 mr-2" />
            <h2 className="text-lg font-semibold">Your Cart</h2>
          </div>
          <Button variant="ghost" size="icon" onClick={closeCart}>
            <X className="h-6 w-6" />
          </Button>
        </div>

        <div className="p-4 flex flex-col h-[calc(100vh-180px)] overflow-auto">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-gray-500">
              <ShoppingCart className="h-12 w-12 mb-4" />
              <p>Your cart is empty</p>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.id} className="flex items-center py-4 border-b">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-16 w-16 object-cover rounded"
                />
                <div className="ml-4 flex-1">
                  <h3 className="font-medium">{item.name}</h3>
                  <p className="text-gray-600">${item.price.toFixed(2)}</p>
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => removeFromCart(item.id)}
                    className="h-8 w-8"
                  >
                    <MinusIcon className="h-4 w-4" />
                  </Button>
                  <span className="w-8 text-center">{item.quantity}</span>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => addToCart(item)}
                    className="h-8 w-8"
                  >
                    <PlusIcon className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-4 border-t bg-white">
          <div className="flex justify-between mb-4">
            <span className="font-semibold">Total:</span>
            <span className="font-semibold">${total.toFixed(2)}</span>
          </div>
          <Button
            onClick={handleCheckout}
            className="w-full bg-indigo-600 hover:bg-indigo-700"
            disabled={items.length === 0}
          >
            Checkout
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
