export const products = [
  {
    id: 1,
    name: "Wireless Bluetooth Headphones",
    price: 99.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
    description: "High-quality wireless headphones with noise cancellation and 30-hour battery life.",
    category: "Electronics",
    rating: 4.5,
    reviews: 128,
    inStock: true,
    features: ["Noise Cancellation", "30h Battery", "Quick Charge", "Bluetooth 5.0"]
  },
  {
    id: 2,
    name: "Smart Fitness Watch",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
    description: "Advanced fitness tracking with heart rate monitor, GPS, and water resistance.",
    category: "Electronics",
    rating: 4.7,
    reviews: 89,
    inStock: true,
    features: ["Heart Rate Monitor", "GPS Tracking", "Water Resistant", "7-Day Battery"]
  },
  {
    id: 3,
    name: "Premium Coffee Maker",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=400&fit=crop",
    description: "Professional-grade coffee maker with programmable settings and thermal carafe.",
    category: "Appliances",
    rating: 4.6,
    reviews: 156,
    inStock: true,
    features: ["Programmable", "Thermal Carafe", "12-Cup Capacity", "Auto Shut-off"]
  },
  {
    id: 4,
    name: "Ergonomic Office Chair",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop",
    description: "Comfortable ergonomic chair with lumbar support and adjustable height.",
    category: "Furniture",
    rating: 4.4,
    reviews: 203,
    inStock: true,
    features: ["Lumbar Support", "Adjustable Height", "Breathable Mesh", "5-Year Warranty"]
  },
  {
    id: 5,
    name: "Wireless Phone Charger",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1609592809822-5b0a6c4b8a1b?w=400&h=400&fit=crop",
    description: "Fast wireless charging pad compatible with all Qi-enabled devices.",
    category: "Electronics",
    rating: 4.3,
    reviews: 67,
    inStock: true,
    features: ["Qi Compatible", "Fast Charging", "LED Indicator", "Non-slip Base"]
  },
  {
    id: 6,
    name: "Bluetooth Speaker",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop",
    description: "Portable Bluetooth speaker with 360-degree sound and waterproof design.",
    category: "Electronics",
    rating: 4.5,
    reviews: 142,
    inStock: true,
    features: ["360° Sound", "Waterproof", "20h Battery", "Voice Assistant"]
  },
  {
    id: 7,
    name: "Mechanical Keyboard",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400&h=400&fit=crop",
    description: "RGB backlit mechanical keyboard with customizable keys and premium switches.",
    category: "Electronics",
    rating: 4.8,
    reviews: 94,
    inStock: true,
    features: ["RGB Backlight", "Mechanical Switches", "Customizable Keys", "USB-C"]
  },
  {
    id: 8,
    name: "Standing Desk Converter",
    price: 189.99,
    image: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=400&h=400&fit=crop",
    description: "Adjustable standing desk converter to improve posture and productivity.",
    category: "Furniture",
    rating: 4.2,
    reviews: 78,
    inStock: false,
    features: ["Height Adjustable", "Easy Assembly", "Sturdy Construction", "Cable Management"]
  }
]

export const categories = [
  "All",
  "Electronics",
  "Appliances", 
  "Furniture"
]

export const getProductById = (id) => {
  return products.find(product => product.id === parseInt(id))
}

export const getProductsByCategory = (category) => {
  if (category === "All") return products
  return products.filter(product => product.category === category)
}

export const searchProducts = (query) => {
  const lowercaseQuery = query.toLowerCase()
  return products.filter(product => 
    product.name.toLowerCase().includes(lowercaseQuery) ||
    product.description.toLowerCase().includes(lowercaseQuery) ||
    product.category.toLowerCase().includes(lowercaseQuery)
  )
}
