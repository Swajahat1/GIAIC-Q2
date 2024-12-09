// export default function BrandsSection() {
//   const brands = [
//     { name: "Versace", logo: "images/brand/versace.png" },
//     { name: "Zara", logo: "https://images.unsplash.com/photo-1583744946564-b52ac1c389c8?w=200&q=80" },
//     { name: "Gucci", logo: "https://images.unsplash.com/photo-1583744946564-b52ac1c389c8?w=200&q=80" },
//     { name: "Prada", logo: "https://images.unsplash.com/photo-1583744946564-b52ac1c389c8?w=200&q=80" },
//     { name: "Calvin Klein", logo: "https://images.unsplash.com/photo-1583744946564-b52ac1c389c8?w=200&q=80" }
//   ];

//   return (
//     <section className="py-12 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
//           {brands.map((brand) => (
//             <div key={brand.name} className="flex justify-center">
//               <img
//                 src={brand.logo}
//                 alt={brand.name}
//                 className="h-12 object-contain grayscale hover:grayscale-0 transition-all"
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

import React from "react";

const BrandsSection: React.FC = () => {
  return (
    <div className="bg-black text-white flex justify-around items-center p-8">
      <img src="images/brand/versace.png" alt="Versace Logo" className="brand-logo" />
      <img src="images/brand/zara.png" alt="Versace Logo" className="brand-logo" />
      <img src="images/brand/gucci.png" alt="Versace Logo" className="brand-logo" />
      <img src="images/brand/prada.png" alt="Versace Logo" className="brand-logo" />
      <img src="images/brand/calvin.png" alt="Versace Logo" className="brand-logo" />

    </div>
  );
};

export default BrandsSection;
