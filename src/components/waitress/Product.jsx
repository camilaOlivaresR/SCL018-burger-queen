


import "./Listproduct.css"
import styled from "styled-components";
import { useState, useContext } from "react";
import { MenuContext } from "./Order";
import { Header } from "../commons/Header";




export const Product = ({data}) => {

  const context = useContext(MenuContext);
 


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
      <Header productsType={productsType}/>
      <article>
        <ul className="cards">
          {product.map((product, index) => (
            <main key={index}>
              <Imagen>
                <img className="img" src={product.img} />
              </Imagen>
                <p>{product.id}</p>
                <p>{product.name}</p>
                <p>${product.price}</p>
                <button onClick={() => context.addProduct(product)}>Agregar a mi Menu</button>
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