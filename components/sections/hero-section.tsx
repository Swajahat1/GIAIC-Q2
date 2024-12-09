"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <div className="relative bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              FIND CLOTHES THAT MATCHES YOUR STYLE
            </h1>
            <p className="mt-6 text-lg text-gray-600">
              Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality.
            </p>
            <Link href="/product">
            <Button className="mt-8 px-8 py-6 text-lg">Shop Now</Button>
            </Link>
          </div>
          <div className="relative h-[500px]">
            <Image
              src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=800&q=80"
              alt="Fashion Model"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}