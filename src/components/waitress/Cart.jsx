import { useContext, useEffect } from "react";
import { MenuContext } from "./Order";
import { db } from "../../firebase";
import { collection, addDoc, Timestamp, doc } from "firebase/firestore";
import { useState } from "react/cjs/react.development";
import styled from "styled-components";

//carrito de compas es un estado que va cambiando
const Cart = () => {
  const context = useContext(MenuContext);
  const cartItems = context.state.cart;


  const totalCartAmount = context.state.cart
    .reduce((total, product) => (total = total + product.price * product.count), 0);

  const totalCartCount = context.state.cart.reduce(
    (total, product) => (total = total + product.count), 0);

  const getDate = () => {
    const hoy = new Date();
    const fecha = `${hoy.getDate()} - ${(hoy.getMonth() + 1)} - ${hoy.getFullYear()}`;
    const hora = `${hoy.getHours()}:${hoy.getMinutes()}:${hoy.getSeconds()}`;
    const fechaYHora = `Fecha: ${fecha} - Hora: ${hora}`;
    return fechaYHora;

  };
  const [client, cambiarClient] = useState('');
  const [table, cambiarMesa] = useState('');


  const addData = async (e) => {
    e.preventDefault();
    console.log("funcionando addData");
    try {
      const docRef = await addDoc(collection(db, 'order'), {
        nombre: client,
        mesa: table,
        total: totalCartAmount,
        time:  getDate(),
        order: cartItems,
        estado: {estado: 'Cocinando'},
      
      });
      console.log('Document written with ID: ', docRef.id);
    } catch (e) {
      console.error('Error adding document: ', e);
    }
     cambiarClient('');
     cambiarMesa('');
    context.removeAll();
  };

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);




  return (
    <>
      <form onSubmit={(e) => addData(e)}>
        <span>Cliente:</span>
        <input
          type="text"
          name="client"
          value={client}
          onChange={(e) => cambiarClient(e.target.value)}
        />

        <span>#Mesa:</span>
        <input
          type="number"
          name="table"
          value={table}
          onChange={(e) => cambiarMesa(e.target.value)}
          min="1" max="6"
          placeholder="1-6"
        />

        <h4>Comanda</h4>
        {cartItems.map((product , index) => (
          <div key={index} >
            
            <span>{product.name}</span>
            <p>Cantidad{product.count}</p>
            <p>total:{(product.price * product.count)}</p>
           
         
            <a onClick={() => context.decrease(product.id)}>-</a>
            <a onClick={() => context.removeFromCart(product.id)}>eliminar</a>
            <a onClick={() => context.increase(product.id)}>+</a>
            
          </div>
        ))}

        <section>
          <span>Suma:{totalCartCount}</span>
          <h1>Valor Total:{totalCartAmount}</h1>

          <button type="submit" >
            Enviar a cocina
          </button>
        </section>
      </form>
    
    </>
  );
};


export default Cart
 const Card = styled.div`
 margin-left: -15px;
 margin-right: -15px;
 display: flex;
 flex-wrap: wrap;
 flex-grow: 0;
 flex-shrink: 0;
 align-items: normal;
 justify-content: flex-start;
 `;

 const Component= styled.form`
 box-sizing: border-box;

 position: relative;
 padding-left: 15px;
 padding-right: 15px;
 flex: 0 0 33.3333%;
 
 width: auto;
 height: auto;
 background-color: #e0e0e0;
 box-shadow: 0 1px 5px 0 rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.12);
 border-radius: 4px;
 height: 50%;

 `;
  const Total = styled.div`
  top: 50%;
  right: 4px;
  position: absolute;
  transform: translateY(-50%);
  margin-top: 20px;
  margin: center;
  height: 4vh;
  display: flex;
  flex-flow: column;
  `;
const Boton = styled.button`

text-transform: uppercase;
background-color:  #589d62;
    border-radius: 10px;
    box-shadow: 0px 4px 4px 0px #00000040;
    color: #F0EEEE;
    font-family: arial;
    font-size: 15px;
    height: 4vh;
    margin-top: 20px;
    margin: center;
    width: 20vh;
    

`;