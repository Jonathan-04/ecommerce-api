import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import Logo from "../icons/Logo";
import { AiOutlineShopping } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";

export default function Header() {
  return (
    <>
      <header className="header">
        <div className="container-header">
          <div className="logo-header">
            <Link to="/">
              <h1>
                <Logo />
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
              <AiOutlineHeart size={22} />
              <p>Favoritos</p>
            </div>
            <div className="navbar-options">
              <AiOutlineShopping size={22} />
              <p>Carrito</p>
            </div>

            <Link id="login" to="/login">
              <AiOutlineUser size={22} />
              Ingresar
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
}
