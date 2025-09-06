import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Menu from "../components/Menu";
import Info from "../components/Info";
import Ordering from "../components/Ordering";
import Gallery from "../components/Gallery";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <Menu />
      <Info />
      <Ordering />
      <Gallery />
      <Contact />
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Home;