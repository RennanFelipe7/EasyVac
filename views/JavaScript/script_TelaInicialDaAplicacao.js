var botao = document.getElementById("bt1");
var div1 = document.getElementById("container");
var imgExpandir = document.getElementById("expandir");
var menuDeNavegacao = document.getElementById("tt");
botao.addEventListener("click", function(){
    div1.style.display = "block";
    menuDeNavegacao.style.pointerEvents = "none"; 
})
imgExpandir.addEventListener("click", function(){
    div1.style.display = "block";

})
var botaoFechar = document.getElementById("fechar_id");
botaoFechar.addEventListener("click", function(){
    div1.style.display = "none";
    menuDeNavegacao.style.pointerEvents = "";
})

var botao2 = document.getElementById("bt2");
var div2 = document.getElementById("container2");
var imgExpandir2 = document.getElementById("expandir2");
botao2.addEventListener("click", function(){
    div2.style.display = "block";
    menuDeNavegacao.style.pointerEvents = "none";
})
imgExpandir2.addEventListener("click", function(){
    div2.style.display = "block";
})
var botaoFechar2 = document.getElementById("fechar_id2");
botaoFechar2.addEventListener("click", function(){
    div2.style.display = "none";
    menuDeNavegacao.style.pointerEvents = "";
})

var botao3 = document.getElementById("bt3");
var div3 = document.getElementById("container3");
var imgExpandir3 = document.getElementById("expandir3");
botao3.addEventListener("click", function(){
    div3.style.display = "block";
    menuDeNavegacao.style.pointerEvents = "none";
})
imgExpandir3.addEventListener("click", function(){
    div3.style.display = "block";
})
var botaoFechar3 = document.getElementById("fechar_id3");
botaoFechar3.addEventListener("click", function(){
    div3.style.display = "none";
    menuDeNavegacao.style.pointerEvents = "";
})

var botao4 = document.getElementById("bt4");
var div4 = document.getElementById("container4");
var imgExpandir4 = document.getElementById("expandir4");
botao4.addEventListener("click", function(){
    div4.style.display = "block";
    menuDeNavegacao.style.pointerEvents = "none";
})
imgExpandir4.addEventListener("click", function(){
    div4.style.display = "block";
})
var botaoFechar4 = document.getElementById("fechar_id4");
botaoFechar4.addEventListener("click", function(){
    div4.style.display = "none";
    menuDeNavegacao.style.pointerEvents = "";
})
