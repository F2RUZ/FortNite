import React from "react";
import "./cart.scss";

const Cart = ({ handleCart, count }) => {
  return (
    <div onClick={handleCart} className="cart">
      <i className="fas shop fa-shopping-cart fa-lg"></i>
      <span className="quantety">
        {count ===0 ? null : count}
      </span>
    </div>
  );
};

export default Cart;
