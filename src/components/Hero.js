export default function Hero() {
  return (
    <div id="home" className="h-screen relative">

     <img src="/images/WhatsApp Image 2026-04-14 at 6.25.26 PM.jpeg" className="h-full w-full object-cover" alt="hero" />

      <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white text-center">
        <h1 className="text-5xl font-bold mb-4">Explore Incredible India </h1>
        <p className="text-lg mb-6">Culture. Nature. Heritage. Adventure.Spirituality</p>
      </div>

    </div>
  );
}