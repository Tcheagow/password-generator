import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAuth, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDS7PtoGumeR89LngcYav9xgJWJ2RyIm-E",
  authDomain: "password-generator-53828.firebaseapp.com",
  projectId: "password-generator-53828",
  storageBucket: "password-generator-53828.appspot.com",
  messagingSenderId: "801929093014",
  appId: "1:801929093014:web:f7a7a32655a7de1ec3c7b7"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

onAuthStateChanged(auth, user => {
    if(user != null) {
        console.log("Logged with success!")
    }else{
        console.log("Please, login")
    }
})