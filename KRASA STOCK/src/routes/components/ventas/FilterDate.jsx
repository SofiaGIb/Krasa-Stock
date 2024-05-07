import React from "react";



export default function FilterDate({ setDates,sold}) {

  const handleDate = (event) => {
    const {value}=event.target;
    setDates(value);
  };
  return (
    <div>
      <select value=""
      
        onChange={handleDate}>
        <option >BUSCAR POR FECHA</option>
        {sold.map((venta) => (
          <option key={venta.id} >
            {venta.date && (    <h4 className="fecha">
                  {" "}
                  {new Intl.DateTimeFormat("es-ES", { dateStyle: "full" }).format(
                    new Date(venta.date)
                  )}
                </h4>
              ) }
          </option>
        ))}
      </select>
    </div>
  );
}
