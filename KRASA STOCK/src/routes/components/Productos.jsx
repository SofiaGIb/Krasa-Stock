import React, { useState } from "react";
import {useSelector,useDispatch} from "react-redux";
import { useEffect } from "react";
import { allProduct } from "../../Redux/actions/actionsFunction/actions";

export const Product = () =>{


const dispatch = useDispatch();
const products = useSelector((state)=>state.allProducts);


useEffect(()=>{
  dispatch(allProduct());
},[dispatch]);




  <h1>lista de productos</h1>;
  return (
    <div>
      <h2>LISTADO DE PRODUCTOS</h2>

    <ul>
      {products.map((product)=>(
        <li key={product.id}>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <h4>{product.amount}</h4>
        </li>
      ))}
    </ul>
    </div>
  );
}

export default Product;
