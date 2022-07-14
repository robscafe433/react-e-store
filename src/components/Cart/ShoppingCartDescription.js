import React from "react";
import "./ShoppingCartDescription.css";
import "./ShippingCost";

const ShoppingCartDescription = (props) => {
  const { cartItems, onAdd, onRemove, onDelete, buttonBoolean } = props;

  return (
    <div className="col-12 col-md-7 col-lg-8">
      <div
        className="
                                    row
                                    mx-2
                                    my-4
                                    p-3
                                    pb-9
                                    border-bottom border-secondary
                                "
      >
        <div
          className="
                                        col-12 col-md-12 col-lg-12
                                        align-self-center
                                    "
        >
          <h2>Shopping cart</h2>
        </div>
      </div>
      <div>
        {cartItems.map((x) => (
          <div key={x.id} className="row">
            <div className="col-6 col-md-6 col-lg-1">
              {" "}
              <img
                src={x.image}
                width="40"
                height="25"
                alt="description of products"
              ></img>
            </div>
            <div className="col-6 col-md-6 col-lg-2 pt-4 pt-lg-0">
              <h4 className="fontSmallMQ">{x.name}</h4>
            </div>
            <div className="col-6 my-2 col-md-6 col-lg-4 pb-4 align-self-center">
              <div className="input-group w-75 px-1 mt-n3">
                <div className="input-group-prepend">
                  <button
                    className="btn btn-outline-secondary px-2 subtract-btn"
                    data-id={x.id}
                    data-name={x.name}
                    onClick={() => (onRemove(x), buttonBoolean())}
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
            <div>
              <h4 className="col-4 col-md-6 col-lg-2 fontSmallMQ">
                @{x.price.toFixed(2)}
              </h4>
            </div>
            <div className="col-2 col-md-1 col-lg-3">
              <button
                className="delete-button"
                onClick={() => (onDelete(x), buttonBoolean())}
              >
                x
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShoppingCartDescription;
