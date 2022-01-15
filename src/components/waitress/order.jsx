
import { Link } from "react-router-dom";
import { Out } from "../commons/NavCom";
import { InputClient } from "./InputData";




export const Order = () => {

 
  
  return (
    <div style={{ textAlign: "center" }}>
      <Link to="/waitress">CREA UNA ORDEN</Link>
      <Out/>
   <aside>
    <InputClient />
    </aside>
    </div>
     
  )
}


/*
   <section>
       <Product />
      </section>
 */


