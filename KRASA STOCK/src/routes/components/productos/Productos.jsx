import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { allProduct, deletProduct } from "../../../Redux/actions/actionsFunction/actions";
import SearchBar from "../searchBar/Searchbar";
import "./productos.css";

function Product ()  {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleDelete = (name) => {
    dispatch(deletProduct(name));
    dispatch(allProduct());
  };

  return (
    <div className="cajap">
          <SearchBar></SearchBar>
      <h2 className="titulop">LISTA DE PRODUCTOS</h2>
     
        <ul className="color">
          {products
            .filter((product) => product.name.toLowerCase().includes(searchTerm.toLowerCase()))
            .map((product) => (
              <li className={`listp ${product.amount < 10 ? "red" : ""}`} key={product.id}>
                <> {product.name}</>
                <>description: {product.description}</>
                <button className="material" onClick={() => handleDelete(product.name)}>
                  <span className="material-symbols-outlined">delete</span>
                </button>
                <>Cantidad : {product.amount}</>
              </li>
            ))}
        </ul>
      </div>
  
  );
};

export default Product
