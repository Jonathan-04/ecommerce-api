import React from "react";
import { Link } from "react-router-dom";
import { deleteItemCart } from "../../components/functions/CartList";
import "./CartList.css";
import { AiOutlineClose as Close } from "react-icons/ai";
import { useState } from "react";

export default function MyCart() {
  const cartList = JSON.parse(sessionStorage.getItem("cartList")) || [];
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = (id) => {
    const cartListUpdate = JSON.parse(sessionStorage.getItem("cartList"));
    const quantityUpdate = cartListUpdate.find((item) => item.id === id);
    setQuantity(quantity + 1);
    quantityUpdate.quantity = quantity;
    sessionStorage.setItem("cartList", JSON.stringify(cartListUpdate));
  };

  const deductQuantity = (id) => {
    const cartListUpdate = JSON.parse(sessionStorage.getItem("cartList"));
    const quantityUpdate = cartListUpdate.find((item) => item.id === id);
    setQuantity(quantity - 1);
    quantityUpdate.quantity = quantity;
    sessionStorage.setItem("cartList", JSON.stringify(cartListUpdate));
  };

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
            <button
              onClick={() => {
                deductQuantity(item.id);
              }}
            >
              -
            </button>
            <input
              type="text"
              name="quantity"
              id="quantity"
              value={item.quantity}
            />
            <button
              onClick={() => {
                increaseQuantity(item.id);
              }}
            >
              +
            </button>
          </div>
          <p className="item-price">$ {item.price * item.quantity}</p>
          <button
            className="btn-delete"
            onClick={() => {
              deleteItemCart(item.id);
            }}
          >
            <Close size={18} />
          </button>
        </article>
      ))}
      <div className="pay">
        <Link to="/checkout">Ir a Pagar</Link>
      </div>
    </main>
  );
}
