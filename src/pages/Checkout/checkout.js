import React from "react";
import ShoppingCartDescription from "../../components/Cart//ShoppingCartDescription";
import Summary from "../../components/Cart/Summary";
import "./Checkout.css";

const CheckoutPage = (props) => {
  return (
    <div className="main-cart album py-5 bg-light rounded">
      <div className="cart-body container rounded white">
        <div className="row">
          <ShoppingCartDescription />
          <Summary />
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
