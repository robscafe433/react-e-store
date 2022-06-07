import React from "react";
import "./ShoppingCartDescription.css";

const ShoppingCartDescription = (props) => {
  const { cartItems } = props;
  return (
    <div className="col-12 col-md-7 col-lg-8 white">
      <div className="row mx-2 my-2 p-3 pb-9 border-bottom border-secondary">
        <div className="col-12 col-md-12 col-lg-12 align-self-center">
          <h2>Shopping cart</h2>
        </div>
        <div className="col-12 align-self-center totalNumberItemsDisplayLeftSide">
          3 items
        </div>
      </div>
      <div className="row mx-2 pt-4 border-bott cart-Display">
        <div className="align-self-center">
          {cartItems.length === 0 && <div>Cart is Empty</div>}
          {cartItems.map((x) => (
            <div key={x.id}>
              <img src={x.image} height=" 40"></img>
              {x.name}
              {x.price}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShoppingCartDescription;
