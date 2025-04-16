
import React from 'react';
import { Button } from "@/components/ui/button";
import { useCart } from '@/hooks/useCart';
import { MinusIcon, PlusIcon } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart, removeFromCart, getQuantity } = useCart();
  const quantity = getQuantity(product.id);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-[1.02]">
      <div className="aspect-square overflow-hidden bg-gray-200">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
        <p className="text-gray-600 mt-1">${product.price.toFixed(2)}</p>
        
        {quantity === 0 ? (
          <Button 
            onClick={() => addToCart(product)}
            className="w-full mt-4 bg-indigo-600 hover:bg-indigo-700"
          >
            Add to Cart
          </Button>
        ) : (
          <div className="flex items-center justify-between mt-4">
            <Button
              variant="outline"
              size="icon"
              onClick={() => removeFromCart(product.id)}
              className="h-8 w-8"
            >
              <MinusIcon className="h-4 w-4" />
            </Button>
            <span className="font-semibold">{quantity}</span>
            <Button
              variant="outline"
              size="icon"
              onClick={() => addToCart(product)}
              className="h-8 w-8"
            >
              <PlusIcon className="h-4 w-4" />
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
