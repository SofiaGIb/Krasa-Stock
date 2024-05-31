import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allProduct } from "../../../../Redux/actions/actionsFunction/actions";
import envioMailPdf from "../envioMailPdf";
function ReporteStock() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(allProduct());
  }, []);

  const handleCreate = () => {
    envioMailPdf(stock);
  };

  const productos = useSelector((state) => state.products); 
  const stock = productos
  .filter((produ) => produ.amount < 10)
  .map((produ) => `${produ.name} (${produ.amount})`);
  //Se utiliza el map para transformar lo devuelto en filter un array simple que admite el creador de pdf 
  return (
    <div className="color">
      <ul>
        {productos.map((cosas) => (
          <ul>
            <h1>
              {cosas.amount < 10 ? (
                <li key={cosas.id}>
                  <h1>
                    {cosas.name} ({cosas.amount})
                  </h1>
                </li>
              ) : (
                ""
              )}
            </h1>
          </ul>
        ))}
      </ul>
      <button onClick={handleCreate}>crear pdf </button>
    </div>
  );
}

export default ReporteStock;
