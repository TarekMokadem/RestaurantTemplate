import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div
            className={`text-2xl font-bold transition-colors duration-300 ${
              isScrolled ? "text-black" : "text-white"
            }`}
          >
            Le <span className="text-red-600">Familial</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {["Accueil", "À Propos", "Menu", "Infos", "Commander", "Galerie", "Contact"].map(
              (item, index) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(["home", "about", "menu", "info", "order", "gallery", "contact"][index])}
                  className={`transition-all duration-300 hover:text-red-600 font-medium ${
                    isScrolled ? "text-black" : "text-white"
                  }`}
                >
                  {item}
                </button>
              )
            )}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className={isScrolled ? "text-black" : "text-white"} />
            ) : (
              <Menu className={isScrolled ? "text-black" : "text-white"} />
            )}
          </Button>
        </div>

        {/* Mobile Navigation Overlay */}
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <div 
              className="md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
              onClick={() => setIsMenuOpen(false)}
            />
            
            {/* Menu Slide-out */}
            <div className="md:hidden fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl z-50 transform transition-transform duration-300">
              <div className="flex flex-col h-full">
                {/* Header du menu */}
                <div className="flex items-center justify-between p-6 border-b border-gray-100">
                  <div className="text-xl font-bold text-black">
                    Le <span className="text-red-600">Familial</span>
                  </div>
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <X className="w-6 h-6 text-gray-600" />
                  </button>
                </div>

                {/* Navigation principale */}
                <div className="flex-1 py-6">
                  <nav className="space-y-2">
                    {[
                      { name: "Accueil", id: "home", icon: "🏠" },
                      { name: "À Propos", id: "about", icon: "ℹ️" },
                      { name: "Menu", id: "menu", icon: "🍽️" },
                      { name: "Infos", id: "info", icon: "📋" },
                      { name: "Commander", id: "order", icon: "🛒" },
                      { name: "Galerie", id: "gallery", icon: "📸" },
                      { name: "Contact", id: "contact", icon: "📞" }
                    ].map((item) => (
                      <button
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className="w-full flex items-center space-x-4 px-6 py-4 text-left text-gray-800 hover:bg-red-50 hover:text-red-600 transition-all duration-200 group"
                      >
                        <span className="text-xl group-hover:scale-110 transition-transform duration-200">
                          {item.icon}
                        </span>
                        <span className="font-medium text-lg">{item.name}</span>
                        <div className="flex-1"></div>
                        <div className="w-2 h-2 bg-red-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                      </button>
                    ))}
                  </nav>
                </div>

                {/* Footer du menu avec infos contact */}
                <div className="border-t border-gray-100 p-6 bg-gray-50">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 text-sm text-gray-600">
                      <span>📍</span>
                      <span>164 rue de Lannoy, Roubaix</span>
                    </div>
                    <div className="flex items-center space-x-3 text-sm text-gray-600">
                      <span>📞</span>
                      <a href="tel:0366599097" className="hover:text-red-600 transition-colors">
                        03 66 59 90 97
                      </a>
                    </div>
                    <div className="flex items-center space-x-2 text-xs text-green-600 font-medium">
                      <span>✅</span>
                      <span>100% Halal Certifié</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;