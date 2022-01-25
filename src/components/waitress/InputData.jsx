import { useState } from "react"



 export const  InputClient  = () => {
   const [client , cambiarClient] = useState('');
   const [table , cambiarMesa] = useState('');
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
  } else if (evento.target.name=== 'table')
  cambiarMesa( evento.target.value);
}
 //aqui puedo agregar else if infitos segun comprobaciones necesite  

 const onSubmit =(evento ) => {
   evento.preventDefaul();
   alert('enviando a db')
 }

    return (
        <div >
     <form action="" onSubmit={onSubmit}>
       
      
      <section >
        <p>Cliente : </p>
        <input
          type="text"
          name="client"
          id="client"
          value={client}
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
          value={table}
          onChange={onChange}
          min="1" max="6"
          placeholder="1-6"
        />
      </section>
      <section >
      <p>Cliente: {client}</p>{/*las llaves representan el estado, cargar los cambios para actualizar */}
       <p>Mesa: {table}</p>
      </section>
   

    </form>
            
    </div>
   )

 }