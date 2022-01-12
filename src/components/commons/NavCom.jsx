import { Link } from "react-router-dom";

export const Out = ()=>{
    return (
        <nav className="navServer">
          <ul>
            <li><Link to="/waitress/hacer-pedidos">Realizar pedidos</Link></li>
            <li><Link to="/waitress/estado-pedidos">Estado de los pedidos</Link></li>
            <li><Link to="/">Salir</Link></li>
          </ul>
        </nav>
      )
    }
   
   
   
   
   
   
   
   
  