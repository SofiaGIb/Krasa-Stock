import React from "react";
import Logueo from "./Logueo";
export default function Register() {
  return (
    <div className="h1">
      <div className="formc">
        <form className="forma">
          <label className="sr-only" htmlFor="">
            User:
          </label>
          <input className="input" type="text" placeholder="Nombre de usuario" />
          <label htmlFor="" className="sr-only">
            correo
          </label>
          <input className="input " type="email" placeholder="Email" />

          <label className="input"> password</label>
          <input type="text" className="input" placeholder="password" />
          <button className="button">Crear cuenta</button>
          <p class="error escondido">Error al registrarse</p>
        </form>
        <p>
          ¿Ya estás registrado? - <a href="/logueo">Crear cuenta</a>
        </p>
      </div>
    </div>
  );
}
