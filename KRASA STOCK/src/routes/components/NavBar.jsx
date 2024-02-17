import React from "react";
import { Link, NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand">STOCK</Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link active" to="/">
                  LOGUEO
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="addProducto">
                  AGREGAR PRODUCTO
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="Ventas">
                  VENTAS
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="Productos">
                  PRODUCTOS
                </NavLink>
              </li>

              <li className="nav-item dropdown"></li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
