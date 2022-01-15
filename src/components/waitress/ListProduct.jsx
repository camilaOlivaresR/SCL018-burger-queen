import { useState } from "react";

import dataJson from "./data.json";
import "./Listproduct.css"






export const ListProduct = () => {
    const data = dataJson.productos;
    
   const View = data.filter((elem) => elem.type === "Dulces");
   const [ productos , cambiarProductos] = useState(View);

   const productsType = (option) => {
    // eslint-disable-next-line default-case
    switch (option) {
      case "Dulces":
        const sweets = data.filter((elem) => elem.type === option);
        cambiarProductos(sweets);
        break;
      case "Platos de fondo":
        const main = data.filter((elem) => elem.type === option);
        cambiarProductos(main);
        break;
      case "Para tomar":
        const drinks = data.filter((elem) => elem.type === option);
        cambiarProductos(drinks);
        break;
    }
  };
  return (
  <article className="productsList">
  <nav>
    <ul>
      <div>
        <li onClick={() => productsType("Dulces")}>Dulces</li>
        <li onClick={() => productsType("Platos de fondo")}>Plato de Fondo</li>
        <li onClick={() => productsType("Para tomar")}>Para Tomar </li>
      </div>
    </ul>
  </nav>
  <article>
    <ul className="cards">
    {productos.map((producto) => (
    <main>
    <div className="div">
        <img className="img" src={producto.img}  />
        </div>
        <div>
            <p>{ producto.name }</p>
            <p>${ producto.price}</p>
        </div>
        <button>
            Agregar
        </button>
    
</main>
        ))}
    </ul>
  </article>
</article>
)
} 
