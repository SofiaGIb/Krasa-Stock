import React from "react";
import Register from "./Register";
import "./Logueo.css";

function Logueo() {
  const handleSubmit = async (event) => {
    event.preventDefault();
  };

  return (
    <div className="h1">
      <div className="formc">
        <form className="forma" onSubmit={handleSubmit}>
          <label className="sr-only" htmlFor="">
            User:
          </label>
          <input className="input" type="text" placeholder="Nombre de usuario" />
          <label htmlFor="" className="sr-only">
            correo
          </label>
          <input className="input " type="email" placeholder="Email" />

          <button className="button">Iniciar sesion</button>
        </form>
        <p>
          ¿Todavía no tenés una cuenta? - <a href="/Register">Registrate</a>
        </p>
      </div>
    </div>
  );
}

export default Logueo;
