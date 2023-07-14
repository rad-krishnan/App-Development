import React, { useState } from "react";
import { Link } from "react-router-dom";

const Cart = () => {
  const [isCheckoutClicked, setIsCheckoutClicked] = useState(false);

  const handleCheckout = () => {
    setIsCheckoutClicked(true);
  };

  return (
    <div>
      <h2>Cart</h2>
      {/* Cart items */}
      {/* Cart total */}

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
