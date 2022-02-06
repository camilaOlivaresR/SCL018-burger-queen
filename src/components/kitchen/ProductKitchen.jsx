import { db } from "../../firebase";
import { collection, onSnapshot, orderBy, query} from "firebase/firestore";
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

  
  const oldEstado = [...pedido]

  const nwEstado = oldEstado.filter((elem) => { return elem.estado.estado === "Cocinando"});


  
  return (
    nwEstado .length > 0 &&
    <Img>
      {nwEstado .map((orden, index) => (
        <Update
          key={index}
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


 
 {/* const nwEstado = () => {
    cambiarPedido({
      ...pedido,
     tiket: pedido.filter((elem) => elem.estado.estado === 'Cocinando')
    });
  };
  const nwEstado = pedido.filter((elem) => elem.estado.estado === "Cocinando");


     const filterEstado = () => {
    cambiarPedido({
      ...pedido,
     tiket: pedido.filter((elem) => elem.estado.estado === 'Cocinando')
    });
  };
  const nwEstado = filterEstado(pedido);

  const nwEstado = pedido.filter((elem) => elem.estado.estado === "Cocinando");

*/} 