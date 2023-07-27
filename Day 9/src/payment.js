import React, { useState } from "react";
import "./payment.css";

const Payment = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
  };

  return (
    <div className="payment-container">
      <h2>Payment</h2>
      <form onSubmit={handleSubmit}>
        <div className="payment-options">
          <label>
            <input
              type="radio"
              value="credit-debit-card"
              checked={selectedOption === "credit-debit-card"}
              onChange={handleOptionChange}
            />
            Credit/Debit Card
          </label>
          <label>
            <input
              type="radio"
              value="cash-on-delivery"
              checked={selectedOption === "cash-on-delivery"}
              onChange={handleOptionChange}
            />
            Cash on Delivery
          </label>
          <label>
            <input
              type="radio"
              value="netbanking"
              checked={selectedOption === "netbanking"}
              onChange={handleOptionChange}
            />
            Netbanking
          </label>
          <label>
            <input
              type="radio"
              value="upi"
              checked={selectedOption === "upi"}
              onChange={handleOptionChange}
            />
            UPI
          </label>
        </div>
        <button className="submit-btn" type="submit">Proceed to Payment</button>
      </form>
    </div>
  );
};

export default Payment;
