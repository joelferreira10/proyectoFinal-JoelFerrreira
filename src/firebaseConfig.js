//firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyBhgn_giR6ImC438DpS4gxUedpEzDZqVto",
    authDomain: "prueba-coder-7f4b0.firebaseapp.com",
    projectId: "prueba-coder-7f4b0",
    storageBucket: "prueba-coder-7f4b0.appspot.com",
    messagingSenderId: "176353146409",
    appId: "1:176353146409:web:9672aaa48dff293d0d8e38"
  };
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
