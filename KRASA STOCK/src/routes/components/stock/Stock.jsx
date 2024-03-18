import React, { useState } from "react";
import { newStock } from "../../../Redux/actions/actionsFunction/actions";
import { useDispatch, useSelector } from "react-redux";
import "./stock.css";
import SearchBar from "../searchBar/Searchbar";
import * as Yup from "yup";

export default function Stock() {
  const [errors, setErrors] = useState({});
  try {
    const schema = Yup.object().shape({
      amount: Yup.number()
        .required("La cantidad es requerida")
        .positive("La cantidad debe ser positiva"),
    });
  } catch (validationErrors) {
    const errors = {};
    validationErrors.inner.forEach((error) => {
      errors[error.path] = error.message;
    });
    setErrors(errors);
  }

  const dispatch = useDispatch();
  const products = useSelector((state) => state.allProducts);
  const [name, setName] = useState("");
  const [amount, setAmount] = useState(0);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newAmount = { name: name, amount: parseInt(amount) };

    await dispatch(newStock(newAmount));
  };

  return (
    <div>
      <h2 className="titless">ACTUALIZAREMOS EL STOCK</h2>

      <div className="cajast">
        <form className="forms" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="nombre producto"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
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
    </div>
  );
}
