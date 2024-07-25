import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyABVvhPux2-FwV3ueZoqcKvGVJOgAM2rAw",
  authDomain: "keep-1e2af.firebaseapp.com",
  projectId: "keep-1e2af",
  storageBucket: "keep-1e2af.appspot.com",
  messagingSenderId: "254228250662",
  appId: "1:254228250662:web:1cf3de09cddf7deb1fe6e7"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const firestore = getFirestore(app);