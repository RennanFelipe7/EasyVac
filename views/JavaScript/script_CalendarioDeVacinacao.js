var botaoCrianca = document.getElementById("botaoCrianca");
var divVacCrianca = document.getElementById("divVacCrianca");

var botaoAdolecente = document.getElementById("botaoAdolecente");
var divVacAdolecente = document.getElementById("divVacAdolecente");

var botaoAdulto = document.getElementById("botaoAdulto");
var divVacAdulto = document.getElementById("divVacAdulto");

var botaoIdoso = document.getElementById("botaoIdoso");
var divVacIdoso = document.getElementById("divVacIdoso");

var menuDeNavegacao = document.getElementById("tt");

var divInvisivel = document.getElementById("invisivel")
botaoCrianca.addEventListener("click", function(){
    if(divVacCrianca.style.display === "none" || divVacCrianca.style.display === ''){
        divVacCrianca.style.display = "block";
        botaoCrianca.style.background = "#ff7200"
        botaoCrianca.style.color = "white"
        divInvisivel.style.display = "none"
    }else{
        divVacCrianca.style.display = "none";
        botaoCrianca.style.background = "#a8a8a2"
        botaoCrianca.style.color = "black"
        divInvisivel.style.display = "block"
    }
    if(divVacCrianca.style.display === "block"){ 
        botaoAdolecente.disabled = true;
        botaoAdolecente.style.cursor = "not-allowed";
        botaoAdulto.disabled = true;
        botaoAdulto.style.cursor = "not-allowed";
        botaoIdoso.disabled = true;
        botaoIdoso.style.cursor = "not-allowed";
    }else{
        botaoAdolecente.disabled = false;
        botaoAdolecente.style.cursor = "pointer";
        botaoAdulto.disabled = false;
        botaoAdulto.style.cursor = "pointer";
        botaoIdoso.disabled = false;
        botaoIdoso.style.cursor = "pointer";
    }
})


botaoAdolecente.addEventListener("click", function(){
    if(divVacAdolecente.style.display === "none" || divVacAdolecente.style.display === ''){
        divVacAdolecente.style.display = "block";
        botaoAdolecente.style.background = "#ff7200"
        botaoAdolecente.style.color = "white"
        divInvisivel.style.height = "calc(100% - 17vh - 4% - 10vmin - 6vmin - 6% - 6vmin - 15% - 5.5vmax - 4vmin - 4vmin - 28%)"
    }else{
        divVacAdolecente.style.display = "none";
        botaoAdolecente.style.background = "#a8a8a2"
        botaoAdolecente.style.color = "black"
        divInvisivel.style.height = "calc(100% - 17vh - 4% - 10vmin - 6vmin - 6% - 6vmin - 15% - 5.5vmax - 4vmin - 4vmin)"
    }
    if(divVacAdolecente.style.display === "block"){
        botaoCrianca.disabled = true;
        botaoCrianca.style.cursor = "not-allowed";
        botaoAdulto.disabled = true;
        botaoAdulto.style.cursor = "not-allowed";
        botaoIdoso.disabled = true;
        botaoIdoso.style.cursor = "not-allowed";
    }else{
        botaoCrianca.disabled = false;
        botaoCrianca.style.cursor = "pointer";
        botaoAdulto.disabled = false;
        botaoAdulto.style.cursor = "pointer";
        botaoIdoso.disabled = false;
        botaoIdoso.style.cursor = "pointer";
    }
})

