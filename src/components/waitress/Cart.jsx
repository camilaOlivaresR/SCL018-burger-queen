import { useContext, useEffect, useState } from "react";
import { MenuContext } from "./Order";
import { db } from "../../firebase";
import { collection, addDoc } from "firebase/firestore";
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
   
      <Form onSubmit={(e) => addData(e)}>
      <Input>
        <label>Cliente:</label>
        <input
          type="text"
          name="client"
          value={client}
          onChange={(e) => cambiarClient(e.target.value)}
        />

        <label>#Mesa:</label>
         <input
          type="number"
          name="table"
          value={table}
          onChange={(e) => cambiarMesa(e.target.value)}
          min="1" max="6"
          placeholder="1-6"
        />
 </Input>

        <h4>Comanda</h4>
        
        <Card >
        {cartItems.map((product , index) => (
          <div key={index} >
<Total>
            <span> {product.count} {product.name}</span>
            <p>${(product.price * product.count)}</p>
            </Total>
         
            <A onClick={() => context.increase(product.id)}>+</A>
            <A onClick={() => context.removeFromCart(product.id)}>eliminar</A>
            <A onClick={() => context.decrease(product.id)}>-</A>
           
            </div>
     
     
        ))}
      </Card>

        <Component>
          <h1>Total:${totalCartAmount}</h1>
          <button type="submit" >
            Enviar a cocina
          </button>
        
          </Component>
      </Form>

    
    </>
  );
};


export default Cart
 const Card = styled.div`
 max-height: 50vh;
 overflow-y: scroll;
 width: 30vw;
 height: 40vh;


 `;

 const Component= styled.section`
 box-sizing: border-box;






 flex: 0 0 33.3333%;
 

 background-color: #e0e0e0;
 
 border-radius: 4px;


 `;
  const Total = styled.div`
display: flex;
flex-direction: column;
 
  `;

const A =styled.a`

background-color:  #589d62;
padding-left: 20px;
padding-right: 20px;
border-radius: 10px;
margin-left: 5px;
margin-right: 5px;
margin-top: 1vh;

`;
const Input= styled.div`
display: flex;
flex-direction: column;
width: 20vw;


`;

const Form= styled.form`

height: 75vh;


`;