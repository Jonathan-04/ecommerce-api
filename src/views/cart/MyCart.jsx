import React from "react";

export default function MyCart() {
  const cartList = JSON.parse(sessionStorage.getItem("cartList")) || [];
  console.log(cartList);
  if (cartList.length === 0)
    return <div>El carrito está vacío 'Sección en Desarrollo'</div>;

  return cartList.map((item) => (
    <>
      <div>
        <p>ID del producto {item.id}</p>
        <p>{item.title}</p>
        <p>{item.price}</p>
      </div>
      <br></br>
    </>
  ));
}
