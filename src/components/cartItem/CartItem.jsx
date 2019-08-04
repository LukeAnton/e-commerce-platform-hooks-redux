import React from "react";
import "./cartItem.scss";
const CartItem = ({ item: { imageUrl, price, name, quantity } }) => {
  return (
    <div className="cart-item">
      <img src={imageUrl} alt="item" />
      <div className="item-details">
        <span className="name">
          {quantity} X {name}
        </span>
        <span className="price">${price * quantity}</span>
      </div>
    </div>
  );
};

export default CartItem;
