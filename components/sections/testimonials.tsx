"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react";
import { StarRating } from "@/components/ui/star-rating";

interface Testimonial {
  id: number;
  name: string;
  rating: number;
  comment: string;
  verified: boolean;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah M.",
    rating: 5,
    comment: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
    verified: true,
  },
  {
    id: 2,
    name: "Alex K.",
    rating: 5,
    comment: "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
    verified: true,
  },
  {
    id: 3,
    name: "James L.",
    rating: 5,
    comment: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
    verified: true,
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const showPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 3 : prev - 1));
  };

  const showNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 3 ? 0 : prev + 1));
  };

  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-4xl font-bold">OUR HAPPY CUSTOMERS</h2>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={showPrevious}
              className="rounded-full"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={showNext}
              className="rounded-full"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.slice(currentIndex, currentIndex + 3).map((testimonial) => (
            <Card key={testimonial.id} className="p-6">
              <StarRating rating={testimonial.rating} className="mb-4" />
              <div className="flex items-center gap-2 mb-4">
                <span className="font-semibold">{testimonial.name}</span>
                {testimonial.verified && (
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                )}
              </div>
              <p className="text-muted-foreground">{testimonial.comment}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}