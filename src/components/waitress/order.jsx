
import { Link } from "react-router-dom";
import { InputClient } from "./InputData";
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
      cart: state.cart.filter((cartItem) => cartItem.id !== id )
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
  const deger = { state: state, addProduct, removeFromCart, increase, decrease, data };
  return (
    <MenuContext.Provider value={deger}>

      <Header/>
      <Contenedor>
      
        <Menu>
        <Product data= {data} />
    
          
        </Menu>

     
        <Carrito>
          <Cart />
        </Carrito>

      </Contenedor>

    </MenuContext.Provider>


  )
}


const Contenedor = styled.main`
     
display: flex;
flex-flow: row wrap;
justify-content: flex-start;
align-content: space-around;
margin: auto;
padding-top: 20px;
background:  #9ACD32;

      `;

const Menu = styled.div`
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
min-height: 1px;
position: relative;
padding-left: 15px;
padding-right: 15px;
flex: 0 0 33.3333%;
max-width: 33.3333%;
margin-left: 0%;
right: auto;
left: auto;
background-color: #e0e0e0;
box-shadow: 0 1px 5px 0 rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.12);
border-radius: 4px;
height: 80vh;

      `;