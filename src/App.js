import useFetch from "./api/store";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/home";
import Checkout from "./pages/Checkout/checkout";
import ThankYou from "./pages/ThankYou/thankyou";
import Navbar from "./components/Navbar/navbar";
import { useState } from "react";
import Gallery from "./components/Gallery/gallery";

function App() {
  const storeData = useFetch("http://localhost:8000/items");

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
    <Router>
      <Navbar cartItems={cartItems} cartItemsCount={cartItemsCount} />
      <Routes>
        <Route
          path="/react-e-store/*"
          element={
            <Home
              storeData={storeData}
              onAdd={onAdd}
              setButtonDisable={setButtonDisable}
              setShippingCost={setShippingCost}
            />
          }
        />
        <Route
          path="/react-e-store/checkout"
          element={
            <Checkout
              cartItems={cartItems}
              onAdd={onAdd}
              onRemove={onRemove}
              onDelete={onDelete}
              shippingCost={shippingCost}
              setShippingCost={setShippingCost}
              cartItemsCount={cartItemsCount}
              setButtonDisable={setButtonDisable}
              buttonDisable={buttonDisable}
              buttonBoolean={buttonBoolean}
            />
          }
        />
        <Route path="/react-e-store/thankyou" element={<ThankYou />} />
        <Route
          path="/react-e-store/category"
          element={<Gallery storeData={storeData} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
