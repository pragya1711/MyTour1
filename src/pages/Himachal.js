import { useEffect, useState } from "react";

export default function Himachal() {
  const slides = [
    "https://s7ap1.scene7.com/is/image/incredibleindia/sankat-mochan-temple-shimla-1-city-hero?qlt=82&ts=1742167237184",
    "https://s7ap1.scene7.com/is/image/incredibleindia/manu-temple-manali-1-city-hero?qlt=82&ts=1726731244457",
    "https://s7ap1.scene7.com/is/image/incredibleindia/kalka-shimla-railway-shimla_dji_0975-1-attr-hero?qlt=82&ts=1742191634571",
  ];

  const [current, setCurrent] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, 4000);

  return () => clearInterval(interval);
}, [slides.length]);

  return (
    <div className="bg-blue-50 text-gray-800">

      {/* HERO */}
      <section className="relative h-[80vh] overflow-hidden">
        <div className="absolute inset-0">
          {slides.map((img, index) => (
            <img
              key={index}
              src={img}
              alt="Himachal Pradesh"
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
              Himachal Pradesh – Land of Mountains 🏔️
            </h1>
            <p className="mt-4 text-lg md:text-xl">
              Snow, Adventure & Scenic Beauty
            </p>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-8">Top Places to Visit</h2>

        <div className="grid md:grid-cols-5 gap-4 h-[500px]">
          {[
            { img: "https://s7ap1.scene7.com/is/image/incredibleindia/manali-gompa-manali-himachal-pradesh-1-attr-nearby?qlt=82&ts=1726731202834", name: "Manali" },
            { img: "https://s7ap1.scene7.com/is/image/incredibleindia/rohtang-pass-manali-himachal-pradesh-1-attr-nearby?qlt=82&ts=1726730692270", name: "Shimla" },
            { img: "https://s7ap1.scene7.com/is/image/incredibleindia/sujanpur-tira-dharamshala-himachal-pradesh-1-attr-nearby?qlt=82&ts=1742168606446", name: "Dharamshala" },
            { img: "https://s7ap1.scene7.com/is/image/incredibleindia/jagatsukh-manali-himachal-pradesh-1-attr-nearby?qlt=82&ts=1726731117308", name: "Kullu" },
            { img: "https://s7ap1.scene7.com/is/image/incredibleindia/brighu-lake-manali-himachal-1-attr-nearby?qlt=82&ts=1726730933072", name: "Spiti Valley" },
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
          <h2 className="text-4xl font-bold mb-6 text-blue-700">
            Himachal's Vibe ✨
          </h2>
          <p className="text-lg bg-white p-6 rounded-2xl shadow-lg">
            Himachal Pradesh is known for its snow-covered mountains, scenic valleys,
            cool climate, and adventure activities. It is a perfect destination for
            nature lovers and thrill seekers.
          </p>
        </div>
      </section>

      {/* CARDS */}
      <section className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white p-6 rounded-2xl">
          <h3 className="font-bold text-xl">Best Time</h3>
          <p>March – June & December – February</p>
        </div>

        <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white p-6 rounded-2xl">
          <h3 className="font-bold text-xl">Famous For</h3>
          <p>Mountains & Snow</p>
        </div>

        <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-6 rounded-2xl">
          <h3 className="font-bold text-xl">Special</h3>
          <p>Adventure Sports</p>
        </div>
      </section>

      {/* EXPERIENCES */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6 text-blue-600">
            Top Experiences 🏔️
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Skiing in Manali",
              "Paragliding in Bir Billing",
              "Trekking in Spiti",
              "Camping in Kullu Valley",
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
              <p>Dham, Siddu, Chana Madra</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="font-semibold mb-2">Festivals</h3>
              <p>Kullu Dussehra, Winter Carnival</p>
            </div>
          </div>
        </div>
      </section>

      {/* MAP */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <iframe
            className="w-full h-[400px] rounded-2xl shadow-lg"
            src="https://www.google.com/maps?q=himachal+pradesh&output=embed"
            title="Himachal Map"
          ></iframe>
        </div>
      </section>

    </div>
  );
}