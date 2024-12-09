
"use client";

import { ProductCard } from "@/components/ui/product-card";
import { Button } from "@/components/ui/button";

const newArrivals = [
  {
    id: 1,
    title: "VERTICAL STRIPED SHIRT",
    price: 212,
    originalPrice: 232,
    rating: 4.5,
    totalRatings: 5,
    image: "/images/selling/stripped.png",
  },
  {
    id: 2,
    title: "COURAGE GRAPHIC T-SHIRT",
    price: 125,
    rating: 3.5,
    totalRatings: 5,
    image: "/images/selling/graphic.png",
    
  },
  {
    id: 3,
    title: "LOOSE FIT BERMUDA SHORTS",
    price: 80,
    rating: 4.5,
    totalRatings: 5,
    image: "/images/selling/shorts.png",
  },
  {
    id: 4,
    title: "FADED SKINNY JEANS",
    price: 210,
    rating: 4.5,
    totalRatings: 5,
    image: "/images/selling/jeans.png",
  },
];

export function FeaturedProducts() {
  return (
    <section className="py-20">
      <div className="container">
        <h2 className="text-4xl font-bold text-center mb-12">Top Selling</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {newArrivals.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="flex justify-center">
          <Button variant="outline" size="lg">
            View All
          </Button>
        </div>
      </div>
    </section>
  );
}