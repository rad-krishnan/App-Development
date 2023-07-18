import React, { useState } from "react";
import { Link } from "react-router-dom";

const Cart = () => {
  const [isCheckoutClicked, setIsCheckoutClicked] = useState(false);

  const handleCheckout = () => {
    setIsCheckoutClicked(true);
  };

  // Sample cart items
  const cartItems = [
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
    // Add more cart items here
  ];

  return (
    <div>
      <h2>Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name} - {item.price}
          </li>
        ))}
      </ul>

      {isCheckoutClicked ? (
        <Link to="/payment">
          <button className="checkout-btn">Proceed to Payment</button>
        </Link>
      ) : (
        <button className="checkout-btn" onClick={handleCheckout}>
          Checkout
        </button>
      )}
    </div>
  );
};

export default Cart;