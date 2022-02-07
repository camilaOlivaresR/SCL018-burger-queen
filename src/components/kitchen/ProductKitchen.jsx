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
        //aplico map a todos los elementos de la coleccion
        //por cada elemento de la base de dato quiero que me devuelva
        //y guardes en el arreglo un objeto, documento.data y un id 
        return { ...documento.data(), id: documento.id }

      })
      cambiarPedido(arregloProductos);

    },
      (error) => {
        console.log(error);
      }
    );
  }, []);
  //conectamos a la API
  // al poner [] el useEffect se ejecuta solamente al primer renderizado
  //arreglo de dependencias[], puede ser muy util para hacer coneccion a una Api
  // nos conectamos a la base de datos cuando la pagina cargue por primera vez

  
  const oldEstado = [...pedido]
//dentro del filtro ejecutamos un callback
  const nwEstado = oldEstado.filter((elem) => { return elem.estado.estado === "Cocinando"});

useEffect(()=>{
  return(()=>{
    console.log('Cerramos coneccion con la API')
  });
}, []);
  
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