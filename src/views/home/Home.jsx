import React from "react";
import { NavLink } from "react-router-dom";
import "./Home.css";
import Footer from "../../components/footer/Footer";
import { AiOutlineShopping } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { FaTiktok } from "react-icons/fa";
import { AiFillFacebook } from "react-icons/ai";

import Banner from "../../assets/img/Banner.jpg";
import Tenis from "../../assets/img/tenis.jpg";
import Diademas from "../../assets/img/Diademas.png";
import Video from "../../assets/video/video.mp4";
import MercadoPago from "../../assets/img/mercadopago.png";
import Paypal from "../../assets/img/paypal.png";
import Nequi from "../../assets/img/NEQUI.png";

export default function Home() {
  return (
    <>
      <section className="container-banner">
        <img src={Banner} alt="Banner" />
      </section>
      <main className="main-products">
        <section className="section-interes">
          <div className="title-section-product">
            <h2>Te puede Interesar</h2>
            <NavLink>
              Ver mas <AiOutlineArrowRight />
            </NavLink>
          </div>
          <article className="item-product">
            <img src={Tenis} alt="Tenis" />
            <h2>Producto 1</h2>
            <div className="price">
              <p>$120.000</p>
              <AiOutlineShopping size={24} />
            </div>
          </article>
          <article className="item-product">
            <img src={Tenis} alt="Tenis" />
            <h2>Producto 1</h2>
            <div className="price">
              <p>$120.000</p>
              <AiOutlineShopping size={24} />
            </div>
          </article>
          <article className="item-product">
            <img src={Tenis} alt="Tenis" />
            <h2>Producto 1</h2>
            <div className="price">
              <p>$120.000</p>
              <AiOutlineShopping size={24} />
            </div>
          </article>
          <article className="item-product">
            <img src={Tenis} alt="Tenis" />
            <h2>Producto 1</h2>
            <div className="price">
              <p>$120.000</p>
              <AiOutlineShopping size={24} />
            </div>
          </article>
        </section>
        <section className="section-buy">
          <article className="item-buy">
            <div className="text-item-buy">
              <h2>Productos con la mejor calidad</h2>
              <NavLink>Comprar</NavLink>
            </div>
            <img id="img-buy" src={Diademas} alt="" />
          </article>
          <article className="item-buy">
            <div className="text-item-buy">
              <h2>Productos con la mejor calidad</h2>
              <NavLink>Comprar</NavLink>
            </div>
            <img id="img-buy" src={Diademas} alt="" />
          </article>
        </section>
        <section className="section-video">
          <div className="text-video">
            <h1>Sigue tu camino, Persigue tus sueños!</h1>
            <h2>#JesShop</h2>
            <ul className="icons-social-media">
              <li>
                <a href="#">
                  <AiFillInstagram size={28} />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaTiktok size={24} />
                </a>
              </li>
              <li>
                <a href="#">
                  <AiFillFacebook size={28} />
                </a>
              </li>
            </ul>
          </div>
          <video src={Video} autoPlay muted loop></video>
        </section>
        <section className="section-interes">
          <div className="title-section-product">
            <h2>Te puede Interesar</h2>
            <NavLink>
              Ver mas <AiOutlineArrowRight />
            </NavLink>
          </div>
          <article className="item-product">
            <img src={Tenis} alt="Tenis" />
            <h2>Producto 1</h2>
            <div className="price">
              <p>$120.000</p>
              <AiOutlineShopping size={24} />
            </div>
          </article>
          <article className="item-product">
            <img src={Tenis} alt="Tenis" />
            <h2>Producto 1</h2>
            <div className="price">
              <p>$120.000</p>
              <AiOutlineShopping size={24} />
            </div>
          </article>
          <article className="item-product">
            <img src={Tenis} alt="Tenis" />
            <h2>Producto 1</h2>
            <div className="price">
              <p>$120.000</p>
              <AiOutlineShopping size={24} />
            </div>
          </article>
          <article className="item-product">
            <img src={Tenis} alt="Tenis" />
            <h2>Producto 1</h2>
            <div className="price">
              <p>$120.000</p>
              <AiOutlineShopping size={24} />
            </div>
          </article>
        </section>
        <section className="payment">
          <h2>Pagos Seguros!</h2>
          <div className="payment-img">
            <img src={MercadoPago} alt="MercadoPago" />
          </div>
          <div className="payment-img">
            <img src={Paypal} alt="Paypal" />
          </div>
          <div className="payment-img">
            <img src={Nequi} alt="Nequi" />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
