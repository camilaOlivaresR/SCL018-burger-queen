
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
console.log(state.cart);
  

const addProduct = (product) => {
    //producto a agregar
    console.log(addProduct);
    //el nuevo estado sera un carrito con productos
    return setState({
    ...state,
      //revisar que el carrito no tenga ya el producto que queremos agregar
      cart: state.cart.find((cartItem) => cartItem.id === product.id)
        ? state.cart.map((cartItem) =>
          //comprobar si el producto que tenemos en el carrito es igual 
          //a un producto nuevo que queremos agregar
          cartItem.id === product.id
         //SI ESTA CONDICION ES VERDADERA, nos devolvera este valor(cartItem) en un nuevo arreglo
         //queremos aumentar la cantidad, sobreescribir y sera un objeto con la propiedad de count
         //quiero acceder a la propiedad cantidad ,count, la cantidad que ya teniamos + 1
            ? { ...cartItem, count: cartItem.count + 1 }
          : cartItem)// de otra forma agregamos el producto al arreglo la cantidad comienza en 1
        // se ejecuta en caso de agregar un producto que no est en el carrito
        // inyectar un nuevo elemento al arreglo sera un objeto
        : [...state.cart, { ...product, count: 1 }]
    });
  }

  const removeFromCart = (id) => {
    console.log(removeFromCart);
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
  const sum = {  state, addProduct, removeFromCart, increase, decrease, removeAll };
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
height: 100vh;
 `;

const Menu = styled.main`
flex: 0 0 62.5%;
 `;

const Carrito = styled.aside`
box-sizing: border-box;
padding-left: 15px;
background-color: #e0e0e0;
width: 35vw;
height: 75vh;
min-height: 1px;
position: relative;
padding-right: 15px;
flex: 0 0 33.3333%;
max-width: 33.3333%;
margin-left: 0%;
right: auto;
left: auto;
      `;

const Head = styled.header`
background:  #cfcdcb;
height: 15vh;
display: flex;
align-items: center;
font-family: Lobster Two,cursive;
`;