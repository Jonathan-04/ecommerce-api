export default function addCart(data) {
  const cart = {
    id: data.id,
    image: data.image,
    price: data.price,
    title: data.title,
  };

  const cartList = JSON.parse(sessionStorage.getItem("cartList")) || [];

  if (cartList.some((item) => item.id === cart.id)) {
    alert("Ya has agregado el producto al Carrito");
  } else {
    alert("Agregado al Carrito");
    cartList.push(cart);
    sessionStorage.setItem("cartList", JSON.stringify(cartList));
  }
}
