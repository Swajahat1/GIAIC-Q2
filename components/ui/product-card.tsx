"use client";

import { Card } from "@/components/ui/card";
import { StarRating } from "@/components/ui/star-rating";

interface ProductCardProps {
  product: {
    id: number;
    title: string;
    price: number;
    originalPrice?: number;
    discount?: number;
    rating: number;
    totalRatings: number;
    image: string;
  };
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="overflow-hidden group cursor-pointer">
      <div className="relative aspect-[3/4]">
        <img
          src={product.image}
          alt={product.title}
          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
        />
        {product.discount && (
          <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 text-sm font-medium rounded">
            -{product.discount}%
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-medium mb-2">{product.title}</h3>
        <div className="flex items-center gap-2 mb-2">
          <StarRating rating={product.rating} totalRatings={product.totalRatings} />
        </div>
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold">${product.price}</span>
          {product.originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              ${product.originalPrice}
            </span>
          )}
        </div>
      </div>
    </Card>
  );
}