import "./home.css";
import Navbar from "../../components/Navbar/navbar.js";

import Banner from "../../components/Banner/banner";
import Footer from "../../components/Footer/footer";

function Home() {
    return (
        <body>
            <header>
                <Navbar />
            </header>
            <main id="main" className="container" role="main">
                <Banner />
            </main>
            <Footer />
        </body>
    );
}

export default Home;
