import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { foundProduct } from '../../../Redux/actions/actionsFunction/actions'; // Asumiendo que tienes una acción llamada searchProduct
import "./search"
const SearchBar = () => {
const dispatch = useDispatch();
const handleName = (event)=>{
  const {value} = event.target;
  console.log(value);
  dispatch (foundProduct(value))
};
 return (
<div className='cajad'>

  <input type="text" placeholder='producto... '  onChange={handleName} />
</div>
  
 )

}

export default SearchBar;
