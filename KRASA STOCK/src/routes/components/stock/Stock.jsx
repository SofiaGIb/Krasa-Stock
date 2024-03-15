import React from "react";
import { useState } from "react";
import { newStock } from "../../../Redux/actions/actionsFunction/actions";
import { useDispatch, useSelector } from "react-redux";
import "./stock.css";
import * as Yup from "yup";

export default function Stock() {
 const products = useSelector((state)=>state.products)


  const [errors, setErrors] = useState({});
  try {
    const schema = Yup.object().shape({
      amount: Yup.number()
        .required("La cantidad es requerida")
        .positive("La cantidad debe ser positiva"),
    });
  } catch (validationErrors) {
    const errors = {};
    validationErrors.innner.forEach((error) => {
      error[error.path] = error.message;
    });
    setErrors(errors);
  }

  const dispatch = useDispatch();
  const product = useSelector((state) => state.allProducts);
  console.log(product);
  const [name, setName] = useState("");
  const [amount, setAmount] = useState(0);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newAmount = { name, amount: parseInt(amount) };

    await dispatch(newStock(newAmount));
  };

  return (
    <div>
      <h1 className="titless">ACTUALIZAREMOS EL STOCK</h1>

      <div className="cajast">
        <form className="forms" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="nombre producto"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <select name="p" id="">
            <option>seleccione producto</option>
            {product.map((products)=>(<option key={products.id} value={products.id}>{products.name}</option>))}
            </select>
          <input
            type="number"
            placeholder="nuevo stock"
            value={amount}
            onChange={(event) => {
              setAmount(event.target.value);
            }}
          />{" "}
          {errors.amount && <div>{errors.amount}</div>}
          <button type="submit" className="bottons">
            CREAR
          </button>
        </form>
      </div>
    </div>
  );
}
