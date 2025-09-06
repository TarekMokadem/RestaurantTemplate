import React from "react";
import { Truck, Clock, Star, Smartphone } from "lucide-react";
import { Button } from "./ui/button";

const Ordering = () => {
  return (
    <section id="order" className="py-20 bg-gradient-to-br from-red-50 to-red-100">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Order Online
          </h2>
          <div className="w-20 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Enjoy our delicious food from the comfort of your home. 
            Fast delivery and easy ordering through our trusted partners.
          </p>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-8 h-8 text-red-600" />
            </div>
            <h3 className="text-xl font-bold text-black mb-2">Fast Delivery</h3>
            <p className="text-gray-600">
              Average delivery time of 25-35 minutes to your doorstep
            </p>
          </div>

          <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="w-8 h-8 text-red-600" />
            </div>
            <h3 className="text-xl font-bold text-black mb-2">Quality Guaranteed</h3>
            <p className="text-gray-600">
              Same restaurant quality delivered fresh to your location
            </p>
          </div>

          <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Smartphone className="w-8 h-8 text-red-600" />
            </div>
            <h3 className="text-xl font-bold text-black mb-2">Easy Ordering</h3>
            <p className="text-gray-600">
              Simple and secure ordering process with multiple payment options
            </p>
          </div>
        </div>

        {/* Delivery Partners */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-2xl font-bold text-center text-black mb-8">
            Order through our delivery partners
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* UberEats */}
            <div className="group bg-gradient-to-r from-black to-gray-800 rounded-lg p-6 text-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h4 className="text-xl font-bold">UberEats</h4>
                  <p className="text-gray-300">Free delivery on orders over $25</p>
                </div>
                <Truck className="w-8 h-8 text-green-400" />
              </div>
              
              <div className="space-y-2 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-300">Delivery Fee:</span>
                  <span className="text-white">$2.99</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Delivery Time:</span>
                  <span className="text-white">25-35 min</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Rating:</span>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-white">4.8</span>
                  </div>
                </div>
              </div>

              <Button className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 transition-all duration-300 group-hover:bg-green-400">
                Order on UberEats
              </Button>
            </div>

            {/* Deliveroo */}
            <div className="group bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-lg p-6 text-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h4 className="text-xl font-bold">Deliveroo</h4>
                  <p className="text-cyan-100">Premium delivery service</p>
                </div>
                <Truck className="w-8 h-8 text-white" />
              </div>
              
              <div className="space-y-2 mb-6">
                <div className="flex justify-between">
                  <span className="text-cyan-100">Delivery Fee:</span>
                  <span className="text-white">$3.49</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-cyan-100">Delivery Time:</span>
                  <span className="text-white">20-30 min</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-cyan-100">Rating:</span>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-300 fill-current" />
                    <span className="text-white">4.9</span>
                  </div>
                </div>
              </div>

              <Button className="w-full bg-white text-cyan-600 hover:bg-cyan-50 font-semibold py-3 transition-all duration-300 group-hover:bg-gray-100">
                Order on Deliveroo
              </Button>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-4">
              Minimum order value applies. Delivery fees may vary based on location and time.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
              <span>• Contactless delivery available</span>
              <span>• Track your order in real-time</span>
              <span>• Multiple payment options</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ordering;