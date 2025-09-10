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

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
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

        {/* Menu Items */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {activeItems.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
            >
              <div className="md:flex">
                <div className="md:w-1/3">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-48 md:h-full object-cover group-hover:scale-105 transition-transform duration-500"
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