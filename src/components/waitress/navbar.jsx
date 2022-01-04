import React from "react";
import { Link } from "react-router-dom";
//import imagen

export const NavBar = () => {
    return (
        <nav className="navegation">
            <Link to="/waitress/Order">Crear Pedido</Link>
            <Link to="/waitress/Delivery">Entregar Pedido</Link>
            <button>Generar Boleta</button>
            <button>Salir</button>
        </nav>
    )
}