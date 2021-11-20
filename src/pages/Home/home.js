import "./home.css";
import Navbar from "../../components/Navbar/navbar.js";
import Banner from "../../components/Banner/banner";
import Footer from "../../components/Footer/footer";
import useFetch from "../../api/store";
import {getCategories, getCategoriesImages, getBanners} from "../../helpers/storeHelpers";
import Categories from "../../components/Categories/categories";
import Gallery from "../../components/Gallery/gallery"
import { useState } from "react";

function Home() {
    const storeData = useFetch('http://localhost:8000/items');
    const [page, setPage] = useState('home');
    
    return (
        <div>
            <Navbar setPage={setPage} />
            <div className="container">
                <Banner />
                {/* <Categories storeData={storeData} /> */}
            </div>
            <Footer />
            {page !== 'home' ? 
                <Gallery storeData={storeData} page={page} /> : ""
            }
        </div>
    );
}

export default Home;
