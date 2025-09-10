import React from "react";
import { X } from "lucide-react";
import menuImage from "../assets/images/menu/menu.png";
import menuPage1 from "../assets/images/menu/menu (1).png";
import menuPage2 from "../assets/images/menu/menu (2).png";

const MenuPopup = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black/95 z-50"
      onClick={handleBackdropClick}
    >
      {/* Version Mobile avec scroll vertical - 2 pages */}
      <div className="md:hidden h-full flex flex-col">
        {/* Header mobile simple */}
        <div className="flex items-center justify-between p-3 bg-black/80 backdrop-blur-sm">
          <div className="flex items-center space-x-2">
            <h3 className="text-white text-lg font-medium">Notre Menu</h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 bg-red-600 hover:bg-red-700 text-white rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Container scrollable vertical pour les 2 pages */}
        <div className="flex-1 overflow-y-auto bg-gray-100">
          <div className="flex flex-col">
            {/* Page 1 du menu */}
            <img
              src={menuPage1}
              alt="Menu Le Familial - Page 1"
              className="w-full h-auto object-contain bg-white"
              onClick={(e) => e.stopPropagation()}
            />
            
            {/* Page 2 du menu */}
            <img
              src={menuPage2}
              alt="Menu Le Familial - Page 2"
              className="w-full h-auto object-contain bg-white"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>

        {/* Instructions en bas */}
        <div className="p-2 bg-black/80 backdrop-blur-sm text-center">
          <p className="text-white text-xs opacity-75">
            Faites défiler pour voir toutes les pages du menu
          </p>
        </div>
      </div>

      {/* Version Desktop - Inchangée */}
      <div className="hidden md:flex items-center justify-center h-full p-4" onClick={handleBackdropClick}>
        <div className="relative max-w-[95vw] max-h-[95vh]">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 bg-red-600 hover:bg-red-700 text-white rounded-full transition-colors duration-200 shadow-lg"
            aria-label="Fermer le menu"
          >
            <X className="w-6 h-6" />
          </button>
          
          <img
            src={menuImage}
            alt="Menu complet du restaurant Le Familial - Pâtes, Escalopes, Viandes, Desserts"
            className="max-w-full max-h-full object-contain bg-white rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      </div>
    </div>
  );
};

export default MenuPopup;