botaoAdulto.addEventListener("click", function(){
    if(divVacAdulto.style.display === "none" || divVacAdulto.style.display === ''){
        divVacAdulto.style.display = "block";
        botaoAdulto.style.background = "#ff7200"
        botaoAdulto.style.color = "white"
        divInvisivel.style.display = "none"
    }else{
        divVacAdulto.style.display = "none";
        botaoAdulto.style.background = "#a8a8a2"
        botaoAdulto.style.color = "black"
        divInvisivel.style.display = "block"
    }
    if(divVacAdulto.style.display === "block"){
        botaoCrianca.disabled = true;
        botaoCrianca.style.cursor = "not-allowed";
        botaoCrianca.style.boxShadow = "none";
        botaoAdolecente.disabled = true;
        botaoAdolecente.disabled = true;
        botaoAdolecente.style.cursor = "not-allowed";
        botaoIdoso.disabled = true;
        botaoIdoso.style.cursor = "not-allowed";
    }else{
        botaoCrianca.disabled = false;
        botaoCrianca.style.cursor = "pointer";
        botaoAdolecente.disabled = false;
        botaoAdolecente.style.cursor = "pointer";
        botaoIdoso.disabled = false;
        botaoIdoso.style.cursor = "pointer";
    }
})

botaoIdoso.addEventListener("click", function(){
    if(divVacIdoso.style.display === "none" || divVacIdoso.style.display === ''){
        divVacIdoso.style.display = "block";
        botaoIdoso.style.background = "#ff7200"
        botaoIdoso.style.color = "white"
        divInvisivel.style.height = "calc(100% - 17vh - 4% - 10vmin - 6vmin - 6% - 6vmin - 15% - 5.5vmax - 4vmin - 4vmin - 23%)"
    }else{
        divVacIdoso.style.display = "none";
        botaoIdoso.style.background = "#a8a8a2"
        botaoIdoso.style.color = "black"
        divInvisivel.style.height = "calc(100% - 17vh - 4% - 10vmin - 6vmin - 6% - 6vmin - 15% - 5.5vmax - 4vmin - 4vmin)"
    }
    if(divVacIdoso.style.display === "block"){
        botaoCrianca.disabled = true;
        botaoCrianca.style.cursor = "not-allowed";
        botaoAdolecente.disabled = true;
        botaoAdolecente.style.cursor = "not-allowed";
        botaoAdulto.disabled = true;
        botaoAdulto.style.cursor = "not-allowed";
    }else{
        botaoCrianca.disabled = false;
        botaoCrianca.style.cursor = "pointer";
        botaoAdolecente.disabled = false;
        botaoAdolecente.style.cursor = "pointer";
        botaoAdulto.disabled = false;
        botaoAdulto.style.cursor = "pointer";
    }
})

var alturaAtual

var botaoInfVacBCG = document.getElementById("infVacButBCG"); 
var divInfVacBCG = document.getElementById("infBcgID");
var botaoFecharInfVacBCG = document.getElementById("botaoFecharInfVacBCG");

botaoInfVacBCG.addEventListener("click", function(){
    divInfVacBCG.style.display = "block";
    menuDeNavegacao.style.pointerEvents = "none";
    botaoCrianca.style.pointerEvents = "none";
    divVacCrianca.style.pointerEvents = "none";
    alturaAtual =  window.scrollY;
    window.scrollTo(0, document.body.scrollHeight);
})

botaoFecharInfVacBCG.addEventListener("click", function(){
    divInfVacBCG.style.display = "none";
    menuDeNavegacao.style.pointerEvents = "";
    botaoCrianca.style.pointerEvents = "";
    divVacCrianca.style.pointerEvents = ""; 

    window.scrollTo({top: alturaAtual})
})


var botaoInfVacHEPB = document.getElementById("infVacButHEPA");
var divInfVacHEPB = document.getElementById("infHepatiteBId");
var botaoFecharInfVacHEPB = document.getElementById("botaoFecharInfVacHEPB");

var botaoInfVacHEPB2 = document.getElementById("infVacButHEPA2");
var botaoInfVacHEPB3 = document.getElementById("infVacButHEPA3");

