"use client";

import { Minus, Plus, Trash2, X } from "lucide-react";
import Image from "next/image";
import { CartItemType } from "@/lib/types";

interface CartItemProps {
  item: CartItemType;
  onUpdateQuantity: (id: string, quantity: number) => void;
  onRemove: (id: string) => void;
}

export function CartItem({ item, onUpdateQuantity, onRemove }: CartItemProps) {
  return (
    <div className="flex gap-6 py-6 border-b">
      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border">
        <Image
          src={item.image}
          alt={item.name}
          width={96}
          height={96}
          className="h-full w-full object-cover object-center"
        />
      </div>

      <div className="flex flex-1 flex-col">
        <div className="flex justify-between text-base font-medium text-gray-900">
          <h3>{item.name}</h3>
          <button
            onClick={() => onRemove(item.id)}
            className="text-gray-500 hover:text-gray-700"
          >
            <Trash2 className="h-5 w-5" />
          </button>
        </div>
        <p className="mt-1 text-sm text-gray-500">Size: {item.size}</p>
        <p className="mt-1 text-sm text-gray-500">Color: {item.color}</p>

        <div className="flex items-center justify-between mt-4">
          
        <p className="ml-4">${item.price}</p>
          

          <div className="flex items-center border rounded-md">
            <button
              onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
              className="p-2 hover:bg-gray-100"
            >
              <Minus className="h-4 w-4" />
            </button>
            <span className="px-4">{item.quantity}</span>
            <button
              onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
              className="p-2 hover:bg-gray-100"
            >
              <Plus className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}