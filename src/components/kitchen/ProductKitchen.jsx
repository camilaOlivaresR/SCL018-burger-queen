import { db } from "../../firebase";
import { collection, onSnapshot, orderBy, query ,doc, updateDoc} from "firebase/firestore";
import { useEffect, useState } from "react";
import { Order } from "../waitress/Order";
import styled from "styled-components"




export const ProductKitchen = () => {
  const [pedido, cambiarPedido] = useState([]);

  

  useEffect(() => {
    const q = query(collection(db, "order") ,orderBy('time', 'desc'));
    onSnapshot( q,   (snapshot) => {
        //console.log('se ejecuto snapshot')
        // console.log(snapshot.docs[0].data());
        const arregloProductos = snapshot.docs.map((documento) => {
          return { ...documento.data(), id: documento.id }

        })
        cambiarPedido(arregloProductos);
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);
   {/*onst [estado, nuevoEstado] = useState(estado);

  const actualizarEstado = (e) => {
    e.preventDefault();
     updateDoc(doc(db, 'order', id), {
       estado: nuevoEstado
     });
  }*/}

  return (
    <>
      
    <Img>
      {pedido.map((orden, index ) => (
        <Poster key={index}>
          <p>Mesa :{orden.mesa} </p>
          <p>Nombre :{orden.nombre} </p>
         
           <p>Pedido:
            {orden.order.map(orden => <li key={orden.id}>{orden.count}-{orden.name}</li>)}
            </p>
             <p> Total :{orden.total}</p>
             <p>Estado :{orden.estado} </p>
             <button>Listo</button>
          </Poster>
      ))}
    </Img>
    </>
  )
}
const Img = styled.div`

display: flex; 
flex-flow: row wrap; 
justify-content: space-evenly;
align-content: space-around;
margin: auto;
background:  #9ACD32;


`;
const Poster = styled.section`

background-color: #006400;
text-align: center;
color: cornsilk;
border-radius: 3% 3% 3% 3%;
font-size: 12px;
width: 20%;
height: auto;
margin: 1em;


`;

/*
const [data, setData] = useState([]);

  useEffect(() => {
   
        setData([...data]);
     
  }, []);
*/

/*
 useEffect(() => {
    const orderCollection = db.collection('Productos').orderBy('orderDate', 'desc');
    const unsuscribe = orderCollection.onSnapshot(snapshot => {
      const array = [];
      snapshot.forEach(doc => {
        const element = doc.data();
        const id = doc.id;
        array.push({...element, id});
      })
      setData(array);
    });
    return () => unsuscribe;
  }, []);
 
*/
/*
 <main>
             <div className="div">
                 <img src={img} />
                 <div>
                     <p>{ name }</p>
                     <p>{ price}</p>
                 </div>
                 <button>
                     Agregar
                 </button>
             </div>
         </main>
*/