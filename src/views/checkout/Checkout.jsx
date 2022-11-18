import React from "react";
import "./Checkout.css";
import { MdOutlineLocalShipping as Shipping } from "react-icons/md";
import { MdStore } from "react-icons/md";
import PageTop from "../../components/PageTop";
import Footer from "../../components/footer/Footer";

import Tenis from "../../assets/img/tenis.jpg";
import Diadema from "../../assets/img/Diademas.png";
import Camisa from "../../assets/img/camisa-mujer.jpg";

export default function Checkout() {
  return (
    <>
      <main className="container-checkout">
        <h2>Checkout</h2>
        <form className="form-checkout" action="">
          <div className="information-checkout">
            <section className="inputs-checkout">
              <p id="title-form-checkout">Información de Contacto</p>
              <article className="inputs-data-checkout">
                <div className="content">
                  <label htmlFor="nombre">Nombre</label>
                  <input
                    type="text"
                    name="nombre"
                    id="nombre"
                    defaultValue=""
                  />
                </div>
                <div className="content">
                  <label htmlFor="apellidos">Apellidos</label>
                  <input
                    type="text"
                    name="apellidos"
                    id="apellidos"
                    defaultValue=""
                  />
                </div>
                <div className="content">
                  <label htmlFor="email">Email</label>
                  <input type="email" name="email" id="email" defaultValue="" />
                </div>
                <div className="content">
                  <label htmlFor="celular">Celular</label>
                  <input
                    type="text"
                    name="celular"
                    id="celular"
                    defaultValue=""
                  />
                </div>
              </article>
            </section>

            <section className="inputs-checkout">
              <p id="title-form-checkout">Método Envío</p>
              <article className="inputs-data-checkout rb-tipo-servicio">
                <input
                  type="radio"
                  id="control_01"
                  name="tipo-servicio"
                  defaultValue="Servicio Básico"
                />
                <label className="lb-rb-tipo-servicio" htmlFor="control_01">
                  <MdStore size={32} />
                  <p>Recoger en Tienda</p>
                  <p>Solo en Cali</p>
                </label>

                <input
                  type="radio"
                  id="control_02"
                  name="tipo-servicio"
                  defaultValue="Servicio Básico"
                />
                <label className="lb-rb-tipo-servicio" htmlFor="control_02">
                  <Shipping size={32} />
                  <p>Envío</p>
                  <p>Nivel Nacional</p>
                </label>
              </article>
            </section>

            <section className="inputs-checkout">
              <p id="title-form-checkout">Información de Envío</p>
              <article className="inputs-data-checkout">
                <div className="content">
                  <label htmlFor="direccion">Dirección</label>
                  <input
                    type="text"
                    name="direccion"
                    id="direccion"
                    defaultValue=""
                  />
                </div>

                <div className="content">
                  <label htmlFor="ciudad">Ciudad</label>
                  <input
                    type="text"
                    name="ciudad"
                    id="ciudad"
                    defaultValue=""
                  />
                </div>

                <div className="content">
                  <label htmlFor="observaciones">Observaciones</label>
                  <input
                    type="text"
                    name="observaciones"
                    id="observaciones"
                    defaultValue=""
                  />
                </div>
              </article>
            </section>
          </div>
          <div className="details-checkout">
            <section className="order-checkout">
              <p id="order-title">Orden</p>
              <div className="products-details">
                <ul className="details">
                  <div className="item-list">
                    <li>
                      <img src={Tenis} alt="" />
                    </li>
                    <li id="titulo-producto">Tenis x 1</li>
                    <li id="details-price">$120.000</li>
                  </div>
                  <div className="item-list">
                    <li>
                      <img src={Diadema} alt="" />
                    </li>
                    <li id="titulo-producto">Diademas x 1</li>
                    <li id="details-price">$70.000</li>
                  </div>
                  <div className="item-list">
                    <li>
                      <img src={Camisa} alt="" />
                    </li>
                    <li id="titulo-producto">Camisa x 1</li>
                    <li id="details-price">$55.000</li>
                  </div>
                </ul>
              </div>
              <div className="product-payment">
                <p id="order-title">SubTotal:</p>
                <ul className="product-pay">
                  <li>Producto:</li>
                  <li>$ 20.000</li>
                </ul>
                <ul className="envio-pay">
                  <li>Envío:</li>
                  <li>Gratis</li>
                </ul>
                <ul className="total-pay">
                  <li>TOTAL:</li>
                  <li>$ 20.000</li>
                </ul>
              </div>
            </section>
          </div>
        </form>
      </main>
      <Footer />
      <PageTop />
    </>
  );
}
