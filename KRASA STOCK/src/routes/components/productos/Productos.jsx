import React, { useState,useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { allProduct, deletProduct } from "../../../Redux/actions/actionsFunction/actions";
import SearchBar from "../searchBar/Searchbar";
import Swal from "sweetalert2";
import "./productos.css";

function Product() {
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(allProduct())
  },[])



  const products = useSelector((state) => state.products);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleDelete = (name) => {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "PRODUCTO ELIMINADO",
      showConfirmButton: false,
      timer: 1800,
    });
    dispatch(deletProduct(name));
    dispatch(allProduct());
  };

  return (
    <div className="cajap">
      <div className="search">
        <SearchBar setSearchTerm={setSearchTerm}></SearchBar>
      </div>

      <ul className="color">
        {products
          .filter((product) => product.name.toLowerCase().includes(searchTerm.toLowerCase()))
          .map((product) => (
            <li className={`listp ${product.amount < 10 ? "red" : ""}`} key={product.id}>
              <ul className="name"> {product.name}</ul>
              <ul className="description">descripcion: {product.description}</ul>
              <button className="material" onClick={() => handleDelete(product.name)}>
                <span className="material-symbols-outlined">DELETE</span>
              </button>
              <ul className="cantidad">Cantidad : {product.amount}</ul>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Product;
