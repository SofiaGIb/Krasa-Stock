import React, { useState } from "react";

function Product() {
  <h1>lista de productos</h1>;
  let productList = [{ name: name, details: details, amount: amount }];
  const [list, setList] = useState(productList);
  return (
    <div>
      <h2>LISTADO DE PRODUCTOS</h2>

      <ol>
        {list.map((item) => (
          <item key={item.name} name={item.name} details={item.details} amount={item.amount}></item>
        ))}
      </ol>
    </div>
  );
}

export default Product;
