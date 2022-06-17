import React from "react";
import { useState } from "react";

import "./Summary.css";
import ShippingCost from "./ShippingCost";

const Summary = (props) => {
  const { cartItems } = props;
  const [shippingCost, setShippingCost] = useState("0");
  const grandTotal = "";

  const totalCartItems = cartItems.reduce((a, c) => a + c.inCart, 0); //a is accumulator, c is current count
  const runningItemsBalance = cartItems.reduce(
    (a, c) => a + c.inCart * c.price,
    0
  );
  let toFixedRunningBalance = runningItemsBalance.toFixed(2);
  const parsedRunningBalnace = parseFloat(toFixedRunningBalance);
  // let toFixedRunningBalance = runningItemsBalance.toFixed(2);
  //

  const parseFloatShippingCost = parseFloat(shippingCost);

  const GrandTotal = parsedRunningBalnace + parseFloatShippingCost;
  {
    console.log(
      "The new toFixedRunningBalnace is : ",
      parsedRunningBalnace,
      typeof parsedRunningBalnace
    );
  }
  {
    console.log(
      "The new parseFloatShippingCost is : ",
      parseFloatShippingCost,
      typeof parseFloatShippingCost
    );
  }
  {
    console.log("This is the GrandTotal : ", GrandTotal);
  }

  {
    console.log(
      "This is typeof shippingCost before parsing : ",
      typeof shippingCost
    );
  }

  //

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
            Items {totalCartItems}
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
            <ShippingCost setShippingCost={setShippingCost} />
          </div>
        </div>
      </div>
      <div className="row mx-2 mt-4 border-top border-secondary">
        <div className="col-9">
          <p className="p-1">TOTAL PRICE</p>
        </div>
        <div className="col-3">
          <p className="p-1 grandTotalAmountDisplay">${GrandTotal}</p>
        </div>
      </div>
      <div className="row m-4">
        <div className="col-12 text-center">
          <button
            // onClick="document.location.href='./thankyou.html'"
            type="button"
            className="btn btn-dark btn-lg btn-block"
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Summary;
