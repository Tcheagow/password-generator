import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyDS7PtoGumeR89LngcYav9xgJWJ2RyIm-E",
    authDomain: "password-generator-53828.firebaseapp.com",
    projectId: "password-generator-53828",
    storageBucket: "password-generator-53828.appspot.com",
    messagingSenderId: "801929093014",
    appId: "1:801929093014:web:f7a7a32655a7de1ec3c7b7"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const buttonLogin = document.querySelector("#buttonCadastro");

buttonLogin.addEventListener("click", capturePassAndEmail);

function capturePassAndEmail() {
    let email = document.querySelector("#emailId").value;
    let password = document.querySelector("#passwordId").value;
    
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        const user = userCredential.user;
        console.log("deu certo o cadastro");
    })
}
