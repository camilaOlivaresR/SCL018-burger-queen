
import { db } from "../../firebase";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import styled from "styled-components"
import { Header } from "../commons/Header";
import UpdateTicket from "./UpdateTicket";



export const Ticket = () => {
 
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


  const oldBoleta = [...stadoBoleta]
//dentro del filtro ejecutamos un callback
  const nwBoleta = oldBoleta.filter((elem) =>{ return elem.estado.estado === 'Listo para Servir'});

  useEffect(()=>{
    return(()=>{
      console.log('Cerramos coneccion con la API')
    });
  }, []);

  return (
    <div>
      <Header />
      <Img>
        {nwBoleta.map((orden, index) => (
            <UpdateTicket
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



{/* 

const nwBoleta = () => {
    setStadoBoletas({
      ...stadoBoleta,
     tiket: stadoBoleta.filter((elem) => elem.estado.estado === 'Listo para Servir')
    });
  };
*/}

  {/*   <p>{JSON.stringify({estado})}</p>*/}