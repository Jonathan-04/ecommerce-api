import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

export default function LoginAccount() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "onBlur",
  });

  const onSubmit = (data) => {
    alert(`Has iniciado Sesión! ${data.email}`);
  };

  return (
    <section className="container-login">
      <form className="login" onSubmit={handleSubmit(onSubmit)}>
        <h1>Login</h1>
        <div className="input-container">
          <input
            type="email"
            name="email"
            placeholder="Correo: ejemplo@gmail.com"
            {...register("email", {
              required: true,
              pattern: /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/,
            })}
          />
          {errors.email?.type === "required" && (
            <span className="input-message-error">
              El campo no puede estar vacío
            </span>
          )}
          {errors.email?.type === "pattern" && (
            <span className="input-message-error">El correo no es valido</span>
          )}
        </div>

        <div className="input-container">
          <input
            type="password"
            name="password"
            placeholder="Contraseña"
            {...register("password", {
              required: true,
            })}
          />
          {errors.password?.type === "required" && (
            <span className="input-message-error">
              El campo no puede estar vacío
            </span>
          )}
        </div>
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
