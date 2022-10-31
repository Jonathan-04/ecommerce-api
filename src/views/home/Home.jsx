import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import Footer from "../../components/footer/Footer";
import { AiOutlineArrowRight } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { FaTiktok } from "react-icons/fa";
import { AiFillFacebook } from "react-icons/ai";
import Banner from "../../assets/img/Banner.jpg";
import Monitor from "../../assets/img/monitor.png";
import Outfit from "../../assets/img/outfit.png";
import Video from "../../assets/video/video.mp4";
import MercadoPago from "../../assets/img/mercadopago.png";
import Paypal from "../../assets/img/paypal.png";
import Nequi from "../../assets/img/NEQUI.png";
import InterestProduct from "../../components/itemProduct/InterestProduct";

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
            <Link to="/catalogue">
              Ver mas <AiOutlineArrowRight />
            </Link>
          </div>
          <InterestProduct min={0} max={4} />
        </section>
        <section className="section-buy">
          <article className="item-buy">
            <div className="text-item-buy">
              <h2>La Tecnología a un solo click!</h2>
              <Link>Comprar</Link>
            </div>
            <img id="img-buy" src={Monitor} alt="" />
          </article>
          <article className="item-buy">
            <div className="text-item-buy">
              <h2>Viste con tu propio estilo</h2>
              <Link>Comprar</Link>
            </div>
            <img id="img-buy" src={Outfit} alt="" />
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
            <Link>
              Ver mas <AiOutlineArrowRight />
            </Link>
          </div>
          <InterestProduct min={4} max={8} />
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
