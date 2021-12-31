import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAuth, signOut, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

const firebaseConfig = require('../firebase/config.json');

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const buttonLogin = document.querySelector("#buttonLogin");

buttonLogin.addEventListener("click", capturePassAndEmail);

function capturePassAndEmail() {
    let email = document.querySelector("#emailId").value;
    let password = document.querySelector("#passwordId").value;

    const win = require('electron').remote.getCurrentWindow();

    try{
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log("deu certo o login");
            win.loadFile('./html/index.html');
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;

            console.log("Error Code: " + errorCode + " Message: " + errorMessage);
        });
    }catch(err){
        console.log(err);
    }
}

