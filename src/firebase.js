// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// objeto de configuracion
const firebaseConfig = {
  apiKey: "AIzaSyDOhZ3C24T25anvPgK6oTlFzL-S9QkaMi4",
  authDomain: "coffequeen-9e74f.firebaseapp.com",
  projectId: "coffequeen-9e74f",
  storageBucket: "coffequeen-9e74f.appspot.com",
  messagingSenderId: "989368095756",
  appId: "1:989368095756:web:40d901d50d018bdcbe4a29",
  measurementId: "G-9NNZV5SSNR"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
 export const db = getFirestore();




/*export const dataProduct = (product) => {
  const q = query(collection(db, "Productos"));
  const unsubscribe = onSnapshot(q, (querySnapshot) => {
    const Productos = [];
    querySnapshot.forEach((_doc) => {
      Productos.push({ ..._doc.data(), id: _doc.id });
    });
    
    product(Productos);
  
  });

*/
