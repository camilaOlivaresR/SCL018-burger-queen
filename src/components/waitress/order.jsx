
import { Link } from "react-router-dom";
import { Out } from "../commons/NavCom";
import { InputClient } from "./InputData";
import { ListProduct } from "./ListProduct";



export const Order = () => {

 
  
  return (
    <div style={{ textAlign: "center" }}>
      <Link to="/waitress">CREA UNA ORDEN</Link>
 
      <ListProduct/>
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


