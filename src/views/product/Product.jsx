import React, { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import "./Product.css";
import InterestProduct from "../../components/itemProduct/InterestProduct";
import Footer from "../../components/footer/Footer";
import { AiOutlineArrowRight } from "react-icons/ai";

export default function Product() {
  const { id } = useParams();

  const [productData, setProductData] = useState();
  let [quantity, setQuantity] = useState(1);

  useEffect(() => {
    fetchAPI();

    async function fetchAPI() {
      const res = await fetch(`https://fakestoreapi.com/products/${id}`);

      const data = await res.json();
      setProductData(data);
    }
  }, []);

  if (!productData) return <div />;

  return (
    <>
      <section className="details-product" key={productData.id}>
        <div className="image-product">
          <img src={productData.image} alt="" className="first-image" />
          {/*<img src={productData.image} alt="" className="second-image" />
          <img src={productData.image} alt="" className="second-image" />
  <img src={productData.image} alt="" className="second-image" />*/}
        </div>
        <div className="text-product">
          <h1>{productData.title}</h1>
          <h2>${productData.price}</h2>
          <p>Stock: 5 Disponibles</p>
          <div className="quantity-product">
            <button
              onClick={() => {
                setQuantity(quantity - 1);
              }}
            >
              -
            </button>
            <input type="text" id="quantity" value={quantity} maxLength="2" />
            <button
              onClick={() => {
                setQuantity(quantity + 1);
              }}
            >
              +
            </button>
          </div>
          <p className="description-product">
            Descripción: <span>{productData.description}</span>
          </p>
          <div className="add-product">
            <button id="add-favorite">Agregar a Favorito</button>
            <button id="add-car">Comprar</button>
          </div>
        </div>
      </section>
      <section className="section-interes">
        <div className="title-section-product">
          <h2>Te puede Interesar</h2>
          <NavLink to="/catalogue">
            Ver mas <AiOutlineArrowRight />
          </NavLink>
        </div>
        <InterestProduct min={0} max={4} />
      </section>
      <Footer />
    </>
  );
}