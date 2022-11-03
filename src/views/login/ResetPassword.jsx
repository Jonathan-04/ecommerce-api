import React from "react";

export default function ResetPassword() {
  return (
    <section className="container-login">
      <form className="login">
        <h1>Restablecer Contraseña</h1>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Correo Electrónico"
        />
        <p>
          Se enviará un enlace a su correo electrónico para restablecer la
          contraseña
        </p>
        <button>Enviar</button>
      </form>
    </section>
  );
}
