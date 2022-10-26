import React from "react";
import { NavLink } from "react-router-dom";
import "./Home.css";
import { AiOutlineShopping } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";
import Banner from "../../assets/img/Banner.jpg";
import Tenis from "../../assets/img/Tenis.jpg";
import Diademas from "../../assets/img/Diademas.png";

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
            <img src={Diademas} alt="" />
          </article>
          <article className="item-buy">
            <div className="text-item-buy">
              <h2>Productos con la mejor calidad</h2>
              <NavLink>Comprar</NavLink>
            </div>
            <img src={Diademas} alt="" />
          </article>
        </section>
      </main>
    </>
  );
}
