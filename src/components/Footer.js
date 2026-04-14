export default function Footer() {
  return (
    <footer className="relative text-white">

      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1602216056096-3b40cc0c9944"
          className="w-full h-full object-cover"
          alt="footer background"
        />
        <div className="absolute inset-0 bg-black/80"></div>
      </div>

      {/* CONTENT */}
      <div className="relative max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-10">

        {/* LEFT: BRAND */}
        <div>
          <h2 className="text-3xl font-bold mb-4">MY Tour 🌍</h2>

          <p className="mb-4 text-gray-300">
            Explore India like never before. Discover culture, beauty, and adventure with MY Tour.
          </p>

          {/* SOCIAL */}
          <div className="flex gap-4 text-xl mb-6">
            <span className="hover:text-green-400 cursor-pointer">🌐</span>
            <span className="hover:text-blue-400 cursor-pointer">📘</span>
            <span className="hover:text-pink-400 cursor-pointer">📸</span>
            <span className="hover:text-red-400 cursor-pointer">▶️</span>
          </div>

          <p className="text-sm text-gray-400">
            📧 info@mytourindia.com <br />
            📞 +91 9876543210
          </p>
        </div>

        {/* CENTER: LINKS */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Quick Links</h3>

          <ul className="space-y-2 text-gray-300">
            <li className="hover:text-white cursor-pointer">Attractions</li>
            <li className="hover:text-white cursor-pointer">Experiences</li>
            <li className="hover:text-white cursor-pointer">Festivals</li>
            <li className="hover:text-white cursor-pointer">FAQs</li>
            <li className="hover:text-white cursor-pointer">About MY Tour</li>
          </ul>
        </div>

        {/* RIGHT: QR */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-4">Scan to Explore</h3>

          <img
            src="https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=https://mytour.com"
            className="mx-auto rounded-lg shadow-lg"
            alt="QR Code"
          />

          <p className="mt-4 text-gray-400 text-sm">
            Scan & start your journey ✈️
          </p>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="relative border-t border-gray-700 text-center py-4 text-gray-400 text-sm">
        © 2026 MY Tour | All Rights Reserved
      </div>

    </footer>
  );
}