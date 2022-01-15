import { Link } from "react-router-dom";
import { InputClient } from "./Input";
import { Product } from "./Product";


export const Order = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <Link to="/waitress">CREA UNA ORDEN</Link>
      <button><Link to="/">Salir</Link></button>
      <main>
       <Product />
      </main>
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


