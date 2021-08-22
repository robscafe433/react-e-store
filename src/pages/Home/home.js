import "./home.css";
import Navbar from "../../components/Navbar/navbar.js"
import Banner from "../../components/Banner/banner";
import Footer from "../../components/Footer/footer";
import useFetch from "../../api/store";
import {getCategories} from "../../helpers/storeHelpers";

function Home() {
    console.log(">>>", getCategories(useFetch('http://localhost:8000/items')));
    return (
        <div>
            <Navbar/>
            <Banner />
            <h1 className="hola">Hola Mundo</h1>
            <Footer />
        </div>
    );
}

export default Home;
