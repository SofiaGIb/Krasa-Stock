import React, { useState } from "react";
import { newStock } from "../../../Redux/actions/actionsFunction/actions";
import { useDispatch, useSelector } from "react-redux";
import "./stock.css";
import SearchBar from "../searchBar/Searchbar";
import * as Yup from "yup";

export default function Stock() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.allProducts);
  const [name, setName] = useState("");
  const [amount, setAmount] = useState(0);
  const [errors, setErrors] = useState({});

  const schema = Yup.object().shape({
    name: Yup.string().required("El nombre es requerido"),
    amount: Yup.number()
      .required("La cantidad es requerida")
      .positive("La cantidad debe ser positiva"),
  });
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await schema.validate({ name, amount }, { ebortEarly: false });
      const newAmount = { name: name, amount: parseInt(amount) };

      await dispatch(newStock(newAmount));
      setErrors({});
    } catch (validationErrors) {
      const errors = {};
      validationErrors.inner.forEach((error) => {
        errors[error.path] = error.message;
      });
      setErrors(errors);
    }

    return (
      <div className="cajast">
        <h2 className="tittleS">ACTUALIZAR STOCK</h2>

        <form className="forms" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="nombre producto"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          {errors.name && <div>{errors.name}</div>}

          <input
            type="number"
            placeholder="nuevo stock"
            value={amount}
            onChange={(event) => {
              setAmount(event.target.value);
            }}
          />

          {errors.amount && <div>{errors.amount}</div>}
          <button type="submit" className="bottons">
            AGREGAR
          </button>
        </form>
      </div>
    );
  };
}
