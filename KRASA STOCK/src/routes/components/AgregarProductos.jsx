import React, { useState, useEffect } from "react";

export const AddProduct = () => {
  const [name, setName] = useState("");
  const [details, setDetails] = useState("");
  const [amount, setAmount] = useState(0);
  const [list, setList] = useState(() => {
    const storedList = localStorage.getItem("productList");
    return storedList ? JSON.parse(storedList) : [];
  });

  const newProduct = {
    name: name,
    details: details,
    amount: amount,
  };

  const addProduct = () => {
    setList([...list, newProduct]);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    addProduct();
    // Limpiar los campos después de agregar el producto
    setName("");
    setDetails("");
    setAmount(0);
  };

  useEffect(() => {
    // Guardar la lista de productos en localStorage cada vez que cambie
    localStorage.setItem("productList", JSON.stringify(list));
  }, [list]);

  return (
    <div>
      <h1>Cómo agregar productos</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Nombre"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <input
          type="text"
          placeholder="Detalles"
          value={details}
          onChange={(event) => setDetails(event.target.value)}
        />
        <input
          type="number"
          placeholder="Cantidad"
          value={amount}
          onChange={(event) => setAmount(event.target.value)}
        />
        <button type="submit" className="btn btn-primary">
          Crear
        </button>
      </form>
      <div>
        <h2>Lista de Productos</h2>
        <ul>
          {list.map((product, index) => (
            <li key={index}>
              {product.name} - {product.details} - {product.amount}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
