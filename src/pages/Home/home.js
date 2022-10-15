import "./home.css";
import { Route, Routes } from "react-router-dom";
import Banner from "../../components/Banner/banner";
import Footer from "../../components/Footer/footer";
import Categories from "../../components/Categories/categories";
import Gallery from "../../components/Gallery/gallery";
import Payment from "../../pages/Payment/payment";

function Home(props) {
  const { storeData, onAdd, setButtonDisable, setShippingCost } = props;

  return (
    <div>
      <div className="container">
        <Banner />
        <Routes>
          <Route
            exact
            path="/"
            element={<Categories storeData={storeData} />}
          />
          <Route
            path="/category/:name"
            element={
              <Gallery
                storeData={storeData}
                onAdd={onAdd}
                setButtonDisable={setButtonDisable}
                setShippingCost={setShippingCost}
              />
            }
          />
        </Routes>
      </div>

      <Footer />
      <Payment />
    </div>
  );
}

export default Home;
