import React from "react";
import { Check, Award, Users, Clock } from "lucide-react";
import { restaurantData } from "../data/mockData";

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

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <Award className="w-8 h-8 text-red-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-black">25+</div>
                <div className="text-sm text-gray-600">Awards Won</div>
              </div>
              <div className="text-center">
                <Users className="w-8 h-8 text-red-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-black">200+</div>
                <div className="text-sm text-gray-600">Daily Guests</div>
              </div>
              <div className="text-center">
                <Clock className="w-8 h-8 text-red-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-black">15+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-lg shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1729394405518-eaf2a0203aa7?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwzfHxyZXN0YXVyYW50JTIwaW50ZXJpb3J8ZW58MHx8fHwxNzU3MTUwODgwfDA&ixlib=rb-4.1.0&q=85"
                alt="Restaurant Interior"
                className="w-full h-[500px] object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-xl border border-gray-100">
              <div className="text-3xl font-bold text-red-600 mb-1">4.9</div>
              <div className="text-sm text-gray-600">Customer Rating</div>
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