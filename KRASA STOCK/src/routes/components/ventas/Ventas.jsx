import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saleProduct} from "../../../Redux/actions/actionsFunction/actions";
import "./ventas.css"
import Swal from 'sweetalert2'




function Ventas() {
  const dispatch = useDispatch();
  const sold = useSelector((state) => state.sales);

  useEffect(() => {
    dispatch(saleProduct());
  }, [dispatch]);

  return (
    <div className="cajav">
      <h1 className="titulop" >lista de productos vendidos </h1>
      <ul className="cajapr">
        {sold.map((sale) => (
          <li  className="listv"key={sale.id}>
            <h2 className="titulo2">{sale.productName}</h2>
            <h4 > se vendieron :{sale.total}</h4>
            <h4 > el : {sale.date}</h4>
            
            
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Ventas;
