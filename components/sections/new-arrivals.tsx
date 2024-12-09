"use client";

import { ProductCard } from "@/components/ui/product-card";
import { Button } from "@/components/ui/button";

const newArrivals = [
  {
    id: 1,
    title: "T-shirt with Tape Details",
    price: 120,
    rating: 4.5,
    totalRatings: 5,
    image: "/images/arrivals/tape.png",
    
  },
  {
    id: 2,
    title: "Skinny Fit Jeans",
    price: 240,
    originalPrice: 260,
    discount: 20,
    rating: 3.5,
    totalRatings: 5,
    image: "/images/arrivals/jeans.png",
  },
  {
    id: 3,
    title: "Checkered Shirt",
    price: 180,
    rating: 4.5,
    totalRatings: 5,
    image: "/images/arrivals/check.png",
  },
  {
    id: 4,
    title: "Sleeve Striped T-shirt",
    price: 130,
    originalPrice: 160,
    discount: 30,
    rating: 4.5,
    totalRatings: 5,
    image: "/images/arrivals/sleeve.png",
  },
];

export function NewArrivals() {
  return (
    <section className="py-20">
      <div className="container">
        <h2 className="text-4xl font-bold text-center mb-12">NEW ARRIVALS</h2>
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