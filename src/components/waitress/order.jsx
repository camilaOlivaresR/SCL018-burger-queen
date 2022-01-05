import { Link } from "react-router-dom";
//import { NavBar } from './Navbar';

export const Order = ()=> {
    return (
      <div>
              <Link to="/waitress">CREA UNA ORDEN</Link>
              <div style={{textAlign:"center"}}>
             <button><Link to="/">Salir</Link></button> 
             </div>

        </div>
    )
  }
  