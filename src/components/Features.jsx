import materials from "../data/materials.json";

export default function Features() {
  return (
    <section id="features" className="w-full bg-zinc-950 ">
      {materials.map((item) => (
        <div
          key={item.id}
          data-aos="fade-up"
          className="relative w-full h-screen overflow-hidden"
        >
        
          <img
            src={item.image}
            alt={item.material}
            className="w-full h-full object-cover"
          />

        
          <div className="absolute inset-0 bg-black/50"></div>

          <div data-aos="fade-right" className="absolute inset-0 flex flex-col justify-center px-6 sm:px-10 md:px-20 text-white z-10 m-10">
            <h3 className=" font-bold font-serif  text-3xl sm:text-4xl md:text-5xl lg:text-6xl max-w-3xl mb-6 ">
              {item.material}
            </h3>

            <p className=" max-w-2xl text-base sm:text-lg md:text-xl mb-6 leading-relaxed">
              {item.description}
            </p>

            <ul className="space-y-2 text-sm sm:text-base md:text-lg max-w-2xl">
              {item.features.map((feature, index) => (
                <li key={index}>• {feature}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </section>
  );
}