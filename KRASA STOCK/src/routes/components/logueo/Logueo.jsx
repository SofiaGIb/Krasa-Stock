import React from "react";
import { useState } from "react";
import { postUser } from "../../../Redux/actions/actionsFunction/actions";
import "./Logueo.css";
import { useDispatch } from "react-redux";
import * as Yup from "yup";

function Logueo() {
  const dispatch = useDispatch();
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [errors, setErrors] = useState({});

  const schema = Yup.object().shape({
    name: Yup.string().required("nombre requerido"),
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await schema.validate({ name }, { abortEarly: false });
      const newUser = { name, password };
      const ok = await dispatch(postUser(newUser));
      if (ok) {
        window.location.href = "/Productos";
      }
      setErrors({});
    } catch (error) {
      const errors = {};
      validationErrors.inner.forEach((error) => {
        errors[error.path] = error.message;
      });
      setErrors(errors);
    }
  };

  return (
    <div className="h1">
      <div className="formc">
        <p>Creá tu cuenta para entrar al área de administración.</p>

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
          {errors.name && <span style={{ color: "red" }}>{errors.name}</span>}
          <label htmlFor="" className="sr-only">
            {" "}
            password
          </label>
          <input
            className="input"
            type="password"
            value={password}
            placeholder="Password"
            onChange={(event) => setPassword(event.target.value)}
          />
          <button className="button">Crear cuenta</button>
        </form>
      </div>
    </div>
  );
}

export default Logueo;
