var data = new Date();
var diaAtual = String(data.getDate()).padStart(2, '0');
var mesAtual = String(data.getMonth() + 1).padStart(2, '0');
var anoAtual = data.getFullYear();
var dtinvalida = document.getElementById("dtinvalida")
function dataValida(){
    var anoInput = parseInt(dataDeNascimento.value.substring(0, 4))
    var mesInput = parseInt(dataDeNascimento.value.substring(5, 7))
    var diaInput = parseInt(dataDeNascimento.value.substring(8, 10))
    if(anoInput > anoAtual || dataDeNascimento.value == ""){
        submit.style.backgroundColor = "grey"
        submit.style.cursor = "not-allowed"
        submit.disabled = true
        dataDeNascimento.style.borderColor = "red"
        dtinvalida.style.display = "block"
        return false
    }else if(anoInput == anoAtual || dataDeNascimento.value == ""){
        if(mesInput > mesAtual || dataDeNascimento.value == ""){
            submit.style.backgroundColor = "grey"
            submit.style.cursor = "not-allowed"
            submit.disabled = true
            dataDeNascimento.style.borderColor = "red"
            dtinvalida.style.display = "block"
            return false
        }else if(mesInput == mesAtual || dataDeNascimento.value == ""){
            if(diaInput > diaAtual || dataDeNascimento.value == ""){
                submit.style.backgroundColor = "grey"
                submit.style.cursor = "not-allowed"
                submit.disabled = true
                dataDeNascimento.style.borderColor = "red"
                dtinvalida.style.display = "block"
                return false
            }else{
                dataDeNascimento.style.borderColor = "black"
                dtinvalida.style.display = "none"
                return true
            }
        }else{
            dataDeNascimento.style.borderColor = "black"
            dtinvalida.style.display = "none"
            return true
        }
    }else{
        dataDeNascimento.style.borderColor = "black"
        dtinvalida.style.display = "none"
        return true
    }
}


var senha_id = document.getElementById("senha_id")
var confirmaSenha_id = document.getElementById("confirmaSenha_id")
var senhasNIguaisID = document.getElementById("senhasNIguaisID")
var senhasMenor8ID = document.getElementById("senhasMenor8ID")
var jaExisteNumResg = document.getElementById("numRegEmUso_ID")
var jaExisteEmail = document.getElementById("jaExisteEmail")
var nomeCompleto = document.getElementById("nomeCompleto_id")
var dataDeNascimento = document.getElementById("dataDeNascimento_id")
var numeroRegistroDeNascimento = document.getElementById("numeroRegistroDeNascimento")
var senha = document.getElementById("senha_id")
var confirmSenha = document.getElementById("confirmaSenha_id")

var masculino = document.getElementById("masculino_id")
var feminino = document.getElementById("feminino_id")
var outroGenero = document.getElementById("outro_id")
var emailSalvo = document.getElementById("email_id")
var submit = document.getElementById("concluirCadastro_id")
submit.preventDefault
submit.addEventListener("click", function(){
    sessionStorage.setItem('nomeSalvo', nomeCompleto.value)
    sessionStorage.setItem('dtNascimentoSalvo', dataDeNascimento.value)
    sessionStorage.setItem('numRegNasc', numeroRegistroDeNascimento.value)
    sessionStorage.setItem('email', emailSalvo.value)
    sessionStorage.setItem('senha', senha.value)
    sessionStorage.setItem('confirmSenha', confirmSenha.value)
    if(masculino.checked == true){
        sessionStorage.setItem('genero', 'masculino')
    }else if(feminino.checked == true){
        sessionStorage.setItem('genero', 'feminino')
    }else if(outroGenero.checked == true){
        sessionStorage.setItem('genero', 'outro')
    }
})

function validaForm(diferente){
    if(diferente == 1){
        senha_id.style.borderColor = "red"
        confirmaSenha_id.style.borderColor = "red"
        senhasNIguaisID.style.display = "block"
        window.scroll(0, 0)
        window.scrollTo(0, document.body.scrollHeight);
    }else if(diferente == 2){
        senha_id.style.borderColor = "red"
        confirmaSenha_id.style.borderColor = "red"
        senhasMenor8ID.style.display = "block"
        window.scrollTo(0, document.body.scrollHeight);
    }else if(diferente == 3){
        numeroRegistroDeNascimento.style.borderColor = "red"
        jaExisteNumResg.style.display = "block"
    }else if(diferente == 4){
        emailSalvo.style.borderColor = "red"
        jaExisteEmail.style.display = "block"
        window.scrollTo(0, document.body.scrollHeight);
    }
    nomeCompleto.value = sessionStorage.getItem('nomeSalvo')
    dataDeNascimento.value = sessionStorage.getItem('dtNascimentoSalvo')
    numeroRegistroDeNascimento.value = sessionStorage.getItem('numRegNasc')
    if(sessionStorage.getItem('genero') == 'masculino'){
        masculino.checked = true
        radioMascFake.style.backgroundColor =  "#057FB7"
        radioMascFake.style.borderColor = "white"
    }else if(sessionStorage.getItem('genero') == 'feminino'){
        feminino.checked = true
        radioFemFake.style.backgroundColor =  "#057FB7"
        radioFemFake.style.borderColor = "white"
    }else if(sessionStorage.getItem('genero') == 'outro'){
        outroGenero.checked = true
        radioOutroFake.style.backgroundColor =  "#057FB7"
        radioOutroFake.style.borderColor = "white"
    }
    emailSalvo.value = sessionStorage.getItem('email')
    senha.value = sessionStorage.getItem('senha')
    confirmSenha.value = sessionStorage.getItem('confirmSenha')
}


