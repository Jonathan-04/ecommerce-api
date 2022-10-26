import { Routes, Route } from "react-router-dom";
import "./assets/css/responsive.css";
import Header from "./components/header/Header";
import Home from "./views/home/Home";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
