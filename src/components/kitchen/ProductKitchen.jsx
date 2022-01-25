import { db  } from "../../firebase";
import { collection , onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";



export const Product = () => {
   const [ productos , cambiarProductos] = useState([]);

   useEffect(() => {
    onSnapshot( 
      collection(db , 'Productos'),
      (snapshot) => {
        //console.log('se ejecuto snapshot')
       // console.log(snapshot.docs[0].data());
       const arregloProductos =  snapshot.docs.map((documento)=> {
        return {...documento.data(), id: documento.id }

       })
       cambiarProductos(arregloProductos);
      }
      );
   }, []);
    
    return (
        productos.length > 0 &&
        <div style={{ textAlign: "left" }}>
           {productos.map((producto) =>(
               <main>
               <div >
                   <img src={producto.url} />
                   </div>
                   <div>
                       <p>{ producto.name }</p>
                       <p>{ producto.price}</p>
                   </div>
                   <button>
                       Agregar
                   </button>
               
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