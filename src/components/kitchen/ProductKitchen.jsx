import { db } from "../../firebase";
import { collection, onSnapshot, orderBy, query, doc, updateDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import styled from "styled-components"
import Update from "./Update";



export const ProductKitchen = () => {

  const [pedido, cambiarPedido] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "order"), orderBy('time', 'desc'));
    onSnapshot(q, (snapshot) => {
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

  const nwEstado = pedido.filter((elem) => elem.estado.estado === "Cocinando");


  return (
    nwEstado.length > 0 &&
    <Img>
      {nwEstado.map((orden) => (
        <Update
          key={orden.id}
          id={orden.id}
          time={orden.time}
          mesa={orden.mesa}
          nombre={orden.nombre}
          estado={orden.estado}
          total={orden.total}
          order={orden.order}
        />
      ))}
    </Img>
  )
}
const Img = styled.div`

display: flex; 
flex-flow: row wrap; 
justify-content: space-evenly;
align-content: space-around;
margin: auto;
background: #cfcdcb;

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