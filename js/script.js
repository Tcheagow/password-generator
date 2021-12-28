const capturingAndCheckingPassword = {
    passLength: () => {
        return document.getElementById("generatorPass").value;
    },
    checkPasswordlength: () => {
        if(capturingAndCheckingPassword.passLength() == 0) {
            document.getElementById("displaypass").innerHTML = "Por favor, coloque um número maior que zero (0)";
            document.getElementById("displaytitle").innerHTML = "";

            return document.getElementById("displaypass").innerHTML.length;
        }else{ 
            document.getElementById("displaypass").innerHTML = "";

            return document.getElementById("displaypass").innerHTML.length
        }
    }
}

const displayPassword = document.getElementById("displaypass");
const displayTitle = document.getElementById("displaytitle");
const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
const button = document.getElementById("buttonpass");

button.addEventListener("click", generatorpass);

function generatorpass() {
    let pass = "";

    if(capturingAndCheckingPassword.checkPasswordlength() == 0){
        while(pass.length < capturingAndCheckingPassword.passLength()) {
            pass += charset.charAt(Math.floor(Math.random() * charset.length));
        }
    }

    if(pass.length > 0){
        printPassword(pass);
    }
}

function printPassword(pass) {
    displayTitle.innerHTML = "Sua senha é:"
    displayPassword.innerHTML = pass;
}
