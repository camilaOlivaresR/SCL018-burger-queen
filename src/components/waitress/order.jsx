
import { Link } from "react-router-dom";
import { InputClient } from "./InputData";
import { Product } from "./Product";
import Cart from "./Cart";
import styled from "styled-components";
import dataJson from "../../data.json"
import { useState, createContext } from "react";

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
  const deger = { state: state, addProduct, removeFromCart, increase, decrease, data };
  return (
    <MenuContext.Provider value={deger}>
      <Contenedor>
        <Link to="/"><button>Salir</button></Link>
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


const Contenedor = styled.div`
     
display: flex; 
background: green;
      `;

const Menu = styled.main`
      width: 50%;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;

      `;

const Carrito = styled.aside`
width: 40%;
height: 50%;
padding-left: 20px;
margin-left: 15px;
padding-bottom: 15px;
float: right;
font-style: italic;
background-color: lightgray;
      `;