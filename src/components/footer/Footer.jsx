import React from "react";
import "./Footer.css";
import { AiFillShop } from "react-icons/ai";
import GooglePlay from "../../assets/img/googlestore.png";
import IosStore from "../../assets/img/iosstore.png";

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="container-footer">
          <div className="text-footer">
            <h1>
              <AiFillShop />
              JesShop
            </h1>
            <ul>
              <li>Quienes Somos</li>
              <li>Política de Privacidad</li>
              <li>Quiero Vender</li>
              <li>PQRS</li>
            </ul>
          </div>
          <div className="download-app">
            <h2>Descarga la App</h2>
            <img src={GooglePlay} alt="GooglePlay" />
            <img src={IosStore} alt="IosStore" />
          </div>
        </div>
      </footer>
    </>
  );
}
