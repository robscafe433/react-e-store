import React from "react";

import "./Summary.css";
import ShippingCost from "./ShippingCost";

const Summary = (props) => {
  const {
    cartItems,
    setPage,
    shippingCost,
    setShippingCost,
    cartItemsCount,
    setButtonDisable,
    buttonDisable,
  } = props;

  const runningItemsBalance = cartItems.reduce(
    (a, c) => a + c.inCart * c.price,
    0
  );
  let toFixedRunningBalance = runningItemsBalance.toFixed(2);
  const parsedRunningBalnace = parseFloat(toFixedRunningBalance);
  // let toFixedRunningBalance = runningItemsBalance.toFixed(2);

  const parseFloatShippingCost = parseFloat(shippingCost);

  const GrandTotal = parsedRunningBalnace + parseFloatShippingCost;

  return (
    <div className="col-12 col-md-5 col-lg-4 blk">
      <div className="row mx-2 p-3 pb-5 border-bottom border-secondary">
        <div className="col-12 col-md-6">
          <h3>Summary</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-8 mr-8rem col-md-8">
          <p className="p-4 totalNumberItemsDisplayRightSide">
            Items {cartItemsCount}
          </p>
        </div>
        <div className="col-4">
          <p className="p-4 totalItemsAmountDisplay">
            ${toFixedRunningBalance}
          </p>
        </div>
      </div>
      <div className="row pb-5">
        <div className="col-12 px-5 align-self-center">
          <div className="form-group">
            <label htmlFor="SHIPPING">SHIPPING</label>
            <ShippingCost
              shippingCost={shippingCost}
              setShippingCost={setShippingCost}
              setButtonDisable={setButtonDisable}
              cartItemsCount={cartItemsCount}
            />
          </div>
        </div>
      </div>
      <div className="row mx-2 mt-4 border-top border-secondary">
        <div className="col-9">
          <p className="p-1">TOTAL PRICE</p>
        </div>
        <div className="col-3">
          <p className="p-1 grandTotalAmountDisplay">
            ${isNaN(GrandTotal) ? "0.00" : GrandTotal.toFixed(2)}
            {/* $ {GrandTotal.toFixed(2)} */}
          </p>
        </div>
      </div>
      <div className="row m-4">
        <div className="col-12 text-center">
          <button
            // onClick="document.location.href='./thankyou.html'"
            type="button"
            className="btn btn-dark btn-lg btn-block"
            disabled={buttonDisable}
            onClick={() => setPage("thankyou")}
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Summary;
