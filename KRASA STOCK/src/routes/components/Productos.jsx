import React, { useState } from "react";
import {useSelector,useDispatch} from "react-redux";
import { useEffect } from "react";
import { allProduct } from "../../Redux/actions/actionsFunction/actions";

export const Product = () =>{


const dispatch = useDispatch();
const products = useSelector((state)=>state.allProducts);

console.log(products);

useEffect(()=>{
  dispatch(allProduct());
},[dispatch]);




  <h1>lista de productos</h1>;
  return (
    <div>
      <h2>LISTADO DE PRODUCTOS</h2>

      <ol>
        {products.map((product) => (
          <product key={product.id} name={product.name} details={product.details} amount={product.amount}></product>
        ))}
      </ol>
    </div>
  );
}

export default Product;
