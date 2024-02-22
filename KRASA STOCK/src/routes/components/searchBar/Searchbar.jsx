import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { foundProduct } from '../../../Redux/actions/actionsFunction/actions'; // Asumiendo que tienes una acción llamada searchProduct

const SearchBar = () => {
const dispatch = useDispatch();
const handleName = (event)=>{
  const {value} = event.target;
  console.log(value);
  dispatch (foundProduct(value))
};
 return (

    <input type="text" placeholder='producto... '  onChange={handleName} />
  
 )

}

export default SearchBar;
