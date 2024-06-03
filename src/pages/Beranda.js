import React from "react";
import "../App.css";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Recommendations from "../components/Recommendations";
import HampersCP from "../components/HampersCP";
import Discount from "../components/Discount";
import Advantages from "../components/Advantages";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

function Beranda() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <Recommendations />
        <HampersCP />
        <Discount />
        <Advantages />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

export default Beranda;
