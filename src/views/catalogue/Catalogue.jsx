import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./Catalogue.css";
import PageTop from "../../components/PageTop";
import ItemProduct from "../../components/itemProduct/ItemProduct";
import Footer from "../../components/footer/Footer";
import Tacones from "../../assets/img/tacones.jpg";
import Hogar from "../../assets/img/hogar.jpg";

export default function Catalogue() {
  const [productData, setProductData] = useState();

  useEffect(() => {
    fetchAPI();

    async function fetchAPI() {
      const res = await fetch("https://fakestoreapi.com/products");

      const data = await res.json();
      setProductData(data);
    }
  }, []);

  if (!productData) return <div />;

  return (
    <>
      <section className="container-catalogue">
        <aside className="filter">
          <div className="title-filter">
            <h2>Filtro</h2>
          </div>
          <div className="container-items-filter">
            <h3>Categorías</h3>
            <ul className="items-filter">
              <li>
                <NavLink>Categoría 1</NavLink>
              </li>
              <li>
                <NavLink>Categoría 2</NavLink>
              </li>
              <li>
                <NavLink>Categoría 3</NavLink>
              </li>
              <li>
                <NavLink>Categoría 4</NavLink>
              </li>
            </ul>
          </div>
        </aside>
        <main className="main-catalogue">
          <section className="offers">
            <h1 className="title-offers">Ofertas</h1>
            <article className="item-offers" id="first">
              <div className="text-item-offers">
                <h2>Dale un toque Moderno a tu hogar</h2>
                <NavLink>Explorar</NavLink>
              </div>
              <img src={Hogar} alt="Hogar" />
            </article>
            <article className="item-offers">
              <div className="text-item-offers">
                <h2>
                  Descuento del <span>70%</span>
                </h2>
                <NavLink>Comprar</NavLink>
              </div>
              <img src={Tacones} alt="Tacones" />
            </article>
          </section>
          <section className="container-products">
            <div className="title-container-products">
              <p>23 Resultados</p>
              <p>Ordenar Por:</p>
            </div>
            {productData.map((item) => (
              <ItemProduct data={item} key={item.id} />
            ))}
          </section>
        </main>
      </section>
      <Footer />
      <PageTop />
    </>
  );
}
