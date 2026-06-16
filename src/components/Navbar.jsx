import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Navbar() {
    
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,    
    });
  }, []);


  return (
    <nav data-aos="fade-down" 
    className="fixed top-4 left-1/2 -translate-x-1/2 w-[70%] sm:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[70%] z-50  rounded-full px-8 sm:px-4 md:px-8 py-4">
      <div className="flex justify-center items-center gap-4 sm:gap-8 md:gap-12 lg:gap-16 px-4 sm:px-6 py-4  rounded-full bg-black/20">

        <a
          href="#explore"
          className="text-[#F5F1EA]  text-sm sm:text-base tracking-widest md:tracking-widest hover:text-[#B88A44] transition duration-300"
        >
          Explore
        </a>

        <a
          href="#features"
          className="text-[#F5F1EA]  text-sm sm:text-base te tracking-widest md:tracking-widest hover:text-[#B88A44] transition duration-300"
        >
          Features
        </a>

        <a
          href="#footer"
          className="text-[#F5F1EA]  text-sm sm:text-base tracking-widest md:tracking-widest hover:text-[#B88A44] transition duration-300"
        >
          FAQ
        </a>

      </div>
    </nav>
  );
}