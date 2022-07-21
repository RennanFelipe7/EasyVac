var campoDoEmail = document.getElementById("campoDoEmail")
var emailDigitado = document.getElementById("emailDigitadoID")

function achouEmail(achou){
    if(achou == 0){
        campoDoEmail.style.borderColor = "red"
        emailDigitado.style.display = "block"
    }
}