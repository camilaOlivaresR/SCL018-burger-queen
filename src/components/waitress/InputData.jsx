import { useState , useContext } from "react"
import {db , app} from "../../firebase";
import { collection, addDoc } from "firebase/firestore";
import { MenuContext } from "./Order";




 export const  InputClient  = () => {

  const context = useContext(MenuContext);

   const [client , cambiarClient] = useState('');
   const [table , cambiarMesa] = useState('');


{/* 
const onChange = (evento) => {
  if( evento.target.name=== 'client'){
    cambiarClient( evento.target.value);
  } else if (evento.target.name=== 'table')
  cambiarMesa( evento.target.value);
}
*/}
 //aqui puedo agregar else if infitos segun comprobaciones necesite  

 const onSubmit = async (e) => {
   e.preventDefault();
    try{
      await addDoc(collection(db, "order"), {
        nombre: client,
        mesa: table,
        product : context.state,
        
      
        

        

        
      
      });
    } catch(error){
      console.log('errores')
    console.log(error);
 
  }
    cambiarClient('');
    cambiarMesa('');
 
    
  }

    return (
       
     <form action="" onSubmit={onSubmit}>
       
      
      <div>
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
           

        </div>
        <button type="submit"  >
          Enviar a cocina
        </button>
       
      {/* 
      <section >
      <p>Cliente: {client}</p>{/*las llaves representan el estado, cargar los cambios para actualizar 
       <p>Mesa: {table}</p>
      </section>
    */}
  
    </form>
            
            
   )

 }