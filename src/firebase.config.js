
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore';
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAXT7YrAZanUBWFXfG7k_pAtgKvjCZ9Tug",
  authDomain: "multimart-99d82.firebaseapp.com",
  projectId: "multimart-99d82",
  storageBucket: "multimart-99d82.appspot.com",
  messagingSenderId: "416202764258",
  appId: "1:416202764258:web:8ef7ea87d84a664d46d3bb"
};

const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)
export const db=getFirestore(app);
export const storage=getStorage(app)

export default app;