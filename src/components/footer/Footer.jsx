import React from "react";
import "./Footer.css";
import { AiFillShop } from "react-icons/ai";
import GooglePlay from "../../assets/img/googlestore.png";
import IosStore from "../../assets/img/iosstore.png";

import { AiFillGithub as GitHub } from "react-icons/ai";
import { AiFillLinkedin as Linkedin } from "react-icons/ai";

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
        <div className="developed">
          <h2>Developed by: Jonathan Velásquez Vargas</h2>
          <a
            href="https://www.linkedin.com/in/jonathanvel04
"
            target="_blank"
          >
            <Linkedin size={26} />
          </a>
          <a href="https://github.com/Jonathan-04" target="_blank">
            <GitHub size={26} />
          </a>
        </div>
      </footer>
    </>
  );
}
