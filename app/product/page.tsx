import Image from "next/image";

import { PageHeader } from "@/components/cart/PageHeader";
import FooterSection from "@/components/sections/footer-section";
import ReviewsSection from "@/components/sections/review-section";

export default function ProductPage() {
  return (
    <div className="min-h-screen bg-white">
     
     <PageHeader />
      {/* Main Section */}
      <main className="px-6 md:px-16 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Product Images */}
          <div>
            <div className="border rounded-md mb-4">
              <Image
                src="/images/product-img/1.png"
                alt="Product"
                width={600}
                height={600}
                className="w-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-2">
              <Image
                src="/images/product-img/2.png"
                alt="Thumbnail 1"
                width={100}
                height={100}
                className="rounded-md border"
              />
              <Image
                src="/images/product-img/3.png"
                alt="Thumbnail 2"
                width={100}
                height={100}
                className="rounded-md border"
              />
              <Image
                src="/images/product-img/4.png"
                alt="Thumbnail 3"
                width={100}
                height={100}
                className="rounded-md border"
              />
              <Image
                src="/images/product-thumb4.png"
                alt="Thumbnail 4"
                width={100}
                height={100}
                className="rounded-md border"
              />
            </div>
          </div>

          {/* Product Details */}
          <div>
            <h1 className="text-3xl font-bold">ONE LIFE GRAPHIC T-SHIRT</h1>
            <div className="flex items-center mt-2 space-x-2">
              <span className="text-green-600 font-semibold">4.5/5</span>
              <span className="text-gray-500">(451 Reviews)</span>
            </div>
            <div className="flex items-center mt-4 space-x-4">
              <span className="text-xl text-red-500">$260</span>
              <span className="text-gray-400 line-through">$300</span>
              <span className="text-green-600 font-medium">-40%</span>
            </div>
            <p className="text-gray-700 mt-4">
              This graphic t-shirt is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.
            </p>

            {/* Color Options */}
            <div className="mt-6">
              <h2 className="font-semibold">Select Colors</h2>
              <div className="flex items-center mt-2 space-x-4">
                <button className="w-8 h-8 bg-green-700 rounded-full"></button>
                <button className="w-8 h-8 bg-gray-800 rounded-full"></button>
                <button className="w-8 h-8 bg-blue-700 rounded-full"></button>
              </div>
            </div>

            {/* Size Options */}
            <div className="mt-6">
              <h2 className="font-semibold">Choose Size</h2>
              <div className="flex mt-2 space-x-4">
                <button className="px-4 py-2 border rounded-md">S</button>
                <button className="px-4 py-2 border rounded-md">M</button>
                <button className="px-4 py-2 border rounded-md">L</button>
                <button className="px-4 py-2 border rounded-md">XL</button>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex items-center space-x-4 mt-8">
              <button className="bg-black text-white px-6 py-3 rounded-md">
                Add to Cart
              </button>
              <button className="border px-6 py-3 rounded-md">Buy Now</button>
            </div>
          </div>
        </div>

        {/* Reviews Section
        <section className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">Customer Reviews</h2>
          <div className="space-y-4">
            <div className="border rounded-md p-4">
              <p className="font-semibold">John D.</p>
              <p className="text-gray-500 text-sm">Posted on October 1, 2023</p>
              <p className="mt-2">
                Amazing quality! The fabric is so comfortable and fits
                perfectly.
              </p>
            </div>
            <div className="border rounded-md p-4">
              <p className="font-semibold">Jane A.</p>
              <p className="text-gray-500 text-sm">Posted on October 3, 2023</p>
              <p className="mt-2">
                I love this t-shirt. The colors are vibrant and stay the same
                after washing!
              </p>
            </div>
          </div>
        </section> */}

        <ReviewsSection />

        {/* Related Products */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">You Might Also Like</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="border p-4 rounded-md">
              <Image
                src="/images/product-img/7.png"
                alt="Related Product 1"
                width={150}
                height={150}
                className="w-full object-cover rounded-md"
              />
              <p className="mt-2 font-medium">Polo with Contrast Trims</p>
              <p className="text-red-500">$50</p>
            </div>
            <div className="border p-4 rounded-md">
              <Image
                src="/images/product-img/8.png"
                alt="Related Product 2"
                width={150}
                height={150}
                className="w-full object-cover rounded-md"
              />
              <p className="mt-2 font-medium">Gradient Graphic T-shirt</p>
              <p className="text-red-500">$70</p>
            </div>
            <div className="border p-4 rounded-md">
              <Image
                src="/images/product-img/9.png"
                alt="Related Product 3"
                width={150}
                height={150}
                className="w-full object-cover rounded-md"
              />
              <p className="mt-2 font-medium">Polo with Tipping Details</p>
              <p className="text-red-500">$65</p>
            </div>
            <div className="border p-4 rounded-md">
              <Image
                src="/images/product-img/10.png"
                alt="Related Product 4"
                width={150}
                height={150}
                className="w-full object-cover rounded-md"
              />
              <p className="mt-2 font-medium">Black Striped T-shirt</p>
              <p className="text-red-500">$55</p>
            </div>
          </div>
        </section>
      </main>

        <FooterSection />
    </div>
  );
}
