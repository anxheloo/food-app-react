import React from "react";
import "./Header.css";
import mealsImage from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <>
      <header className="header">
        <h1>ReactMeals</h1>
        <HeaderCartButton onShowCart={props.onShowCart}></HeaderCartButton>
      </header>
      <div className="main-image">
        <img src={mealsImage} alt="A table full of delicious food!"></img>
      </div>
    </>
  );
};

export default Header;
