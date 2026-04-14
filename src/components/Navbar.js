import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [search, setSearch] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();

  const destinations = {
    kerala: "/destinations/kerala",
    goa: "/destinations/goa", // ✅ fixed
    punjab: "/destinations/punjab",
    "himachalpradesh": "/destinations/himachalpradesh",
    "uttarpradesh": "/destinations/uttarpradesh",
    "gujarat ": "/destinations/gujarat",
    "jammu and kashmir": "/destinations/kashmir",
    "karnataka": "/destinations/karnataka",
    "west bengal": "/destinations/westbengal",
  };

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearch(value);

    if (value === "") {
      setSuggestions([]);
      return;
    }

    const filtered = Object.keys(destinations).filter((key) =>
      key.includes(value)
    );

    setSuggestions(filtered);
  };

  // ✅ Handle Enter key
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && suggestions.length > 0) {
      navigate(destinations[suggestions[0]]);
      setSearch("");
      setSuggestions([]);
    }
  };

  // ✅ Handle click on suggestion
  const handleSelect = (item) => {
    setSearch("");
    setSuggestions([]);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/70 backdrop-blur-lg text-white shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        {/* LOGO */}
        <h1 className="text-3xl font-extrabold tracking-wide text-orange-400">
          MY Tour 🇮🇳
        </h1>

        {/* SEARCH BAR */}
        <div className="hidden md:block relative">
          <input
            type="text"
            placeholder="Search destination..."
            value={search}
            onChange={handleSearch}
            onKeyDown={handleKeyDown}
            className="px-4 py-2 rounded-full bg-white text-black w-64 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />

          {/* DROPDOWN */}
          {suggestions.length > 0 && (
            <div className="absolute w-full bg-white text-black mt-2 rounded-xl shadow-lg z-50 max-h-60 overflow-y-auto">
              {suggestions.map((item, index) => (
                <Link
                  key={index}
                  to={destinations[item]}
                  onClick={() => handleSelect(item)}
                  className="block p-2 hover:bg-orange-100 cursor-pointer capitalize"
                >
                  {item}
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* NAV LINKS */}
        <ul className="hidden md:flex gap-8 text-lg font-semibold items-center">
          <li>
            <Link to="/" className="hover:text-orange-400 transition">
              Home
            </Link>
          </li>

          <li>
            <Link to="/destinations" className="hover:text-orange-400 transition">
              Destinations
            </Link>
          </li>

          <li>
            <Link to="/booking" className="hover:text-orange-400 transition">
              Booking
            </Link>
          </li>

          <li>
            <Link
              to="/auth"
              className="bg-orange-500 px-4 py-2 rounded-full hover:bg-orange-600 transition"
            >
              Login
            </Link>
          </li>
        </ul>

      </div>
    </nav>
  );
}