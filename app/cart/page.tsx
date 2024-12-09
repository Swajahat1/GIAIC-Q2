"use client";

import { CartItem } from "@/components/cart/CartItem";
import { CartSummary } from "@/components/cart/CartSummary";
import { PageHeader } from "@/components/cart/PageHeader";
import { Newsletter } from "@/components/cart/Newsletter";
import FooterSection from "@/components/sections/footer-section";
import { useCart } from "@/lib/cart-context";

export default function CartPage() {
  const { items, updateQuantity, removeItem } = useCart();

  return (
    <div className="min-h-screen bg-white">
      <PageHeader />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">YOUR CART</h1>
        
        {items.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500">Your cart is empty</p>
          </div>
        ) : (
          <div className="mt-8 grid grid-cols-1 gap-x-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <div className="space-y-6">
                {items.map((item) => (
                  <CartItem 
                    key={item.id}
                    item={item}
                    onUpdateQuantity={updateQuantity}
                    onRemove={removeItem}
                  />
                ))}
              </div>
            </div>

            <CartSummary items={items} />
          </div>
        )}
      </main>

      <Newsletter />
      <FooterSection />
    </div>
  );
}