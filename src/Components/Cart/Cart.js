import React, { useContext } from "react";
import Modal from "../UI/Modal";
import "./Cart.css";
import CartContext from "../Store/CartContext";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const cartItems = (
    <ul className="cart-items">
      {cartCtx.items.map((element) => (
        <CartItem
          key={element.id}
          name={element.name}
          amount={element.amount}
          price={element.price}
          onRemove={cartItemRemoveHandler.bind(null, element.id)}
          onAdd={cartItemAddHandler.bind(null, element)}
        ></CartItem>
      ))}
    </ul>
  );

  return (
    <Modal onHideCart={props.onHideCart}>
      {cartItems}

      <div className="total">
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>

      <div className="actions">
        <button className="button--alt" onClick={props.onHideCart}>
          Close
        </button>

        {hasItems && (
          <button className="button" style={{ display: "inline-flex" }}>
            Order
          </button>
        )}
      </div>
    </Modal>
  );
};

export default Cart;
