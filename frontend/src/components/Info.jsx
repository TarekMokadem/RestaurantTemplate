import React from "react";
import { Clock, MapPin, Phone, Mail } from "lucide-react";
import { restaurantData } from "../data/mockData";

const Info = () => {
  const { info } = restaurantData;

  return (
    <section id="info" className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Hours */}
          <div className="space-y-6">
            <div>
              <h3 className="text-3xl font-bold mb-4 flex items-center">
                <Clock className="w-8 h-8 text-red-500 mr-3" />
                Horaires d'Ouverture
              </h3>
              <div className="w-16 h-1 bg-red-600 mb-6"></div>
            </div>
            
            <div className="space-y-4">
              {info.hours.map((schedule, index) => (
                <div key={index} className="flex justify-between items-center py-3 border-b border-gray-800">
                  <span className="text-gray-300 font-medium">{schedule.day}</span>
                  <span className="text-white font-semibold">{schedule.time}</span>
                </div>
              ))}
            </div>

            <div className="bg-red-600/10 border border-red-600/20 rounded-lg p-6 mt-8">
              <h4 className="text-xl font-bold text-red-400 mb-2">Horaires Spéciaux</h4>
              <p className="text-gray-300">
                Pendant les vacances, nos horaires peuvent varier. Veuillez appeler à l'avance pour confirmer 
                notre disponibilité pour les occasions spéciales et événements privés.
              </p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-3xl font-bold mb-4">Informations de Contact</h3>
              <div className="w-16 h-1 bg-red-600 mb-6"></div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-lg mb-1">Adresse</h4>
                  <p className="text-gray-300">{info.location.address}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-lg mb-1">Téléphone</h4>
                  <p className="text-gray-300">{info.location.phone}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Mail className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-lg mb-1">Email</h4>
                  <p className="text-gray-300">{info.location.email}</p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-gray-800 rounded-lg p-8 text-center mt-8">
              <MapPin className="w-12 h-12 text-red-500 mx-auto mb-4" />
              <h4 className="text-xl font-bold mb-2">Nous Trouver</h4>
              <p className="text-gray-400 mb-4">
                Situé au cœur du centre-ville, facilement accessible en transports publics
              </p>
              <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full font-semibold transition-colors duration-300">
                Obtenir l'Itinéraire
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;