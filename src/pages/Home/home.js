import "./home.css";
import Navbar from "../../components/Navbar/navbar.js";
import Banner from "../../components/Banner/banner";
import Footer from "../../components/Footer/footer";
import useFetch from "../../api/store";
import Categories from "../../components/Categories/categories";
import Gallery from "../../components/Gallery/gallery";

import { useState } from "react";
import Checkout from "../checkout/Checkout";

function Home() {
  const storeData = useFetch("http://localhost:8000/items");
  const [page, setPage] = useState("home");

  const [cartItems, setCartItems] = useState([]);

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

  return (
    <div>
      <Navbar setPage={setPage} />
      {page === "cart" ? (
        <Checkout cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} />
      ) : (
        ""
      )}
      <div className="container">
        {page !== "cart" ? <Banner setPage={setPage} /> : ""}
        {page === "home" ? (
          <Categories storeData={storeData} setPage={setPage} /> // onAdd={onAdd}
        ) : (
          ""
        )}
      </div>
      {page !== "home" && page !== "cart" ? (
        <Gallery storeData={storeData} page={page} onAdd={onAdd} />
      ) : (
        ""
      )}
      {console.log("This is cartItems: ", cartItems)}
      <Footer />
    </div>
  );
}

export default Home;
