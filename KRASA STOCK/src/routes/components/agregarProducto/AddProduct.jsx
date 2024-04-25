import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { postProduct,allProduct } from "../../../Redux/actions/actionsFunction/actions";
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
    name: Yup.string().required(" NOMBRE REQUERIDO"),
    amount: Yup.number()
 .required("CANTIDAD REQUERIDA")
      .positive("CANTIDAD DEBE SER POSITIVA")
      .typeError("EL VALOR DEBE SER UN NUMERO"),
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await schema.validate({ name, amount }, { abortEarly: false });
      const newProduct = { name,description, amount };
      await dispatch(postProduct(newProduct));
      setIsProductCreated(true);
      setCreatedProduct(newProduct);
      // Limpia los campos después de enviarlos
      setName("");
      setDescription("");
      setAmount(0);
      setErrors({});
      dispatch(allProduct());
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
  }, 9000); 

  return (
    <div className="caja">
      <h2 className="titulo">REGISTRAR PRODUCTOS</h2>
      <form className="formp" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="NOMBRE DEL PRODUCTO"
          value={name.includes(" ") ? name : name.trim()}
          onChange={(event) => setName(event.target.value)}
        />
        {errors.name && <div>{errors.name}</div>}

        <input
          type="text"
          placeholder="DESCRIPCIoN DEL PRODUCTO"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          />
          
        <input
          type="number"
          placeholder="CANTIDAD"
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
                {createdProduct.name},{createdProduct.description}  
                {createdProduct.amount}
              </h3>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

