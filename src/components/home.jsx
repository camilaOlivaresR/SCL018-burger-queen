import { Link } from "react-router-dom";
//import imagen
import styled from "styled-components";
import { InputClient } from "./waitress/InputData";
import "../App.css"
import logo from "../img/logo3.png";


export const Home = () => {
    return (
   <Container>
       {/* */}
        <Main>
            <DivBotones>
           
            <Img src={logo} alt="" />
         
          <Boton><Link to="/kitchen">cocina</Link></Boton>
          <Boton><Link to="/waitress">mesera</Link></Boton>
          </DivBotones>
        
        </Main>
        </Container>
    )
}
 const Container =styled.section`

 background:  #589d62;
 hight: 100vh;


 `;

 const  Main = styled.main`
 display: flex;
 flex-direction: column;
 justify-content: center;
 text-align: center;
 background:  #589d62;
 hight: 100%

 
     
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
const DivBotones = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
margin-top: 10vh;
margin-bottom: 18vh;
`;
const Img = styled.img`

width: 70vh;
height: 60vh;
text-align: center;
`;