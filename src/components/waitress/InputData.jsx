import { useState } from "react"
import Pedido from "./Pedido";

 export const  InputClient  = () => {
   const [client , cambiarClient] = useState('');
   const [email , cambiarEmail] = useState('');
   {/* 
   const onChangeClient = (evento) => {
    cambiarClient( evento.target.value);
}

    const onChangeEmail = (evento) => {
  cambiarEmail( evento.target.value);
}
*/}
const onChange = (evento) => {
  if( evento.target.name=== 'client'){
    cambiarClient( evento.target.value);
  } else if (evento.target.name=== 'email')
  cambiarEmail( evento.target.value);
}
 //aqui puedo agregar else if infitos segun comprobaciones necesite  

 const onSubmit =(evento) => {
   evento.preventDefaul();
   alert('enviando a db')
 }

    return (
        <div style={{textAlign:"center"}}>
     <form action="" onSubmit={onSubmit}>
       <p>Cliente: {client}</p>{/*las llaves representan el estado, cargar los cambios para actualizar */}
       <p>Email: {email}</p>
      <h3>Resumen del pedido</h3>
      <section >
        <p>Cliente : </p>
        <input
          type="text"
          name="client"
          id="client"
          value={client}
          onChange={onChange}
        />
        <p>Email : </p>
        <input
          type="text"
          name="email"
          id="email"
          value={email}
          onChange={onChange}
        />
        <p>Mesero: </p>
        <input
          type="text"
          name="server"
          id="server"
        />
        <p># Mesa : </p>
        <input
          type="number"
          name="table"
          id="table"
          min="1" max="6"
          placeholder="1-6"
        />
      </section>
      <section >
        <div >
          <h4>Productos</h4>
          <h4>Precio</h4>
        </div>
        <aside className="sumary">
        <Pedido/>
        </aside>
      </section>
      <div>

        <button type="submit" >
          Borrar orden
        </button>
        <button type="submit">
          Enviar a cocina
        </button>
      </div>

    </form>
            
    </div>
   )

 }