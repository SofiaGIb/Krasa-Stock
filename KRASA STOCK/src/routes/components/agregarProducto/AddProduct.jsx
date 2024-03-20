import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { postProduct } from "../../../Redux/actions/actionsFunction/actions";
import "./agregarProducto.css";
import * as Yup from "yup";

export const AddProduct = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(0);
  const [isProductCreated, setIsProductCreated] = useState(false);
  const [createdProduct, setCreatedProduct] = useState(null);
  const [errors, setErrors] = useState({});

  const dispatch = useDispatch();
  const product = useSelector((state) => state.products);

  const schema = Yup.object().shape({
    name: Yup.string().required("El nombre es requerido"),
    amount: Yup.number()
      .required("La cantidad es requerida")
      .positive("La cantidad debe ser positiva"),
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await schema.validate({ name, amount }, { abortEarly: false });
      const newProduct = { name, description, amount };
      await dispatch(postProduct(newProduct));
      setIsProductCreated(true);
      setCreatedProduct(newProduct);
      // Limpia los campos después de enviarlos
      setName("");
      setDescription("");
      setAmount(0);
      setErrors({});
    } catch (validationErrors) {
      const errors = {};
      validationErrors.inner.forEach((error) => {
        errors[error.path] = error.message;
      });
      setErrors(errors);
    }
  };

  setTimeout(() => {
    setIsProductCreated(false);
    document.querySelector(".new").classList.add("hidden");
  }, 9000); // 5sg

  return (
    <div className="caja">
      <h3 className="titulo">INGRESAR PRODUCTO</h3>
      <form className="formp" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="name"
          value={name.includes(" ") ? name : name.trim()}
          onChange={(event) => setName(event.target.value)}
        />
        {errors.name && <div>{errors.name}</div>}

        <input
          type="text"
          placeholder="description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
        <input
          type="number"
          placeholder="amount"
          value={amount}
          onChange={(event) => setAmount(event.target.value)}
        />
        {errors.amount && <div>{errors.amount}</div>}

        <button type="submit" className="bottonc">
          CREAR
        </button>
      </form>

      {isProductCreated && (
        <div className="new">
          <h1 className="title2">PRODUCTO CREADO</h1>
          <ul>
            <li>
              <h3>
                {createdProduct.name},{createdProduct.description},
                {createdProduct.amount}
              </h3>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

