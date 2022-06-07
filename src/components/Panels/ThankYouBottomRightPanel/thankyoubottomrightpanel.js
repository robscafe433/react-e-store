import "./thankyoubottomrightpanel.css";

function ThankYouBottomRightPanel() {
  return (
    <div className="bottom-right-panel bg-light box-shadow-class py-3">
      <h5 className="font-light pt-4">
        Order Total*
        <span className="grandTotalAmountDisplay p-4"></span>
      </h5>

      <h6 className="p-4">
        *An order total is provided above. When your order is ready we'll weigh
        and assemble your goods and email you.
      </h6>
      <br />

      <button className="track-delivery btn-lg btn-success">
        Track delivery
      </button>
      <div className="svg hide" id="svg"></div>
      <br />
      <br />
      <h6>
        Have questions about your order?
        <span className="contact-us-tel"></span>
      </h6>
      <br />
      <br />
      <br />
      <button className="btn-lg btn-primary btn-virtual-gift" id="button1">
        Click for Virtual Gift
      </button>
    </div>
  );
}

export default ThankYouBottomRightPanel;
