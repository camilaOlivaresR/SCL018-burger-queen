import { Link } from "react-router-dom";
import { useState } from "react";
import { Product } from "../waitress/Product";



//ejemplo cambio de estado
export const Out = ()=>{
  const [sesion , cambiarEstadoSesion] = useState(true);
    return (
      <>
      {sesion === true ?
    <div>
     
      <button onClick={() => cambiarEstadoSesion(false)}>Desayuno</button>
      <Product/>
    </div>  
    :
    <div>
      <p>No has agregado Comidita</p>
      <button onClick={()=>cambiarEstadoSesion(true) }> Iniciar sesion</button>
    </div>
    }
    
        <nav className="navServer">
          <ul>
            <li><Link to="/waitress/hacer-pedidos">Realizar pedidos</Link></li>
            <li><Link to="/waitress/estado-pedidos">Estado de los pedidos</Link></li>
            <Link to="/"><button>Salir</button></Link>
          </ul>
        </nav>
        </>
      )
    }
   
   
   
   
   
   
   
   
  