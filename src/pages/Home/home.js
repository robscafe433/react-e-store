import "./home.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "../../components/Navbar/navbar.js";
import Banner from "../../components/Banner/banner";
import Footer from "../../components/Footer/footer";
import Categories from "../../components/Categories/categories";
import Gallery from "../../components/Gallery/gallery";

import { useState } from "react";

import Checkout from "../Checkout/checkout";
import ThankYou from "../ThankYou/thankyou";

function Home(props) {
  const storeData = props.storeData;
  const [page, setPage] = useState("home");

  const [shippingCost, setShippingCost] = useState("");
  const [cartItems, setCartItems] = useState([]);
  let cartItemsCount = cartItems.reduce((p, c) => p + c.inCart, 0);
  let cartItemCountMinusOne = cartItemsCount - 1;

  const [buttonDisable, setButtonDisable] = useState(true);

  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);

    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, inCart: exist.inCart + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, inCart: 1 }]);
    }
  };

  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);

    if (exist.inCart === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, inCart: exist.inCart - 1 } : x
        )
      );
    }
  };

  const onDelete = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);

    if (exist) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    }
  };

  function buttonBoolean() {
    if (cartItemCountMinusOne === 0) {
      setButtonDisable(true);
      setShippingCost("default");
      console.log(
        "ZZZZZZZZZZZZZZZZZ Inside home/function: true  (cartItemsCount = 0)"
      );
      // return true;
    } else {
      console.log(">>>>>>>>>>>>>>>>>>Inside home/function: true  (1 or more)");
    }
  }

  return (
    <div>
      <Navbar
        setPage={setPage}
        cartItems={cartItems}
        cartItemsCount={cartItemsCount}
      />
      {page === "cart" ? (
        <Checkout
          cartItems={cartItems}
          onAdd={onAdd}
          onRemove={onRemove}
          onDelete={onDelete}
          setPage={setPage}
          shippingCost={shippingCost}
          setShippingCost={setShippingCost}
          cartItemsCount={cartItemsCount}
          setButtonDisable={setButtonDisable}
          buttonDisable={buttonDisable}
          buttonBoolean={buttonBoolean}
        />
      ) : (
        ""
      )}
      <div className="container">
        {page !== "cart" && page !== "thankyou" ? (
          <Banner setPage={setPage} />
        ) : (
          ""
        )}
        <Routes>
          <Route
            exact
            path="/"
            element={<Categories storeData={storeData} setPage={setPage} />}
          />
          <Route
            path="/category/*"
            element={
              <Gallery
                storeData={storeData}
                page={page}
                onAdd={onAdd}
                setButtonDisable={setButtonDisable}
                setShippingCost={setShippingCost}
              />
            }
          />
        </Routes>
      </div>
      {page !== "home" && page !== "cart" && page !== "thankyou" ? (
        <Gallery
          storeData={storeData}
          page={page}
          onAdd={onAdd}
          setButtonDisable={setButtonDisable}
          setShippingCost={setShippingCost}
        />
      ) : (
        ""
      )}
      {page !== "home" && page !== "cart" && page === "thankyou" ? (
        <ThankYou setPage={setPage} />
      ) : (
        ""
      )}

      <Footer />
    </div>
  );
}

export default Home;
