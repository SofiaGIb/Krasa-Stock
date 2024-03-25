import React from "react";

import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { allProduct,postProduct } from "../../../Redux/actions/actionsFunction/actions"
import "./Logueo.css";
function Logueo() {

  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(allProduct())
  },[])
  return (
    <div>
      <h1 className="h1">pantalla donde proximamente se encontrara la validacion de usuario autorizado.</h1>
      <div className="orient">

      <ul> <h4>agregar producto:</h4> se debera cargar los productos del local</ul>
      <ul><h4>productos:</h4> se mostrata la lista de productos con su stock y caracteristica ,si tiene un stockk inferior a 10 mostrara una alerta </ul>
    <ul><h4>agregar stock:</h4>en esta seccion debera ingresar el nombre del producto y luego la cantidad nueva que se sumara a la que ya tiene </ul>
    <ul><h4>REGISTRAR VENTA:</h4> se debera ingresar el nombre y cantidad del producto que se vendio</ul>
    <ul><h4>VENTAS :</h4>  SE MOSTRATA LA LISTA DE VENTAS REALIZADAS CON EL NOMBRE DEL PRODUCTO LA CANTIDAD  VENDIDA Y TAMBIEN LA FECHA CUANDO REALIZO LA MISMA </ul>
    
      </div>
    
    </div>
  )
}

export default Logueo
