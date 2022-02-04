
import { Product } from "./Product";
import Cart from "./Cart";
import styled from "styled-components";
import dataJson from "../../data.json"
import { useState, createContext } from "react";
import { Header } from "../commons/Header";

export const MenuContext = createContext();

export const Order = () => {
  const data = dataJson.productos;
  const [state, setState] = useState({
    menuList: data,
    cart: []
  });

  function addProduct(product) {
    return setState({
      ...state,
      cart: state.cart.find((cartItem) => cartItem.id === product.id)
        ? state.cart.map((cartItem) =>
          cartItem.id === product.id
            ? { ...cartItem, count: cartItem.count + 1 }
            : cartItem
        )
        : [...state.cart, { ...product, count: 1 }]
    });
  }

  const removeFromCart = (id) => {
    setState({
      ...state,
      cart: state.cart.filter((cartItem) => cartItem.id !== id)
    });
  };

  const increase = (id) => {
    setState({
      ...state,
      cart: state.cart.map((cartItem) =>
        cartItem.id === id
          ? { ...cartItem, count: cartItem.count + 1 }
          : cartItem
      )
    });
  };

  const decrease = (id) => {
    setState({
      ...state,
      cart: state.cart.map((cartItem) =>
        cartItem.id === id
          ? { ...cartItem, count: cartItem.count > 1 ? cartItem.count - 1 : 1 }
          : cartItem
      )
    });
  };

  const removeAll = () => {
    setState({
      ...state,
      cart: []
    })
  }
  const sum = { state: state, addProduct, removeFromCart, increase, decrease, removeAll };
  return (
    <MenuContext.Provider value={sum}>
      <Header />
      <Contenedor>
        <Menu>
          <Product data={data} />
        </Menu>
        <Carrito>
          <Cart />
        </Carrito>
      </Contenedor>
    </MenuContext.Provider>
  )
}


const Contenedor = styled.div`
    
display: flex;
flex-flow:  wrap;
justify-content: flex-start;
margin: auto;
padding-top: 20px;
background:  #cfcdcb;
height: 92vh;


      `;

const Menu = styled.main`
box-sizing: border-box;
min-height: 1px;
position: relative;
padding-left: 15px;
padding-right: 15px;
flex: 0 0 62.5%;
max-width: 62.5%;
margin-left: 0%;
right: auto;
left: auto;





      `;

const Carrito = styled.aside`
box-sizing: border-box;
padding-left: 15px;
background-color: #e0e0e0;
width: 30vw;
height: auto;

      `;

const Head = styled.header`
background:  #cfcdcb;
height: 15vh;
display: flex;
align-items: center;
font-family: Lobster Two,cursive;
`;