import "./payment.css";
import ShippingCost from "../../components/Cart/ShippingCost";

function Payment(props) {
  const { shippingCost, setShippingCost, cartItemsCount, setButtonDisable, buttonDisable } =
    props;

  return (
    <div class="container">
      <div class="py-5 text-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="60"
          height="60"
          fill="currentColor"
          class="bi bi-bag-check"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M10.854 8.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708 0z"
          />
          <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
        </svg>
        <h2>
          Secure Checkout <h6>Powered by the blockchian</h6>
        </h2>
      </div>
      <div class="row">
        <div class="col-md-8">
          <h4 class="mb-3">Shipping address</h4>
          <form class="needs-validation" novalidate>
            <div class="row">
              <div class="col-md-6 mb-3">
                <label for="firstName">First name</label>
                <input
                  type="text"
                  class="form-control"
                  id="firstName"
                  placeholder=""
                  value=""
                  required
                />
                <div class="invalid-feedback">
                  Valid first name is required.
                </div>
              </div>
              <div class="col-md-6 mb-3">
                <label for="lastName">Last name</label>
                <input
                  type="text"
                  class="form-control"
                  id="lastName"
                  placeholder=""
                  value=""
                  required
                />
                <div class="invalid-feedback">Valid last name is required.</div>
              </div>
            </div>
            <div class="mb-3">
              <label for="email">
                Email <span class="text-muted">(Optional)</span>
              </label>
              <input
                type="email"
                class="form-control"
                id="email"
                placeholder="you@example.com"
              />
              <div class="invalid-feedback">
                Please enter a valid email address for shipping updates.
              </div>
            </div>

            <div class="mb-3">
              <label for="address">Address</label>
              <input
                type="text"
                class="form-control"
                id="address"
                placeholder="1234 Main St"
                required
              />
              <div class="invalid-feedback">
                Please enter your shipping address.
              </div>
            </div>

            <div class="mb-3">
              <label for="address2">
                Address 2 <span class="text-muted">(Optional)</span>
              </label>
              <input
                type="text"
                class="form-control"
                id="address2"
                placeholder="Apartment or suite"
              />
            </div>
            <div class="row">
              <div class="col-md-5 mb-3">
                <label for="country">Country</label>
                <select
                  class="custom-select d-block w-100"
                  id="country"
                  required
                >
                  <option value="">Choose...</option>
                  <option>United States</option>
                </select>
                <div class="invalid-feedback">
                  Please select a valid country.
                </div>
              </div>
              <div class="col-md-4 mb-3">
                <label for="state">State</label>
                <select class="custom-select d-block w-100" id="state" required>
                  <option value="">Choose...</option>
                  <option>California</option>
                </select>
                <div class="invalid-feedback">
                  Please provide a valid state.
                </div>
              </div>
              <div class="col-md-3 mb-3">
                <label for="zip">Zip</label>
                <input
                  type="text"
                  class="form-control"
                  id="zip"
                  placeholder=""
                  required
                />
                <div class="invalid-feedback">Zip code required.</div>
              </div>
            </div>
            <hr class="mb-4" />
            <div class="custom-control custom-checkbox">
              <input
                type="checkbox"
                class="custom-control-input"
                id="same-address"
              />
              <label class="custom-control-label" for="same-address">
                Billing address is the same as my shipping address
              </label>
              <div className="row pb-2"></div>
            </div>
            <hr class="mb-4" />
            <h4 class="mb-3">Payment</h4>
            <div class="d-block my-3">
              <div class="custom-control custom-radio">
                <input
                  id="credit"
                  name="paymentMethod"
                  type="radio"
                  class="custom-control-input"
                  checked
                  required
                />
                <label class="custom-control-label" for="credit">
                  Credit card
                </label>
              </div>
              <div class="custom-control custom-radio">
                <input
                  id="debit"
                  name="paymentMethod"
                  type="radio"
                  class="custom-control-input"
                  required
                />
                <label class="custom-control-label" for="debit">
                  Debit card
                </label>
              </div>
              <div class="custom-control custom-radio">
                <input
                  id="paypal"
                  name="paymentMethod"
                  type="radio"
                  class="custom-control-input"
                  required
                />
                <label class="custom-control-label" for="paypal">
                  PayPal
                </label>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6 mb-3">
                <label for="cc-name">Name on card</label>
                <input
                  type="text"
                  class="form-control"
                  id="cc-name"
                  placeholder=""
                  required
                />
                <small class="text-muted">Full name as displayed on card</small>
                <div class="invalid-feedback">Name on card is required</div>
              </div>
              <div class="col-md-6 mb-3">
                <label for="cc-number">Credit card number</label>
                <input
                  type="text"
                  class="form-control"
                  id="cc-number"
                  placeholder=""
                  required
                />
                <div class="invalid-feedback">
                  Credit card number is required
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-3 mb-3">
                <label for="cc-expiration">Expiration</label>
                <input
                  type="text"
                  class="form-control"
                  id="cc-expiration"
                  placeholder=""
                  required
                />
                <div class="invalid-feedback">Expiration date required</div>
              </div>
              <div class="col-md-3 mb-3">
                <label for="cc-cvv">CVV</label>
                <input
                  type="text"
                  class="form-control"
                  id="cc-cvv"
                  placeholder=""
                  required
                />
                <div class="invalid-feedback">Security code required</div>
              </div>
            </div>
            <hr class="mb-4" />
            {/* <button class="btn btn-primary btn-lg btn-block" type="submit">
              Continue to checkout
            </button> */}
          </form>
        </div>
        <div class="col-md-4 mb-4 cart-summary">
          <h4 class="d-flex justify-content-between align-items-center mb-3">
            <span class="text-muted">Your cart summary</span>
            <span class="badge badge-secondary badge-pill">0</span>
          </h4>
          <ul class="list-group mb-3">
            <li class="list-group-item d-flex justify-content-between lh-condensed">
              <div>
                <h6 class="my-3">
                  Items
                </h6>
              </div>
              <span class="text-muted">$12</span>
            </li>
            {/*   <li class="list-group-item d-flex justify-content-between lh-condensed">
              <div>
                <h6 class="my-0">Second product</h6>
                <small class="text-muted">Brief description</small>
              </div>
              <span class="text-muted">$8</span>
            </li>
            <li class="list-group-item d-flex justify-content-between lh-condensed">
              <div>
                <h6 class="my-0">Third item</h6>
                <small class="text-muted">Brief description</small>
              </div>
              <span class="text-muted">$5</span>
            </li>  */}
            <li class="list-group-item d-flex justify-content-between">
              <div className="form-group">
                <label htmlFor="SHIPPING">SHIPPING</label>
                <ShippingCost
                  shippingCost={shippingCost}
                  setShippingCost={setShippingCost}
                  setButtonDisable={setButtonDisable}
                  cartItemsCount={cartItemsCount}
                />
              </div>
            </li>
            <li class="list-group-item d-flex justify-content-between">
              <span>Total (USD)</span>
              <strong>$20</strong>
            </li>
          </ul>

          <form class="card p-2">
          <div className="col-12 text-center">
          <button
            // onClick="document.location.href='./thankyou.html'"
            type="button"
            className="btn btn-dark btn-lg btn-block"
            disabled={buttonDisable}
            // onClick={() => setPage("thankyou")}
          >
            Checkout
          </button>
        </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Payment;
