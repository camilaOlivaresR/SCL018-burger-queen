import styled from "styled-components";
import { Link } from "react-router-dom";

export const Header = ({ productsType }) => {
    return (
        <Headers>
            <Title>
                <a href="/">
                    Vegan Queen
                </a>
            </Title>
            <nav>
                <ul>
                    <li onClick={() => productsType("Dulces")}>Dulces</li>
                    <li onClick={() => productsType("Platos de fondo")}>Plato de Fondo</li>
                    <li onClick={() => productsType("Para tomar")}>Para Tomar </li>
                </ul>
                
                <Link to="/"><button>Salir</button></Link>
                <button><Link to="/kitchen">cocina</Link></button>
            </nav>
        </Headers>
    )
};



const Headers = styled.header`
background: #fff;
display: flex;
align-items: center;
height: 30vh;
width: 1000px;


`;
const Title = styled.span`
display: flex;
font-size: 1.5rem;
text-align: center;
height:90vh;
line-height: 90vh;
color: #fcedd8;

   font-family: 'Niconne', cursive;
font-weight: 700;

        
`;