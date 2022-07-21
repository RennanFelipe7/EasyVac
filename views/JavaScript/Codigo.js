var campoDoNumero = document.getElementById("campoDoNumero")
var numeroDigitado = document.getElementById("numeroDigitadoID")
function atualiza(mesmoCodigo){
    if(mesmoCodigo == 0){
        campoDoNumero.style.borderColor = "red"
        numeroDigitado.style.display = "block"
    }
}