import React from "react";
import Cart from "../Cart/Cart";

const CartContext = React.createContext({
  items: [],
  // amount: 0,
  totalAmount: 0,
  addItem: () => {},
  removeItem: (id) => {},
});

export default CartContext;
