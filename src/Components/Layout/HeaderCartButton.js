import React, { useContext } from "react";
import "./HeaderCartButton.css";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../Store/CartContext";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((currentNumber, item) => {
    return currentNumber + item.amount;
  }, 0);

  return (
    <button className="button" onClick={props.onShowCart}>
      <span className="icon">
        <CartIcon></CartIcon>
      </span>
      <span>Your Cart</span>
      <span className="badge">{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
