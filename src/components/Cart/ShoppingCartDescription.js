import React from "react";
import "./ShoppingCartDescription.css";

const ShoppingCartDescription = (props) => {
  const { cartItems } = props;
  return (
    <div className="col-lg-8 white">
      <div className="row mx-2 my-2 p-3 pb-9 border-bottom border-secondary">
        <div className="col-12 col-md-12 col-lg-12 align-self-center">
          <h2>Shopping cart</h2>
        </div>
        <div className="col-12 align-self-center totalNumberItemsDisplayLeftSide">
          3 items
        </div>
      </div>
      <div className="row mx-2 pt-4 border-bott cart-Display">
        <div className=" align-self-center col-12 col-md-12 col-lg-12">
          {cartItems.length === 0 && <div>Cart is Empty</div>}
          {cartItems.map((x) => (
            <div key={x.id} className="row">
              <div className="col-3">
                {" "}
                <img src={x.image} max-width="2px" height="20"></img>
              </div>

              <div className="col-3">{x.name}</div>
              <div className="col-3">$ {x.price.toFixed(2)}</div>
              <div className="col-3">{x.inCart}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShoppingCartDescription;
