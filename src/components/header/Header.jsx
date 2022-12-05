import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";
import { signOut } from "firebase/auth";
import auth from "../../firebase";
import "./Header.css";
import { AiFillShop } from "react-icons/ai";
import { AiOutlineShopping } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { useCurrentUser } from "../../context/UserContext";

export default function Header() {
  const { totalItems } = useCart();
  const { user } = useCurrentUser();

  const signOutUser = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        alert("Sesión Cerrada");
      })
      .catch((error) => {
        // An error happened.
        alert(error);
      });
  };

  return (
    <>
      <header className="header">
        <div className="container-header">
          <div className="logo-header">
            <Link to="/">
              <h1>
                <AiFillShop />
                JesShop
              </h1>
            </Link>
            <label htmlFor="search" className="input-search">
              <AiOutlineSearch />
              <input
                type="text"
                name="search"
                id="search"
                placeholder="Buscar Producto"
              />
            </label>
          </div>
          <nav className="navbar">
            <div className="navbar-options">
              <Link to="">
                <AiOutlineHeart size={22} />
                <p>Favoritos</p>
              </Link>
            </div>
            <div className="navbar-options" id="cart">
              <span id="count-favorites" className="count-favorites">
                {totalItems}
              </span>
              <Link to="/myCart">
                <AiOutlineShopping size={22} />
                <p>Carrito</p>
              </Link>
            </div>

            {user ? (
              <Link
                id="login"
                onClick={() => {
                  signOutUser();
                }}
              >
                <AiOutlineUser size={22} />
                Cerrar Sesión
              </Link>
            ) : (
              <Link id="login" to="/login">
                <AiOutlineUser size={22} />
                Login
              </Link>
            )}
          </nav>
        </div>
      </header>
    </>
  );
}
