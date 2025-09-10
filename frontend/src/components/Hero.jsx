import React, { useState } from "react";
import { ChefHat } from "lucide-react";
import { Button } from "./ui/button";
import hero1 from "../assets/images/hero/hero1.png";
import hero2 from "../assets/images/hero/hero2.png";
import halalLogo from "../assets/images/logo/halal-logo.png";
import MenuPopup from "./MenuPopup";

const Hero = () => {
  const [isMenuPopupOpen, setIsMenuPopupOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const openMenuPopup = () => {
    setIsMenuPopupOpen(true);
  };

  const closeMenuPopup = () => {
    setIsMenuPopupOpen(false);
  };

  return (
    <section id="home" className="relative min-h-[100svh] overflow-hidden">
      {/* Version Mobile - Une seule section */}
      <div className="block md:hidden relative min-h-[100svh] flex items-center justify-center pt-16">
        {/* Background Image Mobile */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src={hero1}
            alt="Restaurant Le Familial à Roubaix - Cuisine Halal"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* Contenu Mobile Unifié */}
        <div className="relative z-10 text-center text-white px-4 max-w-sm mx-auto">
          {/* Logo Halal */}
          <div className="flex justify-center mb-4">
            <div className="bg-white/15 backdrop-blur-sm rounded-xl p-2 border border-white/30 shadow-lg">
              <img 
                src={halalLogo} 
                alt="100% Halal Certifié" 
                className="h-10 w-auto filter brightness-110 drop-shadow-lg"
                title="Restaurant 100% Halal Certifié"
              />
            </div>
          </div>

          {/* Titre Principal */}
          <h1 className="text-2xl font-bold mb-2 leading-tight">
            Bienvenue au
            <span className="block text-red-500 text-3xl">Le Familial</span>
          </h1>

          {/* Description d'accueil */}
          <p className="text-sm mb-6 text-gray-200 leading-relaxed">
            Restaurant 100% Halal à Roubaix. Spécialités de pâtes, escalopes et viandes. 
            Boisson offerte avec chaque plat.
          </p>

          {/* Boutons côte à côte */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              className="bg-red-600 hover:bg-red-700 text-white px-5 py-2.5 text-sm font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg flex-1 sm:flex-none"
              onClick={openMenuPopup}
            >
              Voir Notre Menu
            </Button>

            <Button
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-black px-5 py-2.5 text-sm font-semibold transform hover:scale-105 transition-all duration-300 flex-1 sm:flex-none"
              onClick={() => scrollToSection("contact")}
            >
              Réserver
            </Button>
          </div>
        </div>
      </div>

      {/* Version Desktop - Deux sections côte à côte */}
      <div className="hidden md:flex min-h-screen">
        {/* Section Gauche - Voir le Menu */}
        <div className="relative w-1/2 min-h-screen flex items-center justify-center group cursor-pointer" onClick={openMenuPopup}>
          {/* Background Image Gauche */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            <img
              src={hero1}
              alt="Spécialités de pâtes du restaurant Le Familial à Roubaix"
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-all duration-500"></div>
          </div>

          {/* Contenu Gauche */}
          <div className="relative z-10 text-center text-white px-8 max-w-md mx-auto">
            {/* Icône */}
            <div className="flex justify-center mb-6">
              <ChefHat className="w-16 h-16 text-red-500 animate-pulse" />
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              Notre
              <span className="block text-red-500">Menu</span>
            </h2>

            <p className="text-lg lg:text-xl mb-8 text-gray-200 leading-relaxed">
              Découvrez nos spécialités de pâtes, escalopes et viandes 100% Halal. 
              Boisson 33cl offerte avec chaque plat.
            </p>

            <Button
              size="lg"
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              onClick={openMenuPopup}
            >
              Voir Notre Menu
            </Button>
          </div>
        </div>

        {/* Section Droite - Réserver une Table */}
        <div className="relative w-1/2 min-h-screen flex items-center justify-center group cursor-pointer" onClick={() => scrollToSection("contact")}>
          {/* Background Image Droite */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            <img
              src={hero2}
              alt="Ambiance familiale du restaurant Le Familial à Roubaix"
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-all duration-500"></div>
          </div>

          {/* Contenu Droite */}
          <div className="relative z-10 text-center text-white px-8 max-w-md mx-auto">
            {/* Badge Halal principal */}
            <div className="flex justify-center mb-6">
              <div className="bg-white/15 backdrop-blur-sm rounded-xl p-4 border border-white/30 shadow-lg">
                <img 
                  src={halalLogo} 
                  alt="100% Halal Certifié" 
                  className="h-16 w-auto filter brightness-110 drop-shadow-lg"
                  title="Restaurant 100% Halal Certifié"
                />
              </div>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              Le
              <span className="block text-red-500">Familial</span>
            </h2>

            <p className="text-lg lg:text-xl mb-8 text-gray-200 leading-relaxed">
              Vivez l'expérience dans notre cadre familial à Roubaix. 
              Sur place, à emporter ou en livraison.
            </p>

            <Button
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg font-semibold transform hover:scale-105 transition-all duration-300"
              onClick={() => scrollToSection("contact")}
            >
              Réserver une Table
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Caché sur mobile pour économiser l'espace */}
      <div className="hidden md:block absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>

      {/* Menu Popup */}
      <MenuPopup isOpen={isMenuPopupOpen} onClose={closeMenuPopup} />
    </section>
  );
};

export default Hero;