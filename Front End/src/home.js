import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./home.css";
import { FcAbout } from 'react-icons/fc';
import { FaHandHoldingMedical } from 'react-icons/fa';
import { FiShoppingCart } from 'react-icons/fi';
import { PiSignOutBold } from 'react-icons/pi';


const Home = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const featuredProducts = [
    {
      id: 1,
      name: "Crocin 650",
      price: "25/-",
    },
    {
      id: 2,
      name: "T-Bact 5gm",
      price: "115/-",
    },
    {
      id: 3,
      name: "Odonil",
      price: "145/-",
    },
    {
      id: 4,
      name: "Crocin Syrup 160",
      price: "35/-",
    },
    {
      id: 5,
      name: "Gelusil",
      price: "25/-",
    },
    {
      id: 6,
      name: "Stepsils",
      price: "10/-",
    },
    {
      id: 7,
      name: "Halles",
      price: "10/-",
    },
  ];

  const promotions = [
    {
      id: 1,
      title: "20% Discount",
      description: "Use 'New20' to get upto 20% off for new users.",
    },
    {
      id: 2,
      title: "Free Shipping",
      description: "Enjoy free shipping on all orders above 500/-",
    },
    // Add more promotions here
  ];

  const reviews = [
    {
      id: 1,
      name: "Patrick Bateman",
      comment: "Great products and fast delivery!",
    },
    {
      id: 2,
      name: "Tyler Durden",
      comment: "Highly recommend this online store.",
    },
    // Add more reviews here
  ];

  return (
    <div>
      <header className="header">
        <div className="header-content">
          <h1 className="logo">RPM Online Medical Store</h1>
          <p className="slogan">
            Delivering Quality Healthcare Products to Your Doorstep
          </p>
          <Link to="/About" className="header-link">
            Learn More
          </Link>
        </div>
      </header>
      <nav>
        <ul className="navbar">
          <li className="login-btn">
            <Link to="/"><PiSignOutBold/> Sign Out</Link>
          </li>
          <li className="right-links">
            <Link to="/About"> <FcAbout/>About </Link>
            <Link to="/Support"><FaHandHoldingMedical/>Support </Link>
            <Link to="/cart">Cart <FiShoppingCart/></Link>
          </li>
        </ul>
      </nav>

      <section className="featured-section">
        <h2>Featured Products</h2>
        <div className="featured-products">
          {featuredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <h3 className="product-name">{product.name}</h3>
              <p className="product-price">{product.price}</p>
              <div className="product-buttons">
                <button className="shop-now-btn" onClick={() => addToCart(product)}>
                  Shop Now
                </button>
                <button className="add-to-cart-btn" onClick={() => addToCart(product)}>
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="promotions-section">
        <h2>Promotions</h2>
        <div className="promotions">
          {promotions.map((promotion) => (
            <div key={promotion.id} className="promotion-card">
              <h3 className="promotion-title">{promotion.title}</h3>
              <p className="promotion-description">
                {promotion.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="reviews-section">
        <h2>Reviews</h2>
        <div className="reviews">
          {reviews.map((review) => (
            <div key={review.id} className="review-card">
              <p className="review-comment">{review.comment}</p>
              <p className="review-name">- {review.name}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="footer">
        <p>&copy; 2023 RPM Online Medical Store. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
