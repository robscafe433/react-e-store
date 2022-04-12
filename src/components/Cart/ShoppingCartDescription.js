import React from "react";
import "./ShoppingCartDescription.css";

const ShoppingCartDescription = () => {
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
          <h4></h4>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCartDescription;
