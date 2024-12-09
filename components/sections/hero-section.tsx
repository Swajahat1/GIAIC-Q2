"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <div className="relative h-screen w-full bg-gray-50">
      {/* Background Image */}
      <Image
        src="/images/hero/1.png"
        alt="Fashion Model"
        fill
        className="object-cover"
      />
      
      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col justify-center items-start text-left px- md:px-16 lg:px-24 text-black">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
          FIND CLOTHES THAT MATCHES YOUR STYLE
        </h1>
        <p className="mt-6 text-lg text-#00000099-600 max-w-lg">
          Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality.
        </p>
        <Link href="/product">
          <Button className="mt-8 bg-black px-8 py-4 text-lg">
            Shop Now
          </Button>
        </Link>
      </div>
    </div>
  );
}
