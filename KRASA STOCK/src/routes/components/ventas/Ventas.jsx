import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { soldProduct } from "../../Redux/actions/actionsFunction/actions";

function Ventas() {
  const dispatch = useDispatch();
  const sold = useSelector((state) => state.sales);

  useEffect(() => {
    dispatch(soldProduct());
  }, [dispatch]);
  const format = (date,locale,options)=> new Intl.DateTimeFormat(locale,options).format(date)
  const now = new Date()
  return (
    <div>
      <h1>lista de productos vendidos </h1>
      <li>
        {sold.map((sale) => (
          <li key={sale.id}>
            <h2>{sale.productName}</h2>
            <h4> se vendieron :{sale.total}</h4>
            <h4> el : {sale.date}</h4>
            
            date:format(now,"es")
          </li>
        ))}
      </li>
    </div>
  );
}

export default Ventas;
