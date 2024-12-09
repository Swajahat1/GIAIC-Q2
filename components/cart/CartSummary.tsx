"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CartItemType } from "@/lib/types";

interface CartSummaryProps {
  items: CartItemType[];
}

export function CartSummary({ items }: CartSummaryProps) {
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discount = subtotal * 0.2;
  const deliveryFee = 15;
  const total = subtotal - discount + deliveryFee;

  return (
    <div className="bg-gray-50 rounded-lg p-6 h-fit">
      <h2 className="text-lg font-medium text-gray-900">Order Summary</h2>

      <div className="mt-6 space-y-4">
        <div className="flex justify-between">
          <p className="text-sm text-gray-600">Subtotal</p>
          <p className="text-sm font-medium text-gray-900">${subtotal}</p>
        </div>

        <div className="flex justify-between">
          <p className="text-sm text-gray-600">Discount (-20%)</p>
          <p className="text-sm font-medium text-red-600">-${discount}</p>
        </div>

        <div className="flex justify-between">
          <p className="text-sm text-gray-600">Delivery Fee</p>
          <p className="text-sm font-medium text-gray-900">${deliveryFee}</p>
        </div>

        <div className="border-t pt-4">
          <div className="flex justify-between">
            <p className="text-base font-medium text-gray-900">Total</p>
            <p className="text-base font-medium text-gray-900">${total}</p>
          </div>
        </div>

        <div className="mt-6">
          <div className="flex gap-2">
            <Input placeholder="Add promo code" className="flex-1" />
            <Button variant="outline">Apply</Button>
          </div>
        </div>

        <Button className="w-full">Go to Checkout</Button>
      </div>
    </div>
  );
}