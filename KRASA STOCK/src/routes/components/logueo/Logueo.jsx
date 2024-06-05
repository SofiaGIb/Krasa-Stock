import React from "react";
import Register from "./Register";
import { useState } from "react";
import { postUser } from "../../../Redux/actions/actionsFunction/actions";
import "./Logueo.css";
import { useDispatch } from "react-redux";

function Logueo() {
  const dispatch = useDispatch();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const newUser = { name,password,email};
      await dispatch(postUser(newUser));
    } catch (error) {}
  };

  return (
    <div className="h1">
      <div className="formc">
        <form className="forma" onSubmit={handleSubmit}>
          <label className="sr-only" htmlFor="">
            name:
          </label>
          <input
            className="input"
            type="text"
            value={name}
            placeholder="Name"
            onChange={(event) => setName(event.target.value)}
          />
          <label htmlFor="" className="sr-only">
            Email
          </label>
          <input
            className="input "
            type="email"
            value={email}
            placeholder="Email"
            onChange={(event) => setEmail(event.target.value)}
          />
          <label htmlFor="" className="sr-only"> password
            </label>
            <input
            className="input"
              type="password"
              value={password}
              placeholder="Password"
              onChange={(event) => setPassword(event.target.value)}
            />
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
