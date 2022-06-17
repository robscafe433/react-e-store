import React from "react";

const ShippingCost = (props) => {
  const { setShippingCost } = props;

  return (
    <div>
      <select
        onChange={(e) => {
          const selectedShipping = e.target.value;
          setShippingCost(selectedShipping);
        }}
      >
        <option value="null">Select shipping option</option>
        <option value="0">5-6 Business Days - Free</option>
        <option value="13.98">3-4 Business Days - $13.98</option>
        <option value="22.98">2 Business Days - $22.98</option>
        <option value="32.98">1 Business Days - $32.98</option>
      </select>
    </div>
  );
};

export default ShippingCost;
