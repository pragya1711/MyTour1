import React, { useState } from "react";

export default function Booking() {
  const [service, setService] = useState("flight");

  const getButtonText = () => {
    if (service === "flight") return "Search Flights ✈️";
    if (service === "train") return "Search Trains 🚆";
    if (service === "bus") return "Search Buses 🚌";
    if (service === "cab") return "Book Cabs 🚕";
    if (service === "hotel") return "Find Hotels 🏨";
  };

  const searchNow = () => {
    if (service === "flight") window.open("https://www.skyscanner.co.in/", "_blank");
    if (service === "train") window.open("https://www.railyatri.in/", "_blank");
    if (service === "bus") window.open("https://www.redbus.in/", "_blank");
    if (service === "cab") window.open("https://www.uber.com/in/en/", "_blank");
    if (service === "hotel") window.open("https://www.booking.com/", "_blank");
  };

  return (
    <section id="booking" className="pt-20 relative min-h-screen py-20 mb-10 text-white">

      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <img
          src="/images/flight.jpeg"
          className="w-full h-full object-full"
          alt="travel"
        />
        <div className="absolute inset-0 "></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-6">

        <h2 className="text-8xl font-bold text-center mb-10">
          Plan Your Journey 
        </h2>

        {/* TABS */}
        <div className="flex flex-wrap justify-center gap-20 mb-20">

          {["flight", "train", "bus", "cab", "hotel"].map((item) => (
            <button
              key={item}
              onClick={() => setService(item)}
              className={`px-10 py-6 rounded-xl shadow-lg flex items-center gap-2 transition ${
                service === item
                  ? "bg-red-500"
                  : "border border-white/50 hover:bg-white hover:text-black"
              }`}
            >
              {item === "flight" && "✈️ Flights"}
              {item === "train" && "🚆 Trains"}
              {item === "bus" && "🚌 Buses"}
              {item === "cab" && "🚕 Cabs"}
              {item === "hotel" && "🏨 Hotels"}
            </button>
          ))}

        </div>

         {/*FORM */}
         {/* <div className="bg-white text-black rounded-2xl p-8 shadow-2xl max-w-4xl mx-auto"> */}

          {/* INPUTS */}
         {/* <div className="grid md:grid-cols-2 gap-4 mb-4">
            <input type="text" placeholder="From (Origin)" className="p-3 border rounded-xl w-full" />
            <input type="text" placeholder="To (Destination)" className="p-3 border rounded-xl w-full" />
          </div>

          <div className="grid md:grid-cols-3 gap-4 mb-4">
            <input type="date" className="p-3 border rounded-xl w-full" />
            <input type="number" placeholder="Travelers" className="p-3 border rounded-xl w-full" />
            <select className="p-3 border rounded-xl w-full">
              <option>Economy</option>
              <option>Business</option>
            </select>
          </div>  */}

          {/* BUTTON */}
          <div className="text-center">
            <button
              onClick={searchNow}
              className="bg-blue-600 text-white px-10 py-3 rounded-full text-lg hover:bg-blue-700 hover:scale-105 transition"
            >
              {getButtonText()}
            </button>
          </div>

        
        
      </div>
    </section>
  );
}