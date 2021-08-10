import "./home.css";


import Banner from "../../components/Banner/banner";
import Footer from "../../components/Footer/footer";

function Home() {
    return (
        <div>
            <Banner />
            <h1 className="hola">Hola Mundo</h1>
            <Footer />
        </div>
    );
}

export default Home;
