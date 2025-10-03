import React from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCart, Star, Eye } from 'lucide-react'
import { useCart } from '../context/CartContext'
import './ProductCard.css'

const ProductCard = ({ product }) => {
  const { addToCart } = useCart()

  const handleAddToCart = (e) => {
    e.preventDefault()
    addToCart(product)
  }

  const renderStars = (rating) => {
    const stars = []
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 !== 0

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={i} className="star filled" size={16} />)
    }

    if (hasHalfStar) {
      stars.push(<Star key="half" className="star half" size={16} />)
    }

    const emptyStars = 5 - Math.ceil(rating)
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Star key={`empty-${i}`} className="star empty" size={16} />)
    }

    return stars
  }

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
        <div className="product-overlay">
          <Link to={`/product/${product.id}`} className="quick-view-btn">
            <Eye size={20} />
          </Link>
          {product.inStock && (
            <button 
              className="add-to-cart-btn"
              onClick={handleAddToCart}
              title="Add to Cart"
            >
              <ShoppingCart size={20} />
            </button>
          )}
        </div>
        {!product.inStock && (
          <div className="out-of-stock">
            <span>Out of Stock</span>
          </div>
        )}
      </div>
      
      <div className="product-info">
        <div className="product-category">{product.category}</div>
        <h3 className="product-name">
          <Link to={`/product/${product.id}`}>{product.name}</Link>
        </h3>
        
        <div className="product-rating">
          <div className="stars">
            {renderStars(product.rating)}
          </div>
          <span className="rating-text">
            {product.rating} ({product.reviews} reviews)
          </span>
        </div>
        
        <div className="product-price">
          <span className="price">${product.price}</span>
        </div>
        
        <div className="product-actions">
          {product.inStock ? (
            <button 
              className="btn btn-primary add-to-cart"
              onClick={handleAddToCart}
            >
              <ShoppingCart size={16} />
              Add to Cart
            </button>
          ) : (
            <button className="btn btn-secondary" disabled>
              Out of Stock
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProductCard
