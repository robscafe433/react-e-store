import React from "react";
import "./ShoppingCartDescription.css";
import "./ShippingCost";

const ShoppingCartDescription = (props) => {
  const { cartItems, onAdd, onRemove, onDelete } = props;

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
              <div className="col-1">
                {" "}
                <img
                  src={x.image}
                  width="40"
                  height="25"
                  alt="description of products"
                ></img>
              </div>
              <h4 className="col-2">{x.name}</h4>
              <div className="col-6 my-2 col-md-6 col-lg-4 pb-4 align-self-center">
                <div className="input-group w-75 px-1 mt-n3">
                  <div className="input-group-prepend">
                    <button
                      className="btn btn-outline-secondary px-2 subtract-btn"
                      data-id={x.id}
                      data-name={x.name}
                      onClick={() => onRemove(x)}
                      type="button"
                    >
                      -
                    </button>
                  </div>
                  <div
                    type="text"
                    className="form-control"
                    placeholder="Qty"
                    aria-label="Quantity"
                    aria-describedby="basic-addon1"
                  >
                    {x.inCart}
                  </div>
                  <div className="input-group-prepend">
                    <button
                      className="btn btn-outline-secondary px-2 add-btn"
                      data-id={x.id}
                      data-name={x.name}
                      onClick={() => onAdd(x)}
                      type="button"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
              <h4 className="col-2">@ {x.price.toFixed(2)}</h4>
              <button className="delete-button" onClick={() => onDelete(x)}>
                x
              </button>
              {/* <h4 className="col-2">{x.inCart}</h4> // insert code here */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShoppingCartDescription;
