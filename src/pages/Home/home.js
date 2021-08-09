import "./home.css";
import Navbar from "../../components/Navbar/navbar.js"

import Banner from "../../components/Banner/banner";

function Home() {
    return (
        <div>
            <Navbar/>
            <Banner />
            <h1 className="hola">Hola Mundo</h1>
        </div>
    );
}

export default Home;