botaoInfVacHEPB.addEventListener("click", function(){
    divInfVacHEPB.style.display = "block";
    menuDeNavegacao.style.pointerEvents = "none";
    botaoCrianca.style.pointerEvents = "none";
    divVacCrianca.style.pointerEvents = "none";

    alturaAtual =  window.scrollY;
    window.scrollTo(0, document.body.scrollHeight);
})

botaoFecharInfVacHEPB.addEventListener("click", function(){
    divInfVacHEPB.style.display = "none";
    menuDeNavegacao.style.pointerEvents = "";
    botaoCrianca.style.pointerEvents = "";
    divVacCrianca.style.pointerEvents = "";
    
    window.scrollTo({top: alturaAtual})
})

botaoInfVacHEPB2.addEventListener("click", function(){
    divInfVacHEPB.style.display = "block";
    menuDeNavegacao.style.pointerEvents = "none";
    botaoCrianca.style.pointerEvents = "none";
    divVacCrianca.style.pointerEvents = "none";

    alturaAtual =  window.scrollY;
    window.scrollTo(0, document.body.scrollHeight);
})
botaoInfVacHEPB3.addEventListener("click", function(){
    divInfVacHEPB.style.display = "block";
    menuDeNavegacao.style.pointerEvents = "none";
    botaoCrianca.style.pointerEvents = "none";
    divVacCrianca.style.pointerEvents = "none";

    alturaAtual =  window.scrollY;
    window.scrollTo(0, document.body.scrollHeight);
})


var botaoInfVacPOLIOMIELITE = document.getElementById("infVacButPOLI1");
var divInfVacPOLIOMIELITE= document.getElementById("infPoliomieliteId");
var botaoFecharInfPOLIOMIELITE = document.getElementById("botaoFecharInfVacPoliomielite");

var botaoInfVacPOLIOMIELITE2 = document.getElementById("infVacButPOLI2");
var botaoInfVacPOLIOMIELITE3 = document.getElementById("infVacButPOLI3");
var botaoInfVacPOLIOMIELITE4 = document.getElementById("infVacButPOLI4");

botaoInfVacPOLIOMIELITE.addEventListener("click", function(){
    divInfVacPOLIOMIELITE.style.display = "block";
    menuDeNavegacao.style.pointerEvents = "none";
    botaoCrianca.style.pointerEvents = "none";
    divVacCrianca.style.pointerEvents = "none";

    alturaAtual =  window.scrollY;
    window.scrollTo(0, document.body.scrollHeight);
})

botaoFecharInfPOLIOMIELITE.addEventListener("click", function(){
    divInfVacPOLIOMIELITE.style.display = "none";
    menuDeNavegacao.style.pointerEvents = "";
    botaoCrianca.style.pointerEvents = "";
    divVacCrianca.style.pointerEvents = ""; 

    window.scrollTo({top: alturaAtual})
})

botaoInfVacPOLIOMIELITE2.addEventListener("click", function(){
    divInfVacPOLIOMIELITE.style.display = "block";
    menuDeNavegacao.style.pointerEvents = "none";
    botaoCrianca.style.pointerEvents = "none";
    divVacCrianca.style.pointerEvents = "none";

    alturaAtual =  window.scrollY;
    window.scrollTo(0, document.body.scrollHeight);
})

botaoInfVacPOLIOMIELITE3.addEventListener("click", function(){
    divInfVacPOLIOMIELITE.style.display = "block";
    menuDeNavegacao.style.pointerEvents = "none";
    botaoCrianca.style.pointerEvents = "none";
    divVacCrianca.style.pointerEvents = "none";

    alturaAtual =  window.scrollY;
    window.scrollTo(0, document.body.scrollHeight);
})

botaoInfVacPOLIOMIELITE4.addEventListener("click", function(){
    divInfVacPOLIOMIELITE.style.display = "block";
    menuDeNavegacao.style.pointerEvents = "none";
    botaoCrianca.style.pointerEvents = "none";
    divVacCrianca.style.pointerEvents = "none";

    alturaAtual =  window.scrollY;
    window.scrollTo(0, document.body.scrollHeight);
})


