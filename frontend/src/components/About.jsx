import React from "react";
import { Check, Award, Users, Clock } from "lucide-react";
import { restaurantData } from "../data/mockData";
import halalLogo from "../assets/images/logo/halal-logo.png";
import room from "../assets/images/gallery/room.png";
import devanture from "../assets/images/gallery/devanture.png";

const About = () => {
  const { about } = restaurantData;

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
                {about.title}
              </h2>
              <div className="w-20 h-1 bg-red-600 mb-6"></div>
            </div>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              {about.description}
            </p>

            <div className="space-y-4">
              {about.highlights.map((highlight, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-red-600 rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700 font-medium">{highlight}</span>
                </div>
              ))}
            </div>

            {/* Certification Halal prominente */}
            <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-lg p-6 mt-6 border border-green-200">
              <div className="flex items-center justify-center space-x-4">
                <img 
                  src={halalLogo} 
                  alt="Certification Halal" 
                  className="h-16 w-auto"
                />
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-800 mb-1">100% HALAL</div>
                  <div className="text-sm text-green-700 font-medium">Restaurant Certifié Halal</div>
                  <div className="text-xs text-green-600 mt-1">Cuisine et ingrédients contrôlés</div>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
            <div className="text-center">
              <Award className="w-8 h-8 text-red-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-black">2005</div>
              <div className="text-sm text-gray-600">Depuis</div>
            </div>
            <div className="text-center">
              <Users className="w-8 h-8 text-red-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-black">Familial</div>
              <div className="text-sm text-gray-600">Esprit Convivial</div>
            </div>
            <div className="text-center">
              <Clock className="w-8 h-8 text-red-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-black">Roubaix</div>
              <div className="text-sm text-gray-600">Rue de Lannoy</div>
            </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative w-full md:inline-block">
            <div className="relative overflow-hidden rounded-lg shadow-2xl w-full md:w-fit md:h-fit">
              <img
                src={devanture}
                alt="Devanture du restaurant Le Familial à Roubaix"
                className="w-full md:w-auto h-[60vh] md:h-[80vh] object-contain transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-xl border border-gray-100">
              <div className="text-3xl font-bold text-red-600 mb-1">4.9</div>
              <div className="text-sm text-gray-600">Note Clients</div>
              <div className="flex space-x-1 mt-2">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-4 h-4 bg-yellow-400 rounded-full"></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;