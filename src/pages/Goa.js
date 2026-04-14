import { useEffect, useState } from "react";

export default function Goa() {
  const slides = [
    "/images/beach1.jpeg",
    "/images/2-se-cathedral-goa-state-hero - Copy.jpeg",
    "/images/1-palolem-beach-goa-goa-city-hero.jpeg",
  ];

  const [current, setCurrent] = useState(0);

  // Slider Logic (converted from JS)
 useEffect(() => {
  const interval = setInterval(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, 4000);

  return () => clearInterval(interval);
}, [slides.length]);

  return (
    <div className="bg-gray-50 text-gray-800">

      {/* HERO SECTION */}
      <section className="relative h-[80vh] overflow-hidden">
        <div className="absolute inset-0">
          {slides.map((img, index) => (
            <img
              key={index}
              src={img}
              alt="Goa"
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                index === current ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Text */}
        <div className="relative z-10 flex items-center justify-center h-full text-white text-center px-4">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold">
              Goa – The Beach Paradise 🌴
            </h1>
            <p className="mt-4 text-lg md:text-xl">
              Sun, Sand, Nightlife & Endless Vibes
            </p>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-8">Top Places to Visit</h2>

        <div className="grid md:grid-cols-5 gap-4 h-[500px]">

          {[
            { img: "/images/WhatsApp Image 2026-04-14 at 11.37.21 AM (9).jpeg", name: "Baga Beach" },
            { img: "/images/WhatsApp Image 2026-04-14 at 11.37.21 AM (3).jpeg", name: "Panaji" },
            { img: "/images/WhatsApp Image 2026-04-14 at 11.37.21 AM (5).jpeg", name: "Cabo de Rama Beach" },
            { img: "/images/WhatsApp Image 2026-04-14 at 11.37.21 AM (7).jpeg", name: "Anjuna Beach" },
            { img: "/images/WhatsApp Image 2026-04-14 at 11.37.21 AM (8).jpeg", name: "Agonda Beach" },
          ].map((place, index) => (
            <div key={index} className="relative group overflow-hidden rounded-xl">
              <img
                src={place.img}
                alt={place.name}
                className="h-full w-full object-cover group-hover:scale-110 transition"
              />
              <div className="absolute bottom-0 bg-black/60 w-full p-4 text-white">
                <h3 className="font-semibold">{place.name}</h3>
              </div>
            </div>
          ))}

        </div>
      </section>

      {/* DESCRIPTION */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6 text-yellow-600">
            Goa's Vibe ✨
          </h2>
          <p className="text-lg leading-relaxed bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition">
            Welcome to Goa, India’s most loved beach destination. Known for its vibrant nightlife,
            golden beaches, Portuguese heritage, and water sports, Goa offers the perfect mix of
            relaxation and excitement.
          </p>
        </div>
      </section>

      {/* CARDS */}
      <section className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-6">

        <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white p-6 rounded-2xl shadow-xl hover:scale-105 transition">
          <h3 className="font-bold text-xl">Best Time</h3>
          <p>November – February</p>
        </div>

        <div className="bg-gradient-to-r from-blue-400 to-cyan-500 text-white p-6 rounded-2xl shadow-xl hover:scale-105 transition">
          <h3 className="font-bold text-xl">Airport</h3>
          <p>Dabolim Airport</p>
        </div>

        <div className="bg-gradient-to-r from-purple-400 to-pink-500 text-white p-6 rounded-2xl shadow-xl hover:scale-105 transition">
          <h3 className="font-bold text-xl">Railway</h3>
          <p>Madgaon Station</p>
        </div>

      </section>

      {/* EXPERIENCES */}
      <section className="py-16 bg-white/60 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6 text-blue-700">
            Top Experiences 🌊
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {["Water Sports", "Beach Parties", "Cruise Ride", "Fort Aguada Visit"].map((item, i) => (
              <div key={i} className="p-5 bg-white rounded-xl shadow hover:shadow-lg transition">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOD */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6 text-orange-600">
            Food & Culture 🍛
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="font-semibold mb-2">Must Try</h3>
              <p>Fish Curry Rice, Bebinca, Prawn Balchao</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="font-semibold mb-2">Festivals</h3>
              <p>Sunburn Festival, Carnival, Christmas</p>
            </div>
          </div>
        </div>
      </section>

      

      {/* MAP */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <iframe
            className="w-full h-[400px] rounded-2xl shadow-lg"
            src="https://www.google.com/maps?q=goa&output=embed"
            title="Goa Map"
          ></iframe>
        </div>
      </section>

    </div>
  );
}