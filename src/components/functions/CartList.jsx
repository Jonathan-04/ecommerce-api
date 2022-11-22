export function addCart(data) {
  const cart = {
    id: data.id,
    image: data.image,
    price: data.price,
    title: data.title,
    quantity: 1,
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

export function deleteItemCart(id) {
  const item = JSON.parse(sessionStorage.getItem("cartList"));
  const index = item.findIndex((item) => item.id === id);
  item.splice(index, 1);
  sessionStorage.setItem("cartList", JSON.stringify(item));
  alert("Producto eliminado");
  window.location = "/myCart";
}
