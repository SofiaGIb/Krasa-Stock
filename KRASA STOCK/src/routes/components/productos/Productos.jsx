import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { allProduct, deletProduct } from "../../../Redux/actions/actionsFunction/actions";
import SearchBar from "../searchBar/Searchbar";
import "./productos.css";

function Product() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  console.log(products);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleDelete = (name) => {
    dispatch(deletProduct(name));
    dispatch(allProduct());
  };

  return (
    <div className="cajap">
      <h2 className="titulo2">LISTA DE PRODUCTOS</h2>
      <div className="search">
        <SearchBar></SearchBar>
      </div>

      <ul className="color">
        {products
          .filter((product) => product.name.toLowerCase().includes(searchTerm.toLowerCase()))
          .map((product) => (
            <li className={`listp ${product.amount < 10 ? "red" : ""}`} key={product.id}>
              <ul className="name"> {product.name}</ul>
              <ul className="description">descripcion: {product.description}</ul>
              <button className="material" onClick={() => handleDelete(product.name)}>
                <span className="material-symbols-outlined">delete</span>
              </button>
              <ul className="cantidad">Cantidad : {product.amount}</ul>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Product;
