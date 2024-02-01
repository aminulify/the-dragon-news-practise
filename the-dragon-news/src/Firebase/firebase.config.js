// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZ6NSyKfVlK9KJ11_nt9KVk3w7AkqS6Gw",
  authDomain: "the-dragon-news-c8e3f.firebaseapp.com",
  projectId: "the-dragon-news-c8e3f",
  storageBucket: "the-dragon-news-c8e3f.appspot.com",
  messagingSenderId: "80387772920",
  appId: "1:80387772920:web:b792928d0b8c8e7892060d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;