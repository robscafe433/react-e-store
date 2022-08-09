import React from "react";
import "./ShoppingCartDescription.css";
import "./ShippingCost";

const ShoppingCartDescription = (props) => {
  const {
    cartItems,
    onAdd,
    onRemove,
    onDelete,
    onCartButtonChangeCount,
    buttonBoolean,
  } = props;

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
            </div>

            <div className="col-4 col-md-6 col-lg-3 font-small gen-text-alignment-right">
              <h4>${x.price.toFixed(2)}</h4>
            </div>
            <button>
              Qty:{" "}
              <select
                onChange={(e) => {
                  const buttonItemCount = e.target.value;
                  const numButtonItemCount = parseFloat(buttonItemCount);

                  onCartButtonChangeCount(x, numButtonItemCount);
                }}
                value={x.inCart}
              >
                <option value="default">{x.inCart}</option>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10+</option>
              </select>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShoppingCartDescription;
