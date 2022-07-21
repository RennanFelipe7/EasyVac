var login_id = document.getElementById("login_id")
var senha_id = document.getElementById("senha_id")
var textInvalido = document.getElementById("invalido")
function carregou(logou){
    if(logou == 0){
        textInvalido.style.display = "inline"
        login_id.style.borderColor = "red"
        senha_id.style.borderColor = "red"
    }
}