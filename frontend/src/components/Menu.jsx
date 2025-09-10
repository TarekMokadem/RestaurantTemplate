import React, { useState } from "react";
import { restaurantData } from "../data/mockData";
import MenuPopup from "./MenuPopup";

const Menu = () => {
  const { menuCategories } = restaurantData;
  const [activeCategory, setActiveCategory] = useState(menuCategories[0]?.id);
  const [isMenuPopupOpen, setIsMenuPopupOpen] = useState(false);

  const activeItems = menuCategories.find(cat => cat.id === activeCategory)?.items || [];

  const openMenuPopup = () => {
    setIsMenuPopupOpen(true);
  };

  const closeMenuPopup = () => {
    setIsMenuPopupOpen(false);
  };

  return (
    <section id="menu" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Notre Menu
          </h2>
          <div className="w-20 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Découvrez nos plats soigneusement préparés avec les meilleurs ingrédients 
            et élaborés par nos chefs experts.
          </p>
        </div>

        {/* Category Tabs - Mobile Optimized */}
        <div className="mb-12">
          {/* Mobile: Scroll horizontal */}
          <div className="md:hidden overflow-x-auto pb-4">
            <div className="flex space-x-3 px-4 min-w-max">
              {menuCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-5 py-2.5 rounded-full font-medium transition-all duration-300 whitespace-nowrap text-sm ${
                    activeCategory === category.id
                      ? "bg-red-600 text-white shadow-lg scale-105"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
          
          {/* Desktop: Wrap normal */}
          <div className="hidden md:flex flex-wrap justify-center gap-4">
            {menuCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                  activeCategory === category.id
                    ? "bg-red-600 text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Items - Mobile Optimized */}
        <div className="space-y-6 md:grid md:grid-cols-2 md:gap-8 md:space-y-0 max-w-6xl mx-auto px-4 md:px-0">
          {activeItems.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
            >
              {/* Mobile: Layout vertical */}
              <div className="md:hidden">
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    decoding="async"
                  />
                  {/* Badge prix mobile */}
                  <div className="absolute top-3 right-3 bg-red-600 text-white px-3 py-1.5 rounded-full font-bold text-lg shadow-lg">
                    {item.price}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-bold text-black group-hover:text-red-600 transition-colors duration-300 mb-3">
                    {item.name}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {item.description}
                  </p>
                  
                  {/* CTA mobile */}
                  <div className="mt-4 flex justify-between items-center">
                    <div className="flex items-center space-x-1 text-green-600 text-xs font-medium">
                      <span>🥤</span>
                      <span>Boisson offerte</span>
                    </div>
                    <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200">
                      Commander
                    </button>
                  </div>
                </div>
              </div>

              {/* Desktop: Layout horizontal */}
              <div className="hidden md:flex">
                <div className="md:w-1/3">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="md:w-2/3 p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-black group-hover:text-red-600 transition-colors duration-300">
                      {item.name}
                    </h3>
                    <span className="text-xl font-bold text-red-600 ml-4">
                      {item.price}
                    </span>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View Full Menu CTA */}
        <div className="text-center mt-12">
          <button 
            onClick={openMenuPopup}
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full font-semibold text-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Voir le Menu Complet
          </button>
        </div>
      </div>

      {/* Menu Popup */}
      <MenuPopup isOpen={isMenuPopupOpen} onClose={closeMenuPopup} />
    </section>
  );
};

export default Menu;