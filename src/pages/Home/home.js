import "./home.css";
import Navbar from "../../components/Navbar/navbar.js"

import Banner from "../../components/Banner/banner";
import Footer from "../../components/Footer/footer";

function Home() {
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
