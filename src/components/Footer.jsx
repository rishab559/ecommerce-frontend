import React from 'react'

const Footer = () => {
  return (
    <footer style={{
      background: "linear-gradient(135deg, #2c3e50 0%, #34495e 100%)",
      color: "white",
      padding: "2rem 0",
      marginTop: "auto",
      textAlign: "center"
    }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}>
        <h3 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>ShopEase</h3>
        <p style={{ color: "#bdc3c7", marginBottom: "1rem" }}>
          Your one-stop destination for quality products at affordable prices.
        </p>
        <p style={{ color: "#95a5a6", margin: 0 }}>
          © 2024 ShopEase. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer