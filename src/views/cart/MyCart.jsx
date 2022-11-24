import React from "react";
import { Link } from "react-router-dom";
import GoToTop from "../../components/PageTop";
import Footer from "../../components/footer/Footer";
import "./CartList.css";
import { AiOutlineClose as Close } from "react-icons/ai";
import { useCart } from "react-use-cart";

export default function MyCart() {
  GoToTop();
  const {
    isEmpty,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();

  if (isEmpty)
    return (
      <>
        <div className="cart-empty">
          <h1>El carrito está vacío</h1>
          <p>Se ve algo solitario... Porqué no</p>
          <Link to="/catalogue/all">Descubres nuestros Productos</Link>
        </div>
        <Footer />
      </>
    );

  return (
    <>
      <main className="container-cart">
        <p className="total-item-cart">{totalItems} Productos</p>
        {items.map((item, index) => (
          <article key={index} className="item-cart">
            <img src={item.image} alt="product" />
            <h1 className="title-item">
              <Link to={`/catalogue/product/${item.id}`}>{item.title}</Link>
            </h1>
            <div className="quantity-product">
              <button
                onClick={() => {
                  updateItemQuantity(item.id, item.quantity - 1);
                }}
              >
                -
              </button>
              <p>{item.quantity}</p>
              <button
                onClick={() => {
                  updateItemQuantity(item.id, item.quantity + 1);
                }}
              >
                +
              </button>
            </div>
            <p className="item-price">$ {item.price * item.quantity}</p>
            <button
              className="btn-delete"
              onClick={() => {
                removeItem(item.id);
              }}
            >
              <Close size={18} />
            </button>
          </article>
        ))}
        <div className="pay">
          <button onClick={() => emptyCart()}>Vaciar Carrito</button>
          <Link to="/checkout">Ir a Pagar</Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
