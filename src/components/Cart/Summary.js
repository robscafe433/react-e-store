import React from "react";
import "./Summary.css";

const Summary = () => {
  return (
    <div className="col-12 col-md-5 col-lg-4 blk">
      <div className="row mx-2 p-3 pb-5 border-bottom border-secondary">
        <div className="col-12 col-md-6">
          <h3>Summary</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-8 mr-8rem col-md-8">
          <p className="p-4 totalNumberItemsDisplayRightSide">Items 4</p>
        </div>
        <div className="col-4">
          <p className="p-4 totalItemsAmountDisplay">$200</p>
        </div>
      </div>
      <div className="row pb-5">
        <div className="col-12 px-5 align-self-center">
          <div className="form-group">
            <label htmlFor="SHIPPING">SHIPPING</label>
            <select className="form-control" id="exampleFormControlSelect1">
              <option value="null">Select shipping option</option>
              <option value="0">5-6 Business Days - Free</option>
              <option value="13.98">3-4 Business Days - $13.98</option>
              <option value="22.98">2 Business Days - $22.98</option>
              <option value="32.98">1 Business Days - $32.98</option>
            </select>
          </div>
        </div>
      </div>
      <div className="row mx-2 mt-4 border-top border-secondary">
        <div className="col-9">
          <p className="p-1">TOTAL PRICE</p>
        </div>
        <div className="col-3">
          <p className="p-1 grandTotalAmountDisplay">$0</p>
        </div>
      </div>
      <div className="row m-4">
        <div className="col-12 text-center">
          <button
            onClick="document.location.href='./thankyou.html'"
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