var labelMasc = document.getElementById("labelMasc")
var radioMascFake = document.getElementById("radioMascFake")
var radioMasculino = document.getElementById("masculino_id")

var radioFemFake = document.getElementById("radioFemFake")
var labelFem = document.getElementById("labelFem")
var radioOutroFake = document.getElementById("radioOutroFake")
var labelOutro = document.getElementById("labelOutro")
labelMasc.addEventListener("click", function(){
    if(radioMascFake.style.backgroundColor == "white" || radioMascFake.style.backgroundColor == ""){
        radioMascFake.style.backgroundColor =  "#057FB7"
        radioMascFake.style.borderColor = "white"
        radioFemFake.style.backgroundColor = "white"
        radioFemFake.style.borderColor = "#057FB7"
        radioOutroFake.style.backgroundColor = "white"
        radioOutroFake.style.borderColor = "#057FB7"
        radioMasculino.checked = true
        radioFemFake.checked = false
        radioOutroFake.checked = false
    }
})

labelFem.addEventListener("click", function(){
    if(radioFemFake.style.backgroundColor == "white" || radioFemFake.style.backgroundColor == ""){
        radioFemFake.style.backgroundColor =  "#057FB7"
        radioFemFake.style.borderColor = "white"
        radioMascFake.style.backgroundColor = "white"
        radioMascFake.style.borderColor = "#057FB7"
        radioOutroFake.style.backgroundColor = "white"
        radioOutroFake.style.borderColor = "#057FB7"
        radioMasculino.checked = false
        radioFemFake.checked = true
        radioOutroFake.checked = false
    }
})

labelOutro.addEventListener("click", function(){
    if(radioOutroFake.style.backgroundColor == "white" || radioOutroFake.style.backgroundColor == ""){
        radioOutroFake.style.backgroundColor =  "#057FB7"
        radioOutroFake.style.borderColor = "white"
        radioMascFake.style.backgroundColor = "white"
        radioMascFake.style.borderColor = "#057FB7"
        radioFemFake.style.backgroundColor = "white"
        radioFemFake.style.borderColor = "#057FB7"
        radioMasculino.checked = false
        radioFemFake.checked = false
        radioOutroFake.checked = true
    }
})

function habilita(){
    if(nomeCompleto.value.length != 0 && dataDeNascimento.value != '' && numeroRegistroDeNascimento.value.length != 0 && emailSalvo.value.length != 0 && (masculino.checked || feminino.checked || outroGenero.checked) && senha.value.length != 0 && confirmSenha.value.length != 0){
        submit.style.backgroundColor = "#057fB7"
        submit.style.cursor = "pointer"
        submit.title = ""
        submit.disabled = false
        dataValida()
    }else{
        submit.style.backgroundColor = "grey"
        submit.style.cursor = "not-allowed"
        submit.title = "Preencha os campos obrigatórios"
        submit.disabled = true
    }
}
nomeCompleto.addEventListener("input", habilita)
dataDeNascimento.addEventListener("input", habilita)
numeroRegistroDeNascimento.addEventListener("input", habilita)
emailSalvo.addEventListener("input", habilita)
senha.addEventListener("input", habilita)
confirmSenha.addEventListener("input", habilita)
masculino.addEventListener("change", habilita)
feminino.addEventListener("change", habilita)
outroGenero.addEventListener("change", habilita)

if(sessionStorage.getItem('nomeSalvo') != null && sessionStorage.getItem('dtNascimentoSalvo') != null && sessionStorage.getItem('numRegNasc') != null && sessionStorage.getItem('email') != null && sessionStorage.getItem('genero') != null && sessionStorage.setItem('senha') != null){
    submit.style.backgroundColor = "#057fB7"
    submit.style.cursor = "pointer"
    submit.title = ""
    submit.disabled = false
}else{
    submit.style.backgroundColor = "grey"
    submit.style.cursor = "not-allowed"
    submit.title = "Preencha os campos obrigatórios"
    submit.disabled = true
}

var data = new Date();
var diaAtual = String(data.getDate()).padStart(2, '0');
var mesAtual = String(data.getMonth() + 1).padStart(2, '0');
var anoAtual = data.getFullYear();
var dtinvalida = document.getElementById("dtinvalida")
dataDeNascimento.addEventListener("input", dataValida)
