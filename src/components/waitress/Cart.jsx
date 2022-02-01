import { useContext, useEffect } from "react";
import { InputClient } from "./InputData";
import { MenuContext } from "./Order";
import { db } from "../../firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { useState } from "react/cjs/react.development";

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
        estado: 'Pedido en Preparacion',
      
      });
      console.log('Document written with ID: ', docRef.id);
    } catch (e) {
      console.error('Error adding document: ', e);
    }
     cambiarClient('');
     cambiarMesa('');
    
  };

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);




  return (
    <div>
      <form onSubmit={(e) => addData(e)}>
        <p>Cliente : </p>
        <input
          type="text"
          name="client"
          value={client}
          onChange={(e) => cambiarClient(e.target.value)}
        />

        <p># Mesa : </p>
        <input
          type="number"
          name="table"
          value={table}
          onChange={(e) => cambiarMesa(e.target.value)}
          min="1" max="6"
          placeholder="1-6"
        />

        <h4>Productos-Precio</h4>
        {cartItems.map((product , index) => (
          <div key={index} >
            <p>{product.name}</p>
            <p>{product.price}</p>
            <p>total:{(product.price * product.count)}</p>
            <p>total de {product.count}</p>

            <button onClick={() => context.decrease(product.id)}>-</button>
            <button onClick={() => context.removeFromCart(product.id)}>eliminar</button>
            <button onClick={() => context.increase(product.id)}>+</button>
          </div>
        ))}

        <div>
          <span> cantidad de productos: {totalCartCount}</span>
          <h2> total carrito:{totalCartAmount}</h2>
        </div>
        <div>
          <button type="submit" >
            Enviar a cocina
          </button>
        </div>
      </form>
    
    </div>
  );
};


export default Cart
