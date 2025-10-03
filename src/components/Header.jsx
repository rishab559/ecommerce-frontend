import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ShoppingCart, Search, Menu, X, User } from 'lucide-react'
import { useCart } from '../context/CartContext'
import './Header.css'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const { getTotalItems } = useCart()
  const navigate = useNavigate()

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery)}`)
      setSearchQuery('')
    }
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          {/* Logo */}
          <Link to="/" className="logo">
            <h1>ShopEase</h1>
          </Link>

          {/* Search Bar */}
          <form className="search-form" onSubmit={handleSearch}>
            <div className="search-input-wrapper">
              <Search className="search-icon" size={20} />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
              />
            </div>
          </form>

          {/* Desktop Navigation */}
          <nav className="desktop-nav">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/products" className="nav-link">Products</Link>
            <Link to="/cart" className="nav-link cart-link">
              <ShoppingCart size={20} />
              <span className="cart-count">{getTotalItems()}</span>
            </Link>
            <Link to="/profile" className="nav-link">
              <User size={20} />
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button className="mobile-menu-btn" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="mobile-nav">
            <Link to="/" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
            <Link to="/products" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>
              Products
            </Link>
            <Link to="/cart" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>
              <ShoppingCart size={20} />
              Cart ({getTotalItems()})
            </Link>
            <Link to="/profile" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>
              <User size={20} />
              Profile
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}

export default Header
