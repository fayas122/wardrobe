import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import products from "../data/product.json"

export default function Explore() {

    useEffect(() => {
      AOS.init({
        duration: 2000,
        once: true,    
      });
    }, []);

  return (
    <section id="explore" className="py-20 px-10 bg-[#1E1F22]">
      <h2 className="text-4xl text-[#F5F1EA] text-center  font-bold font-serif mb-12">
        Explore Our Collection
      </h2>

      <div  className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map((product) => (
          <div
          data-aos="fade-up"
            key={product.id}
            className="group rounded-2xl overflow-hidden shadow-lg bg-[#2A2B2F]
             transition-all duration-1000  hover:-translate-y-1 hover:shadow-xl"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-80 object-cover"
            />

            <div className="p-5 text-center">
              <h3 className="text-2xl font-semibold text-[#F5F1EA]">
                {product.title}
              </h3>

              <p className="text-[#B9B4AB] mt-2 ">
                {product.description}
              </p>

              <button className="mt-4 px-5 py-2 bg-[#B88A44] text-white rounded-full opacity-0 
              translate-y-3 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0
               hover:bg-[#9c7338] hover:shadow-xl"
              >
                Explore
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}