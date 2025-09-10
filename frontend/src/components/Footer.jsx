import React from "react";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, Heart } from "lucide-react";
import { restaurantData } from "../data/mockData";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-black text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="text-3xl font-bold mb-4">
              Le <span className="text-red-600">Familial</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Restaurant familial à Roubaix proposant une cuisine généreuse 100% Halal. 
              Pâtes, escalopes, viandes avec boisson offerte. Sur place, à emporter ou en livraison.
            </p>
            
            {/* Social Media */}
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-red-600 rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-red-600 rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-red-600 rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Liens Rapides</h3>
            <ul className="space-y-3">
              {["Accueil", "À Propos", "Menu", "Galerie", "Contact"].map((item, index) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(["home", "about", "menu", "gallery", "contact"][index])}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {item}
                  </button>
                </li>
              ))}
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Réservations
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Événements Privés
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                <div className="text-gray-400 text-sm">
                  {restaurantData.info.location.address}
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-red-600" />
                <div className="text-gray-400 text-sm">
                  {restaurantData.info.location.phone}
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-red-600" />
                <div className="text-gray-400 text-sm">
                  {restaurantData.info.location.email}
                </div>
              </div>
            </div>

            {/* Newsletter */}
            <div className="mt-6">
              <h4 className="text-lg font-semibold mb-3">Restez Informé</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Votre email"
                  className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-l-md focus:outline-none focus:border-red-600 text-white"
                />
                <button className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-r-md transition-colors duration-300">
                  <Mail className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} Le Familial - Restaurant à Roubaix. Tous droits réservés. | 
              <a href="#" className="hover:text-white ml-1">Mentions Légales</a> | 
              <a href="#" className="hover:text-white ml-1">Contact</a>
            </div>
            
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>Fait avec</span>
              <Heart className="w-4 h-4 text-red-600 fill-current" />
              <span>pour les amoureux de la cuisine</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;