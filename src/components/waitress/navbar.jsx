import React from "react";
import { Link, NavLink ,Route,Routes, Router} from "react-router-dom";
//import imagen
import styled from "styled-components";
import { DeliveryKitchen } from "../kitchen/DeliveryKitchen";
import { InputClient } from "./InputData";
import { ListProduct } from "./ListProduct";

export const NavBar = () => {
    return (
        <Contenedor>
            <Menu>
                <NavLink to="/waitress/">Crear Pedido</NavLink>
                <NavLink to="/waitress/Delivery">Preparacion Cocina</NavLink>
                <Link to="/"><button>Salir</button></Link>
            </Menu>
            <main>
                <Router>
                    <Routes>
                        <Route path="/waitress/Order" element={<ListProduct />} />
                        <Route path="/waitress/Delivery" element={<DeliveryKitchen />} />
                    </Routes>
                </Router>
            </main>
            <aside>
                <InputClient/>
            </aside>
        </Contenedor>

    )
}

const Contenedor = styled.div`
max-width: 800px;
padding: 40px;
width: 90%;
display: grid;
gap: 20px;
grid-template-columns: 2fr 1fr;
background: cornsilk;
margin: 40px 0;
border-radius: 10px;
box-shadow: 0px 0px 5px rgba(129, 129 ,129 , 0.1);

`;

const Menu = styled.nav`
width: 100%;
text-align: center;
background: chartreuse;
grid-column: span 2;
border-radius: 3px;
`;