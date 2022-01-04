
import { Link } from "react-router-dom";
//import imagen

export const NavBar = () => {
    return (
        <nav className="navegation">
            <button><Link to="/Kitchen/DeliveryKitchen">Pedidos en Curso</Link></button>
            <button>Salir</button>
        </nav>
    )
}