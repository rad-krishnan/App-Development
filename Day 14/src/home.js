import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useLocation, useNavigate } from "react-router-dom"
import { useDispatch , useSelector } from "react-redux";
import "./home.css";
import { FcAbout } from 'react-icons/fc';
import { FaHandHoldingMedical } from 'react-icons/fa';
import { FiShoppingCart } from 'react-icons/fi';
import { PiSignOutBold } from 'react-icons/pi';
import "./feedback";

const Home = () => {
  const location = useLocation();
  const navigate = useNavigate(); 
  const showMessage = location.state?.showMessage;
  const [showFlashMessage, setShowFlashMessage] = useState(location.state?.showMessage || false);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const reduxEmail = useSelector(state => state.email);
  const dispatch=useDispatch();

  const [cartItems, setCartItems] = useState([]);
  const [featuredProducts, setFeaturedProducts] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);

  };
    const handleSignOut = () => {
      // Remove the token (or any other auth credentials) from local storage
    localStorage.removeItem('$2a$10$UfZQwUYZWeaSccbhH8.QVe.7vyGupGFyPkQMP1xDE2LVorXvKxVma');
      // Redirect the user to the login page
      navigate('/');
    };
    
  
  useEffect(() => {
    // This function fetches the products from your backend and sets the state
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:8081/getProducts'); 
        setFeaturedProducts(response.data);
      } catch (error) {
        console.error("Error fetching the products: ", error);
      }
    };

    fetchProducts();
  }, []);   // An empty dependency array means this useEffect will run once when the component mounts


  // const featuredProducts = [
  //   {
  //     id: 1,
  //     name: "Crocin 650",
  //     price: "25/-",
  //   },
  //   {
  //     id: 2,
  //     name: "T-Bact 5gm",
  //     price: "115/-",
  //   },
  //   {
  //     id: 3,
  //     name: "Odonil",
  //     price: "145/-",
  //   },
  //   {
  //     id: 4,
  //     name: "Crocin Syrup 160",
  //     price: "35/-",
  //   },
  //   {
  //     id: 5,
  //     name: "Gelusil",
  //     price: "25/-",
  //   },
  //   {
  //     id: 6,
  //     name: "Stepsils",
  //     price: "10/-",
  //   },
  //   {
  //     id: 7,
  //     name: "Halles",
  //     price: "10/-",
  //   },
  // ];

  const promotions = [
    {
      id: 1,
      title: "20% Discount",
      description: "Use 'New20' to get upto 20% off for new users.",
    },
    {
      id: 2,
      title: "Free Shipping",
      description: "Enjoy free shipping on all orders above 1000/-",
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
  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8181/api/v1/auth/email"
        );
        const userDetails = response.data;
        console.log(userDetails);
        dispatch({type:"SET_DETAILS",payload:userDetails});
        if (userDetails) {
          const loggedInUserDetails = userDetails.find(
            user1 => user1.email === reduxEmail
          );
          if (loggedInUserDetails) {
            setLoggedInUser(loggedInUserDetails);
          }
        }
      } catch (error) {
        alert(error.message);
      }
    };

    fetchProfileData();
  }, [reduxEmail]);

  return (
    <div>
    {showFlashMessage && (
      <div className="flash-message">
        Successfully Purchased
        <button className="close-flash" onClick={() => setShowFlashMessage(false)}>x</button>  {/* Flash message */}
        </div>
        )}
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
        <button onClick={handleSignOut}>
          <PiSignOutBold /> Sign Out
        </button>
      </li>
      <li>
      {loggedInUser ? (
        <p>Hello {loggedInUser.name}</p>
      ):(<p>Hello Guest</p>)}
      </li>
          <li className="right-links">
            <Link to="/Feedback"> Feedback </Link>
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
