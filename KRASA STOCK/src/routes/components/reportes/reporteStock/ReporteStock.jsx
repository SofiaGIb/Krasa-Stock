import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allProduct } from "../../../../Redux/actions/actionsFunction/actions";

function ReporteStock() {
    const dispatch = useDispatch();
  useEffect(() => {
    dispatch(allProduct());
  }, []);

  const productos = useSelector((state) => state.products);
  return (
    <div className="color">
      <ul>
      {productos.map((cosas) => (
          <ul><h1>
            {cosas.amount < 10 ?    <li key={cosas.id}>
    <h1>{cosas.name}  ({cosas.amount})</h1>
  </li>  : ""}
            </h1>
            </ul>
        ))}
        </ul>
    </div>
  );
}

export default ReporteStock;
