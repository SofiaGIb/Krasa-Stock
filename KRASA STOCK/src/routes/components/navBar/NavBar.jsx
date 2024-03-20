
import React from "react";
import { NavLink } from "react-router-dom";
import "./navBar.css";

function NavBar() {
  return (
    <nav className="contenedor">
      <ul className="ul">
        <li className="li">
          <NavLink exact to="/" activeClassName="active">LOGUEO</NavLink>
        </li>
        <li className="li">
          <NavLink to="/addProducto" activeClassName="active">AGREGAR PRODUCTO</NavLink>
        </li>
        <li className="li">
          <NavLink to="/productos" activeClassName="active">PRODUCTOS</NavLink>
        </li>
        <li className="li">
          <NavLink exact to="/stock" activeClassName="active">agregar    Stock</NavLink>
        </li>
        <li className="li"> <NavLink to="/addVentas" activeClassName="active">AGREGAR VENTAS</NavLink> </li>
        <li className="li">
          <NavLink to="/ventas" activeClassName="active">VENTAS</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
