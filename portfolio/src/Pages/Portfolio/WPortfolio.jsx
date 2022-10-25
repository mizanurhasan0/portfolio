import React from "react";
import About from "../../Components/About/About";
import Banner from "../../Components/Banner/Banner";
import Contact from "../../Components/Contact/Contact";
import Footer from "../../Components/Footer/Footer";
import LocationMaps from "../../Components/Maps/LocationMaps";
import InfoWrapper from "./InfoWrapper";

export default function WProtfolio() {
  return (
    <div>
      <Banner />
      <About />
      <InfoWrapper />
      <Contact />
      <LocationMaps />
      <Footer />
    </div>
  );
}
