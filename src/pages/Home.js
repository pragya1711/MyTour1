import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Destinations from "../components/Destinations";
import Booking from "../components/Booking";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Destinations />
      <Booking />
      <Footer />
    </>
  );
}