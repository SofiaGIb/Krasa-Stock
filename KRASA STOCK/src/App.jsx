import { useState } from "react";
import NavBar from "./routes/components/NavBar";
import Logueo from "./routes/components/Logueo";
import Categoria2 from "./routes/components/Categoria2";
import Probando from "./probando";
import { Routes, Route, Navigate } from "react-router-dom";
import { AddProduct } from "./routes/components/AgregarProductos";
import Product from "./routes/components/Productos";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <NavBar></NavBar>
        <Routes>
          <Route path="/" element={<Logueo></Logueo>}></Route>
          <Route path="addProducto" element={<AddProduct></AddProduct>}></Route>
          <Route path="Categoria2" element={<Categoria2></Categoria2>}></Route>
          <Route path="*" element={<Navigate to="/" />}></Route>
          <Route path="/" element={<Probando></Probando>}></Route>
          <Route path="/Productos" element={<Product></Product>}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
