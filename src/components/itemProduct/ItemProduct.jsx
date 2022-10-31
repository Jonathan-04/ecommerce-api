import React from "react";

import { AiOutlineShopping } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function ItemProduct({ data }, key) {
  return (
    <article className="item-product" key={key.id} id={data.id}>
      <Link to={`/catalogue/product/${data.id}`}>
        <img src={data.image} alt="" />
        <h2>{data.title}</h2>
      </Link>
      <div className="price">
        <p>${data.price}</p>
        <AiOutlineShopping size={24} />
      </div>
    </article>
  );
}
