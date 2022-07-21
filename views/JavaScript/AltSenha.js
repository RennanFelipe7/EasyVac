var senhasIguaisMsn = document.getElementById("senhasIguaisId")
var inputSenha = document.getElementById("senha")
var inputConfirSenha = document.getElementById("senhaConfirm")
var senhasMenor7Dig = document.getElementById("senhasMenor7Dig")
function carrega(senhasIguais){
    if(senhasIguais == 1){
        senhasIguaisMsn.style.display = "inline"
        inputSenha.style.borderColor = "red"
        inputConfirSenha.style.borderColor = "red"
    }else if(senhasIguais == 2){
        senhasMenor7Dig.style.display = "inline"
        inputSenha.style.borderColor = "red"
        inputConfirSenha.style.borderColor = "red"
    }
}