import { useState } from "react";



export const ListProduct = () => {
   const [ productos , cambiarProductos] = useState([
       {id: 1 , name : 'frutas' , price : 3900 },
       {id: 2 , name : 'jugo' , price : 2900 }
   ]);
    
    return (
        productos.length > 0 &&
        <div style={{ textAlign: "left" }}>
           {productos.map((producto) =>(
               <p key={producto.id}>{producto.name} - {producto.price}</p>
           ))}
        </div>
    )
}

