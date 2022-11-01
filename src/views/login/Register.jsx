import React from "react";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <section className="container-login">
      <form className="login register">
        <h1>Registro</h1>
        <input type="text" className="name" id="name" placeholder="Nombres" />
        <input
          type="text"
          className="lastname"
          id="lastname"
          placeholder="Apellidos"
        />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Correo Electrónico"
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Contraseña"
        />
        <button>Registrarme</button>
        <ul className="login-options">
          <li>
            <Link to="/login">Ya tengo una cuenta</Link>
          </li>
          <li>|</li>
          <li>
            <Link to="resetPassword">Olvidé mi contraseña</Link>
          </li>
        </ul>
      </form>
    </section>
  );
}
