import "./home.css";
import Navbar from "../../components/Navbar/navbar.js";
import Banner from "../../components/Banner/banner";
import Footer from "../../components/Footer/footer";
import useFetch from "../../api/store";
import {
    getCategories,
    getCategoriesImages,
    getBanners,
} from "../../helpers/storeHelpers";
import Categories from "../../components/Categories/categories";
import Gallery from "../../components/Gallery/gallery";

function Home() {
    const storeData = useFetch("http://localhost:8000/items");
    let page = "groceries";
    return (
        <div>
            <Navbar />
            <div className="container">
                <Banner />
                {/* <Categories storeData={storeData} /> */}
            </div>
            <Footer />
            <Gallery storeData={storeData} page={page} />
        </div>
    );
}

export default Home;
