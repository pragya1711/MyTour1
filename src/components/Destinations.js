 import { Link } from "react-router-dom";
export default function Destinations() {
  const places = [
    {
      name: "Goa",
      slug: "goa",
      img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
    },
    {
      name: "Rajasthan",
      slug: "rajasthan",
      img: "/images/WhatsApp Image 2026-04-14 at 11.01.08 AM.jpeg"
    },
    {
      name: "Kerala",
      slug: "kerala",
      img: "/images/WhatsApp Image 2026-04-14 at 11.01.07 AM.jpeg"
    },
    {
      name: "Gujarat",
      slug: "gujarat",
      img: "/images/WhatsApp Image 2026-04-14 at 11.01.05 AM.jpeg"
    },
     {
      name: "Punjab",
      slug: "punjab",
      img: "/images/WhatsApp Image 2026-04-14 at 11.41.59 AM.jpeg"
    },
     {
      name: "Uttar Pradesh",
      slug: "uttarpradesh",
      img: "/images/WhatsApp Image 2026-04-14 at 11.01.09 AM (1).jpeg"
    },
  {
      name: "Himachal Pradesh",
      slug: "himachalpradesh",
      img: "/images/WhatsApp Image 2026-04-14 at 11.01.05 AM (1).jpeg"
    },
     {
      name: "West Bengal",
      slug: "westbengal",
      img: "/images/WhatsApp Image 2026-04-14 at 11.01.09 AM (2).jpeg"
    },
     {
      name: "Jammu and Kashmir",
      slug: "jammukashmir",
      img: "/images/WhatsApp Image 2026-04-14 at 11.01.06 AM.jpeg"
    },
     {
      name: "Karnataka",
      slug: "karnataka",
      img: "/images/WhatsApp Image 2026-04-14 at 11.01.06 AM (1).jpeg"
    }

  ];

  return (
    <div id="destinations" className="p-10 bg-gray-100">
      <h1 className="text-4xl font-bold text-center mb-10">
        Top Destinations ✈️
      </h1>

      <div className="grid md:grid-cols-3 gap-8">
        {places.map((p, i) => (
          <div key={i} className="rounded-xl overflow-hidden shadow-lg hover:scale-105 transition">

            <img src={p.img} alt={p.name}className="h-60 w-full object-cover" />

            <div className="p-5 bg-white">
              <h2 className="text-2xl font-semibold">{p.name}</h2>
              
              <Link to={`/destinations/${p.slug}`}>
              <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                  Explore
               </button>
               </Link>
              
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}