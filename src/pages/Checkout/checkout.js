import React from "react";
import ShoppingCartDescription from "../../components/Cart/ShoppingCartDescription";
import Summary from "../../components/Cart/Summary";
import "./checkout.css";

const Checkout = (props) => {
  const {
    cartItems,
    onAdd,
    onRemove,
    onDelete,
    setPage,
    shippingCost,
    setShippingCost,
    cartItemsCount,
  } = props;
  {
    console.log("*** *** *** Inside Checkout Component");
  }
  return (
    <div className="main-cart album  bg-light rounded">
      <div className="cart-body container rounded white">
        <div className="row">
          <ShoppingCartDescription
            cartItems={cartItems}
            onAdd={onAdd}
            onRemove={onRemove}
            onDelete={onDelete}
          />
          <Summary
            cartItems={cartItems}
            setPage={setPage}
            shippingCost={shippingCost}
            setShippingCost={setShippingCost}
            cartItemsCount={cartItemsCount}
          />
        </div>
      </div>
    </div>
  );
};

export default Checkout;
