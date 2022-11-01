import React from "react";
import "./Login.css";
import PageTop from "../../components/PageTop";
import Footer from "../../components/footer/Footer";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <>
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
              <Link>No tengo cuenta</Link>
            </li>
            <li>|</li>
            <li>
              <Link>Olvidé mi contraseña</Link>
            </li>
          </ul>
        </form>
      </section>
      <Footer />
      <PageTop />
    </>
  );
}
