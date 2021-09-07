import "./home.css";
import Navbar from "../../components/Navbar/navbar.js"

import Banner from "../../components/Banner/banner";
import Footer from "../../components/Footer/footer";

import Categories from "../../components/Categories/categories";

function Home() {
    return (
        <div>
            <Navbar/>
            <Banner />
            <Categories/>
            <Footer />
        </div>
    );
}

export default Home;
