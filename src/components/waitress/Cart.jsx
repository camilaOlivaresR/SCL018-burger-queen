import { useContext } from "react";
import { InputClient } from "./InputData";
import { MenuContext } from "./Order";

//carrito de compas es un estado que va cambiando
const Cart = () => {
    const context = useContext(MenuContext);
    
    const totalCartAmount = context.state.cart
    .reduce((total, product) => (total = total + product.price * product.count), 0);

    const totalCartCount = context.state.cart.reduce(
        (total, product) => (total = total + product.count), 0);
    
    return (
        <div> 
            <InputClient/>
             <h4>Productos-Precio</h4>
     {context.state.cart.map((product) => (
     
            <div>
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
          Borrar orden
        </button>
        <button type="submit">
          Enviar a cocina
        </button>
      </div>
               </div>
  );
};
 

export default Cart
