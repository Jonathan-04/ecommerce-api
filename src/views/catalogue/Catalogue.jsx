import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import "./Catalogue.css";
import PageTop from "../../components/PageTop";
import ItemProduct from "../../components/itemProduct/ItemProduct";
import Footer from "../../components/footer/Footer";
import Tacones from "../../assets/img/tacones.jpg";
import Hogar from "../../assets/img/hogar.jpg";

export default function Catalogue() {
  let { category } = useParams();
  const [productData, setProductData] = useState();

  useEffect(() => {
    fetchAPI();

    async function fetchAPI() {
      const res = await fetch(
        `https://fakestoreapi.com${
          category === "all" ? "/products" : `/products/category/${category}`
        }`
      );

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
                <a href="/catalogue/electronics">Electrónico</a>
              </li>
              <li>
                <a href="/catalogue/jewelery">Joyería</a>
              </li>
              <li>
                <a href="/catalogue/women's clothing">Ropa Mujer</a>
              </li>
              <li>
                <a href="/catalogue/men's clothing">Ropa Hombre</a>
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
              <p>{productData.length} Resultados</p>
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
