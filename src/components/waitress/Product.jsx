


import "./Listproduct.css"
import styled from "styled-components";
import { useState, useContext } from "react";
import { MenuContext } from "./Order";




export const Product = ({data}) => {

  const context = useContext(MenuContext);
  const totalCartCount = context.state.cart.reduce(
    (total, product) => (total = total + product.count),
    0
  );


  const View = data.filter((elem) => elem.type === "Dulces");
  const [product, cambiarProductos] = useState(View);

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

          {product.map((product, index) => (
            <main key={index}>
              <Imagen>
                <img className="img" src={product.img} />
              </Imagen>
              <div>
                <p>{product.id}</p>
                <p>{product.name}</p>
                <p>${product.price}</p>

                <button
                  onClick={() => context.addProduct(product)}
                >
                  Agregar a mi Menu
                </button>
              </div>

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