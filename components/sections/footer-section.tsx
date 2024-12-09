
import React from "react";

const FooterSection: React.FC = () => {
  return (
    <footer className="bg-gray-100 text-gray-700">
      {/* Main Footer Section */}
      <div className="container mx-auto px-6 md:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-1 lg:col-span-2">
            <h1 className="text-2xl font-bold text-black">SHOP.CO</h1>
            <p className="mt-6 text-sm text-gray-600">
              We have clothes that suit your style and which you're proud to wear. From women to men.
            </p>
            <div className="flex mt-6 space-x-4">
              {/* Social Media Icons */}
              <a href="#" className="text-black hover:text-gray-500">
              <img src="images/social/1.png" alt="Versace Logo" className="brand-logo" />
              <i className="fa-brands fa-twitter"></i>
              </a>
              
              <a href="#" className="text-black hover:text-gray-500">
              <img src="images/social/2.png" alt="Versace Logo" className="brand-logo" />
              <i className="fa-brands fa-square-x-twitter"></i>
              </a>
              <a href="#" className="text-black hover:text-gray-500">
              <img src="images/social/3.png" alt="Versace Logo" className="brand-logo" />
                <i className="fab fa-instagram fa-lg"></i>
              </a>
              <a href="#" className="text-black hover:text-gray-500">
              <img src="images/social/4.png" alt="Versace Logo" className="brand-logo" />
                <i className="fab fa-github fa-lg"></i>
              </a>
            </div>
          </div>

          {/* Links Section */}
          <div className="md:col-span-2 lg:col-span-3 flex flex-wrap gap-8 justify-between">
            {/* Company Links */}
            <div>
              <h2 className="text-sm font-bold text-black uppercase">Company</h2>
              <ul className="mt-6 space-y-2">
                {["About", "Features", "Works", "Career"].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-600 hover:text-black text-sm">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Help Links */}
            <div>
              <h2 className="text-sm font-bold text-black uppercase">Help</h2>
              <ul className="mt-6 space-y-2">
                {["Customer Support", "Delivery Details", "Terms & Conditions", "Privacy Policy"].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-600 hover:text-black text-sm">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* FAQ Links */}
            <div>
              <h2 className="text-sm font-bold text-black uppercase">FAQ</h2>
              <ul className="mt-6 space-y-2">
                {["Account", "Manage Deliveries", "Orders", "Payments"].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-600 hover:text-black text-sm">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources Links */}
            <div>
              <h2 className="text-sm font-bold text-black uppercase">Resources</h2>
              <ul className="mt-6 space-y-2">
                {["Free eBooks", "Development Tutorial", "How to - Blog", "YouTube Playlist"].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-600 hover:text-black text-sm">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer Section */}
      <div className="bg-gray-200 py-4">
        <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center">
          {/* Copyright Text */}
          <p className="text-gray-600 text-sm text-center md:text-left">
            Shop.co © 2000-2023, All Rights Reserved
          </p>

          {/* Payment Icons */}
          <div className="flex mt-6 md:mt-0 space-x-4"> 
            <img height={46.61} width={30.03}
            src="/images/products/Visa.png"
              alt="Visa"
              className="h-6"
            />
            <img height={46.61} width={30.03}
              src="/images/products/papyal.png"
              alt="PayPal"
              className="h-6"
            />
            <img height={46.61} width={30.03}
              src="/images/products/apple.png"
              alt="Apple Pay"
              className="h-6"
            />
            <img height={46.61} width={30.03}
              src="/images/products/gpay.png"
              alt="Google Pay"
              className="h-6"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
