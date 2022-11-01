import { Routes, Route } from "react-router-dom";
import "./assets/css/responsive.css";
import Header from "./components/header/Header";
import Home from "./views/home/Home";
import Catalogue from "./views/catalogue/Catalogue";
import Login from "./views/login/Login";
import Product from "./views/product/Product";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalogue" element={<Catalogue />} />
        <Route path="/login/*" element={<Login />} />
        <Route path="/catalogue/product/:id" element={<Product />} />
      </Routes>
    </>
  );
}

export default App;
