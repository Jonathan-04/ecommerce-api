import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";
import "./Checkout.css";
import { MdOutlineLocalShipping as Shipping } from "react-icons/md";
import { MdStore } from "react-icons/md";
import PageTop from "../../components/PageTop";
import Footer from "../../components/footer/Footer";

export default function Checkout() {
  const { items, cartTotal } = useCart();

  const subTotal = Math.round(cartTotal);
  const envio = subTotal > 120 ? 0 : 15;
  const totalPrice = subTotal + envio;

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
                  {items.map((item, index) => (
                    <div className="item-list" key={index}>
                      <li>
                        <img src={item.image} alt="Product" />
                      </li>
                      <li id="titulo-producto">
                        <Link to={`/catalogue/product/${item.id}`}>
                          {item.title}
                        </Link>{" "}
                        x {item.quantity}
                      </li>
                      <li id="details-price">${item.itemTotal}</li>
                    </div>
                  ))}
                </ul>
              </div>
              <div className="product-payment">
                <p id="order-title">SubTotal:</p>
                <ul className="product-pay">
                  <li>Producto:</li>
                  <li>$ {subTotal}</li>
                </ul>
                <ul className="envio-pay">
                  <li>Envío:</li>
                  <li>$ {envio}</li>
                </ul>
                <ul className="total-pay">
                  <li>TOTAL:</li>
                  <li>$ {totalPrice}</li>
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
