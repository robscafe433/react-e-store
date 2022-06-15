import React from "react";
import ShoppingCartDescription from "../../components/Cart/ShoppingCartDescription";
import Summary from "../../components/Cart/Summary";
import "./Checkout.css";

const Checkout = (props) => {
  const { cartItems, onAdd, onRemove } = props;
  return (
    <div className="main-cart album py-5 bg-light rounded">
      <div className="cart-body container rounded white">
        <div className="row">
          <ShoppingCartDescription
            cartItems={cartItems}
            onAdd={onAdd}
            onRemove={onRemove}
          />
          <Summary />
        </div>
      </div>
    </div>
  );
};

export default Checkout;
