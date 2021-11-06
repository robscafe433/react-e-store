import "./home.css";
import Navbar from "../../components/Navbar/navbar.js";
import Banner from "../../components/Banner/banner";
import Footer from "../../components/Footer/footer";
import useFetch from "../../api/store";
import {getCategories, getCategoriesImages, getBanners} from "../../helpers/storeHelpers";
import Categories from "../../components/Categories/categories";

function Home() {
    const storeData = useFetch('http://localhost:8000/items');
    console.log(">>>getCategories", getCategories(storeData));
    console.log(">>>getCategoriesImages", getCategoriesImages(useFetch(storeData)));
    console.log(">>>getBanners", getBanners(useFetch(storeData)));
    return (
        <div>
            <Navbar />
            <div className="container">
                <Banner />
                {/* <Categories storeData={storeData} /> */}
            </div>
            <Footer />
        </div>
    );
}

export default Home;
