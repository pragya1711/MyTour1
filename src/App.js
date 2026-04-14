import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Destinations from "./pages/Destinations";
import Booking from "./components/Booking";
import Goa from "./pages/Goa";
import Rajasthan from "./pages/Rajasthan";
import Kerala from "./pages/Kerala";
import WestBengal from "./pages/WestBengal";
import Punjab from "./pages/Punjab";
import Himachal from "./pages/Himachal";
import UttarPradesh from "./pages/UttarPradesh";
import Karnataka from "./pages/Karnataka";
import JammuKashmir from "./pages/JammuKashmir";
import Gujarat from "./pages/Gujarat";
import Auth from "./pages/Auth";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/destinations/goa" element={<Goa />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/destinations/rajasthan" element={<Rajasthan />} />
        <Route path="/destinations/kerala" element={<Kerala/>} />
        <Route path="/destinations/westbengal" element={<WestBengal/>} />
        <Route path="/destinations/punjab" element={<Punjab/>} />
         <Route path="/destinations/himachalpradesh" element={<Himachal/>} />
         <Route path="/destinations/uttarpradesh" element={<UttarPradesh/>} />
         <Route path="/destinations/karnataka" element={<Karnataka/>} />
         <Route path="/destinations/jammukashmir" element={<JammuKashmir />} />
         <Route path="/destinations/gujarat" element={<Gujarat/>} />
          
      </Routes>
    </Router>
  );
}

export default App;