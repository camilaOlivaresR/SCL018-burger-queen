import styled from "styled-components";
import { useState } from "react";
import { db } from "../../firebase";
import { doc, updateDoc } from "firebase/firestore";

const Update = ({ id, time, mesa, nombre, estado, total, order }) => {


    const [status, setStatus] = useState({
       //estado: 'Cocinando'
       estado: {estado: 'Cocinando'}

    });

    const changeStatus = () => {
        setStatus({
            ...status,
            estado: 'Listo para Servir'
        })
    }
    

    const actualizarEstado = async (e) => {
        e.preventDefault();
        console.log('actualizando');

        try {
            await updateDoc(doc(db, 'order', id), {
                estado: status,
            });

        } catch (error) {
            console.log(error);
        }
    }

    return (

        <Poster>
            <form action="" onSubmit={actualizarEstado}>
                <div key={id}>
                    <p>{time}</p>
                    <p>Mesa :{mesa} </p>
                    <p>Nombre :{nombre} </p>

                    <span>Pedido:
                        {order.map(orden => <li key={orden.id}>{orden.count}-{orden.name}</li>)}
                    </span>
                    <p> Total :{total}</p>
                  {/*   <p>{JSON.stringify({estado})}</p>*/}
                    <P>{estado.estado}</P>
                 
                    <button type='submit' onClick={changeStatus} >Ok</button>
                </div>
            </form>
        </Poster>
    )



};

export default Update;



const Poster = styled.section`

background-color:#f0eeef;
text-align: center;
border-radius: 3% 3% 3% 3%;
font-size: 12px;
width: 20%;
height: auto;
margin: 1em;



`;
 const P = styled.p`
 color: red;
 font-weight: bold;

 `;