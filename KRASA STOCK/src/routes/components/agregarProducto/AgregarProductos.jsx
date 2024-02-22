
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { postProduct } from "../../../Redux/actions/actionsFunction/actions";

export const AddProduct = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(0);
  const [isProductCreated, setIsProductCreated] = useState(false);
  const [createdProduct, setCreatedProduct] = useState(null);

  const dispatch = useDispatch();
  const product = useSelector((state) => state.products);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newProduct = { name, description, amount };
    await dispatch(postProduct(newProduct));
    setIsProductCreated(true);
    setCreatedProduct(newProduct);
    // Limpia los campos después de enviarlos
    setName("");
    setDescription("");
    setAmount(0);
  };

  return (
    <div>
      <h3>CREAR NUEVO PRODUCTO</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="name" value={name.includes(' ') ? name : name.trim()} onChange={(event) => setName(event.target.value)} />
        <input type="text" placeholder="description" value={description} onChange={(event) => setDescription(event.target.value)} />
        <input type="number" placeholder="amount" value={amount} onChange={(event) => setAmount(event.target.value)} />
        <button type="submit" className="btn btn-primary">CREAR</button>
      </form>

      {isProductCreated && (
        <div>
          <h1>PRODUCTO CREADO</h1>
          <ul>
            <li>
              <h3>{createdProduct.name}
              ,{createdProduct.description}</h3>
          
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};
