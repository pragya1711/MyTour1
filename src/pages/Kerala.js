import { useEffect, useState } from "react";

export default function Kerala() {
  const slides = [
    "https://s7ap1.scene7.com/is/image/incredibleindia/1-shakthan-thampuran-palace-thrissur-kerala-state-hero?qlt=82&ts=1727350196742",
    "https://s7ap1.scene7.com/is/image/incredibleindia/2-thazhathangadhy-juma-masjid-kumarakom-kerala-2-city-hero?qlt=82&ts=1726672488543",
    "https://s7ap1.scene7.com/is/image/incredibleindia/silent-valley-palakkad-kerala-hero?qlt=82&ts=1726672850423",
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-green-50 text-gray-800">

      {/* HERO */}
      <section className="relative h-[80vh] overflow-hidden">
        <div className="absolute inset-0">
          {slides.map((img, index) => (
            <img
              key={index}
              src={img}
              alt="Kerala"
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
              Kerala – God’s Own Country 🌴
            </h1>
            <p className="mt-4 text-lg md:text-xl">
              Backwaters, Nature & Serenity
            </p>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-8">Top Places to Visit</h2>

        <div className="grid md:grid-cols-5 gap-4 h-[500px]">
          {[
            { img: "https://s7ap1.scene7.com/is/image/incredibleindia/peppara-wildlife-sanctuary-thiruvananthapuram-kerala-tri-hero?qlt=82&ts=1727164460877&wid=800", name: "Alleppey" },
            { img: "https://s7ap1.scene7.com/is/image/incredibleindia/anamudi-peak-munnar-kerala-tri-hero?qlt=82&ts=1727164475934&wid=800", name: "Munnar" },
            { img: "https://s7ap1.scene7.com/is/image/incredibleindia/napier-museum-thiruvananthapuram-kerala-tri-hero?qlt=82&ts=1727164662225&wid=800", name: "Kochi" },
            { img: "https://s7ap1.scene7.com/is/image/incredibleindia/athirappilly-water-falls-tri-hero?qlt=82&ts=1727164584385&wid=800", name: "Thekkady" },
            { img: "https://s7ap1.scene7.com/is/image/incredibleindia/1-kannan-devan-tea-museum-munnar-kerala-city-attr?qlt=82&ts=1742155121618", name: "Varkala" },
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
          <h2 className="text-4xl font-bold mb-6 text-green-700">
            Kerala's Vibe ✨
          </h2>
          <p className="text-lg bg-white p-6 rounded-2xl shadow-lg">
            Kerala is known for its lush greenery, serene backwaters, beautiful
            beaches, and rich cultural traditions. It is one of the most peaceful
            and scenic destinations in India.
          </p>
        </div>
      </section>

      {/* CARDS */}
      <section className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white p-6 rounded-2xl">
          <h3 className="font-bold text-xl">Best Time</h3>
          <p>September – March</p>
        </div>

        <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white p-6 rounded-2xl">
          <h3 className="font-bold text-xl">Famous For</h3>
          <p>Backwaters & Nature</p>
        </div>

        <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white p-6 rounded-2xl">
          <h3 className="font-bold text-xl">Special</h3>
          <p>Houseboats</p>
        </div>
      </section>

      {/* EXPERIENCES */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6 text-green-600">
            Top Experiences 🚤
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Houseboat Stay",
              "Backwater Cruise",
              "Ayurvedic Spa",
              "Tea Plantation Visit",
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
          <h2 className="text-3xl font-bold mb-6 text-green-800">
            Food & Culture 🍛
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="font-semibold mb-2">Must Try</h3>
              <p>Appam, Puttu, Kerala Sadya, Fish Curry</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="font-semibold mb-2">Festivals</h3>
              <p>Onam, Vishu, Boat Race</p>
            </div>
          </div>
        </div>
      </section>

      {/* MAP */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <iframe
            className="w-full h-[400px] rounded-2xl shadow-lg"
            src="https://www.google.com/maps?q=kerala&output=embed"
            title="Kerala Map"
          ></iframe>
        </div>
      </section>

    </div>
  );
}