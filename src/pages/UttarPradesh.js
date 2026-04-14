import { useEffect, useState } from "react";

export default function UttarPradesh() {
  const slides = [
    "https://s7ap1.scene7.com/is/image/incredibleindia/2-bhu-campus-varanasi-uttar-pradesh-state-hero?qlt=82&ts=1726650631433",
    "https://s7ap1.scene7.com/is/image/incredibleindia/1-taj-mahal-agra-uttar-pradesh-state-hero?qlt=82&ts=1726650592794",
    "https://s7ap1.scene7.com/is/image/incredibleindia/1-kashi-vishwanath-mandir-2-varanasi-up-city-hero?qlt=82&ts=1726649283895",
  ];

  const [current, setCurrent] = useState(0);
useEffect(() => {
  const interval = setInterval(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, 4000);

  return () => clearInterval(interval);
}, [slides.length]);

  return (
    <div className="bg-orange-50 text-gray-800">

      {/* HERO */}
      <section className="relative h-[80vh] overflow-hidden">
        <div className="absolute inset-0">
          {slides.map((img, index) => (
            <img
              key={index}
              src={img}
              alt="Uttar Pradesh"
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
              Uttar Pradesh – Heart of India 🏛️
            </h1>
            <p className="mt-4 text-lg md:text-xl">
              Heritage, Spirituality & History
            </p>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-8">Top Places to Visit</h2>

        <div className="grid md:grid-cols-5 gap-4 h-[500px]">
          {[
            { img: "https://s7ap1.scene7.com/is/image/incredibleindia/taj-mahal-agra-uttar-pradesh-1-attr-nearby?qlt=82&ts=1726650395114", name: "Agra" },
            { img: "https://s7ap1.scene7.com/is/image/incredibleindia/triveni-sangam-prayagraj-uttar-pradesh-1-attr-nearby?qlt=82&ts=1751459139496", name: "Varanasi" },
            { img: "https://s7ap1.scene7.com/is/image/incredibleindia/barsana-mathura-uttar-pradesh-1-attr-nearby?qlt=82&ts=1726649414787", name: "Lucknow" },
            { img: "https://s7ap1.scene7.com/is/image/incredibleindia/guptar-ghat-ayodhya-up-tri-hero?qlt=82&ts=1727167238272&wid=800", name: "Ayodhya" },
            { img: "https://s7ap1.scene7.com/is/image/incredibleindia/shri-krishna-janmbhumi-mathura-up-tri-hero-1?qlt=82&ts=1727167263636&wid=800", name: "Mathura" },
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
          <h2 className="text-4xl font-bold mb-6 text-orange-700">
            Uttar Pradesh's Vibe ✨
          </h2>
          <p className="text-lg bg-white p-6 rounded-2xl shadow-lg">
            Uttar Pradesh is rich in history, culture, and spirituality. It is home
            to iconic monuments like the Taj Mahal and sacred cities like Varanasi
            and Ayodhya, making it a major tourist destination.
          </p>
        </div>
      </section>

      {/* CARDS */}
      <section className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-6 rounded-2xl">
          <h3 className="font-bold text-xl">Best Time</h3>
          <p>October – March</p>
        </div>

        <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white p-6 rounded-2xl">
          <h3 className="font-bold text-xl">Famous For</h3>
          <p>Historical & Religious Sites</p>
        </div>

        <div className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white p-6 rounded-2xl">
          <h3 className="font-bold text-xl">Special</h3>
          <p>Taj Mahal</p>
        </div>
      </section>

      {/* EXPERIENCES */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6 text-orange-600">
            Top Experiences 🕌
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Sunrise at Taj Mahal",
              "Ganga Aarti in Varanasi",
              "Lucknow Heritage Walk",
              "Ayodhya Temple Visit",
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
          <h2 className="text-3xl font-bold mb-6 text-red-700">
            Food & Culture 🍛
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="font-semibold mb-2">Must Try</h3>
              <p>Kebabs, Biryani, Petha, Chaat</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="font-semibold mb-2">Festivals</h3>
              <p>Diwali, Holi, Kumbh Mela</p>
            </div>
          </div>
        </div>
      </section>

      {/* MAP */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <iframe
            className="w-full h-[400px] rounded-2xl shadow-lg"
            src="https://www.google.com/maps?q=uttar+pradesh&output=embed"
            title="Uttar Pradesh Map"
          ></iframe>
        </div>
      </section>

    </div>
  );
}