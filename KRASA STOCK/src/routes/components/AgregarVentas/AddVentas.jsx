import { useState } from "react";
import { addSale } from "../../../Redux/actions/actionsFunction/actions";
import { useDispatch, useSelector } from "react-redux";
import "./AddVentas.css";
import Swal from "sweetalert2";

export const AddVentas = () => {
  const dispatch = useDispatch();
  const sale = useSelector((state) => state.sales.sales);
  const [productName, setProductName] = useState("");
  const [total, setTotal] = useState(0);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const totalvalue = parseInt(total);
    const newSale = { productName, total: totalvalue };
    await dispatch(addSale(newSale));
    Swal.fire({
      position: "center",
      icon: "success",
      title: "venta registrada",
      showConfirmButton: false,
      timer: 1800, // 1.5 segundos
    });
  };

  return (
    <div className="cajav">
      <form onSubmit={handleSubmit} className="formv">
        <input
          type="text"
          placeholder="nombre del producto"
          value={productName}
          onChange={(event) => setProductName(event.target.value)}
        />
        <input
          type="number"
          placeholder="total"
          value={total}
          onChange={(event) => setTotal(event.target.value)}
        />
        <button type="submit" className="buttonv">
          CREAR
        </button>
      </form>
    </div>
  );
};

export default AddVentas;
