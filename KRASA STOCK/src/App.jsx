import { useState } from "react";
import NavBar from "./routes/components/navBar/NavBar";
import Logueo from "./routes/components/Logueo";
import Ventas from "./routes/components/ventas/Ventas";
import { Routes, Route, Navigate } from "react-router-dom";
import { AddProduct } from "./routes/components/agregarProducto/AgregarProductos";
import Product from "./routes/components/productos/Productos";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <NavBar></NavBar>
        <Routes>
          <Route path="/"  element={<Logueo></Logueo>}></Route>
          <Route path="addProducto" element={<AddProduct></AddProduct>}></Route>
          <Route path="Ventas" element={<Ventas></Ventas>}></Route>
          <Route path="*" element={<Navigate to="/" />}></Route>
          <Route path="/Productos" element={<Product></Product>}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
