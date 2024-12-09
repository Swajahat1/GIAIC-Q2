"use client";

import { use, useState } from "react";

const reviews = [
  {
    id: 1,
    name: "Samantha D.",
    avatar: "🟢", // Replace with actual image if required
    date: "August 14, 2023",
    rating: 5,
    review:
      "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.",
  },
  {
    id: 2,
    name: "Alex M.",
    avatar: "🟢",
    date: "August 15, 2023",
    rating: 4,
    review:
      "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.",
  },
  {
    id: 3,
    name: "Ethan R.",
    avatar: "🟢",
    date: "August 16, 2023",
    rating: 5,
    review:
      "This t-shirt is a must-have for anyone who appreciates good design. The minimalist yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt.",
  },
  {
    id: 4,
    name: "Olivia P.",
    avatar: "🟢",
    date: "August 17, 2023",
    rating: 4,
    review:
      "As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out.",
  },
  {
    id: 5,
    name: "Liam K.",
    avatar: "🟢",
    date: "August 18, 2023",
    rating: 4,
    review:
      "This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. It's like wearing a piece of art that reflects my passion for both design and fashion.",
  },
  {
    rating: 1,
    id: 6,
    name: "Ava H.",
    avatar: "🟢",
    date: "August 19, 2023",
    
    review:
      "I'm not just wearing a t-shirt; I'm wearing a piece of design philosophy. The intricate details and thoughtful layout of the design make this shirt a conversation starter.",
  },
];

export default function ReviewsSection() {
  const [sort, setSort] = useState("Latest");

  return (
    <section className="py-12">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-semibold">All Reviews (451)</h2>
        <div className="flex items-center space-x-4">
          <select
            className="border rounded-md px-4 py-2"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="Latest">Latest</option>
            <option value="Oldest">Oldest</option>
            <option value="Highest">Highest Rated</option>
            <option value="Lowest">Lowest Rated</option>
          </select>
          <button className="px-4 py-2 bg-black text-white rounded-md">
            Write a Review
          </button>
        </div>
      </div>

      {/* Reviews Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
          >
            
            <div className="flex items-center space-x-2 mb-2">
                <div className="flex space-x-1 mb-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  fill={i < review.rating ? "currentColor" : "none"}
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className={`w-5 h-5 ${
                    i < review.rating ? "text-yellow-400" : "text-gray-300"
                  }`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.48 2.386a.5.5 0 01.96 0l1.464 4.507a.5.5 0 00.476.342h4.771a.5.5 0 01.291.9l-3.864 2.804a.5.5 0 00-.182.557l1.464 4.507a.5.5 0 01-.77.557l-3.864-2.804a.5.5 0 00-.588 0l-3.864 2.804a.5.5 0 01-.77-.557l1.464-4.507a.5.5 0 00-.182-.557L2.998 8.135a.5.5 0 01.291-.9h4.771a.5.5 0 00.476-.342L11.48 2.386z"
                  />
                </svg>
              ))}
            </div>
            <p className="font-semibold">{review.name}</p>
              <span className="text-green-500 text-lg">{review.avatar}</span>
            </div>
            <p className="text-sm text-gray-500 mb-2">Posted on {review.date}</p>
            <p className="text-gray-700">{review.review}</p>
            <div className="flex space-x-1 mb-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  fill={i < review.rating ? "currentColor" : "none"}
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className={`w-5 h-5 ${
                    i < review.rating ? "text-yellow-400" : "text-gray-300"
                  }`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.48 2.386a.5.5 0 01.96 0l1.464 4.507a.5.5 0 00.476.342h4.771a.5.5 0 01.291.9l-3.864 2.804a.5.5 0 00-.182.557l1.464 4.507a.5.5 0 01-.77.557l-3.864-2.804a.5.5 0 00-.588 0l-3.864 2.804a.5.5 0 01-.77-.557l1.464-4.507a.5.5 0 00-.182-.557L2.998 8.135a.5.5 0 01.291-.9h4.771a.5.5 0 00.476-.342L11.48 2.386z"
                  />
                </svg>
              ))}
            </div>
            
          </div>
        ))}
      </div>

      {/* Load More Button */}
      <div className="text-center mt-8">
        <button className="px-6 py-3 bg-black text-white rounded-md">
          Load More Reviews
        </button>
      </div>
    </section>
  );
}
