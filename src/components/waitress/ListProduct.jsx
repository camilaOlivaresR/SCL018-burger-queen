import { useState } from "react";
import dataJson from "./data.json";
import { Product } from "./Product";


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
    {productos.map(() => (
      <Product />
        // Hemos pasado cada card como 1 componente aislado para que cda 1 tenga su propio evento(ejem: choosen)
        ))}
    </ul>
  </article>
</article>
)
}