var botaoInfVacTETRAVALENTE = document.getElementById("tetraValente1");
var divInfVacTETRAVALENTE= document.getElementById("infTetraValenteId");
var botaoFecharInfTETRAVALENTE = document.getElementById("botaoFecharInfVacTetraValente");

var botaoInfVacTETRAVALENTE2 = document.getElementById("tetraValente2");
var botaoInfVacTETRAVALENTE3 = document.getElementById("tetraValente3");
var botaoInfVacTETRAVALENTE4 = document.getElementById("tetraValente4");

botaoInfVacTETRAVALENTE.addEventListener("click", function(){
    divInfVacTETRAVALENTE.style.display = "block";
    menuDeNavegacao.style.pointerEvents = "none";
    botaoCrianca.style.pointerEvents = "none";
    divVacCrianca.style.pointerEvents = "none";

    alturaAtual =  window.scrollY;
    window.scrollTo(0, document.body.scrollHeight);
})

botaoFecharInfTETRAVALENTE.addEventListener("click", function(){
    divInfVacTETRAVALENTE.style.display = "none";
    menuDeNavegacao.style.pointerEvents = "";
    botaoCrianca.style.pointerEvents = "";
    divVacCrianca.style.pointerEvents = ""; 

    window.scrollTo({top: alturaAtual})
})

botaoInfVacTETRAVALENTE2.addEventListener("click", function(){
    divInfVacTETRAVALENTE.style.display = "block";
    menuDeNavegacao.style.pointerEvents = "none";
    botaoCrianca.style.pointerEvents = "none";
    divVacCrianca.style.pointerEvents = "none";

    alturaAtual =  window.scrollY;
    window.scrollTo(0, document.body.scrollHeight);
})
botaoInfVacTETRAVALENTE3.addEventListener("click", function(){
    divInfVacTETRAVALENTE.style.display = "block";
    menuDeNavegacao.style.pointerEvents = "none";
    botaoCrianca.style.pointerEvents = "none";
    divVacCrianca.style.pointerEvents = "none";

    alturaAtual =  window.scrollY;
    window.scrollTo(0, document.body.scrollHeight);
})
botaoInfVacTETRAVALENTE4.addEventListener("click", function(){
    divInfVacTETRAVALENTE.style.display = "block";
    menuDeNavegacao.style.pointerEvents = "none";
    botaoCrianca.style.pointerEvents = "none";
    divVacCrianca.style.pointerEvents = "none";

    alturaAtual =  window.scrollY;
    window.scrollTo(0, document.body.scrollHeight);
})

var botaoInfVacFEBREAMARELA = document.getElementById("febreAmarela");
var divInfVacFEBREAMARELA = document.getElementById("infFebreAmarelaId");
var botaoFecharInfFEBREAMARELA = document.getElementById("botaoFecharInfVacFebreAmarela");

botaoInfVacFEBREAMARELA.addEventListener("click", function(){
    divInfVacFEBREAMARELA.style.display = "block";
    menuDeNavegacao.style.pointerEvents = "none";
    botaoCrianca.style.pointerEvents = "none";
    divVacCrianca.style.pointerEvents = "none";

    alturaAtual =  window.scrollY;
    window.scrollTo(0, document.body.scrollHeight);
})

botaoFecharInfFEBREAMARELA.addEventListener("click", function(){
    divInfVacFEBREAMARELA.style.display = "none";
    menuDeNavegacao.style.pointerEvents = "";
    botaoCrianca.style.pointerEvents = "";
    divVacCrianca.style.pointerEvents = ""; 

    window.scrollTo({top: alturaAtual})
})

var botaoInfVacTRIPLICEVIRAL = document.getElementById("infVacButTriViral");
var divInfVacTRIPLICEVIRAL = document.getElementById("infTripliceViralId");
var botaoFecharInfTRIPLICEVIRAL = document.getElementById("botaoFecharInfVacTripliceViral");

