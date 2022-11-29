
import { initializeApp } from "firebase/app";
;

const firebaseConfig = {
  apiKey: "AIzaSyCgVrv8R8tECttV0oL4kyG3LHYyraoCy_Y",
  authDomain: "ecommerce-1932c.firebaseapp.com",
  projectId: "ecommerce-1932c",
  storageBucket: "ecommerce-1932c.appspot.com",
  messagingSenderId: "1050184179134",
  appId: "1:1050184179134:web:bc392c56e18164a327adef",
  measurementId: "G-JYG2J3N38C"
};


const app = initializeApp(firebaseConfig);

export const firestoreInit = () => app

