import React from "react";
import { Link } from "react-router-dom";
import "./CartList.css";
import { AiOutlineClose as Close } from "react-icons/ai";

export default function MyCart() {
  const cartList = JSON.parse(sessionStorage.getItem("cartList")) || [];

  if (cartList.length === 0)
    return (
      <div className="cart-empty">
        <h1>El carrito está vacío</h1>
        <p>Se ve algo solitario... Porqué no</p>
        <Link to="/catalogue/all">Descubres nuestros Productos</Link>
      </div>
    );

  return (
    <main className="container-cart">
      <p className="total-item-cart">{cartList.length} Productos</p>
      {cartList.map((item) => (
        <article key={item.id} className="item-cart">
          <img src={item.image} alt="product" />
          <h1 className="title-item">
            <Link to={`/catalogue/product/${item.id}`}>{item.title}</Link>
          </h1>
          <div className="quantity-product">
            <button>-</button>
            <input type="text" name="quantity" id="quantity" defaultValue={1} />
            <button>+</button>
          </div>
          <p className="item-price">$ {item.price}</p>
          <Close size={18} />
        </article>
      ))}
      <div className="pay">
        <Link to="/checkout">Ir a Pagar</Link>
      </div>
    </main>
  );
}
