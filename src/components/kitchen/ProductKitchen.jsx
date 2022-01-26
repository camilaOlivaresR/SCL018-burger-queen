import { db  } from "../../firebase";
import { collection , onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";



export const ProductKitchen = () => {
   const [ pedido , cambiarPedido] = useState([]);

   useEffect(() => {
    onSnapshot( 
      collection(db , 'estado de pedidos'),
      (snapshot) => {
        //console.log('se ejecuto snapshot')
       // console.log(snapshot.docs[0].data());
       const arregloProductos =  snapshot.docs.map((documento)=> {
        return {...documento.data(), id: documento.id }

       })
       cambiarPedido(arregloProductos);
      }
      );
   }, []);
    
    return (
        <div style={{ textAlign: "left" }}>
           {pedido.map((pedido) =>(
               <main>
               <div >
                   <p>{pedido.cliente} </p>
                   </div>
                   <div>
                       <li>{ pedido.pedido}</li>
                       <p>{ pedido.total}</p>
                       <p>{pedido.estado}</p>
                   </div>
                  
                       
                   
               
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