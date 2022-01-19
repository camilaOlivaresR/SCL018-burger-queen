
import { Link } from "react-router-dom";
import { Out } from "../commons/NavCom";
import { InputClient } from "./InputData";
import { ListProduct } from "./ListProduct";
import styled from "styled-components";


export const Order = () => {
  return (
    <Contenedor>
      <Link to="/"><button>Salir</button></Link>
      <Menu>

        <ListProduct />
        

      </Menu>
      <Carrito>
        <InputClient />
      </Carrito>
    </Contenedor>


    /* 
   <div style={{ textAlign: "center" }}>
     <header>
     <nav>
       <a href=""> Crear Orden</a>
       <Link to="/"><button>Salir</button></Link>
       
     </nav>
  
     <Link to="/waitress">CREA UNA ORDEN</Link>
 
     <ListProduct/>
  <aside>
   <InputClient />
   </aside>
   
   </header>
   <main>
   <ListProduct/>
   </main>
   <aside>
   <InputClient />
   </aside>
   
   </div>
    */
  )
}


/*
   <section>
       
      </section>
 */


const Contenedor = styled.div`
     
      padding: 40px;
      width: 90%;
      display: grid;
      gap: 20px;
      grid-template-columns: 2fr 1fr;
     
     
      border-radius: 10px;
  
      
      `;

const Menu = styled.nav`
      width: 100%;
     
      grid-column: span 2;
      border-radius: 3px;
      `;

      const Carrito = styled.aside`
      display: flex;
      justify-content: flex-end;
      align-items: flex-start;
      `;