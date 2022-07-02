
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-analytics.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-firestore.js"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAd7NvdcH3apwA-f8z7jfGl6IQj2GVV9zI",
    authDomain: "teslacrud.firebaseapp.com",
    projectId: "teslacrud",
    storageBucket: "teslacrud.appspot.com",
    messagingSenderId: "759454646808",
    appId: "1:759454646808:web:13aa65069ae97a5509f96d",
    measurementId: "G-8VKF0TNZJP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore();

export const saveForm = (titulo, mail, mensaje) => 
    addDoc(collection(db, "mensajes"), {titulo, mail, mensaje});

