// import { useDispatch } from "react-redux";
// import { foundProduct } from "../Redux/actions/actionsFunction/actions";
// import { useState } from "react";

// function SearchBar() {
//   const dispatch = useDispatch();
//   const handleSearch = (event) => {
//     dispatch(foundProduct(event.target.value))
//   };


//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="NOMBRE DE PRODUCTO"
//         onChange={ handleSearch}
//       />
//     </div>
//   );
// }

// export default SearchBar;


import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { foundProduct } from "../Redux/actions/actionsFunction/actions";

function SearchBar() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const handleSearch = (event) => {
    setName(event.target.value);
    dispatch(foundProduct(event.target.value));
  };
  
  return (
    <div>
      <input
        type="text"
        placeholder="Buscar producto..."
        value={name}
        onChange={handleSearch}
      />
    </div>
  );
}

export default SearchBar;
