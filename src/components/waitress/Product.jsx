


import "./Listproduct.css"
import styled from "styled-components";
import { useState, useContext } from "react";
import { MenuContext } from "./Order";
import { Header } from "../commons/Header";




export const Product = ({ data }) => {

  const context = useContext(MenuContext);
  const [sesion , cambiarEstadoSesion] = useState(true);



  const View = data.filter((elem) => elem.type === "Dulces");
  const [product, cambiarProductos] = useState(View);

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
    {sesion === true ?
    <div>
      <button onClick={() => cambiarEstadoSesion(false)}>MENU</button>
    
   
      <section >
         
        <ul>
          <button onClick={() => productsType("Dulces")}>Dulces</button>
          <button onClick={() => productsType("Platos de fondo")}>Plato de Fondo</button>
          <button onClick={() => productsType("Para tomar")}>Para Tomar </button>
        </ul>
      </section>
      
     

     
        {product.map((product, index) => (
          <Articulo key={index}>
            <Imagen src={product.img} />
            <p>{product.id}</p>
            <p>{product.name}</p>
            <p>${product.price}</p>
            <button onClick={() => context.addProduct(product)}>Agregar a mi Carro</button>
          </Articulo>
        ))}
        </div>  
        :
        <div>
        <p>No has agregado Comidita</p>
        <button onClick={()=>cambiarEstadoSesion(true) }>MENU </button>
      </div>
      }
    </>
  )
}






const Articulo = styled.section`

background-color: #006400;
text-align: center;
color: cornsilk;
font-family: Verdana, Geneva, Tahoma, sans-serif;
border-radius: 3% 3% 3% 3%;
font-size: 12px;
width: 20%;
height: auto;
margin: 1em;
width: 30%;
display: inherit;
align-items: inherit;
justify-content: inherit;


`;
const Imagen = styled.img`

width: 25vh;
height: 25vh;
width: 100%;
display: inherit;
align-items: inherit;
justify-content: inherit;

`;
const Section = styled.section`
margin-left: -15px;
margin-right: -15px;
display: flex;
flex-wrap: wrap;
flex-grow: 0;
flex-shrink: 0;
align-items: normal;
justify-content: flex-start;
`;