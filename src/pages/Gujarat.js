import { useEffect, useState } from "react";

export default function Gujarat() {
  const slides = [
    "https://s7ap1.scene7.com/is/image/incredibleindia/dwarkadish-temple-dwarka-city-hero?qlt=82&ts=1747682803834",
    "https://s7ap1.scene7.com/is/image/incredibleindia/narayan-srovar-kutch-gujarat-1-attr-hero?qlt=82&ts=1747682803834",
    "https://s7ap1.scene7.com/is/image/incredibleindia/rukmini-devi-temple-city-hero?qlt=82&ts=1726734858314",
  ];

  const [current, setCurrent] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, 4000);

  return () => clearInterval(interval);
}, [slides.length]);

  return (
    <div className="bg-yellow-50 text-gray-800">

      {/* HERO */}
      <section className="relative h-[80vh] overflow-hidden">
        <div className="absolute inset-0">
          {slides.map((img, index) => (
            <img
              key={index}
              src={img}
              alt="Gujarat"
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                index === current ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>

        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 flex items-center justify-center h-full text-white text-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold">
              Gujarat – Vibrant Land of Culture 🦁
            </h1>
            <p className="mt-4 text-lg md:text-xl">
              Heritage, Wildlife & Festivals
            </p>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-8">Top Places to Visit</h2>

        <div className="grid md:grid-cols-5 gap-4 h-[500px]">
          {[
            { img: "https://s7ap1.scene7.com/is/image/incredibleindia/gaga-wildlife-sanctuary-dwarka-city-attr?qlt=82&ts=1726734996173", name: "Gir National Park" },
            { img: "https://s7ap1.scene7.com/is/image/incredibleindia/kutch-tri-hero?qlt=82&ts=1727163439614&wid=800", name: "Rann of Kutch" },
            { img: "https://s7ap1.scene7.com/is/image/incredibleindia/rukmini-devi-temple-gujarat-1-city-attr?qlt=82&ts=1726734888722", name: "Somnath Temple" },
            { img: "https://s7ap1.scene7.com/is/image/incredibleindia/dwarkadish-demple-01-attr-nearby?qlt=82&ts=1726734730355", name: "Dwarka" },
            { img: "https://s7ap1.scene7.com/is/image/incredibleindia/statue-of-unity-vadodara-gujrat-tri-hero?qlt=82&ts=1727163283030&wid=800", name: "Statue of Unity" },
          ].map((place, i) => (
            <div key={i} className="relative group overflow-hidden rounded-xl">
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
          <h2 className="text-4xl font-bold mb-6 text-yellow-700">
            Gujarat's Vibe ✨
          </h2>
          <p className="text-lg bg-white p-6 rounded-2xl shadow-lg">
            Gujarat is known for its rich cultural heritage, colorful festivals,
            wildlife, and historical places. It is home to the Asiatic lions in
            Gir National Park and the beautiful white desert of Rann of Kutch.
          </p>
        </div>
      </section>

      {/* CARDS */}
      <section className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white p-6 rounded-2xl">
          <h3 className="font-bold text-xl">Best Time</h3>
          <p>November – February</p>
        </div>

        <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white p-6 rounded-2xl">
          <h3 className="font-bold text-xl">Famous For</h3>
          <p>Festivals & Wildlife</p>
        </div>

        <div className="bg-gradient-to-r from-pink-500 to-red-500 text-white p-6 rounded-2xl">
          <h3 className="font-bold text-xl">Special</h3>
          <p>Garba & Rann Utsav</p>
        </div>
      </section>

      {/* EXPERIENCES */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6 text-yellow-600">
            Top Experiences 🎉
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Desert Safari in Rann of Kutch",
              "Lion Safari in Gir National Park",
              "Visit Statue of Unity",
              "Enjoy Garba during Navratri",
            ].map((item, i) => (
              <div key={i} className="p-5 bg-gray-100 rounded-xl shadow">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOD */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6 text-green-700">
            Food & Culture 🍛
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="font-semibold mb-2">Must Try</h3>
              <p>Dhokla, Thepla, Khandvi, Fafda, Jalebi</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="font-semibold mb-2">Festivals</h3>
              <p>Navratri, Rann Utsav, International Kite Festival</p>
            </div>
          </div>
        </div>
      </section>

      {/* MAP */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <iframe
            className="w-full h-[400px] rounded-2xl shadow-lg"
            src="https://www.google.com/maps?q=gujarat&output=embed"
            title="Gujarat Map"
          ></iframe>
        </div>
      </section>

    </div>
  );
}