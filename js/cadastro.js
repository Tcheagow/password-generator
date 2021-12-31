import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

const firebaseConfig = require('../firebase/config.json');

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const buttonLogin = document.querySelector("#buttonCadastro");

buttonLogin.addEventListener("click", capturePassAndEmail);

function capturePassAndEmail() {
    let email = document.querySelector("#emailId").value;
    let password = document.querySelector("#passwordId").value;
    
    const win = require('electron').remote.getCurrentWindow();

    try{
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;

            console.log("deu certo o cadastro");

            win.loadFile('./html/login.html');
        })
    }catch(err){
        console.log(err);
    }
}
