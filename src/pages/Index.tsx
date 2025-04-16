
import React from 'react';
import ProductCard from '@/components/ProductCard';
import Cart from '@/components/Cart';
import { Button } from "@/components/ui/button";
import { ShoppingCart } from 'lucide-react';
import { useCart } from '@/hooks/useCart';

const products = [

  {
    id: 1,
    name: "Classic White Sneakers",
    price: 79.99,
    image: "https://cdn.thewirecutter.com/wp-content/media/2024/05/white-sneaker-2048px-9338.jpg?auto=webp&quality=75&width=1024",
  },
  {
    id: 2,
    name: "Leather Backpack",
    price: 129.99,
    image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSNoICWGCFXH10dg7WRZuHRYakg280Z1A7OGeboWGsxBMq4LDzjR-Nmpx5VxvFRAAvNqfn3LBMsiWTOd2uUYs1icuDldt8e-DyCbyn_DueBbpN_yE_9OW-L",
  },
  {
    id: 3,
    name: "Wireless Headphones",
    price: 199.99,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ73Wk1iY6khfIzhg9WRDiR40Y91DoRxuj4hA&s",
  },
  {
    id: 4,
    name: "Smart Watch",
    price: 299.99,
    image: "https://rukminim2.flixcart.com/image/450/500/xif0q/smartwatch/s/i/u/-original-imah76jt64ffmwg4.jpeg?q=90&crop=false",
  },{
    id: 1,
    name: "Classic White Sneakers",
    price: 79.99,
    image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTdTIW_kNtAEskXFSzHwEWiyhr6oLhcYOTpZ-IAFNB6LVhrmQMl1djr6gNrRAiVrYSZV9xkjmtSOXYkJW70DQUaydqB3hJtZZulKAaivZzeQ2vPA2lizybpKw",
  },
  {
    id: 1,
    name: "Bag",
    price: 79.99,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy9vORcTflWmXm-5agQfUBZti6bhic2PTJXg&s",
  },
  {
    id: 1,
    name: "Phone Back Cover",
    price: 79.99,
    image: "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/19713792/2022/8/29/5b34a25a-0605-454b-82d7-142968d7fd941661765877810MarbleBlackOnyx-GlassCaseForIphone131.jpg",
  },{
    id: 1,
    name: "Bike Silencer",
    price: 79.99,
    image: "https://rukminim3.flixcart.com/image/850/1000/xif0q/bike-exhaust-system/7/f/n/0-5-universal-stainless-steel-exhaust-silencer-for-all-bikes-original-imah5fcfbehysmus.jpeg?q=20&crop=false",
  },
];

const Index = () => {
  const { openCart, items } = useCart();
  const totalItems = items.reduce((sum, item) => sum + (item.quantity || 0), 0);

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">Shop</h1>
          <Button
            onClick={openCart}
            variant="outline"
            className="relative"
          >
            <ShoppingCart className="h-5 w-5" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-indigo-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>

      <Cart />
    </div>
  );
};

export default Index;
