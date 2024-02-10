import React, { useState} from "react";
import {useSelector,useDispatch} from "react-redux";
 import{ ADD_PRODUCT} from "../../Redux/actions/action-types"
 export const AddProduct = () => {
  const [name, setName]= useState("");
const [details, setDetails] = useState ("");
const [amount ,setAmount] = useState(0)


const dispatch = useDispatch();
const product = useSelector( (state)=>state.product)
console.log(product);

  
const handleSubmit  = (event)=>{
  event.preventDefault()
  dispatch(addProduct({name,details,amount}))
  //limpia los campos luego que los envio 
  setName("");
  setDetails("");
  setAmount(0);

}
  return (
<div>

    <form action="" onSubmit={ handleSubmit}>
      <input type="text" placeholder="name" value={name} onChange={(event)=>setName(event.target.value)}/>
      <input type="text" placeholder="details" value={details} onChange={(event)=>setDetails(event.target.value)}/>
      <input type="number" placeholder="amount" value={amount} onChange={(event)=>setAmount(event.target.value)} />

      <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Primary</button>
    </form>
    <h1>lista de productos</h1>
    <ul>
         {product.map((product) => (
          <li key={product.name.name}>
            <h3>{product.name.name}</h3>
            <p>{product.name.details}</p>
            <p>Amount: {product.name.amount}</p>
          </li>
        ))}
      </ul>
</div>
    

  )
}
