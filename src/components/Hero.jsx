import { useState } from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import hero from "../assets/0616.mp4";
import Navbar from "./Navbar";
import logo from "../assets/MC-logo.png";


export default function Hero() {

  const [hover, setHover] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
    });
  }, []);

  return (
    <section className="relative h-screen">

      <video
        autoPlay
        loop
        muted
        playsInline
         preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={hero} type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/40"></div>

      <div data-aos="fade-up" className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center">

        <img
          src={logo}
          alt="Monarch Collections Logo"
          className="h-40 w-40 m-0 font-cinzel"
        />
        <h1 className="text-5xl font-bold font-serif mb-4">The Monarch Collection's </h1>
        <h1 className="text-5xl font-bold font-serif mb-4"> Wardrobes </h1>


        <p className="text-xs font-poppins mb-6">
          ~Where Elegance Meets Organization~
        </p>

        <button
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          className="font-montserrat font-semibold px-8 py-3 rounded-full tracking-wider shadow-lg
          ease-in-out duration-1000 hover:bg-[#D4A55A] hover:scale-105 hover:shadow-2xl">
          {hover ? "Buy Now" : "Do You Want to Buy?"}
        </button>
      </div>
    </section>
  );
}