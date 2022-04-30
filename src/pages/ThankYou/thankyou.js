import "./thankyou.css";
import Navbar from "../../components/Navbar/navbar.js";
import Footer from "../../components/Footer/footer";
import ThankYouLeftPanel from "../../components/Panels/ThankYouLeftPanel/thankyouleftpanel";
import ThankYouTopRightPanel from "../../components/Panels/ThankYouTopRightPanel/thankyoutoprightpanel";
import ThankYouBottomRightPanel from "../../components/Panels/ThankYouBottomRightPanel/thankyoubottomrightpanel";

function ThankYou() {
  return (
    <div>
      <Navbar />
      <main id="main" role="main">
        <hr className="my-4" />

        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <ThankYouLeftPanel />
            </div>
            <div className="col-lg-5">
              <div className="row">
                <div className="col-lg-12">
                  <ThankYouTopRightPanel />
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <ThankYouBottomRightPanel />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default ThankYou;
