import { useEffect, useState } from "react";

export default function JammuKashmir() {
  const slides = [
    "https://s7ap1.scene7.com/is/image/incredibleindia/2-gulmarg-kashmir-j_k-city-hero?qlt=82&ts=1742154685264",
    "https://s7ap1.scene7.com/is/image/incredibleindia/1-patnitop-jammu-city-hero?qlt=82&ts=1726729003276",
    "https://s7ap1.scene7.com/is/image/incredibleindia/1-st-marys-church-gulmarg-j_k-city-hero?qlt=82&ts=1742155798550",
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-blue-50 text-gray-800">

      {/* HERO */}
      <section className="relative h-[80vh] overflow-hidden">
        <div className="absolute inset-0">
          {slides.map((img, index) => (
            <img
              key={index}
              src={img}
              alt="Jammu & Kashmir"
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
              Jammu & Kashmir – Paradise on Earth 🏔️
            </h1>
            <p className="mt-4 text-lg md:text-xl">
              Snow, Lakes & Natural Beauty
            </p>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-8">Top Places to Visit</h2>

        <div className="grid md:grid-cols-5 gap-4 h-[500px]">
          {[
            { img: "https://s7ap1.scene7.com/is/image/incredibleindia/pari-mahal-srinagar-jammu-&-kashmir-1-attr-nearby?qlt=82&ts=1726816672273", name: "Srinagar" },
            { img: "https://s7ap1.scene7.com/is/image/incredibleindia/1-amar-mahal-palace-jammu-jk-attr-nearby?qlt=82&ts=1742155973165", name: "Gulmarg" },
            { img: "https://s7ap1.scene7.com/is/image/incredibleindia/1-sri-pratap-singh-museum_gulmarg-j_k-attr-nearby?qlt=82&ts=1726816089460", name: "Pahalgam" },
            { img: "https://s7ap1.scene7.com/is/image/incredibleindia/1-ziarat-of-baba-reshi-gulmarg-jammu-kashmir-attr-nearby-1?qlt=82&ts=1726815924909", name: "Sonmarg" },
            { img: "https://s7ap1.scene7.com/is/image/incredibleindia/1-vaishno-devi-jammu-jk-attr-nearby?qlt=82&ts=1742155564366", name: "Vaishno Devi" },
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
            Jammu & Kashmir's Vibe ✨
          </h2>
          <p className="text-lg bg-white p-6 rounded-2xl shadow-lg">
            Jammu & Kashmir is famous for its breathtaking landscapes, snow-covered
            mountains, serene lakes, and beautiful valleys. It is one of the most
            scenic and peaceful destinations in India.
          </p>
        </div>
      </section>

      {/* CARDS */}
      <section className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white p-6 rounded-2xl">
          <h3 className="font-bold text-xl">Best Time</h3>
          <p>March – October & December – February</p>
        </div>

        <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white p-6 rounded-2xl">
          <h3 className="font-bold text-xl">Famous For</h3>
          <p>Mountains & Lakes</p>
        </div>

        <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-6 rounded-2xl">
          <h3 className="font-bold text-xl">Special</h3>
          <p>Dal Lake & Houseboats</p>
        </div>
      </section>

      {/* EXPERIENCES */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6 text-blue-600">
            Top Experiences ❄️
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Shikara Ride in Dal Lake",
              "Skiing in Gulmarg",
              "Trekking in Pahalgam",
              "Vaishno Devi Yatra",
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
              <p>Rogan Josh, Yakhni, Dum Aloo, Kahwa Tea</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="font-semibold mb-2">Festivals</h3>
              <p>Tulip Festival, Lohri, Eid</p>
            </div>
          </div>
        </div>
      </section>

      {/* MAP */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <iframe
            className="w-full h-[400px] rounded-2xl shadow-lg"
            src="https://www.google.com/maps?q=jammu+kashmir&output=embed"
            title="Jammu & Kashmir Map"
          ></iframe>
        </div>
      </section>

    </div>
  );
}