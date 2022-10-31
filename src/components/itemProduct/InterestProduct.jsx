import React, { useEffect, useState } from "react";
import ItemProduct from "./ItemProduct";

export default function InterestProduct({ min, max }) {
  const [productData, setProductData] = useState();

  useEffect(() => {
    fetchAPI();

    async function fetchAPI() {
      const res = await fetch("https://fakestoreapi.com/products?limit=8");

      const data = await res.json();
      setProductData(data);
    }
  }, []);

  if (!productData) return <div />;

  return productData
    .slice(min, max)
    .map((item) => <ItemProduct data={item} key={item.id} />);
}
