import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";
import { AiOutlineShopping } from "react-icons/ai";

export default function ItemProduct({ data }, key) {
  const { addItem } = useCart();

  return (
    <article className="item-product" key={key.id} id={data.id}>
      <Link to={`/catalogue/product/${data.id}`}>
        <img src={data.image} alt="" />
        <h2>{data.title}</h2>
      </Link>
      <div className="price">
        <p>${data.price}</p>
        <button id="addCart" onClick={() => addItem(data)}>
          <AiOutlineShopping size={24} />
        </button>
      </div>
    </article>
  );
}
