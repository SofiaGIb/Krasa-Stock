import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
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
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleDelete = (name) => {
    dispatch(deletProduct(name));
    dispatch(allProduct());
  };

  const handleModifyStock = (name) => {
    setSelectedProduct(name);
  };
  <SearchBar setSearchTerm={setSearchTerm}></SearchBar>
  return (
    <div className="contenedorp">

      <h2 className="h2">LISTA DE PRODUCTOS</h2>
      <div className="cajap">
        <ul className="color">
          {products
            .filter((product) => product.name.toLowerCase().includes(searchTerm.toLowerCase()))
            .map((product) => (
              <li className={`list ${product.amount < 10 ? "red" : ""}`} key={product.id}>
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