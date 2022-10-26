import React from "react";
import "./Header.css";
import Logo from "../icons/Logo";
import { AiOutlineShopping } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";

export default function Header() {
  return (
    <>
      <header className="header">
        <div className="container-header">
          <div className="logo-header">
            <h1>
              <Logo />
              JesShop
            </h1>
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
            <AiOutlineHeart size={22} />
            <AiOutlineShopping size={22} />
            <button>Ingresar</button>
          </nav>
        </div>
      </header>
    </>
  );
}
