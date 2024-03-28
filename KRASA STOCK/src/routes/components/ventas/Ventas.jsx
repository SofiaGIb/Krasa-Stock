import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saleProduct } from "../../../Redux/actions/actionsFunction/actions";
import "./ventas.css";

function Ventas() {
  const sold = useSelector((state) => state.sales);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(saleProduct());
  }, [dispatch]);

  return (
    <div className="cajav">
      <ul className="cajapr">
      { sold
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .map((sale) => (
  <li className="listv" key={sale.id}>
    <h2 className="titulon">{sale.productName}</h2>
    <h4 className="h4"> se vendieron :{sale.total}</h4>
    {sale.date && (
      <h4 className="fecha">
        {" "}
        {new Intl.DateTimeFormat("es-ES", { dateStyle: "full" }).format(new Date(sale.date))}
      </h4>
    )}
  </li>
))}
      </ul>
    </div>
  );
}

export default Ventas;
