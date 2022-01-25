import { Link } from "react-router-dom";
//import imagen
import styled from "styled-components";



export const Home = () => {
    return (
        <Main>
            <Container>
            <h1>Bienvenides al sistema de Pedidos</h1>
            <h2>CoffeeQuens</h2>
            <div>
            <button><Link to="/kitchen">cocina</Link></button>
            <button><Link to="/waitress">mesera</Link></button>
            </div>
            </Container>
        </Main>
    )
}
 const Main =styled.div`
 text-align: center;
 background: green;
 height: 100vh;
 width: auto;
 `;

 const Container = styled.main`
 display: flex;
 flex-direction: column;
 justify-content: center;
 padding: 30vh;
     
 `;