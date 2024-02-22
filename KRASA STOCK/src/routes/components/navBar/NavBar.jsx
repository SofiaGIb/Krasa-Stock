import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./navBar.css";

function NavBar() {
  return (
    <nav className="contenedor">
      <ul className="ul">
        <li className="li">
          <a href="/">LOGUEO</a>
        </li>
        <li className="li">
          <a href="/addProducto">AGREGAR PRODUCTO</a>
        </li>
        <li className="li">
          <a href="/ventas">VENTAS</a>
        </li>
        <li className="li">
          <a href="/productos">PRODUCTOS</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
