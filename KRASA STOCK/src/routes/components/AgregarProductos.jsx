import { useState } from "react";

export const AddProduct = () => {
    <h1>como agregar productos</h1>;
  
    const [name, setName] = useState("");
    const [details, setDetails] = useState("");
    const [amount, setAmount] = useState(0);
    const [list, setList] = useState([]);
  
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
      // Limpia los campos después de agregar el producto
      setName("");
      setDetails("");
      setAmount(0);
    };
  
    return (
      <div>
        <h1>Como agregar productos</h1>
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
  