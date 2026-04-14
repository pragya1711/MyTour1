 import { Link } from "react-router-dom";
export default function Destinations() {
  const places = [
    {
      name: "Goa",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
    },
    {
      name: "Rajasthan",
      image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470"
    },
    {
      name: "Kerala",
      image: "https://images.unsplash.com/photo-1599661046827-dacff0c0f09a"
    },
    {
      name: "Gujarat",
      image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470"
    },
    {
      name: "Punjab",
      image: "https://images.unsplash.com/photo-1599661046827-dacff0c0f09a"
    },
    {
      name: "Uttar Pradesh",
      image: "https://images.unsplash.com/photo-1599661046827-dacff0c0f09a"
    },
    {
      name: "Himachal Pradesh",
      image: "https://images.unsplash.com/photo-1599661046827-dacff0c0f09a"
    },
    {
      name: "West Bengal",
      image: "https://images.unsplash.com/photo-1599661046827-dacff0c0f09a"
    },
    {
      name: "Karnataka",
      image: "https://images.unsplash.com/photo-1599661046827-dacff0c0f09a"
    },
    {
      name: "Jammu and Kashmir",
      image: "https://images.unsplash.com/photo-1599661046827-dacff0c0f09a"
    }
  ];

  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold text-center mb-10">
        Popular Destinations ✈️
      </h1>

      <div className="grid md:grid-cols-3 gap-8">
        {places.map((place, index) => (
          <div
            key={index}
            className="shadow-lg rounded-xl overflow-hidden hover:scale-105 transition duration-300"
          >
            <img
              src={place.image}
              alt={place.name}
              className="h-60 w-full object-cover"
            />

            <div className="p-5">
              <h2 className="text-2xl font-semibold">{place.name}</h2>

             
              <Link to="/goa">
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