import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "../../img/logo.png"

export const Header = () => {
    return (
        <Headers>
            <Img src={logo} alt="" />
            <Span><Link to="/waitress">Mesera</Link></Span>
            <Span><Link to="/tiket">Boletas</Link></Span>
            <Span><Link to="/kitchen">Cocina</Link></Span>
            <Span><Link to="/">Salir</Link></Span>
        </Headers>
    )
};



const Headers = styled.header`
background-color:  #589d62;
height: 15vh;
display: flex;
align-items: center;
font-family: Lobster Two,cursive;


`;
const Span = styled.span`
margin-left: 5vw;        
`;

const Nav = styled.nav`
display: none;
position: absolute;
background-color: #f9f9f9;
min-width: 160px;
box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
z-index: 1;
`;
const Img = styled.img`
margin-top: 8vh;
height: 30vh;
width: 35vh;

`;