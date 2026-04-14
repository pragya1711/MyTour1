import { useEffect, useState } from "react";

export default function Karnataka() {
  const slides = [
    "https://s7ap1.scene7.com/is/image/incredibleindia/mysore-palace-karnataka-state-hero?qlt=82&ts=1726723003730",
    "https://s7ap1.scene7.com/is/image/incredibleindia/heritage-bengaluru-palace-bangalore-karnataka?qlt=82&ts=1742202436210",
    "https://s7ap1.scene7.com/is/image/incredibleindia/heritage-mirjan-fort-gokarna2?qlt=82&ts=1726720988570",
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
              alt="Karnataka"
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
              Karnataka – Land of Heritage & Technology 🏞️
            </h1>
            <p className="mt-4 text-lg md:text-xl">
              History, Nature & Innovation
            </p>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-8">Top Places to Visit</h2>

        <div className="grid md:grid-cols-5 gap-4 h-[500px]">
          {[
            { img: "https://s7ap1.scene7.com/is/image/incredibleindia/virupaksha-temple-hampi-karnataka-1-attr-nearby?qlt=82&ts=1726721690964", name: "Bangalore" },
            { img: "https://s7ap1.scene7.com/is/image/incredibleindia/mysuru-zoo-mysuru-karnataka-1-attr-nearby?qlt=82&ts=1742189173782", name: "Mysore" },
            { img: "https://s7ap1.scene7.com/is/image/incredibleindia/dandeli-national-park-dharwad-karnataka-1-attr-nearby?qlt=82&ts=1726720484701", name: "Coorg" },
            { img: "https://s7ap1.scene7.com/is/image/incredibleindia/1-old-mangalore-port-mangalore-karnataka-attr-nearby?qlt=82&ts=1726722388676", name: "Hampi" },
            { img: "https://s7ap1.scene7.com/is/image/incredibleindia/kodachadri-hills-mangalore-karnataka-1-attr-nearby?qlt=82&ts=1726722466393", name: "Gokarna" },
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
            Karnataka's Vibe ✨
          </h2>
          <p className="text-lg bg-white p-6 rounded-2xl shadow-lg">
            Karnataka is known for its rich history, ancient temples, modern cities,
            and scenic landscapes. From the ruins of Hampi to the tech hub Bangalore,
            it offers a unique mix of tradition and innovation.
          </p>
        </div>
      </section>

      {/* CARDS */}
      <section className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white p-6 rounded-2xl">
          <h3 className="font-bold text-xl">Best Time</h3>
          <p>October – March</p>
        </div>

        <div className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white p-6 rounded-2xl">
          <h3 className="font-bold text-xl">Famous For</h3>
          <p>Heritage & IT Industry</p>
        </div>

        <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white p-6 rounded-2xl">
          <h3 className="font-bold text-xl">Special</h3>
          <p>Hampi Ruins</p>
        </div>
      </section>

      {/* EXPERIENCES */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6 text-green-600">
            Top Experiences 🌄
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Explore Hampi Ruins",
              "Mysore Palace Visit",
              "Coffee Plantation in Coorg",
              "Beach Visit in Gokarna",
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
              <p>Dosa, Mysore Pak, Bisi Bele Bath, Filter Coffee</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="font-semibold mb-2">Festivals</h3>
              <p>Mysore Dussehra, Ugadi, Karaga Festival</p>
            </div>
          </div>
        </div>
      </section>

      {/* MAP */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <iframe
            className="w-full h-[400px] rounded-2xl shadow-lg"
            src="https://www.google.com/maps?q=karnataka&output=embed"
            title="Karnataka Map"
          ></iframe>
        </div>
      </section>

    </div>
  );
}