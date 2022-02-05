
import styled from "styled-components";
import { useState, useContext } from "react";
import { MenuContext } from "./Order";

export const Product = ({ data }) => {
  const context = useContext(MenuContext);

  const [product, cambiarProductos] = useState([]);

  const productsType = (option) => {
    // eslint-disable-next-line default-case
    switch (option) {
      case "Dulces":
        const sweets = data.filter((elem) => elem.type === option);
        cambiarProductos(sweets);
        console.log(sweets);
        break;
      case "Platos de fondo":
        const main = data.filter((elem) => elem.type === option);
        cambiarProductos(main);
        break;
      case "Para tomar":
        const drinks = data.filter((elem) => elem.type === option);
        cambiarProductos(drinks);
        break;
      default:
    }
  };


  return (
    <>
      <section >
        <ul>
          <button onClick={() => productsType("Dulces")}>Dulces</button>
          <button onClick={() => productsType("Platos de fondo")}>Plato de Fondo</button>
          <button onClick={() => productsType("Para tomar")}>Para Tomar </button>
        </ul>
      </section>
      < Section>
      {product.map((product, index) => (
        <Articulo key={index}>
          <Imagen src={product.img} />
          <span>{product.name}</span>
          <h1>${product.price}</h1>
          <button onClick={() => context.addProduct(product)}>Agregar a mi Carro</button>
        </Articulo>
      ))}
      </ Section>
    </>
  )
}






const Articulo = styled.section`

background-color: #fd7c84;
text-align: center;
color: cornsilk;
border-radius: 3% 3% 3% 3%;
height: auto;
margin: 1em;
width: 20vh;
font-size: 13px;



`;
const Imagen = styled.img`

height: 13vh;
width: 18vh;
margin-top: 1vh;



`;
const Section = styled.section`
display: flex;

flex-wrap: wrap;
`;