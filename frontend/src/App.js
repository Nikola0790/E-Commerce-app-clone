import HomeScreen from "./screens/homeScreen/homeScreen";
import ProductScreen from "./screens/productScreen/productScreen";
import CartScreen from "./screens/cartScreen/cartScreen";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/home" element={<HomeScreen />} />
          <Route path="/product/:id" element={<ProductScreen />} />
          <Route path="/cart/:id" element={<CartScreen />} />
          <Route path="/" element={<Navigate to="/home" />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
