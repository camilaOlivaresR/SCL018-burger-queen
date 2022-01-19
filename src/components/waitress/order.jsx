
import { Link } from "react-router-dom";
import { Out } from "../commons/NavCom";
import { InputClient } from "./InputData";
import { ListProduct } from "./ListProduct";
import styled from "styled-components";
import dataJson from "./data.json";
import { useState } from "react";


export const Order = () => {
  const data = dataJson.productos;
  const [pedido, cambiarPedido] = useState([]);

  const agregarProductoAlPedido = (ProductoAgregar, precio, identificador) => {
    console.log(identificador);
    //Si el carrito no tiene elementos entonces agregamos 1
    if (pedido.length === 0) {
      cambiarPedido([{ name: ProductoAgregar, price: precio, id: identificador }]);

    } else {
      //para editar el arreglo hay que clonarlo
      const nuevoPedido = [...pedido];
      //comprobar si el carrito ya tiene el id del platillo
      const yaEstaEnPedido = nuevoPedido.filter((productoDePedido) => {
        return productoDePedido.id === identificador
      }).length > 0;

      if (yaEstaEnPedido) {
        nuevoPedido.forEach((productoDePedido, index) => {
          if (productoDePedido.id === identificador) {
            const cantidad = nuevoPedido[index].cantidad;
            nuevoPedido[index] = { id: identificador, name: ProductoAgregar, price: precio ,cantidad: cantidad + 1 }
          }

        });
      } else {
        nuevoPedido.push({
          id : identificador,
          name : ProductoAgregar,
          price: precio,
          cantidad : 1

        }
        
        );
      }
      cambiarPedido(nuevoPedido);
    }

  }


  return (
    <Contenedor>
      <Link to="/"><button>Salir</button></Link>
      <Menu>

        <ListProduct
          data={data}
          agregarProductoAlPedido={agregarProductoAlPedido}
        />


      </Menu>
      <Carrito>
        <InputClient
          data={data}
          pedido={pedido}
          agregarProductoAlPedido={agregarProductoAlPedido}
        />
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