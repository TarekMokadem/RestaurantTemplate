// Mock data for the restaurant template
export const restaurantData = {
  name: "FlavorHub",
  tagline: "Experience Culinary Excellence",
  
  about: {
    title: "Our Story",
    description: "Founded in 2008, FlavorHub has been serving exceptional cuisine with passion and dedication. Our team of expert chefs combines traditional techniques with modern innovation to create unforgettable dining experiences.",
    highlights: [
      "Fresh, locally-sourced ingredients",
      "Award-winning chef team",
      "Cozy, modern atmosphere",
      "Exceptional customer service"
    ]
  },

  menuCategories: [
    {
      id: 1,
      name: "Appetizers",
      items: [
        {
          id: 1,
          name: "Truffle Bruschetta",
          description: "Artisan bread topped with truffle oil, tomatoes, and fresh basil",
          price: "$12.99",
          image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2Mzl8MHwxfHNlYXJjaHwyfHxmb29kfGVufDB8fHx8MTc1NzE5Mjc5Mnww&ixlib=rb-4.1.0&q=85"
        },
        {
          id: 2,
          name: "Crispy Calamari",
          description: "Fresh squid rings served with marinara sauce and lemon",
          price: "$14.99",
          image: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg"
        }
      ]
    },
    {
      id: 2,
      name: "Main Courses", 
      items: [
        {
          id: 3,
          name: "Grilled Salmon",
          description: "Atlantic salmon with herbs, served with roasted vegetables",
          price: "$26.99",
          image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2Mzl8MHwxfHNlYXJjaHw0fHxmb29kfGVufDB8fHx8MTc1NzE5Mjc5Mnww&ixlib=rb-4.1.0&q=85"
        },
        {
          id: 4,
          name: "Ribeye Steak",
          description: "Premium cut steak cooked to perfection with garlic butter",
          price: "$32.99",
          image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwzfHxkaW5pbmd8ZW58MHx8fHwxNzU3MTkyNzg3fDA&ixlib=rb-4.1.0&q=85"
        }
      ]
    },
    {
      id: 3,
      name: "Desserts",
      items: [
        {
          id: 5,
          name: "Chocolate Lava Cake",
          description: "Warm chocolate cake with molten center, served with vanilla ice cream",
          price: "$8.99",
          image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2Mzl8MHwxfHNlYXJjaHwyfHxmb29kfGVufDB8fHx8MTc1NzE5Mjc5Mnww&ixlib=rb-4.1.0&q=85"
        }
      ]
    }
  ],

  info: {
    hours: [
      { day: "Monday - Thursday", time: "11:00 AM - 10:00 PM" },
      { day: "Friday - Saturday", time: "11:00 AM - 11:00 PM" },
      { day: "Sunday", time: "12:00 PM - 9:00 PM" }
    ],
    location: {
      address: "123 Flavor Street, Downtown City, DC 12345",
      phone: "(555) 123-4567",
      email: "info@flavorhub.com"
    }
  },

  gallery: [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1667388969250-1c7220bf3f37?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwaW50ZXJpb3J8ZW58MHx8fHwxNzU3MTUwODgwfDA&ixlib=rb-4.1.0&q=85",
      alt: "Restaurant Interior"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwxfHxkaW5pbmd8ZW58MHx8fHwxNzU3MTkyNzg3fDA&ixlib=rb-4.1.0&q=85",
      alt: "Fine Dining Experience"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwyfHxkaW5pbmd8ZW58MHx8fHwxNzU3MTkyNzg3fDA&ixlib=rb-4.1.0&q=85",
      alt: "Social Dining"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1574966739987-65e38db0f7ce?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHw0fHxkaW5pbmd8ZW58MHx8fHwxNzU3MTkyNzg3fDA&ixlib=rb-4.1.0&q=85",
      alt: "Table Setting"
    },
    {
      id: 5,
      image: "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg",
      alt: "Wine Selection"
    },
    {
      id: 6,
      image: "https://images.pexels.com/photos/1850595/pexels-photo-1850595.jpeg",
      alt: "Chef at Work"
    }
  ],

  socialMedia: [
    { platform: "Facebook", url: "https://facebook.com", icon: "facebook" },
    { platform: "Instagram", url: "https://instagram.com", icon: "instagram" },
    { platform: "Twitter", url: "https://twitter.com", icon: "twitter" }
  ]
};