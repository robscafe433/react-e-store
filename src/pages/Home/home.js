import "./home.css";
import Navbar from "../../components/Navbar/navbar.js";
import Banner from "../../components/Banner/banner";
import Footer from "../../components/Footer/footer";
import useFetch from "../../api/store";
import {getCategories, getCategoriesImages, getBanners} from "../../helpers/storeHelpers";
import Categories from "../../components/Categories/categories";

function Home() {
    console.log(">>>getCategories", getCategories(useFetch('http://localhost:8000/items')));
    console.log(">>>getCategoriesImages", getCategoriesImages(useFetch('http://localhost:8000/items')));
    console.log(">>>getBanners", getBanners(useFetch('http://localhost:8000/storeResources')));
    return (
        <div>
            <Navbar />
            <div className="container">
                <Banner />
                <Categories />
            </div>
            <Footer />
        </div>
    );
}

export default Home;
