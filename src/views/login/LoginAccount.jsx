import React from "react";
import { Link } from "react-router-dom";

export default function LoginAccount() {
  return (
    <section className="container-login">
      <form className="login">
        <h1>Login</h1>
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
        <button>Iniciar</button>
        <ul className="login-options">
          <li>
            <Link to="register">No tengo cuenta</Link>
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
