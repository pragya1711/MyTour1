import { useEffect, useState } from "react";

export default function Rajasthan() {
  const slides = [
    "https://s7ap1.scene7.com/is/image/incredibleindia/1-sam-sand-dunes-jaisalmer-rajasthan-hero?qlt=82&ts=1726659973648",
    "https://s7ap1.scene7.com/is/image/incredibleindia/1-haldighati-udaipur-rajasthan-attr-hero?qlt=82&ts=1742199311749",
    "https://s7ap1.scene7.com/is/image/incredibleindia/2-jaisalmer-fort-city-hero?qlt=82&ts=1726659979868",
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
              alt="Rajasthan"
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
              Rajasthan – Land of Kings 👑
            </h1>
            <p className="mt-4 text-lg md:text-xl">
              Culture, Forts & Royal Heritage
            </p>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-8">Top Places to Visit</h2>

        <div className="grid md:grid-cols-5 gap-4 h-[500px]">
          {[
            { img: "https://s7ap1.scene7.com/is/image/incredibleindia/hawa-mahal-jaipur-tri-hero?qlt=82&ts=1727166277849&wid=800", name: "Jaipur" },
            { img: "https://s7ap1.scene7.com/is/image/incredibleindia/city-palace-udaipur-rajasthan-trip-hero?qlt=82&ts=1727166307005&wid=800", name: "Udaipur" },
            { img: "https://s7ap1.scene7.com/is/image/incredibleindia/patwo-ki-haveli-jaisalmer-tri-hero?qlt=82&ts=1727166240563&wid=800", name: "Jaisalmer" },
            { img: "https://s7ap1.scene7.com/is/image/incredibleindia/ummed-bhawan-palace-jodhpur-tri-hero?qlt=82&ts=1727166771505&wid=800", name: "Jodhpur" },
            { img: "https://s7ap1.scene7.com/is/image/incredibleindia/gajner-wildlife-sanctuary-bikaner-rajasthan-1-city-attr?qlt=82&ts=1726659768606", name: "Pushkar" },
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
          <h2 className="text-4xl font-bold mb-6 text-red-600">
            Rajasthan's Vibe ✨
          </h2>
          <p className="text-lg bg-white p-6 rounded-2xl shadow-lg">
            Rajasthan is famous for its royal palaces, grand forts, desert landscapes,
            colorful festivals, and rich cultural heritage. It offers a glimpse into
            India's royal past.
          </p>
        </div>
      </section>

      {/* CARDS */}
      <section className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-r from-yellow-500 to-red-500 text-white p-6 rounded-2xl">
          <h3 className="font-bold text-xl">Best Time</h3>
          <p>October – March</p>
        </div>

        <div className="bg-gradient-to-r from-pink-500 to-purple-500 text-white p-6 rounded-2xl">
          <h3 className="font-bold text-xl">Famous For</h3>
          <p>Forts & Palaces</p>
        </div>

        <div className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white p-6 rounded-2xl">
          <h3 className="font-bold text-xl">Desert</h3>
          <p>Thar Desert</p>
        </div>
      </section>

      {/* EXPERIENCES */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6 text-orange-600">
            Top Experiences 🏜️
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Desert Safari",
              "Camel Ride",
              "Fort Visits",
              "Cultural Shows",
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
          <h2 className="text-3xl font-bold mb-6 text-yellow-700">
            Food & Culture 🍛
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="font-semibold mb-2">Must Try</h3>
              <p>Dal Baati Churma, Gatte ki Sabzi, Ker Sangri</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="font-semibold mb-2">Festivals</h3>
              <p>Desert Festival, Teej, Gangaur</p>
            </div>
          </div>
        </div>
      </section>

      {/* MAP */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <iframe
            className="w-full h-[400px] rounded-2xl shadow-lg"
            src="https://www.google.com/maps?q=rajasthan&output=embed"
            title="Rajasthan Map"
          ></iframe>
        </div>
      </section>

    </div>
  );
}