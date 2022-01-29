import { db } from "../../firebase";
import { collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Order } from "../waitress/Order";



export const ProductKitchen = () => {
  const [pedido, cambiarPedido] = useState([]);

  useEffect(() => {
    onSnapshot(
      collection(db, 'order'),
      (snapshot) => {
        //console.log('se ejecuto snapshot')
        // console.log(snapshot.docs[0].data());
        const arregloProductos = snapshot.docs.map((documento) => {
          return { ...documento.data(), id: documento.id }

        })
        cambiarPedido(arregloProductos);
      }
    );
  }, []);

  return (
    <div>
      {pedido.map((orden, index) => (
        < main key={index}>
        <div>
          <p>Mesa :{orden.mesa} </p>
          <p>Nombre :{orden.nombre} </p>
          </div>
           <p>Pedido:
            {orden.order.map(orden => <li>{orden.count}{orden.name}</li>)}
            </p>
             <p> Total :{orden.total}</p>
          </main>
      ))}
    </div>
  )
}



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