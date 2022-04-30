import "./home.css";
import Navbar from "../../components/Navbar/navbar.js";
import Banner from "../../components/Banner/banner";
import Footer from "../../components/Footer/footer";
import useFetch from "../../api/store";
import Categories from "../../components/Categories/categories";
import Gallery from "../../components/Gallery/gallery";

import { useState } from "react";
import Checkout from "../checkout/Checkout.js";

function Home() {
  const storeData = useFetch("http://localhost:8000/items");
  const [page, setPage] = useState("home");
  return (
    <div>
      <Navbar setPage={setPage} />
      {page === "cart" ? <Checkout /> : ""}
      <div className="container">
        {page !== "cart" ? <Banner setPage={setPage} /> : ""}
        {page === "home" ? (
          <Categories storeData={storeData} setPage={setPage} />
        ) : (
          ""
        )}
      </div>
      {page !== "home" && page !== "cart" ? (
        <Gallery storeData={storeData} page={page} />
      ) : (
        ""
      )}
      <Footer />
    </div>
  );
}

export default Home;
