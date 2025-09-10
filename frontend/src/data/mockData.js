// Import des images locales
import penneImage from "../assets/images/menu/penne-mushroom.png";
import tagliateleImage from "../assets/images/menu/tagliatelle.png";

// Mock data for the restaurant template
export const restaurantData = {
  name: "Le Familial",
  tagline: "Cuisine Généreuse dans un Cadre Familial",
  
  about: {
    title: "Notre Histoire",
    description: "Depuis 2005, Le Familial vous accueille dans une atmosphère chaleureuse et conviviale à Roubaix. Notre restaurant propose une cuisine généreuse avec des spécialités de pâtes, escalopes et viandes. Chaque plat est préparé avec soin et servi avec une boisson offerte.",
    highlights: [
      "Cuisine 100% Halal certifiée",
      "Boisson 33cl offerte avec chaque plat",
      "Ambiance familiale et chaleureuse",
      "Livraison et vente à emporter"
    ]
  },

  menuCategories: [
    {
      id: 1,
      name: "Nos Pennes",
      items: [
        {
          id: 1,
          name: "Penne Parisienne",
          description: "Bolognaise, poulet, champignons, sauce maison + boisson 33cl offerte",
          price: "9,00€",
          image: penneImage
        },
        {
          id: 2,
          name: "Penne Lorraine",
          description: "Jambon fumé, poulet, champignons, sauce maison + boisson 33cl offerte",
          price: "9,00€",
          image: penneImage
        },
        {
          id: 3,
          name: "Penne Royale",
          description: "Poulet, lardons, jambon fumé, champignons, persillade, sauce maison + boisson 33cl offerte",
          price: "9,00€",
          image: penneImage
        },
        {
          id: 4,
          name: "Penne Mexicaine",
          description: "Poulet, maïs, poivrons, oignons, sauce maison + boisson 33cl offerte",
          price: "9,00€",
          image: penneImage
        },
        {
          id: 5,
          name: "Penne Thaïlandaise 🌶️",
          description: "Poulet, jambon fumé, poivrons, champignons, sauce maison épicée + boisson 33cl offerte",
          price: "9,00€",
          image: penneImage
        },
        {
          id: 6,
          name: "Penne Tunisienne 🌶️",
          description: "Bolognaise, jambon fumé, poivrons, champignons, piment, sauce maison + boisson 33cl offerte",
          price: "9,00€",
          image: penneImage
        }
      ]
    },
    {
      id: 2,
      name: "Nos Tagliatelles",
      description: "Toujours gratinées (pas de supplément)",
      items: [
        {
          id: 7,
          name: "Tagliatelles Jambon",
          description: "Jambon fumé, champignons, gratinées + boisson 33cl offerte",
          price: "10,00€",
          image: tagliateleImage
        },
        {
          id: 8,
          name: "Tagliatelles Poulet",
          description: "Poulet, champignons, gratinées + boisson 33cl offerte",
          price: "10,00€",
          image: tagliateleImage
        },
        {
          id: 9,
          name: "Tagliatelles Bolognaise",
          description: "Sauce bolognaise traditionnelle, gratinées + boisson 33cl offerte",
          price: "10,00€",
          image: tagliateleImage
        },
        {
          id: 10,
          name: "Tagliatelles Savoyard",
          description: "Jambon fumé, lardons, champignons, œuf, gratinées + boisson 33cl offerte",
          price: "10,00€",
          image: tagliateleImage
        },
        {
          id: 11,
          name: "Tagliatelles Garnies",
          description: "Poulet, jambon fumé, bolognaise, champignons, gratinées + boisson 33cl offerte",
          price: "10,00€",
          image: tagliateleImage
        },
        {
          id: 12,
          name: "Tagliatelles Saumon",
          description: "Saumon frais & crème, gratinées + boisson 33cl offerte",
          price: "10,00€",
          image: tagliateleImage
        },
        {
          id: 13,
          name: "Tagliatelles Campagnard",
          description: "Lardons, poulet, oignons, champignons, gratinées + boisson 33cl offerte",
          price: "10,00€",
          image: tagliateleImage
        },
        {
          id: 14,
          name: "Tagliatelles Madagascar",
          description: "Saumon & crevettes, gratinées + boisson 33cl offerte",
          price: "10,00€",
          image: tagliateleImage
        },
        {
          id: 15,
          name: "Tagliatelles Cubaine 🌶️",
          description: "Poulet, poivrons, champignons, maïs, gratinées + boisson 33cl offerte",
          price: "10,00€",
          image: tagliateleImage
        }
      ]
    },
    {
      id: 3,
      name: "Nos Salades",
      items: [
        {
          id: 16,
          name: "Salade Poulet",
          description: "Salade fraîche avec morceaux de poulet + boisson 33cl offerte",
          price: "9,00€",
          image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2Mzl8MHwxfHNlYXJjaHwyfHxmb29kfGVufDB8fHx8MTc1NzE5Mjc5Mnww&ixlib=rb-4.1.0&q=85"
        },
        {
          id: 17,
          name: "Salade Bœuf",
          description: "Salade fraîche avec lamelles de bœuf + boisson 33cl offerte",
          price: "9,00€",
          image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2Mzl8MHwxfHNlYXJjaHwyfHxmb29kfGVufDB8fHx8MTc1NzE5Mjc5Mnww&ixlib=rb-4.1.0&q=85"
        },
        {
          id: 18,
          name: "Salade Mixte",
          description: "Salade fraîche avec poulet et bœuf + boisson 33cl offerte",
          price: "9,00€",
          image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2Mzl8MHwxfHNlYXJjaHwyfHxmb29kfGVufDB8fHx8MTc1NzE5Mjc5Mnww&ixlib=rb-4.1.0&q=85"
        },
        {
          id: 19,
          name: "Salade Pêcheur",
          description: "Salade fraîche avec poissons et fruits de mer + boisson 33cl offerte",
          price: "9,00€",
          image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2Mzl8MHwxfHNlYXJjaHwyfHxmb29kfGVufDB8fHx8MTc1NzE5Mjc5Mnww&ixlib=rb-4.1.0&q=85"
        },
        {
          id: 20,
          name: "Salade Jambon (froide)",
          description: "Salade fraîche avec jambon + boisson 33cl offerte",
          price: "9,00€",
          image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2Mzl8MHwxfHNlYXJjaHwyfHxmb29kfGVufDB8fHx8MTc1NzE5Mjc5Mnww&ixlib=rb-4.1.0&q=85"
        },
        {
          id: 21,
          name: "Salade Saumon (froide)",
          description: "Salade fraîche avec saumon fumé + boisson 33cl offerte",
          price: "9,00€",
          image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2Mzl8MHwxfHNlYXJjaHwyfHxmb29kfGVufDB8fHx8MTc1NzE5Mjc5Mnww&ixlib=rb-4.1.0&q=85"
        }
      ]
    },
    {
      id: 4,
      name: "Nos Escalopes",
      description: "Accompagnement au choix : Pennes ou Pommes de terre",
      items: [
        {
          id: 22,
          name: "Escalope aux Champignons",
          description: "Escalope de dinde sauce champignons + accompagnement + boisson 33cl offerte",
          price: "12,00€",
          image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwzfHxkaW5pbmd8ZW58MHx8fHwxNzU3MTkyNzg3fDA&ixlib=rb-4.1.0&q=85"
        },
        {
          id: 23,
          name: "Escalope Sicilienne 🌶️",
          description: "Escalope de dinde sauce sicilienne épicée + accompagnement + boisson 33cl offerte",
          price: "12,00€",
          image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwzfHxkaW5pbmd8ZW58MHx8fHwxNzU3MTkyNzg3fDA&ixlib=rb-4.1.0&q=85"
        },
        {
          id: 24,
          name: "Escalope au Poivre",
          description: "Escalope de dinde sauce au poivre + accompagnement + boisson 33cl offerte",
          price: "12,00€",
          image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwzfHxkaW5pbmd8ZW58MHx8fHwxNzU3MTkyNzg3fDA&ixlib=rb-4.1.0&q=85"
        }
      ]
    },
    {
      id: 5,
      name: "Nos Escalopes Gratinées",
      description: "Accompagnement au choix : Pennes ou Pommes de terre",
      items: [
        {
          id: 25,
          name: "Escalope Alexandrie",
          description: "Escalope de dinde avec lardons, gratinée + accompagnement + boisson 33cl offerte",
          price: "13,00€",
          image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwzfHxkaW5pbmd8ZW58MHx8fHwxNzU3MTkyNzg3fDA&ixlib=rb-4.1.0&q=85"
        },
        {
          id: 26,
          name: "Escalope Garnie",
          description: "Escalope de dinde avec jambon de dinde fumé, gratinée + accompagnement + boisson 33cl offerte",
          price: "13,00€",
          image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwzfHxkaW5pbmd8ZW58MHx8fHwxNzU3MTkyNzg3fDA&ixlib=rb-4.1.0&q=85"
        },
        {
          id: 27,
          name: "Escalope Paysanne",
          description: "Escalope de dinde avec lardons et fromage de chèvre, gratinée + accompagnement + boisson 33cl offerte",
          price: "13,00€",
          image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwzfHxkaW5pbmd8ZW58MHx8fHwxNzU3MTkyNzg3fDA&ixlib=rb-4.1.0&q=85"
        },
        {
          id: 28,
          name: "Escalope Merlacine 🌶️",
          description: "Escalope de dinde avec jambon fumé et piments, gratinée + accompagnement + boisson 33cl offerte",
          price: "13,00€",
          image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwzfHxkaW5pbmd8ZW58MHx8fHwxNzU3MTkyNzg3fDA&ixlib=rb-4.1.0&q=85"
        },
        {
          id: 29,
          name: "Escalope Diavola 🌶️",
          description: "Escalope de dinde avec lardons et piments, gratinée + accompagnement + boisson 33cl offerte",
          price: "13,00€",
          image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwzfHxkaW5pbmd8ZW58MHx8fHwxNzU3MTkyNzg3fDA&ixlib=rb-4.1.0&q=85"
        }
      ]
    },
    {
      id: 6,
      name: "Nos Viandes Rouges",
      description: "Accompagnement au choix : Pennes ou Pommes de terre - Sauce au choix : champignons, poivre, sicilienne",
      items: [
        {
          id: 30,
          name: "Rumsteck",
          description: "Rumsteck de bœuf + sauce au choix + accompagnement + boisson 33cl offerte",
          price: "15,00€",
          image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwzfHxkaW5pbmd8ZW58MHx8fHwxNzU3MTkyNzg3fDA&ixlib=rb-4.1.0&q=85"
        },
        {
          id: 31,
          name: "Entrecôte",
          description: "Entrecôte de bœuf + sauce au choix + accompagnement + boisson 33cl offerte",
          price: "15,00€",
          image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwzfHxkaW5pbmd8ZW58MHx8fHwxNzU3MTkyNzg3fDA&ixlib=rb-4.1.0&q=85"
        },
        {
          id: 32,
          name: "Veau",
          description: "Escalope de veau + sauce au choix + accompagnement + boisson 33cl offerte",
          price: "15,00€",
          image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwzfHxkaW5pbmd8ZW58MHx8fHwxNzU3MTkyNzg3fDA&ixlib=rb-4.1.0&q=85"
        }
      ]
    },
    {
      id: 7,
      name: "Nos Desserts",
      items: [
        {
          id: 33,
          name: "Tiramisu",
          description: "Délicieux tiramisu fait maison + boisson 33cl offerte",
          price: "3,00€",
          image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2Mzl8MHwxfHNlYXJjaHwyfHx0aXJhbWlzdXxlbnwwfHx8fDE3NTcxOTI3OTJ8MA&ixlib=rb-4.1.0&q=85"
        }
      ]
    }
  ],

  info: {
    hours: [
      { day: "Lundi - Mardi - Mercredi - Jeudi", time: "11h30 - 15h00 / 18h00 - 23h30" },
      { day: "Vendredi", time: "18h00 - 23h30" },
      { day: "Samedi", time: "Fermé" },
      { day: "Dimanche", time: "18h00 - 23h30" }
    ],
    location: {
      address: "164 rue de Lannoy, 59100 Roubaix",
      phone: "03 66 59 90 97",
      email: "contact@lefamilial-roubaix.fr"
    },
    delivery: {
      roubaix: "20€ minimum",
      other: "25€ minimum autres villes"
    }
  },

  gallery: [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1667388969250-1c7220bf3f37?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwaW50ZXJpb3J8ZW58MHx8fHwxNzU3MTUwODgwfDA&ixlib=rb-4.1.0&q=85",
      alt: "Salle du restaurant Le Familial à Roubaix"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwxfHxkaW5pbmd8ZW58MHx8fHwxNzU3MTkyNzg3fDA&ixlib=rb-4.1.0&q=85",
      alt: "Expérience Gastronomique"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwyfHxkaW5pbmd8ZW58MHx8fHwxNzU3MTkyNzg3fDA&ixlib=rb-4.1.0&q=85",
      alt: "Repas Convivial"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1574966739987-65e38db0f7ce?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHw0fHxkaW5pbmd8ZW58MHx8fHwxNzU3MTkyNzg3fDA&ixlib=rb-4.1.0&q=85",
      alt: "Dressage de Table"
    },
    {
      id: 5,
      image: "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg",
      alt: "Sélection de Vins"
    },
    {
      id: 6,
      image: "https://images.pexels.com/photos/1850595/pexels-photo-1850595.jpeg",
      alt: "Chef au Travail"
    }
  ],

  socialMedia: [
    { platform: "Facebook", url: "https://facebook.com", icon: "facebook" },
    { platform: "Instagram", url: "https://instagram.com", icon: "instagram" },
    { platform: "Twitter", url: "https://twitter.com", icon: "twitter" }
  ]
};