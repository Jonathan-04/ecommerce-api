import { Routes, Route } from "react-router-dom";
import "./assets/css/responsive.css";
import Header from "./components/header/Header";
import Home from "./views/home/Home";
import Catalogue from "./views/catalogue/Catalogue";
import Login from "./views/login/Login";
import Product from "./views/product/Product";
import Checkout from "./views/checkout/Checkout";
import MyCart from "./views/cart/MyCart";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalogue/:category" element={<Catalogue />} />
        <Route path="/login/*" element={<Login />} />
        <Route path="/catalogue/product/:id" element={<Product />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="/myCart" element={<MyCart />} />
      </Routes>
    </>
  );
}

export default App;