botaoInfVacTRIPLICEVIRAL.addEventListener("click", function(){
    divInfVacTRIPLICEVIRAL.style.display = "block";
    menuDeNavegacao.style.pointerEvents = "none";
    botaoCrianca.style.pointerEvents = "none";
    divVacCrianca.style.pointerEvents = "none";

    alturaAtual =  window.scrollY;
    window.scrollTo(0, document.body.scrollHeight);
})

botaoFecharInfTRIPLICEVIRAL.addEventListener("click", function(){
    divInfVacTRIPLICEVIRAL.style.display = "none";
    menuDeNavegacao.style.pointerEvents = "";
    botaoCrianca.style.pointerEvents = "";
    divVacCrianca.style.pointerEvents = ""; 

    window.scrollTo({top: alturaAtual})
})

var botaoInfVacFEBREAMARELAad = document.getElementById("febreAmarelaAd");
var divInfVacFEBREAMARELAad = document.getElementById("infFebreAmarelaAdId");
var botaoFecharInfFEBREAMARELAad = document.getElementById("botaoFecharInfVacFebreAmarelaAd");

botaoInfVacFEBREAMARELAad.addEventListener("click", function(){
    divInfVacFEBREAMARELAad.style.display = "block";
    menuDeNavegacao.style.pointerEvents = "none";
    botaoAdolecente.style.pointerEvents = "none";
    divVacAdolecente.style.pointerEvents = "none";

    alturaAtual =  window.scrollY;
    window.scrollTo(0, document.body.scrollHeight);
})

botaoFecharInfFEBREAMARELAad.addEventListener("click", function(){
    divInfVacFEBREAMARELAad.style.display = "none";
    menuDeNavegacao.style.pointerEvents = "";
    botaoAdolecente.style.pointerEvents = "";
    divVacAdolecente.style.pointerEvents = ""; 

    window.scrollTo({top: alturaAtual})
})

var botaoInfVacHEPATITEBad = document.getElementById("HepatiteBAd1");
var divInfVacHEPATITEBad = document.getElementById("infHepatiteBAdId");
var botaoFecharInfHEPATITEBad = document.getElementById("botaoFecharInfVacHEPBAd");

botaoInfVacHEPATITEBad.addEventListener("click", function(){
    divInfVacHEPATITEBad.style.display = "block";
    menuDeNavegacao.style.pointerEvents = "none";
    botaoAdolecente.style.pointerEvents = "none";
    divVacAdolecente.style.pointerEvents = "none";

    alturaAtual =  window.scrollY;
    window.scrollTo(0, document.body.scrollHeight);
})

botaoFecharInfHEPATITEBad.addEventListener("click", function(){
    divInfVacHEPATITEBad.style.display = "none";
    menuDeNavegacao.style.pointerEvents = "";
    botaoAdolecente.style.pointerEvents = "";
    divVacAdolecente.style.pointerEvents = ""; 

    window.scrollTo({top: alturaAtual})
})


var botaoInfVacDUPLAADULTOad = document.getElementById("duplaAdultaId");
var divInfVacDUPLAADULTOad = document.getElementById("infDuplaAdultoAdolecenteId");
var botaoFecharInfDUPLAADULTOad = document.getElementById("botaoFecharInfVacDuplaAdultoAdolecente");

botaoInfVacDUPLAADULTOad.addEventListener("click", function(){
    divInfVacDUPLAADULTOad.style.display = "block";
    menuDeNavegacao.style.pointerEvents = "none";
    botaoAdolecente.style.pointerEvents = "none";
    divVacAdolecente.style.pointerEvents = "none";

    alturaAtual =  window.scrollY;
    window.scrollTo(0, document.body.scrollHeight);
})

