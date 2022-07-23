import useFetch from "./api/store";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/Home/home';
import Checkout from './pages/Checkout/checkout';
import ThankYou from './pages/ThankYou/thankyou';

function App() {
  const storeData = useFetch("http://localhost:8000/items");
  return (
    <Router>
      <Routes>
        <Route path="/react-e-store" exact element={<Home storeData={storeData} />} />
        <Route path="/react-e-store/checkout"  element={<Checkout />} />
        <Route path="/react-e-store/thankyou"  element={<ThankYou />} />
      </Routes>
    </Router>
  );
}

export default App;
