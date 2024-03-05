
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { allProduct, deletProduct } from "../../../Redux/actions/actionsFunction/actions";
import SearchBar from "../searchBar/Searchbar";
import "./productos.css";

export const Product = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.allProducts);
  useEffect(() => {
    dispatch(allProduct());
  }, []);

  const [searchTerm, setSearchTerm] = useState("");

  const handleDelete = (name) => {
    dispatch(deletProduct(name));
  };

  return (
    <div className="contenedorp">
      <h2 className="h2">LISTADO DE PRODUCTOS</h2>

      <SearchBar setSearchTerm={setSearchTerm}></SearchBar>
      <div className="cajap">
        <ul className="color">
          {products.filter(product => product.name.toLowerCase().includes(searchTerm.toLowerCase())).map((product) => 
          (
            !product?alert("NO EXISTE") : 
             <li className="list" key={product.id}>
              <p> {product.name}</p>
              <p>description: {product.description}</p>
              <button className="material" onClick={() => handleDelete(product.name)}>
                {" "}
                <span className="material-symbols-outlined">delete</span>
              </button>
              <p>Cantidad : {product.amount}</p>
            </li> 
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Product;
