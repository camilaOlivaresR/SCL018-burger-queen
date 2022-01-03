// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.2.0/firebase-app.js';
import { getFirestore,} from 'https://www.gstatic.com/firebasejs/9.2.0/firebase-firestore.js';

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
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
