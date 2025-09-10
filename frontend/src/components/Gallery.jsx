import React, { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { restaurantData } from "../data/mockData";

const Gallery = () => {
  const { gallery } = restaurantData;
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const goToPrevious = () => {
    const newIndex = currentIndex > 0 ? currentIndex - 1 : gallery.length - 1;
    setCurrentIndex(newIndex);
    setSelectedImage(gallery[newIndex]);
  };

  const goToNext = () => {
    const newIndex = currentIndex < gallery.length - 1 ? currentIndex + 1 : 0;
    setCurrentIndex(newIndex);
    setSelectedImage(gallery[newIndex]);
  };

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Galerie Photo
          </h2>
          <div className="w-20 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Partez pour un voyage visuel à travers notre restaurant, de nos espaces de restauration élégants 
            à nos plats soigneusement préparés.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {gallery.map((image, index) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
              onClick={() => openLightbox(image, index)}
            >
              <img
                src={image.image}
                alt={image.alt}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:scale-100 scale-75">
                  <div className="w-12 h-12 border-2 border-white rounded-full flex items-center justify-center">
                    <span className="text-xl">+</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl w-full max-h-full">
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors duration-300"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Navigation Buttons */}
              <button
                onClick={goToPrevious}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors duration-300"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors duration-300"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Main Image */}
              <img
                src={selectedImage.image}
                alt={selectedImage.alt}
                className="w-full h-full object-contain rounded-lg"
              />

              {/* Image Counter */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/20 text-white px-4 py-2 rounded-full text-sm">
                {currentIndex + 1} / {gallery.length}
              </div>
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Vous voulez en voir plus ? Suivez-nous sur les réseaux sociaux pour des mises à jour quotidiennes et du contenu en coulisses.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-full font-semibold transition-colors duration-300">
              Suivre sur Instagram
            </button>
            <button className="border border-gray-300 hover:border-red-600 text-gray-700 hover:text-red-600 px-6 py-3 rounded-full font-semibold transition-all duration-300">
              Visiter Facebook
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;