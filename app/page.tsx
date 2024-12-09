import { HeroSection } from "@/components/sections/hero-section";
import { NewArrivals } from "@/components/sections/new-arrivals";
import { BrowseByStyle } from "@/components/sections/browse-by-style";
import { FeaturedProducts } from "@/components/sections/featured-products";
import { Testimonials } from "@/components/sections/testimonials";
import { Newsletter } from "@/components/sections/newsletter";
import BrandsSection from "@/components/sections/brand-section";
import FooterSection from "@/components/sections/footer-section";
import { PageHeader } from "@/components/cart/PageHeader";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <PageHeader />
      <HeroSection />
      <BrandsSection />
      <NewArrivals />
      <FeaturedProducts />
      <BrowseByStyle />
      <Testimonials />
      <Newsletter />
      <FooterSection />
    </div>
  );
}