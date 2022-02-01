import styled from "styled-components";
import { Link } from "react-router-dom";

export const Header = ({ productsType }) => {
    return (
        <Headers>

            <H1>Vegean Queen</H1>
            <Span><Link to="/waitress" class="active">Mesera</Link></Span>
            <Span> <Link to="/kitchen">Cocina</Link></Span>
            <Span> <Link to="/">Salir</Link></Span>


        </Headers>
    )
};



const Headers = styled.header`
background-color:  #ffffff;
color: #f6f3f3;
height: 15vh;
display: flex;
align-items: center;
font-family: Lobster Two,cursive;
color: #f6f3f3;
font-family: Lobster Two,cursive;


`;
const Span = styled.span`
width: 100%;
display: flex;
align-items: inherit;
justify-content: inherit;
margin-left: 10vw;

;

        
`;

const Nav = styled.nav`
display: none;
position: absolute;
background-color: #f9f9f9;
min-width: 160px;
box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
z-index: 1;
`;
const H1 = styled.h1`
margin-left: 5vw;
color: #006400;

`;