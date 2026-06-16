export default function Footer() {
  return (
    <footer id="footer"
      className="w-full bg-zinc-950 text-gray-300 px-8 md:px-16 py-20">
      <div data-aos="fade-up" className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          <div>
            <h3 className="text-3xl font-serif font-bold text-white mb-4">
              Wardrobe
            </h3>

            <p className="leading-7 text-gray-400">
              Part of The Monarch Collection.
              Crafted for modern homes with elegance,
              functionality, and timeless design.
            </p>
          </div>


          <div>
            <h4 className="text-xl text-white font-semibold mb-5">
              Quick Links
            </h4>

            <ul className="space-y-3">
              <li>
                <a href="#features" className="hover:text-white transition">
                  Features
                </a>
              </li>

              <li>
                <a href="#gallery" className="hover:text-white transition">
                  Gallery
                </a>
              </li>

              <li>
                <a href="#specifications" className="hover:text-white transition">
                  Specifications
                </a>
              </li>

              <li>
                <a href="#reviews" className="hover:text-white transition">
                  Reviews
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl text-white font-semibold mb-5">
              Customer Support
            </h4>

            <ul className="space-y-3">
              <li className="hover:text-white cursor-pointer transition">
                FAQ
              </li>

              <li className="hover:text-white cursor-pointer transition">
                Shipping Policy
              </li>

              <li className="hover:text-white cursor-pointer transition">
                Warranty Information
              </li>

              <li className="hover:text-white cursor-pointer transition">
                Return Policy
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl text-white font-semibold mb-5">
              Contact Us
            </h4>

            <div className="space-y-3 text-gray-400">
              <p>+91 98765 43210</p>
              <p>support@astrawardrobe.com</p>
              <p>Kerala, India</p>
            </div>
          </div>
        </div>


        <hr className="border-zinc-800 my-12" />


        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

          <p className="text-gray-500 text-sm">
            © 2026 The Monarch Collection. All Rights Reserved.
          </p>

          <div className="flex gap-8 text-gray-400">
            <a href="#" className="hover:text-white transition">
              Instagram
            </a>

            <a href="#" className="hover:text-white transition">
              Facebook
            </a>

            <a href="#" className="hover:text-white transition">
              Pinterest
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
}