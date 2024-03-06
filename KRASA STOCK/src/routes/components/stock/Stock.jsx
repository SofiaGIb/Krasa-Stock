import React from "react";
import { useState } from "react";

import { newStock } from "../../../Redux/actions/actionsFunction/actions";

import {  useDispatch, useSelector } from "react-redux";

export default function Stock() {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.allProducts);
  const [name, setName] = useState("");
  const [amount, setAmount] = useState(0); 

const handleSubmit = async (event) => {
  event.preventDefault();
  
  
  
  
  const newAmount = { name, amount: parseInt(amount) }

    await dispatch(newStock(newAmount));
  };

  return (
    <div>
      <h1>ACTUALIZAREMOS EL STOCK</h1>

      <div>
        <form  onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="nombre producto"
            value={name}
            onChange={ (event)=> setName(event.target.value)}
          />
          <input
            type="number"
            placeholder="nuevo stock"
            value={amount}
            onChange={(event)=>{setAmount(event.target.value)}}
          />
                <button type="submit" className="buttonv">
          CREAR
        </button>
        </form>
      </div>
    </div>
  );
}
