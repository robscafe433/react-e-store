import React from "react";
import "./ShoppingCartDescription.css";
import "./ShippingCost";

const ShoppingCartDescription = (props) => {
  const { cartItems, onAdd, onRemove, onDelete, buttonBoolean } = props;

  return (
    <div className="col-12 col-md-7 col-lg-9">
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
                                        col-12 col-md-12 col-lg-10
                                        align-self-center
                                    "
        >
          <h2>Shopping cart</h2>
          <h6 className="small-font-with-light-blue">Deselect all items</h6>
        </div>
        <div className="col-lg-2 price-alignment-right">Price</div>
      </div>
      <div>
        {cartItems.map((x) => (
          <div key={x.id} className="row">
            <div className="col-6 col-md-6 col-lg-3">
              {" "}
              <img
                src={x.image}
                width="180"
                height="180"
                alt="image of products"
              ></img>
            </div>
            <div className="col-6 col-md-6 col-lg-6 pt-4 pt-lg-0">
              <h4 className="font-small written-description-of-product">
                {x.description}
              </h4>
              <h6 className="small-font-with-light-blue">In Stock</h6>
              <h6 className="small-font-with-light-purple">
                Shipped from: place of origin here
              </h6>
              <div className="btn-group dropdown">
                <button
                  type="button"
                  className="btn drop-down-button-background-color box-shadow-class dropdown-toggle "
                  data-flip="false"
                  data-toggle="dropdown"
                >
                  Qty:
                </button>

                <div className="dropdown-menu">
                  <a className="dropdown-item" href="http://sonarsystems.co.uk">
                    Button 1
                  </a>
                  <a className="dropdown-item" href="http://sonarsystems.co.uk">
                    Button 2
                  </a>
                  <a className="dropdown-item" href="http://sonarsystems.co.uk">
                    Button 3
                  </a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="http://sonarsystems.co.uk">
                    Sign Out
                  </a>
                </div>
              </div>

              {/* <button
                className="btn bg-light dropdown-toggle drop-down-button-background-color box-shadow-class"
                type="button"
                id="count-dropdown"
              >
                Qty:
              </button> */}
              {/* <ul className="dropdown-menu" aria-labelledby="book-dropdown">
                <li>#1</li>
                <li>#2</li>
                <li>#3</li>
              </ul> */}
            </div>
            {/* <div className="col-6 my-2 col-md-6 col-lg-4 pb-4 align-self-center">
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
            </div> */}
            <div className="col-4 col-md-6 col-lg-3 font-small gen-text-alignment-right">
              <h4>${x.price.toFixed(2)}</h4>
            </div>
            {/* <div className="col-2 col-md-1 col-lg-3">
              <button
                className="delete-button"
                onClick={() => (onDelete(x), buttonBoolean())}
              >
                x
              </button>
            </div> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShoppingCartDescription;
