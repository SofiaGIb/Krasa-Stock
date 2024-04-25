
import React from "react";
import NavBar from "./routes/components/navBar/NavBar";
import Logueo from "./routes/components/logueo/Logueo";
import Stock from "./routes/components/stock/Stock";
import Ventas from "./routes/components/ventas/Ventas";
import { Routes, Route, Navigate } from "react-router-dom";
import { AddProduct } from "./routes/components/agregarProducto/AddProduct";
import Product from "./routes/components/productos/Productos"
import { AddVentas } from "./routes/components/AgregarVentas/AddVentas";


import axios from "axios";
axios.defaults.baseURL="https://test3-xi-two.vercel.app/"
function App() {
  return (
    <>
      <div>
        <NavBar></NavBar>
        <Routes>
          <Route path="/"  element={<Logueo></Logueo>}></Route>
          <Route path="/Productos" element={<Product></Product>}></Route>
          <Route path="/addProducto" element={<AddProduct></AddProduct>}></Route>
          <Route path="Ventas" element={<Ventas></Ventas>}></Route>
          <Route path="*" element={<Navigate to="/" />}></Route>
          <Route path="AddVentas" element={<AddVentas></AddVentas>}></Route>
          <Route path="/stock"  element={<Stock></Stock>}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;

;
