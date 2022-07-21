var numeroDigitado = document.getElementById("numeroDigitadoID") 
var campoDoNumero = document.getElementById("campoDoNumero")
function validaEmail(codigoIgual){
    if(codigoIgual == 0){
        campoDoNumero.style.borderColor = "red"
        numeroDigitado.style.display = "block"
    }
}