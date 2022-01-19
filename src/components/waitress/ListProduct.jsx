import { useState } from "react";

import dataJson from "./data.json";
import "./Listproduct.css"
import styled from "styled-components";




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
      {/* el metodo map nos permitira recorrer todos los productos y 
      nos retorna un arreglo final mostrar en pantalla, por cada elemento obtenemos img-name-price*/}
    {productos.map((producto, index) => (
    <main key={index}>
    <Imagen>
        <img className="img" src={producto.img}  />
        </Imagen>
        <div>
            <p>{ producto.name }</p>
            <p>${ producto.price}</p>
        </div>
        <button>
            Agregar a mi Menu
        </button>
    
</main>
        ))}
    </ul>
  </article>
</article>
)
} 

const Imagen = styled.div`
height: 25vh;
width: 25vh;
align-content: center;
`;