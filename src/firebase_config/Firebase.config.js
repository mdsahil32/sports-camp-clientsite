// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBL8pGzKV8em4_CXh06HuNwsGSDyisUMgs",
  authDomain: "sports-academy-f0a5a.firebaseapp.com",
  projectId: "sports-academy-f0a5a",
  storageBucket: "sports-academy-f0a5a.appspot.com",
  messagingSenderId: "36643868199",
  appId: "1:36643868199:web:8cf4f894e3e8e13dcb4802"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;