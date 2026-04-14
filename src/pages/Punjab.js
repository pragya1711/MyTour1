import { useEffect, useState } from "react";

export default function Punjab() {
  const slides = [
    "https://s7ap1.scene7.com/is/image/incredibleindia/golden-temple-punjab-hero?qlt=82&ts=1726662363452",
    "https://s7ap1.scene7.com/is/image/incredibleindia/maharaja-ranjit-singh-war-museum-ludhiana-punjab-1-attr-hero?qlt=82&ts=1726661920467",
    "https://s7ap1.scene7.com/is/image/incredibleindia/1-sheesh-mahal-patiala-punjab-city-hero?qlt=82&ts=1742172321343",
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-yellow-50 text-gray-800">

      {/* HERO */}
      <section className="relative h-[80vh] overflow-hidden">
        <div className="absolute inset-0">
          {slides.map((img, index) => (
            <img
              key={index}
              src={img}
              alt="Punjab"
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
              Punjab – Land of Five Rivers 🌾
            </h1>
            <p className="mt-4 text-lg md:text-xl">
              Culture, Food & Festive Spirit
            </p>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-8">Top Places to Visit</h2>

        <div className="grid md:grid-cols-5 gap-4 h-[500px]">
          {[
            { img: "https://s7ap1.scene7.com/is/image/incredibleindia/jallianwala-bagh-amritsar-punjab-tri-hero?qlt=82&ts=1727166340985&wid=800", name: "Amritsar" },
            { img: "https://s7ap1.scene7.com/is/image/incredibleindia/maharaja-ranjit-war-museum-tri-hero-1?qlt=82&ts=1727166517576&wid=800", name: "Ludhiana" },
            { img: "https://s7ap1.scene7.com/is/image/incredibleindia/gurdwara-chhevin-padshahi-jalandhar-punjab-1-attr-nearby?qlt=82&ts=1726674557060", name: "Patiala" },
            { img: "https://s7ap1.scene7.com/is/image/incredibleindia/nurmahal-jalandhar-punjab-tri-hero?qlt=82&ts=1727166346617&wid=800", name: "Jalandhar" },
            { img: "https://s7ap1.scene7.com/is/image/incredibleindia/kathlour-kushlian-wildlife-sanctuary-pathankot-punjab-1-attr-nearby?qlt=82&ts=1726662476086", name: "Wagah Border" },
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
            Punjab's Vibe ✨
          </h2>
          <p className="text-lg bg-white p-6 rounded-2xl shadow-lg">
            Punjab is famous for its vibrant culture, energetic music, delicious food,
            and warm hospitality. It reflects the spirit of celebration, tradition,
            and unity.
          </p>
        </div>
      </section>

      {/* CARDS */}
      <section className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white p-6 rounded-2xl">
          <h3 className="font-bold text-xl">Best Time</h3>
          <p>October – March</p>
        </div>

        <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white p-6 rounded-2xl">
          <h3 className="font-bold text-xl">Famous For</h3>
          <p>Food & Culture</p>
        </div>

        <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white p-6 rounded-2xl">
          <h3 className="font-bold text-xl">Special</h3>
          <p>Bhangra & Festivals</p>
        </div>
      </section>

      {/* EXPERIENCES */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6 text-orange-600">
            Top Experiences 🎉
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Golden Temple Visit",
              "Wagah Border Ceremony",
              "Bhangra Dance",
              "Village Tourism",
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
              <p>Butter Chicken, Sarson da Saag, Makki di Roti, Lassi</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="font-semibold mb-2">Festivals</h3>
              <p>Baisakhi, Lohri, Gurpurab</p>
            </div>
          </div>
        </div>
      </section>

      {/* MAP */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <iframe
            className="w-full h-[400px] rounded-2xl shadow-lg"
            src="https://www.google.com/maps?q=punjab&output=embed"
            title="Punjab Map"
          ></iframe>
        </div>
      </section>

    </div>
  );
}