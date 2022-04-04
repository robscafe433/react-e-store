import "./home.css";
import Navbar from "../../components/Navbar/navbar.js";
import Banner from "../../components/Banner/banner";
import Footer from "../../components/Footer/footer";
import useFetch from "../../api/store";
// import {
//   getCategories,
//   getCategoriesImages,
//   getBanners,
// } from "../../helpers/storeHelpers";
import Categories from "../../components/Categories/categories";
import Gallery from "../../components/Gallery/gallery";
import { useState } from "react";
import Checkout from "../Checkout/checkout";

function Home() {
  const storeData = useFetch("http://localhost:8000/items");
  const [page, setPage] = useState("home");
  return (
    <div>
      {console.log("### In Home Component  ")}
      <Navbar setPage={setPage} />
      {page === "cart" ? <Checkout /> : ""}
      {/* {console.log("The page is: ", page)} */}
      <div className="container">
        {page !== "cart" ? <Banner /> : ""}
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