botaoFecharInfDUPLAADULTOad.addEventListener("click", function(){
    divInfVacDUPLAADULTOad.style.display = "none";
    menuDeNavegacao.style.pointerEvents = "";
    botaoAdolecente.style.pointerEvents = "";
    divVacAdolecente.style.pointerEvents = ""; 

    window.scrollTo({top: alturaAtual})
})

var botaoInfVacDUPLAVIRALad = document.getElementById("duplaViral");
var divInfVacDUPLAVIRALad = document.getElementById("infDuplaViralAdolecenteId");
var botaoFecharInfDUPLAVIRALad = document.getElementById("botaoFecharInfVacDuplaViralAdolecente");

botaoInfVacDUPLAVIRALad.addEventListener("click", function(){
    divInfVacDUPLAVIRALad.style.display = "block";
    menuDeNavegacao.style.pointerEvents = "none";
    botaoAdolecente.style.pointerEvents = "none";
    divVacAdolecente.style.pointerEvents = "none";

    alturaAtual =  window.scrollY;
    window.scrollTo(0, document.body.scrollHeight);
})

botaoFecharInfDUPLAVIRALad.addEventListener("click", function(){
    divInfVacDUPLAVIRALad.style.display = "none";
    menuDeNavegacao.style.pointerEvents = "";
    botaoAdolecente.style.pointerEvents = "";
    divVacAdolecente.style.pointerEvents = ""; 

    window.scrollTo({top: alturaAtual})
})

var botaoInfVacDUPLAADULTOadulto = document.getElementById("duplaAdulta");
var divInfVacDUPLAADULTOadulto = document.getElementById("infDuplaAdultoAdultoId");
var botaoFecharinfDUPLAADULTOadulto = document.getElementById("botaoFecharInfVacDuplaAdultoAdulto");

botaoInfVacDUPLAADULTOadulto.addEventListener("click", function(){
    divInfVacDUPLAADULTOadulto.style.display = "block";
    menuDeNavegacao.style.pointerEvents = "none";
    botaoAdulto.style.pointerEvents = "none";
    divVacAdulto.style.pointerEvents = "none";

    alturaAtual =  window.scrollY;
    window.scrollTo(0, document.body.scrollHeight);
})
botaoFecharinfDUPLAADULTOadulto.addEventListener("click", function(){
    divInfVacDUPLAADULTOadulto.style.display = "none";
    menuDeNavegacao.style.pointerEvents = "";
    botaoAdulto.style.pointerEvents = "";
    divVacAdulto.style.pointerEvents = ""; 

    window.scrollTo({top: alturaAtual})
})

var botaoInfVacDUPLAVIRALadulto = document.getElementById("duplaViralAdulto");
var divInfVacDUPLAVIRALadulto = document.getElementById("infDuplaViralAdultoId");
var botaoFecharinfDUPLAVIRALadulto = document.getElementById("botaoFecharInfVacDuplaViralAdulto");

botaoInfVacDUPLAVIRALadulto.addEventListener("click", function(){
    divInfVacDUPLAVIRALadulto.style.display = "block";
    menuDeNavegacao.style.pointerEvents = "none";
    botaoAdulto.style.pointerEvents = "none";
    divVacAdulto.style.pointerEvents = "none";

    alturaAtual =  window.scrollY;
    window.scrollTo(0, document.body.scrollHeight);
})
botaoFecharinfDUPLAVIRALadulto.addEventListener("click", function(){
    divInfVacDUPLAVIRALadulto.style.display = "none";
    menuDeNavegacao.style.pointerEvents = "";
    botaoAdulto.style.pointerEvents = "";
    divVacAdulto.style.pointerEvents = ""; 

    window.scrollTo({top: alturaAtual})
})

var botaoInfVacFEBREAMARELAadulto = document.getElementById("febreAmarelaAdulto");
var divInfVacFEBREAMARELAadulto = document.getElementById("infFebreAmarelaAdultoId");
var botaoFecharInfFEBREAMARELAadulto = document.getElementById("botaoFecharInfVacFebreAmarelaAdulto");

