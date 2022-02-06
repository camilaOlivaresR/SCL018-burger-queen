{/*
import { db } from "../../firebase";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import styled from "styled-components"
import { Header } from "../commons/Header";



export const Tiket = () => {
 
  const [stadoBoleta,  setStadoBoletas] = useState([]);


  useEffect(() => {
    const q = query(collection(db, "order"), orderBy('time', 'desc'));
    onSnapshot(q, (snapshot) => {
      //console.log('se ejecuto snapshot')
      // console.log(snapshot.docs[0].data());
      const arreglo = snapshot.docs.map((documento) => {
        return { ...documento.data(), id: documento.id }

      })
      setStadoBoletas(arreglo);
    },
      (error) => {
        console.log(error);
      }
    );
  }, []);



  const nwBoleta = stadoBoleta.filter((elem) => elem.estado.estado === 'Listo para Servir');



  return (
    <div>
      <Header />
      <Img>
        {nwBoleta.map((orden, index) => (
          <Poster>
            <div key={index}>
              <p>{orden.time}</p>
              <p>Mesa :{orden.mesa} </p>
              <p>Nombre :{orden.nombre} </p>
              <span>Pedido:
                {orden.order.map((orden, index) => <li key={index}>{orden.count}-{orden.name}</li>)}
              </span>
              <p> Total :{orden.total}</p>
            
              <p>{orden.estado.estado}</p>
            </div>
          </Poster>
        ))}
      </Img>
    </div>
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

const Poster = styled.section`

background-color:#f0eeef;
text-align: center;
border-radius: 3% 3% 3% 3%;
font-size: 12px;
width: 20%;
height: auto;
margin: 1em;



`;

*/}

{/* 

const nwBoleta = () => {
    setStadoBoletas({
      ...stadoBoleta,
     tiket: stadoBoleta.filter((elem) => elem.estado.estado === 'Listo para Servir')
    });
  };
*/}

  {/*   <p>{JSON.stringify({estado})}</p>*/}