import { useEffect, useState } from "react";

export default function WestBengal() {
  const slides = [
    "https://s7ap1.scene7.com/is/image/incredibleindia/1-victoria-memorial-kolkata-west-bengal-state-hero?qlt=82&ts=1726645133729",
    "https://s7ap1.scene7.com/is/image/incredibleindia/1-tiger-hill-darjeeling-west-bengal-city-hero?qlt=82&ts=1726643807581",
    "https://s7ap1.scene7.com/is/image/incredibleindia/2-jorasanko-thakurbari-kolkata-wb-city-hero?qlt=82&ts=1742153736772",
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
              alt="West Bengal"
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
              West Bengal – Cultural Heart of India 🎭
            </h1>
            <p className="mt-4 text-lg md:text-xl">
              Heritage, Art & Natural Beauty
            </p>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-8">Top Places to Visit</h2>

        <div className="grid md:grid-cols-5 gap-4 h-[500px]">
          {[
            { img: "https://s7ap1.scene7.com/is/image/incredibleindia/writers-building-kolkata-wb-attr-nearby?qlt=82&ts=1742155761521", name: "Kolkata" },
            { img: "https://s7ap1.scene7.com/is/image/incredibleindia/tiger-hill-darjeeling-west-bengal-1-attr-nearby?qlt=82&ts=1726643293057", name: "Darjeeling" },
            { img: "https://s7ap1.scene7.com/is/image/incredibleindia/happy-valley-tea-estate-darjeeling-west-bengal-darjeelin-1-attr-nearby?qlt=82&ts=1726643292664", name: "Sundarbans" },
            { img: "https://s7ap1.scene7.com/is/image/incredibleindia/observatory-hill-darjeeling-west-bengal-1-attr-nearby?qlt=82&ts=1726674392425", name: "Digha" },
            { img: "https://s7ap1.scene7.com/is/image/incredibleindia/mangal-dham-kalimpong-west-bengal-1-attr-nearby?qlt=82&ts=1726644735122", name: "Kalimpong" },
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
            West Bengal's Vibe ✨
          </h2>
          <p className="text-lg bg-white p-6 rounded-2xl shadow-lg">
            West Bengal is known for its rich cultural heritage, literature, art,
            festivals, and diverse landscapes from mountains to mangrove forests.
            It offers a perfect blend of tradition and natural beauty.
          </p>
        </div>
      </section>

      {/* CARDS */}
      <section className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white p-6 rounded-2xl">
          <h3 className="font-bold text-xl">Best Time</h3>
          <p>October – March</p>
        </div>

        <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-6 rounded-2xl">
          <h3 className="font-bold text-xl">Famous For</h3>
          <p>Culture & Festivals</p>
        </div>

        <div className="bg-gradient-to-r from-green-500 to-teal-500 text-white p-6 rounded-2xl">
          <h3 className="font-bold text-xl">Special</h3>
          <p>Sundarbans Forest</p>
        </div>
      </section>

      {/* EXPERIENCES */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6 text-blue-600">
            Top Experiences 🚤
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Darjeeling Toy Train Ride",
              "Sundarbans Safari",
              "Kolkata City Tour",
              "Beach Visit at Digha",
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
          <h2 className="text-3xl font-bold mb-6 text-purple-700">
            Food & Culture 🍛
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="font-semibold mb-2">Must Try</h3>
              <p>Rasgulla, Sandesh, Fish Curry, Mishti Doi</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="font-semibold mb-2">Festivals</h3>
              <p>Durga Puja, Kali Puja, Poila Boishakh</p>
            </div>
          </div>
        </div>
      </section>

      {/* MAP */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <iframe
            className="w-full h-[400px] rounded-2xl shadow-lg"
            src="https://www.google.com/maps?q=west+bengal&output=embed"
            title="West Bengal Map"
          ></iframe>
        </div>
      </section>

    </div>
  );
}