botaoInfVacFEBREAMARELAadulto.addEventListener("click", function(){
    divInfVacFEBREAMARELAadulto.style.display = "block";
    menuDeNavegacao.style.pointerEvents = "none";
    botaoAdulto.style.pointerEvents = "none";
    divVacAdulto.style.pointerEvents = "none";

    alturaAtual =  window.scrollY;
    window.scrollTo(0, document.body.scrollHeight);
})

botaoFecharInfFEBREAMARELAadulto.addEventListener("click", function(){
    divInfVacFEBREAMARELAadulto.style.display = "none";
    menuDeNavegacao.style.pointerEvents = "";
    botaoAdulto.style.pointerEvents = "";
    divVacAdulto.style.pointerEvents = ""; 

    window.scrollTo({top: alturaAtual})
})

var botaoInfVacDUPLAADULTOadultoMulheres = document.getElementById("duplaAdultaMulheres");
var divInfVacDUPLAADULTOadultoMulheres = document.getElementById("infDuplaAdultoAdultoMulheresId");
var botaoFecharinfDUPLAADULTOadultoMulheres = document.getElementById("botaoFecharInfVacDuplaAdultoAdultoMulheres");

botaoInfVacDUPLAADULTOadultoMulheres.addEventListener("click", function(){
    divInfVacDUPLAADULTOadultoMulheres.style.display = "block";
    menuDeNavegacao.style.pointerEvents = "none";
    botaoAdulto.style.pointerEvents = "none";
    divVacAdulto.style.pointerEvents = "none";

    alturaAtual =  window.scrollY;
    window.scrollTo(0, document.body.scrollHeight);
})
botaoFecharinfDUPLAADULTOadultoMulheres.addEventListener("click", function(){
    divInfVacDUPLAADULTOadultoMulheres.style.display = "none";
    menuDeNavegacao.style.pointerEvents = "";
    botaoAdulto.style.pointerEvents = "";
    divVacAdulto.style.pointerEvents = ""; 

    window.scrollTo({top: alturaAtual})
})

var botaoInfVacDUPLAVIRALadultoMulheres = document.getElementById("duplaViralMulheres");
var divInfVacDUPLAVIRALadultoMulheres = document.getElementById("infDuplaViralAdultoMulheresId");
var botaoFecharinfDUPLAVIRALadultoMulheres = document.getElementById("botaoFecharInfVacDuplaViralAdultoMulheres");

botaoInfVacDUPLAVIRALadultoMulheres.addEventListener("click", function(){
    divInfVacDUPLAVIRALadultoMulheres.style.display = "block";
    menuDeNavegacao.style.pointerEvents = "none";
    botaoAdulto.style.pointerEvents = "none";
    divVacAdulto.style.pointerEvents = "none";

    alturaAtual =  window.scrollY;
    window.scrollTo(0, document.body.scrollHeight);
})
botaoFecharinfDUPLAVIRALadultoMulheres.addEventListener("click", function(){
    divInfVacDUPLAVIRALadultoMulheres.style.display = "none";
    menuDeNavegacao.style.pointerEvents = "";
    botaoAdulto.style.pointerEvents = "";
    divVacAdulto.style.pointerEvents = ""; 

    window.scrollTo({top: alturaAtual})
})

var botaoInfVacFEBREAMARELAadultoMulheres = document.getElementById("febreAmarelaAdultoM");
var divInfVacFEBREAMARELAadultoMulheres = document.getElementById("infFebreAmarelaAdultoMulheresId");
var botaoFecharInfFEBREAMARELAadultoMulheres = document.getElementById("botaoFecharInfVacFebreAmarelaAdultoMulheres");

