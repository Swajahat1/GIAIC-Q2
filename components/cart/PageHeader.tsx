"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, ShoppingCart, User } from "lucide-react";
import Link from "next/link";
import { useCart } from "@/lib/cart-context";

export function PageHeader() {
  const { itemsCount } = useCart();

  return (
    
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="bg-black text-white py-2 text-center text-sm">
        <p>Summer Sale For All Swim Suits And Free Express Delivery – OFF 50%! <Link href="/shop" className="underline">ShopNow</Link></p>
      </div>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between items-center">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold">SHOP.CO</Link>
            
            <div className="hidden sm:ml-8 sm:flex sm:space-x-8">
              <Link href="/shop" className="text-gray-500 hover:text-gray-900">Shop</Link>
              <Link href="/on-sale" className="text-gray-500 hover:text-gray-900">On Sale</Link>
              <Link href="/new-arrivals" className="text-gray-500 hover:text-gray-900">New Arrivals</Link>
              <Link href="/brands" className="text-gray-500 hover:text-gray-900">Brands</Link>
            </div>
          </div>


          <div className="relative w-80">
            <Input
              placeholder="Search for products..."
              className="pl-10"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
          </div>

          <div className="flex items-center space-x-4">
            <Link href="/cart" className="text-gray-500 hover:text-gray-900 relative">
              <ShoppingCart className="h-6 w-6" />
              {itemsCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {itemsCount}
                </span>
              )}
            </Link>
            <button className="text-gray-500 hover:text-gray-900">
              <User className="h-6 w-6" />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}


