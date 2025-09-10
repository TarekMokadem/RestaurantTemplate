import React, { useState } from "react";
import { Send, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useToast } from "../hooks/use-toast";
import { restaurantData } from "../data/mockData";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "Demande Générale",
    message: ""
  });
  const { toast } = useToast();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock form submission
    toast({
      title: "Message Envoyé !",
      description: "Merci de nous avoir contactés. Nous vous répondrons bientôt.",
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "Demande Générale",
      message: ""
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Contactez-Nous
          </h2>
          <div className="w-20 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Vous avez des questions sur notre menu, souhaitez faire une réservation ou organiser un événement spécial ? 
            Nous serions ravis de vous entendre.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Form - Mobile Optimized */}
          <div className="bg-white rounded-xl shadow-lg p-6 lg:p-8">
            <h3 className="text-xl lg:text-2xl font-bold text-black mb-6">Envoyez-nous un message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Mobile: Single column, Desktop: Two columns */}
              <div className="space-y-5 lg:grid lg:grid-cols-2 lg:gap-4 lg:space-y-0">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Nom Complet *
                  </label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full h-12 text-base"
                    placeholder="Votre nom complet"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Adresse Email *
                  </label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full h-12 text-base"
                    placeholder="votre@email.com"
                  />
                </div>
              </div>

              <div className="space-y-5 lg:grid lg:grid-cols-2 lg:gap-4 lg:space-y-0">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Numéro de Téléphone
                  </label>
                  <Input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full h-12 text-base"
                    placeholder="06 12 34 56 78"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Sujet
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full h-12 px-4 text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent bg-white"
                  >
                    <option>Demande Générale</option>
                    <option>Réservation</option>
                    <option>Événements Privés</option>
                    <option>Traiteur</option>
                    <option>Avis</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Message
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full text-base px-4 py-3"
                  placeholder="Décrivez votre demande en détail..."
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white py-4 font-semibold text-lg flex items-center justify-center space-x-2 transform hover:scale-105 transition-all duration-300 rounded-lg shadow-lg hover:shadow-xl"
              >
                <Send className="w-5 h-5" />
                <span>Envoyer le Message</span>
              </Button>
            </form>
          </div>

          {/* Contact Information - Mobile Optimized */}
          <div className="space-y-6 lg:space-y-8">
            <div className="bg-white rounded-xl shadow-lg p-6 lg:p-8">
              <h3 className="text-2xl font-bold text-black mb-6">Informations de Contact</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-black mb-1">Téléphone</h4>
                    <p className="text-gray-600">{restaurantData.info.location.phone}</p>
                    <p className="text-gray-500 text-sm">Disponible tous les jours 11h - 22h</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-black mb-1">Email</h4>
                    <p className="text-gray-600">{restaurantData.info.location.email}</p>
                    <p className="text-gray-500 text-sm">Nous répondons sous 24h</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-black mb-1">Adresse</h4>
                    <p className="text-gray-600">{restaurantData.info.location.address}</p>
                    <p className="text-gray-500 text-sm">Parking facile disponible</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions - Mobile Optimized */}
            <div className="bg-red-600 rounded-xl shadow-lg p-6 lg:p-8 text-white">
              <h3 className="text-xl lg:text-2xl font-bold mb-6">Actions Rapides</h3>
              <div className="space-y-4">
                <a 
                  href="tel:0366599097"
                  className="w-full border-2 border-white text-white hover:bg-white hover:text-red-600 py-4 font-semibold rounded-lg transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>📞</span>
                  <span>Réserver par Téléphone</span>
                </a>
                <Button
                  variant="outline"
                  className="w-full border-2 border-white text-white hover:bg-white hover:text-red-600 py-4 font-semibold rounded-lg transition-all duration-300"
                >
                  🛒 Commander à Emporter
                </Button>
                <Button
                  variant="outline"
                  className="w-full border-2 border-white text-white hover:bg-white hover:text-red-600 py-4 font-semibold rounded-lg transition-all duration-300"
                >
                  🎉 Organiser un Événement
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;