import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

export default function Register() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "onBlur",
  });

  const onSubmit = (data) => {
    alert(`Registro exitoso ${data.name} ${data.lastName}`);
  };
  return (
    <section className="container-login">
      <form className="login register" onSubmit={handleSubmit(onSubmit)}>
        <h1>Registro</h1>
        <div className="input-container inputName">
          <input
            type="text"
            placeholder="Nombres"
            {...register("name", {
              required: true,
            })}
          />
          {errors.name?.type === "required" && (
            <span className="input-message-error">
              El campo no puede estar vacío
            </span>
          )}
        </div>
        <div className="input-container inputLastName">
          <input
            type="text"
            placeholder="Apellidos"
            {...register("lastName", {
              required: true,
            })}
          />
          {errors.lastName?.type === "required" && (
            <span className="input-message-error">
              El campo no puede estar vacío
            </span>
          )}
        </div>
        <div className="input-container">
          <input
            type="email"
            placeholder="Correo Electrónico"
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
            placeholder="Contraseña"
            {...register("password", {
              required: true,
              pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{8,20}$/,
            })}
          />
          {errors.password?.type === "required" && (
            <span className="input-message-error">
              El campo no puede estar vacío
            </span>
          )}
          {errors.password?.type === "pattern" && (
            <span className="input-message-error">
              La contraseña debe contener: 1 letra minúscula, 1 letra mayúscula,
              al menos un número, sin espacios, mínimo 8 carácteres.
            </span>
          )}
        </div>
        <button>Registrarme</button>
        <ul className="login-options">
          <li>
            <Link to="/login">Ya tengo una cuenta</Link>
          </li>
          <li>|</li>
          <li>
            <Link to="/login/resetPassword">Olvidé mi contraseña</Link>
          </li>
        </ul>
      </form>
    </section>
  );
}
