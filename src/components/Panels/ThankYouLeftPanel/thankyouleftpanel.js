import "./thankyouleftpanel.css";

function ThankYouLeftPanel() {
  return (
    <div className="left-panel bg-light pl-4 pt-5 box-shadow-class">
      <div className="deliver-info">
        <h3>Delivery info</h3>
        <br />
        <h6 className="small-bold-letters">DELIVERY WINDOW</h6>
        <p className="mailOutOnDateBinding">Places</p>

        <br />
        <h6 className="small-bold-letters">ADDRESS</h6>
        <h5>999 Park St.</h5>
        <h5>Anytown, USA 00000</h5>
        <h5>222-222-2222</h5>

        <br />
        <h6 className="small-bold-letters">SPECIAL INSTRUCTIONS</h6>
        <h5>None</h5>

        <br />
        <h6 className="small-bold-letters">PAYMENT METHOD</h6>
        <h5>Visa Ending: XXXX &nbsp;&nbsp; Exp: XX/XX</h5>
        <h5>Anytown, USA 00000</h5>
        <h5>222-222-2222</h5>
      </div>
      <br />
      <br />
      <br />
      <br />
      <div className="cart-details">
        <h3>Cart Details</h3>
      </div>

      <br />
      <br />
      <div className="row cartItemsDisplayThankYouPage"></div>
    </div>
  );
}

export default ThankYouLeftPanel;
