import React from "react";
import { Truck, Clock, Star, Smartphone } from "lucide-react";
import { Button } from "./ui/button";

const Ordering = () => {
  return (
    <section id="order" className="py-12 md:py-20 bg-gradient-to-br from-red-50 to-red-100">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4">
            Commander en Ligne
          </h2>
          <div className="w-20 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Savourez nos spécialités 100% Halal depuis chez vous à Roubaix et alentours. 
            Boisson 33cl offerte avec chaque plat (sauf UberEats).
          </p>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
          <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-8 h-8 text-red-600" />
            </div>
            <h3 className="text-xl font-bold text-black mb-2">Livraison Rapide</h3>
            <p className="text-gray-600">
              Temps de livraison moyen de 25-35 minutes à votre porte
            </p>
          </div>

          <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="w-8 h-8 text-red-600" />
            </div>
            <h3 className="text-xl font-bold text-black mb-2">Qualité Garantie</h3>
            <p className="text-gray-600">
              Cuisine 100% Halal avec boisson 33cl offerte
            </p>
          </div>

          <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Smartphone className="w-8 h-8 text-red-600" />
            </div>
            <h3 className="text-xl font-bold text-black mb-2">Commande Facile</h3>
            <p className="text-gray-600">
              Processus de commande simple et sécurisé avec plusieurs options de paiement
            </p>
          </div>
        </div>

        {/* Delivery Partners */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-2xl font-bold text-center text-black mb-8">
            Commandez directement ou via nos partenaires
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Livraison Directe */}
            <div className="group bg-gradient-to-r from-red-600 to-red-700 rounded-lg p-6 text-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h4 className="text-xl font-bold">Le Familial Direct</h4>
                  <p className="text-red-100">Commandez directement au restaurant</p>
                </div>
                <Truck className="w-8 h-8 text-white" />
              </div>
              
              <div className="space-y-2 mb-6">
                <div className="flex justify-between">
                  <span className="text-red-100">Téléphone :</span>
                  <span className="text-white">03 66 59 90 97</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-red-100">Zone :</span>
                  <span className="text-white">Roubaix & alentours</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-red-100">Boisson :</span>
                  <span className="text-white">33cl offerte</span>
                </div>
              </div>

              <Button className="w-full bg-white text-red-600 hover:bg-red-50 font-semibold py-3 transition-all duration-300 group-hover:bg-gray-100">
                Appeler le Restaurant
              </Button>
            </div>

            {/* UberEats */}
            <div className="group bg-gradient-to-r from-black to-gray-800 rounded-lg p-6 text-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h4 className="text-xl font-bold">UberEats</h4>
                  <p className="text-gray-300">Livraison via Uber Eats</p>
                </div>
                <Truck className="w-8 h-8 text-green-400" />
              </div>
              
              <div className="space-y-2 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-300">Frais de livraison :</span>
                  <span className="text-white">Variable</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Temps de livraison :</span>
                  <span className="text-white">25-40 min</span>
                </div>
              </div>

              <Button className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 transition-all duration-300 group-hover:bg-green-400">
                Commander sur UberEats
              </Button>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-4">
              <strong>Minimum de commande :</strong> 20€ sur Roubaix, 25€ autres villes. Les frais de livraison peuvent varier.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
              <span>• 100% Halal certifié</span>
              <span>• Boisson 33cl offerte avec chaque plat (sauf UberEats)</span>
              <span>• Sur place, à emporter ou livraison</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ordering;