import { Link } from "react-router-dom";
//import imagen
import styled from "styled-components";
import { InputClient } from "./waitress/InputData";
import "../App.css"

export const Home = () => {
    return (
        <Main>
            <Container>
            <H1>Bienvenides al sistema de Pedidos</H1>
            <H1>Vegan Queen</H1>
            
          <Boton><Link to="/kitchen">cocina</Link></Boton>
          <Boton><Link to="/waitress">mesera</Link></Boton>
           
            </Container>
        </Main>
    )
}
 const Main =styled.div`
 text-align: center;
 background:  #589d62;
 height: auto;
 width: auto;
 `;

 const Container = styled.main`
 display: flex;
 flex-direction: column;
 justify-content: center;
 padding: 30vh;
 text-align: center;
     
 `;
 const H1 = styled.h1`
margin-left: 5vw;
color: #cfcdcb;
font-family: Lobster Two,cursive;
text-align: center;


`;
const Boton = styled.button`
display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #fd7c84;
    border-radius: 10px;
    box-shadow: 0px 4px 4px 0px #00000040;
    color: #F0EEEE;
    font-family: arial;
    font-size: 25px;
    font-style: bold;
    height: 50px;
    margin-top: 20px;
    margin: center;
    padding: 10px;
    text-align: center;
    text-decoration: none;
    width: 250px;
    

`;