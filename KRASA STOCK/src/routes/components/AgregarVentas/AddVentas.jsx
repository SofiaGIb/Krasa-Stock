import React from "react";
import { useState } from "react";
import { addSale,allProduct } from "../../../Redux/actions/actionsFunction/actions";
import { useDispatch, useSelector } from "react-redux";
import "./AddVentas.css";
import * as Yup from "yup";
import Swal from "sweetalert2";

export const AddVentas = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const sale = useSelector((state) => state.sales);
  const [productName, setProductName] = useState("");
  const [total, setTotal] = useState(0);
  const [errors, setErrors] = useState({});

  const schema = Yup.object().shape({
    productName: Yup.string().required(" NOMBRE ES REQUERIDO"),
    total: Yup.number()
      .required("CANTIDAD ES REQUERIDA")
      .typeError("EL VALOR DEBE SER UN NUMERO")
      .positive("CANTIDAD DEBE SER POSITIVA")
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await schema.validate({ productName, total }, { abortEarly: false });
      const productExists = products.some((product) => product.name.toLowerCase() === productName.toLowerCase());
      if (!productExists) {
        return Swal.fire({
          position: "center",
          icon: "error",
          title: "PRODUCTO INGRESADO NO EXISTE",
          showConfirmButton: false,
          timer: 1800,
        });
      }
      const newSale = { productName, total:parseInt(total) };
      await dispatch(addSale(newSale));
      dispatch(allProduct());

      Swal.fire({
        position: "center",
        icon: "success",
        title: "venta registrada",
        showConfirmButton: false,
        timer: 1800,
      });
      setErrors({});
    } catch (validationErrors) {
      const errors = {};
      validationErrors.inner.forEach((error) => {
        errors[error.path] = error.message;
      });
      setErrors(errors);
    }
  };

  return (
    <div className="cajaf">
      <h2 className="titv">INGRESAR VENTAS REALIZADAS </h2>
      <form onSubmit={handleSubmit} className="formv">
        <input
          type="text"
          placeholder="NOMBRE DEL PRODUCTO"
          value={productName}
          onChange={(event) => setProductName(event.target.value)}
        />
        {errors.productName && <div>{errors.productName}</div>}

        <input
          type="number"
          placeholder="CANTIDAD"
          value={total}
          onChange={(event) => setTotal(event.target.value)}
        />
        {errors.total && <div>{errors.total}</div>}

        <button type="submit" className="buttonv">
          CREAR
        </button>
      </form>
    </div>
  );
};