botaoInfVacFEBREAMARELAadultoMulheres.addEventListener("click", function(){
    divInfVacFEBREAMARELAadultoMulheres.style.display = "block";
    menuDeNavegacao.style.pointerEvents = "none";
    botaoAdulto.style.pointerEvents = "none";
    divVacAdulto.style.pointerEvents = "none";

    alturaAtual =  window.scrollY;
    window.scrollTo(0, document.body.scrollHeight);
})

botaoFecharInfFEBREAMARELAadultoMulheres.addEventListener("click", function(){
    divInfVacFEBREAMARELAadultoMulheres.style.display = "none";
    menuDeNavegacao.style.pointerEvents = "";
    botaoAdulto.style.pointerEvents = "";
    divVacAdulto.style.pointerEvents = ""; 

    window.scrollTo({top: alturaAtual})
})

var botaoInfVacINFLUENZA = document.getElementById("influenzaId");
var divInfVacINFLUENZA = document.getElementById("infInfluenzaId");
var botaoFecharInfINFLUENZA = document.getElementById("botaoFecharInfVacInfluenza");

botaoInfVacINFLUENZA.addEventListener("click", function(){
    divInfVacINFLUENZA.style.display = "block";
    menuDeNavegacao.style.pointerEvents = "none";
    botaoIdoso.style.pointerEvents = "none";
    divVacIdoso.style.pointerEvents = "none";

    alturaAtual =  window.scrollY;
    window.scrollTo(0, document.body.scrollHeight);
})

botaoFecharInfINFLUENZA.addEventListener("click", function(){
    divInfVacINFLUENZA.style.display = "none";
    menuDeNavegacao.style.pointerEvents = "";
    botaoIdoso.style.pointerEvents = "";
    divVacIdoso.style.pointerEvents = "";
    
    window.scrollTo({top: alturaAtual})
})

var botaoInfVacPNEUMONIA = document.getElementById("pneumoniaId");
var divInfVacPNEUMONIA = document.getElementById("infPneumoniaId");
var botaoFecharInfPNEUMONIA = document.getElementById("botaoFecharInfVacPneumonia");

botaoInfVacPNEUMONIA.addEventListener("click", function(){
    divInfVacPNEUMONIA.style.display = "block";
    menuDeNavegacao.style.pointerEvents = "none";
    botaoIdoso.style.pointerEvents = "none";
    divVacIdoso.style.pointerEvents = "none";
    
    alturaAtual =  window.scrollY;
    window.scrollTo(0, document.body.scrollHeight);
})

botaoFecharInfPNEUMONIA.addEventListener("click", function(){
    divInfVacPNEUMONIA.style.display = "none";
    menuDeNavegacao.style.pointerEvents = "";
    botaoIdoso.style.pointerEvents = "";
    divVacIdoso.style.pointerEvents = ""; 

    window.scrollTo({top: alturaAtual})
})

var botaoInfVacDUPLAADULTOidoso = document.getElementById("duplaAdultaIdoso");
var divInfVacDUPLAADULTOidoso = document.getElementById("infDuplaAdultoIdosoId");
var botaoFecharInfDUPLAADULTOidoso = document.getElementById("botaoFecharInfVacDuplaAdultoIdoso");

botaoInfVacDUPLAADULTOidoso.addEventListener("click", function(){
    divInfVacDUPLAADULTOidoso.style.display = "block";
    menuDeNavegacao.style.pointerEvents = "none";
    botaoIdoso.style.pointerEvents = "none";
    divVacIdoso.style.pointerEvents = "none";
    
    alturaAtual =  window.scrollY;
    window.scrollTo(0, document.body.scrollHeight);
})

botaoFecharInfDUPLAADULTOidoso.addEventListener("click", function(){
    divInfVacDUPLAADULTOidoso.style.display = "none";
    menuDeNavegacao.style.pointerEvents = "";
    botaoIdoso.style.pointerEvents = "";
    divVacIdoso.style.pointerEvents = ""; 

    window.scrollTo({top: alturaAtual})
})
