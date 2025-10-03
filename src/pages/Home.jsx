import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { products } from '../data/products'

const Home = () => {
  const featuredProducts = products.slice(0, 3)

  return (
    <div style={{ minHeight: "100vh", padding: "2rem 0" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}>
        {/* Hero Section */}
        <section style={{
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          color: "white",
          padding: "4rem 0",
          borderRadius: "12px",
          marginBottom: "3rem",
          textAlign: "center"
        }}>
          <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>Welcome to ShopEase</h1>
          <p style={{ fontSize: "1.2rem", marginBottom: "2rem", opacity: 0.9 }}>
            Discover amazing products at unbeatable prices. Shop with confidence and enjoy fast, free shipping.
          </p>
          <Link to="/products" style={{
            background: "white",
            color: "#667eea",
            padding: "12px 24px",
            borderRadius: "6px",
            textDecoration: "none",
            fontWeight: "600",
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem"
          }}>
            Shop Now <ArrowRight size={20} />
          </Link>
        </section>

        {/* Featured Products */}
        <section>
          <h2 style={{ textAlign: "center", marginBottom: "2rem", fontSize: "2rem" }}>Featured Products</h2>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "2rem"
          }}>
            {featuredProducts.map(product => (
              <div key={product.id} style={{
                background: "white",
                borderRadius: "12px",
                padding: "1.5rem",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                transition: "transform 0.3s ease"
              }}>
                <img 
                  src={product.image} 
                  alt={product.name}
                  style={{
                    width: "100%",
                    height: "200px",
                    objectFit: "cover",
                    borderRadius: "8px",
                    marginBottom: "1rem"
                  }}
                />
                <h3 style={{ marginBottom: "0.5rem", fontSize: "1.2rem" }}>{product.name}</h3>
                <p style={{ color: "#6c757d", marginBottom: "1rem" }}>{product.description}</p>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: "1.5rem", fontWeight: "700", color: "#28a745" }}>
                    ${product.price}
                  </span>
                  <Link to={`/product/${product.id}`} style={{
                    background: "#007bff",
                    color: "white",
                    padding: "8px 16px",
                    borderRadius: "4px",
                    textDecoration: "none",
                    fontSize: "14px"
                  }}>
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

export default Home