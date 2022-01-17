import { useState } from "react";
import dataJson from "./data.json";

const Pedido = () => {
    const data = dataJson.productos;
    
    const [pedido , sumarPedido] = useState(data);
    const agregarProductoAlPedido = ( ) => {

    }
   
    return (
        <div>
     <p>pedido aqui cargara</p>
     {pedido.length > 0 ?
    pedido.map((producto, index ) => {
        return(
            <div key={index}>
             <h1>{producto.name}</h1>
             <p>Cantidad: {producto.price}</p>
             </div>
             );
       
     })

    : 
    <p>Aun no has agregado nada</p>
    }

        </div>
    )
}

export default Pedido
