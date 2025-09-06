import React from "react";
import { ChefHat, Star } from "lucide-react";
import { Button } from "./ui/button";

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwyfHxyZXN0YXVyYW50JTIwaW50ZXJpb3J8ZW58MHx8fHwxNzU3MTUwODgwfDA&ixlib=rb-4.1.0&q=85"
          alt="Restaurant Interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        {/* Floating Icons */}
        <div className="flex justify-center items-center space-x-4 mb-6 opacity-90">
          <ChefHat className="w-8 h-8 text-red-500 animate-pulse" />
          <div className="flex space-x-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
            ))}
          </div>
          <ChefHat className="w-8 h-8 text-red-500 animate-pulse" />
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Experience
          <span className="block text-red-500">Culinary Excellence</span>
        </h1>

        <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto leading-relaxed">
          Where every dish tells a story and every bite creates a memory. 
          Welcome to FlavorHub - your destination for exceptional dining.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 text-lg font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            onClick={() => scrollToSection("menu")}
          >
            View Our Menu
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white hover:text-black px-8 py-3 text-lg font-semibold transform hover:scale-105 transition-all duration-300"
            onClick={() => scrollToSection("contact")}
          >
            Reserve Table
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-red-500 mb-2">15+</div>
            <div className="text-sm md:text-base text-gray-300">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-red-500 mb-2">50+</div>
            <div className="text-sm md:text-base text-gray-300">Signature Dishes</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-red-500 mb-2">10k+</div>
            <div className="text-sm md:text-base text-gray-300">Happy Customers</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;