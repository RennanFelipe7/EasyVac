var IdadeDoLogadoExterno

var ckFakeBcgDose1 = document.getElementById("ckFakeBcgDose1")
var ckFakeBcgDose2 = document.getElementById("ckFakeBcgDose2")
var ckFakePolioDose1 = document.getElementById("ckFakePolioDose1")
var ckFakePolioDose2 = document.getElementById("ckFakePolioDose2")
var ckFakePolioDose3 = document.getElementById("ckFakePolioDose3")
var ckFakePolioDose4 = document.getElementById("ckFakePolioDose4")
var ckFakeTetraDose1 = document.getElementById("ckFakeTetraDose1")
var ckFakeTetraDose2 = document.getElementById("ckFakeTetraDose2")
var ckFakeTetraDose3 = document.getElementById("ckFakeTetraDose3")
var ckFakeTetraDose4 = document.getElementById("ckFakeTetraDose4")
var ckFakeDuplaDose1 = document.getElementById("ckFakeDuplaDose1")
var ckFakeDuplaDose2 = document.getElementById("ckFakeDuplaDose2")
var ckFakeDuplaDose3 = document.getElementById("ckFakeDuplaDose3")
var ckFakeDuplaDose4 = document.getElementById("ckFakeDuplaDose4")
var ckFakeTriplice = document.getElementById("ckFakeTriplice")
var ckFakeHepaDose1 = document.getElementById("ckFakeHepaDose1")
var ckFakeHepaDose2 = document.getElementById("ckFakeHepaDose2")
var ckFakeHepaDose3 = document.getElementById("ckFakeHepaDose3")
var ckFakeFebreDose1 = document.getElementById("ckFakeFebreDose1")
var ckFakeFebreDose2 = document.getElementById("ckFakeFebreDose2")
var ckFakeGripeDose1 = document.getElementById("ckFakeGripeDose1")
var ckFakeGripeDose2 = document.getElementById("ckFakeGripeDose2")
var ckFakePneuDose1 = document.getElementById("ckFakePneuDose1")
var ckFakePneuDose2 = document.getElementById("ckFakePneuDose2")


var statusAtualFebre, statusDupla, statusGripe, statusPneu
function AtualizaCoresVacHTML(bcgDose1,bcgDose2,poliomieliteDose1,poliomieliteDose2,poliomieliteDose3,
    poliomieliteDose4,tetraValenteDose1,tetraValenteDose2,tetraValenteDose3,tetraValenteDose4,tripliceViral,hepatiteBDose1,
    hepatiteBDose2,hepatiteBDose3,febreAmarelaDoseAtual,duplaAdultoDose1,duplaAdultoDose2,duplaAdultoDose3,gripe,pneumoniaDose1
    ,pneumoniaDose5Anos,IdadeDoLogado){
    IdadeDoLogadoExterno = IdadeDoLogado
    var btBcgDose1 = document.getElementById("btBcgDose1")
    var btBcgDose2 = document.getElementById("btBcgDose2")
    var btPoliomieliteDose1 = document.getElementById("poliomieliteDose1")
    var btPoliomieliteDose2 = document.getElementById("poliomieliteDose2")
    var btPoliomieliteDose3 = document.getElementById("poliomieliteDose3")
    var btPoliomieliteDose4 = document.getElementById("poliomieliteDose4")
    var btTetraValenteDose1 = document.getElementById("tetraValenteDose1")
    var btTetraValenteDose2 = document.getElementById("tetraValenteDose2")
    var btTetraValenteDose3 = document.getElementById("tetraValenteDose3")
    var btTetraValenteDose4 = document.getElementById("tetraValenteDose4")
    var btTripliceViral = document.getElementById("tripliceViral")
    var bthepatiteBDose1 = document.getElementById("hepatiteBDose1")
    var bthepatiteBDose2 = document.getElementById("hepatiteBDose2")
    var bthepatiteBDose3 = document.getElementById("hepatiteBDose3")
    var btFebreAmarelaDoseAtual = document.getElementById("febreAmarelaDoseAtual")
    var btDuplaAdultoDose1 = document.getElementById("duplaAdultoDose1")
    var btDuplaAdultoDose2 = document.getElementById("duplaAdultoDose2")
    var btDuplaAdultoDose3 = document.getElementById("duplaAdultoDose3")
    var btGripe = document.getElementById("gripe")
    var btPneumoniaDose1 = document.getElementById("pneumonia")
    var btPneumoniaDose5 = document.getElementById("pneumoniaReforco")
    if(IdadeDoLogado >= 0){
        if(bcgDose1 == false){
            btBcgDose1.checked = false
            ckFakeBcgDose1.style.backgroundColor = "red"
            ckFakeBcgDose1.style.borderColor = "#057fb7"
        }else{
            btBcgDose1.checked = true
            ckFakeBcgDose1.style.backgroundColor = "#11ff09"
            ckFakeBcgDose1.style.borderColor = "white"
        }
        if(bcgDose2 == false){
            btBcgDose2.checked = false
            ckFakeBcgDose2.style.backgroundColor = "red"
            ckFakeBcgDose2.style.borderColor = "#057fb7"
        }else{
            btBcgDose2.checked = true
            ckFakeBcgDose2.style.backgroundColor = "#11ff09"
            ckFakeBcgDose2.style.borderColor = "white"
        }
        if(poliomieliteDose1 == false){
            btPoliomieliteDose1.checked = false
            ckFakePolioDose1.style.backgroundColor = "red"
            ckFakePolioDose1.style.borderColor = "#057fb7"
        }else{
            btPoliomieliteDose1.checked = true
            ckFakePolioDose1.style.backgroundColor = "#11ff09"
            ckFakePolioDose1.style.borderColor = "white"
        }
        if(poliomieliteDose2 == false){
            btPoliomieliteDose2.checked = false
            ckFakePolioDose2.style.backgroundColor = "red"
            ckFakePolioDose2.style.borderColor = "#057fb7"
        }else{
            btPoliomieliteDose2.checked = true
            ckFakePolioDose2.style.backgroundColor = "#11ff09"
            ckFakePolioDose2.style.borderColor = "white"
        }
        if(poliomieliteDose3 == false){
            btPoliomieliteDose3.checked = false
            ckFakePolioDose3.style.backgroundColor = "red"
            ckFakePolioDose3.style.borderColor = "#057fb7"
        }else{
            btPoliomieliteDose3.checked = true
            ckFakePolioDose3.style.backgroundColor = "#11ff09"
            ckFakePolioDose3.style.borderColor = "white"
        }
        if(poliomieliteDose4 == false){
            btPoliomieliteDose4.checked = false
            ckFakePolioDose4.style.backgroundColor = "red"
            ckFakePolioDose4.style.borderColor = "#057fb7"
        }else{
            btPoliomieliteDose4.checked = true
            ckFakePolioDose4.style.backgroundColor = "#11ff09"
            ckFakePolioDose4.style.borderColor = "white"
        }
        if(tetraValenteDose1 == false){
            btTetraValenteDose1.checked = false
            ckFakeTetraDose1.style.backgroundColor = "red"
            ckFakeTetraDose1.style.borderColor = "#057fb7"
        }else{
            btTetraValenteDose1.checked = true
            ckFakeTetraDose1.style.backgroundColor = "#11ff09"
            ckFakeTetraDose1.style.borderColor = "white"
        }
        if(tetraValenteDose2 == false){
            btTetraValenteDose2.checked = false
            ckFakeTetraDose2.style.backgroundColor = "red"
            ckFakeTetraDose2.style.borderColor = "#057fb7"
        }else{
            btTetraValenteDose2.checked = true
            ckFakeTetraDose2.style.backgroundColor = "#11ff09"
            ckFakeTetraDose2.style.borderColor = "white"
        }
        if(tetraValenteDose3 == false){
            btTetraValenteDose3.checked = false
            ckFakeTetraDose3.style.backgroundColor = "red"
            ckFakeTetraDose3.style.borderColor = "#057fb7"
        }else{
            btTetraValenteDose3.checked = true
            ckFakeTetraDose3.style.backgroundColor = "#11ff09"
            ckFakeTetraDose3.style.borderColor = "white"
        }
        if(tetraValenteDose4 == false){
            btTetraValenteDose4.checked = false
            ckFakeTetraDose4.style.backgroundColor = "red"
            ckFakeTetraDose4.style.borderColor = "#057fb7"
        }else{
            btTetraValenteDose4.checked = true
            ckFakeTetraDose4.style.backgroundColor = "#11ff09"
            ckFakeTetraDose4.style.borderColor = "white"
        }
        if(tripliceViral == false){
            btTripliceViral.checked = false
            ckFakeTriplice.style.backgroundColor = "red"
            ckFakeTriplice.style.borderColor = "#057fb7"
        }else{
            btTripliceViral.checked = true
            ckFakeTriplice.style.backgroundColor = "#11ff09"
            ckFakeTriplice.style.borderColor = "white"
        }
        if(hepatiteBDose1 == false){
            bthepatiteBDose1.checked = false
            ckFakeHepaDose1.style.backgroundColor = "red"
            ckFakeHepaDose1.style.borderColor = "#057fb7"
        }else{
            bthepatiteBDose1.checked = true  
            ckFakeHepaDose1.style.backgroundColor = "#11ff09"
            ckFakeHepaDose1.style.borderColor = "white"
        }
        if(hepatiteBDose2 == false){
            bthepatiteBDose2.checked = false
            ckFakeHepaDose2.style.backgroundColor = "red"
            ckFakeHepaDose2.style.borderColor = "#057fb7"
        }else{
            bthepatiteBDose2.checked = true
            ckFakeHepaDose2.style.backgroundColor = "#11ff09"
            ckFakeHepaDose2.style.borderColor = "white"  
        }
        if(hepatiteBDose3 == false){
            bthepatiteBDose3.checked = false
            ckFakeHepaDose3.style.backgroundColor = "red"
            ckFakeHepaDose3.style.borderColor = "#057fb7"
        }else{
            bthepatiteBDose3.checked = true  
            ckFakeHepaDose3.style.backgroundColor = "#11ff09"
            ckFakeHepaDose3.style.borderColor = "white"
        }
        if(febreAmarelaDoseAtual == false){
            btFebreAmarelaDoseAtual.checked = false
            ckFakeFebreDose1.style.backgroundColor = "red"
            ckFakeFebreDose1.style.borderColor = "#057fb7"
        }else{
            btFebreAmarelaDoseAtual.checked = true
            ckFakeFebreDose1.style.backgroundColor = "#11ff09"
            ckFakeFebreDose1.style.borderColor = "white"
        }
        if(duplaAdultoDose1 == false){
            btDuplaAdultoDose1.checked = false
            ckFakeDuplaDose1.style.backgroundColor = "red"
            ckFakeDuplaDose1.style.borderColor = "#057fb7"
        }else{
            btDuplaAdultoDose1.checked = true
            ckFakeDuplaDose1.style.backgroundColor = "#11ff09"
            ckFakeDuplaDose1.style.borderColor = "white"
        }
        if(duplaAdultoDose2 == false){
            btDuplaAdultoDose2.checked = false
            ckFakeDuplaDose2.style.backgroundColor = "red"
            ckFakeDuplaDose2.style.borderColor = "#057fb7"
        }else{
            btDuplaAdultoDose2.checked = true
            ckFakeDuplaDose2.style.backgroundColor = "#11ff09"
            ckFakeDuplaDose2.style.borderColor = "white"
        }
        if(duplaAdultoDose3 == false){
            btDuplaAdultoDose3.checked = false
            ckFakeDuplaDose3.style.backgroundColor = "red"
            ckFakeDuplaDose3.style.borderColor = "#057fb7"
        }else{
            btDuplaAdultoDose3.checked = true
            ckFakeDuplaDose3.style.backgroundColor = "#11ff09"
            ckFakeDuplaDose3.style.borderColor = "white"
        }

        if(gripe == false){
            btGripe.checked = false
            ckFakeGripeDose1.style.backgroundColor = "red"
            ckFakeGripeDose1.style.borderColor = "#057fb7"
        }else{
            btGripe.checked = true
            ckFakeGripeDose1.style.backgroundColor = "#11ff09"
            ckFakeGripeDose1.style.borderColor = "white"
        }
        if(pneumoniaDose1 == false){
            btPneumoniaDose1.checked = false
            ckFakePneuDose1.style.backgroundColor = "red"
            ckFakePneuDose1.style.borderColor = "#057fb7"
        }else{
            btPneumoniaDose1.checked = true
            ckFakePneuDose1.style.backgroundColor = "#11ff09"
            ckFakePneuDose1.style.borderColor = "white"
        }
        if(pneumoniaDose5Anos == false){
            btPneumoniaDose5.checked = false
            ckFakePneuDose2.style.backgroundColor = "red"
            ckFakePneuDose2.style.borderColor = "#057fb7"
        }else{
            btPneumoniaDose5.checked = true
            ckFakePneuDose2.style.backgroundColor = "#11ff09"
            ckFakePneuDose2.style.borderColor = "white"
        }
    }
    statusAtualFebre = febreAmarelaDoseAtual
    statusDupla = duplaAdultoDose3
    statusGripe = gripe
    statusPneu = pneumoniaDose1
}

var somSucesso = new Audio ('../sons/Sucesso.mp3')
var somAtencao = new Audio ('../sons/Atencao.mp3')
var btBcgDose2 = document.getElementById("btBcgDose2")
var btPoliomieliteDose1 = document.getElementById("poliomieliteDose1")
var btPoliomieliteDose2 = document.getElementById("poliomieliteDose2")
var btPoliomieliteDose3 = document.getElementById("poliomieliteDose3")
var btPoliomieliteDose4 = document.getElementById("poliomieliteDose4")

var btTetraValenteDose1 = document.getElementById("tetraValenteDose1")
var btTetraValenteDose2 = document.getElementById("tetraValenteDose2")
var btTetraValenteDose3 = document.getElementById("tetraValenteDose3")
var btTetraValenteDose4 = document.getElementById("tetraValenteDose4")


var btTripliceViral = document.getElementById("tripliceViral")

var bthepatiteBDose1= document.getElementById("hepatiteBDose1")
var bthepatiteBDose2 = document.getElementById("hepatiteBDose2")
var bthepatiteBDose3 = document.getElementById("hepatiteBDose3")

var btFebreAmarelaDoseAtual = document.getElementById("febreAmarelaDoseAtual")

var btDuplaAdultoDose1 = document.getElementById("duplaAdultoDose1")
var btDuplaAdultoDose2 = document.getElementById("duplaAdultoDose2")
var btDuplaAdultoDose3 = document.getElementById("duplaAdultoDose3")
var btDuplaAdultoDose4 = document.getElementById("duplaAdultoDose10Anos")

var btGripe = document.getElementById("gripe")
btGripe.addEventListener("click", function(){
    if(IdadeDoLogadoExterno < 720){
        alert("A vacina da gripe não é adequada para a sua faixa etária")
        btGripe.checked = false
    }
})

var btPneumoniaDose1 = document.getElementById("pneumonia")
var btPneumoniaDose5 = document.getElementById("pneumoniaReforco")

btPneumoniaDose1.addEventListener("click", function(){
    if(IdadeDoLogadoExterno < 720){
        alert("A primeria dose da vacina contra a pneumonia não é adequada para a sua faixa etária")
        btPneumoniaDose1.checked = false
    }
})
btPneumoniaDose5.addEventListener("click", function(){
    if(IdadeDoLogadoExterno < 720){
        alert("A dose de reforço da vacina contra a pneumonia não é adequada para a sua faixa etária")
        btPneumoniaDose5.checked = false
    }
})

var setaBCG = document.getElementById("setaBCGid")
var escondeBCG = document.getElementById("escondeBCG")
var dosesBCG = document.getElementById("dosesBCG")


setaBCG.addEventListener("click", function(){
    if(escondeBCG.style.display == "none" || escondeBCG.style.display == ''){
        setTimeout( function(){
            escondeBCG.style.display = "block"
        }, 500);
        dosesBCG.style.height = "calc(10vmax + 6vmin)" 
        setaBCG.style.transform = "rotate("+180+"deg)"
        setaBCG.style.transitionDuration = "0.5s"
        setaBCG.setAttribute.title = "Fechar"

        divinsereHorario.style.display = "none"
        divinsereHorarioBcgDose2.style.display = "none"
    }else{
        escondeBCG.style.display = "none"
        dosesBCG.style.height = "0vh"
        setaBCG.style.transform = "rotate("+360+"deg)"
        setaBCG.style.transitionDuration = "0.5s"

        divinsereHorario.style.display = "none"
        divinsereHorarioBcgDose2.style.display = "none"
        ckFakeBcgDose2.style.pointerEvents = ""
        ckFakeBcgDose1.style.pointerEvents = ""
    }

})

var setaPolio = document.getElementById("setaPolio")
var escondePolio = document.getElementById("escondePolio")
var dosesPolio = document.getElementById("dosesPolio")

setaPolio.addEventListener("click", function(){
    if(escondePolio.style.display == "none" || escondePolio.style.display == ''){
        setTimeout( function(){
            escondePolio.style.display = "block"
        }, 1000);
        dosesPolio.style.height = "calc(20vmax + 10vmin)"
        setaPolio.style.transform = "rotate("+180+"deg)"
        setaPolio.style.transitionDuration = "1s"
        setaPolio.setAttribute.title = "Fechar"

        divinsereHorarioPolioDose1.style.display = "none"
        divinsereHorarioPolioDose2.style.display = "none"
        divinsereHorarioPolioDose3.style.display = "none"
        divinsereHorarioPolioDose4.style.display = "none"
    }else{
        escondePolio.style.display = "none"
        dosesPolio.style.height = "0vh"
        setaPolio.style.transform = "rotate("+360+"deg)"
        setaPolio.style.transitionDuration = "0.5s"

        divinsereHorarioPolioDose1.style.display = "none"
        divinsereHorarioPolioDose2.style.display = "none"
        divinsereHorarioPolioDose3.style.display = "none"
        divinsereHorarioPolioDose4.style.display = "none"
        ckFakePolioDose1.style.pointerEvents = ""
        ckFakePolioDose2.style.pointerEvents = ""
        ckFakePolioDose3.style.pointerEvents = ""
        ckFakePolioDose4.style.pointerEvents = ""
    }

})

var setaTetra = document.getElementById("setaTetra")
var escondeTetra = document.getElementById("escondeTetra")
var dosesTetra= document.getElementById("dosesTetra")

setaTetra.addEventListener("click", function(){
    if(escondeTetra.style.display == "none" || escondeTetra.style.display == ''){
        setTimeout( function(){
            escondeTetra.style.display = "block"
        }, 1000);
        dosesTetra.style.height = "calc(20vmax + 10vmin)"
        setaTetra.style.transform = "rotate("+180+"deg)"
        setaTetra.style.transitionDuration = "1s"
        setaTetra.setAttribute.title = "Fechar"

        divinsereHorarioTetraDose1.style.display = "none"
        divinsereHorarioTetraDose2.style.display = "none"
        divinsereHorarioTetraDose3.style.display = "none"
        divinsereHorarioTetraDose4.style.display = "none"
    }else{
        escondeTetra.style.display = "none"
        dosesTetra.style.height = "0vh"
        setaTetra.style.transform = "rotate("+360+"deg)"
        setaTetra.style.transitionDuration = "0.5s"

        divinsereHorarioTetraDose1.style.display = "none"
        divinsereHorarioTetraDose2.style.display = "none"
        divinsereHorarioTetraDose3.style.display = "none"
        divinsereHorarioTetraDose4.style.display = "none"
        ckFakeTetraDose1.style.pointerEvents = ""
        ckFakeTetraDose2.style.pointerEvents = ""
        ckFakeTetraDose3.style.pointerEvents = ""
        ckFakeTetraDose4.style.pointerEvents = ""
    }

})

var setaTriplice = document.getElementById("setaTriplice")
var escondeTriplice = document.getElementById("escondeTriplice")
var dosesTriplice = document.getElementById("dosesTriplice")

setaTriplice.addEventListener("click", function(){
    if(escondeTriplice.style.display == "none" || escondeTriplice.style.display == ''){
        setTimeout( function(){
            escondeTriplice.style.display = "block"
        }, 1000);
        dosesTriplice.style.height = "calc(5vmax + 4vmin)"
        setaTriplice.style.transform = "rotate("+180+"deg)"
        setaTriplice.style.transitionDuration = "0.25s"
        setaTriplice.setAttribute.title = "Fechar"

        divinsereHorarioTripliceDose1.style.display = "none"
    }else{
        escondeTriplice.style.display = "none"
        dosesTriplice.style.height = "0vh"
        setaTriplice.style.transform = "rotate("+360+"deg)"
        setaTriplice.style.transitionDuration = "0.5s"

        divinsereHorarioTripliceDose1.style.display = "none"
        ckFakeTriplice.style.pointerEvents = ""
    }

})


var setaHepB = document.getElementById("setaHepB")
var escondeHepB = document.getElementById("escondeHepB")
var dosesHepB = document.getElementById("dosesHepB")

setaHepB.addEventListener("click", function(){
    if(escondeHepB.style.display == "none" || escondeHepB.style.display == ''){
        setTimeout( function(){
            escondeHepB.style.display = "block"
        }, 1000);
        dosesHepB.style.height = "calc(16vmax + 6vmin)"
        setaHepB.style.transform = "rotate("+180+"deg)"
        setaHepB.style.transitionDuration = "1s"
        setaHepB.setAttribute.title = "Fechar"

        divinsereHorarioHepBDose1.style.display = "none"
        divinsereHorarioHepBDose2.style.display = "none"
        divinsereHorarioHepBDose3.style.display = "none"
    }else{
        escondeHepB.style.display = "none"
        dosesHepB.style.height = "0vh"
        setaHepB.style.transform = "rotate("+360+"deg)"
        setaHepB.style.transitionDuration = "0.5s"

        divinsereHorarioHepBDose1.style.display = "none"
        divinsereHorarioHepBDose2.style.display = "none"
        divinsereHorarioHepBDose3.style.display = "none"

        ckFakeHepaDose1.style.pointerEvents = ""
        ckFakeHepaDose2.style.pointerEvents = ""
        ckFakeHepaDose3.style.pointerEvents = ""
    }

})

var setaFebre = document.getElementById("setaFebre")
var escondeFebre = document.getElementById("escondeFebre")
var dosesFebre = document.getElementById("dosesFebre")

setaFebre.addEventListener("click", function(){
    if(escondeFebre.style.display == "none" || escondeFebre.style.display == ''){
        setTimeout( function(){
            escondeFebre.style.display = "block"
        }, 1000);
        dosesFebre.style.height = "calc(10vmax + 6vmin + 6vmin)"
        setaFebre.style.transform = "rotate("+180+"deg)"
        setaFebre.style.transitionDuration = "1s"
        setaFebre.setAttribute.title = "Fechar"

        divinsereHorarioFebreDose1.style.display = "none"
        divinsereHorarioFebreDose2.style.display = "none"
    }else{
        escondeFebre.style.display = "none"
        dosesFebre.style.height = "0vh"
        setaFebre.style.transform = "rotate("+360+"deg)"
        setaFebre.style.transitionDuration = "0.5s"

        divinsereHorarioFebreDose1.style.display = "none"
        divinsereHorarioFebreDose2.style.display = "none"

        ckFakeFebreDose1.style.pointerEvents = ""
        ckFakeFebreDose2.style.pointerEvents = ""
    }

})


var setaDupla = document.getElementById("setaDupla")
var escondeDupla = document.getElementById("escondeDupla")
var dosesDupla = document.getElementById("dosesDupla")

setaDupla.addEventListener("click", function(){
    if(escondeDupla.style.display == "none" || escondeDupla.style.display == ''){
        setTimeout( function(){
            escondeDupla.style.display = "block"
        }, 1000);
        dosesDupla.style.height = "calc(20vmax + 10vmin + 6vmin)"
        setaDupla.style.transform = "rotate("+180+"deg)"
        setaDupla.style.transitionDuration = "1s"
        setaDupla.setAttribute.title = "Fechar"

        divinsereHorarioDuplaDose1.style.display = "none"
        divinsereHorarioDuplaDose2.style.display = "none"
        divinsereHorarioDuplaDose3.style.display = "none"
        divinsereHorarioDuplaDose4.style.display = "none"
    }else{
        escondeDupla.style.display = "none"
        dosesDupla.style.height = "0vh"
        setaDupla.style.transform = "rotate("+360+"deg)"
        setaDupla.style.transitionDuration = "0.5s"
    }

})


var setaGripe = document.getElementById("setaGripe")
var escondeGripe = document.getElementById("escondeGripe")
var dosesGripe = document.getElementById("dosesGripe")

setaGripe.addEventListener("click", function(){
    if(escondeGripe.style.display == "none" || escondeGripe.style.display == ''){
        setTimeout( function(){
            escondeGripe.style.display = "block"
        }, 1000);
        dosesGripe.style.height = "calc(10vmax + 6vmin + 6vmin)"
        setaGripe.style.transform = "rotate("+180+"deg)"
        setaGripe.style.transitionDuration = "1s"
        setaGripe.setAttribute.title = "Fechar"

        divinsereHorarioGripeDose1.style.display = "none"
        divinsereHorarioGripeDose2.style.display = "none"

    }else{
        escondeGripe.style.display = "none"
        dosesGripe.style.height = "0vh"
        setaGripe.style.transform = "rotate("+360+"deg)"
        setaGripe.style.transitionDuration = "0.5s"

        divinsereHorarioGripeDose1.style.display = "none"
        divinsereHorarioGripeDose2.style.display = "none"

        ckFakeGripeDose1.style.pointerEvents = ""
        ckFakeGripeDose2.style.pointerEvents = ""
    }

})


var setaPneu = document.getElementById("setaPneu")
var escondePneu = document.getElementById("escondePneu")
var dosesPneu = document.getElementById("dosesPneu")

setaPneu.addEventListener("click", function(){
    if(escondePneu.style.display == "none" || escondePneu.style.display == ''){
        setTimeout( function(){
            escondePneu.style.display = "block"
        }, 1000);
        dosesPneu.style.height = "calc(10vmax + 6vmin + 6vmin)"
        setaPneu.style.transform = "rotate("+180+"deg)"
        setaPneu.style.transitionDuration = "1s"
        setaPneu.setAttribute.title = "Fechar"

        divinsereHorarioPneuDose1.style.display = "none"
        divinsereHorarioPneuDose2.style.display = "none"
    }else{
        escondePneu.style.display = "none"
        dosesPneu.style.height = "0vh"
        setaPneu.style.transform = "rotate("+360+"deg)"
        setaPneu.style.transitionDuration = "0.5s"

        divinsereHorarioPneuDose1.style.display = "none"
        divinsereHorarioPneuDose2.style.display = "none"

        ckFakePneuDose1.style.pointerEvents = ""
        ckFakePneuDose2.style.pointerEvents = ""
    }

})

var data = new Date();
var diaAtual = String(data.getDate()).padStart(2, '0');
var mesAtual = String(data.getMonth() + 1).padStart(2, '0');
var anoAtual = data.getFullYear();

var febreAmarelaDose10Anos = document.getElementById("febreAmarelaDose10Anos")

var gripeReforco = document.getElementById("gripeReforco")


var pneumoniaReforco = document.getElementById("pneumoniaReforco")

var divinsereHorario = document.getElementById("insereHorarioBcgDose1")
var btBcgDose1 = document.getElementById("btBcgDose1")
ckFakeBcgDose1.addEventListener("click", function(){
    if(ckFakeBcgDose1.style.backgroundColor == "red" || ckFakeBcgDose1.style.backgroundColor == ""){
        ckFakeBcgDose1.style.backgroundColor = "#11ff09"
        ckFakeBcgDose1.style.borderColor = "white"
        btBcgDose1.checked = true
        somSucesso.play()
        somAtencao.pause()
        somSucesso.currentTime = 0

        ckFakeBcgDose2.style.pointerEvents = "none"
        ckFakeBcgDose1.style.pointerEvents = "none"
        setTimeout(function(){
            divinsereHorario.style.display = "block" 
            ckFakeBcgDose1.style.pointerEvents = ""
        }, 800);
        dosesBCG.style.height = "calc(30vmax + 8vmin)" 
    }else{
        ckFakeBcgDose1.style.backgroundColor = "red"
        ckFakeBcgDose1.style.borderColor = "#057fb7"
        btBcgDose1.checked = false
        somAtencao.play()
        somSucesso.pause()
        somAtencao.currentTime = 0

        divinsereHorario.style.display = "none"
        dosesBCG.style.height = "calc(10vmax + 6vmin)"
        ckFakeBcgDose2.style.pointerEvents = ""
    }
})

var marcaDataBcgDose1 = document.getElementById("marcaDataBcgDose1")
marcaDataBcgDose1.addEventListener("click", function(){
    divinsereHorario.style.display = "none"
    dosesBCG.style.height = "calc(10vmax + 6vmin)"
    ckFakeBcgDose2.style.pointerEvents = ""
})


var divinsereHorarioBcgDose2 = document.getElementById("insereHorarioBcgDose2")
ckFakeBcgDose2.addEventListener("click", function(){
    if(IdadeDoLogadoExterno < 72){
        alert("A segunda dose da BCG ID não é adequada para a sua faixa etária !")
        btBcgDose2.checked = false
    }else{
        if(ckFakeBcgDose2.style.backgroundColor == "red" || ckFakeBcgDose2.style.backgroundColor == ""){
            ckFakeBcgDose2.style.backgroundColor = "#11ff09"
            ckFakeBcgDose2.style.borderColor = "white"
            btBcgDose2.checked = true
            somSucesso.play()
            somAtencao.pause()
            somSucesso.currentTime = 0

            ckFakeBcgDose1.style.pointerEvents = "none"
            ckFakeBcgDose2.style.pointerEvents = "none"
            setTimeout(function(){
                divinsereHorarioBcgDose2.style.display = "block"
                ckFakeBcgDose2.style.pointerEvents = ""
            }, 800);
            dosesBCG.style.height = "calc(30vmax + 8vmin)"
        }else{
            ckFakeBcgDose2.style.backgroundColor = "red"
            ckFakeBcgDose2.style.borderColor = "#057fb7"
            btBcgDose2.checked = false
            somAtencao.play()
            somSucesso.pause()
            somAtencao.currentTime = 0

            divinsereHorarioBcgDose2.style.display = "none"
            dosesBCG.style.height = "calc(10vmax + 6vmin)"
            ckFakeBcgDose1.style.pointerEvents = ""
        }
    }
})

var marcaDataBcgDose2 = document.getElementById("marcaDataBcgDose2")
marcaDataBcgDose2.addEventListener("click", function(){
    divinsereHorarioBcgDose2.style.display = "none"
    dosesBCG.style.height = "calc(10vmax + 6vmin)"
    ckFakeBcgDose1.style.pointerEvents = ""
})

var divinsereHorarioPolioDose1 = document.getElementById("insereHorarioPolioDose1")
ckFakePolioDose1.addEventListener("click", function(){
    if(IdadeDoLogadoExterno < 2){
        alert("A primeira dose da Poliomielite não é adequada para a sua faixa etária !")
        btPoliomieliteDose1.checked = false
    }else{
        if(ckFakePolioDose1.style.backgroundColor == "red" || ckFakePolioDose1.style.backgroundColor == ""){
            ckFakePolioDose1.style.backgroundColor = "#11ff09"
            ckFakePolioDose1.style.borderColor = "white"
            btPoliomieliteDose1.checked = true
            somSucesso.play()
            somAtencao.pause()
            somSucesso.currentTime = 0

            ckFakePolioDose1.style.pointerEvents = "none"
            ckFakePolioDose2.style.pointerEvents = "none"
            ckFakePolioDose3.style.pointerEvents = "none"
            ckFakePolioDose4.style.pointerEvents = "none"
            setTimeout(function(){
                divinsereHorarioPolioDose1.style.display = "block"
                ckFakePolioDose1.style.pointerEvents = ""
            }, 1300);
            dosesPolio.style.height = "calc(40vmax + 12vmin)"
        }else{
            ckFakePolioDose1.style.backgroundColor = "red"
            ckFakePolioDose1.style.borderColor = "#057fb7"
            btPoliomieliteDose1.checked = false
            somAtencao.play()
            somSucesso.pause()
            somAtencao.currentTime = 0

            divinsereHorarioPolioDose1.style.display = "none"
            dosesPolio.style.height = "calc(20vmax + 10vmin)"
            ckFakePolioDose2.style.pointerEvents = ""
            ckFakePolioDose3.style.pointerEvents = ""
            ckFakePolioDose4.style.pointerEvents = ""
        }
    }
})
var marcaDataPolioDose1 = document.getElementById("marcaDataPolioDose1")
marcaDataPolioDose1.addEventListener("click", function(){
    divinsereHorarioPolioDose1.style.display = "none"
    dosesPolio.style.height = "calc(20vmax + 10vmin)"
    ckFakePolioDose2.style.pointerEvents = ""
    ckFakePolioDose3.style.pointerEvents = ""
    ckFakePolioDose4.style.pointerEvents = ""
})

var divinsereHorarioPolioDose2 = document.getElementById("insereHorarioPolioDose2")
ckFakePolioDose2.addEventListener("click", function(){
    if(IdadeDoLogadoExterno < 4){
        alert("A segunda dose da Poliomielite não é adequada para a sua faixa etária !")
        btPoliomieliteDose2.checked = false
    }else{
        if(ckFakePolioDose2.style.backgroundColor == "red" || ckFakePolioDose2.style.backgroundColor == ""){
            ckFakePolioDose2.style.backgroundColor = "#11ff09"
            ckFakePolioDose2.style.borderColor = "white"
            btPoliomieliteDose2.checked = true
            somSucesso.play()
            somAtencao.pause()
            somSucesso.currentTime = 0

            ckFakePolioDose1.style.pointerEvents = "none"
            ckFakePolioDose2.style.pointerEvents = "none"
            ckFakePolioDose3.style.pointerEvents = "none"
            ckFakePolioDose4.style.pointerEvents = "none"
            setTimeout(function(){
                divinsereHorarioPolioDose2.style.display = "block"
                ckFakePolioDose2.style.pointerEvents = ""
            }, 1300);
            dosesPolio.style.height = "calc(40vmax + 12vmin)"
        }else{
            ckFakePolioDose2.style.backgroundColor = "red"
            ckFakePolioDose2.style.borderColor = "#057fb7"
            btPoliomieliteDose2.checked = false
            somAtencao.play()
            somSucesso.pause()
            somAtencao.currentTime = 0

            divinsereHorarioPolioDose2.style.display = "none"
            dosesPolio.style.height = "calc(20vmax + 10vmin)"
            ckFakePolioDose1.style.pointerEvents = ""
            ckFakePolioDose3.style.pointerEvents = ""
            ckFakePolioDose4.style.pointerEvents = ""
        }
    }
})

var marcaDataPolioDose2 = document.getElementById("marcaDataPolioDose2")
marcaDataPolioDose2.addEventListener("click", function(){
    divinsereHorarioPolioDose2.style.display = "none"
    dosesPolio.style.height = "calc(20vmax + 10vmin)"
    ckFakePolioDose1.style.pointerEvents = ""
    ckFakePolioDose3.style.pointerEvents = ""
    ckFakePolioDose4.style.pointerEvents = ""
})

var divinsereHorarioPolioDose3 = document.getElementById("insereHorarioPolioDose3")
ckFakePolioDose3.addEventListener("click", function(){
    if(IdadeDoLogadoExterno < 6){
        alert("A terceira dose da Poliomielite não é adequada para a sua faixa etária !")
        btPoliomieliteDose3.checked = false
    }else{
        if(ckFakePolioDose3.style.backgroundColor == "red" || ckFakePolioDose3.style.backgroundColor == ""){
            ckFakePolioDose3.style.backgroundColor = "#11ff09"
            ckFakePolioDose3.style.borderColor = "white"
            btPoliomieliteDose3.checked = true
            somSucesso.play()
            somAtencao.pause()
            somSucesso.currentTime = 0

            ckFakePolioDose1.style.pointerEvents = "none"
            ckFakePolioDose2.style.pointerEvents = "none"
            ckFakePolioDose3.style.pointerEvents = "none"
            ckFakePolioDose4.style.pointerEvents = "none"
            setTimeout(function(){
                divinsereHorarioPolioDose3.style.display = "block"
                ckFakePolioDose3.style.pointerEvents = ""
            }, 1300);
            dosesPolio.style.height = "calc(40vmax + 12vmin)"
        }else{
            ckFakePolioDose3.style.backgroundColor = "red"
            ckFakePolioDose3.style.borderColor = "#057fb7"
            btPoliomieliteDose3.checked = false
            somAtencao.play()
            somSucesso.pause()
            somAtencao.currentTime = 0

            divinsereHorarioPolioDose3.style.display = "none"
            dosesPolio.style.height = "calc(20vmax + 10vmin)"
            ckFakePolioDose1.style.pointerEvents = ""
            ckFakePolioDose2.style.pointerEvents = ""
            ckFakePolioDose4.style.pointerEvents = ""
        }
    }
})
var marcaDataPolioDose3 = document.getElementById("marcaDataPolioDose3")
marcaDataPolioDose3.addEventListener("click", function(){
    divinsereHorarioPolioDose3.style.display = "none"
    dosesPolio.style.height = "calc(20vmax + 10vmin)"
    ckFakePolioDose1.style.pointerEvents = ""
    ckFakePolioDose2.style.pointerEvents = ""
    ckFakePolioDose4.style.pointerEvents = ""
})

var divinsereHorarioPolioDose4 = document.getElementById("insereHorarioPolioDose4")
ckFakePolioDose4.addEventListener("click", function(){
    if(IdadeDoLogadoExterno < 15){
        alert("A quarta dose da Poliomielite não é adequada para a sua faixa etária !")
        btPoliomieliteDose4.checked = false
    }else{
        if(ckFakePolioDose4.style.backgroundColor == "red" || ckFakePolioDose4.style.backgroundColor == ""){
            ckFakePolioDose4.style.backgroundColor = "#11ff09"
            ckFakePolioDose4.style.borderColor = "white"
            btPoliomieliteDose4.checked = true
            somSucesso.play()
            somAtencao.pause()
            somSucesso.currentTime = 0

            ckFakePolioDose1.style.pointerEvents = "none"
            ckFakePolioDose2.style.pointerEvents = "none"
            ckFakePolioDose3.style.pointerEvents = "none"
            ckFakePolioDose4.style.pointerEvents = "none"
            setTimeout(function(){
                divinsereHorarioPolioDose4.style.display = "block"
                ckFakePolioDose4.style.pointerEvents = ""
            }, 1300);
            dosesPolio.style.height = "calc(40vmax + 12vmin)"
        }else{
            ckFakePolioDose4.style.backgroundColor = "red"
            ckFakePolioDose4.style.borderColor = "#057fb7"
            btPoliomieliteDose4.checked = false
            somAtencao.play()
            somSucesso.pause()
            somAtencao.currentTime = 0

            divinsereHorarioPolioDose4.style.display = "none"
            dosesPolio.style.height = "calc(20vmax + 10vmin)"
            ckFakePolioDose1.style.pointerEvents = ""
            ckFakePolioDose2.style.pointerEvents = ""
            ckFakePolioDose3.style.pointerEvents = ""
        }
    }
})
var marcaDataPolioDose4 = document.getElementById("marcaDataPolioDose4")
marcaDataPolioDose4.addEventListener("click", function(){
    divinsereHorarioPolioDose4.style.display = "none"
    dosesPolio.style.height = "calc(20vmax + 10vmin)"
    ckFakePolioDose1.style.pointerEvents = ""
    ckFakePolioDose2.style.pointerEvents = ""
    ckFakePolioDose3.style.pointerEvents = ""
})

var divinsereHorarioTetraDose1 = document.getElementById("insereHorarioTetraDose1")
ckFakeTetraDose1.addEventListener("click", function(){
    if(IdadeDoLogadoExterno < 2){
        alert("A primeira dose da Tetravalente não é adequada para a sua faixa etária !")
        btTetraValenteDose1.checked = false
    }else{
        if(ckFakeTetraDose1.style.backgroundColor == "red" || ckFakeTetraDose1.style.backgroundColor == ""){
            ckFakeTetraDose1.style.backgroundColor = "#11ff09"
            ckFakeTetraDose1.style.borderColor = "white"
            btTetraValenteDose1.checked = true
            somSucesso.play()
            somAtencao.pause()
            somSucesso.currentTime = 0

            ckFakeTetraDose1.style.pointerEvents = "none"
            ckFakeTetraDose2.style.pointerEvents = "none"
            ckFakeTetraDose3.style.pointerEvents = "none"
            ckFakeTetraDose4.style.pointerEvents = "none"
            setTimeout(function(){
                divinsereHorarioTetraDose1.style.display = "block"
                ckFakeTetraDose1.style.pointerEvents = ""
            }, 1300);
            dosesTetra.style.height = "calc(40vmax + 12vmin)"
        }else{
            ckFakeTetraDose1.style.backgroundColor = "red"
            ckFakeTetraDose1.style.borderColor = "#057fb7"
            btTetraValenteDose1.checked = false
            somAtencao.play()
            somSucesso.pause()
            somAtencao.currentTime = 0

            divinsereHorarioTetraDose1.style.display = "none"
            dosesTetra.style.height = "calc(20vmax + 10vmin)"
            ckFakeTetraDose2.style.pointerEvents = ""
            ckFakeTetraDose3.style.pointerEvents = ""
            ckFakeTetraDose4.style.pointerEvents = ""
        }
    }
})
var marcaDataTetraDose1 = document.getElementById("marcaDataTetraDose1")
marcaDataTetraDose1.addEventListener("click", function(){
    divinsereHorarioTetraDose1.style.display = "none"
    dosesTetra.style.height = "calc(20vmax + 10vmin)"
    ckFakeTetraDose2.style.pointerEvents = ""
    ckFakeTetraDose3.style.pointerEvents = ""
    ckFakeTetraDose4.style.pointerEvents = ""
})

var divinsereHorarioTetraDose2 = document.getElementById("insereHorarioTetraDose2")
ckFakeTetraDose2.addEventListener("click", function(){
    if(IdadeDoLogadoExterno < 4){
        alert("A segunda dose da Tetravalente não é adequada para a sua faixa etária !")
        btTetraValenteDose2.checked = false
    }else{
        if(ckFakeTetraDose2.style.backgroundColor == "red" || ckFakeTetraDose2.style.backgroundColor == ""){
            ckFakeTetraDose2.style.backgroundColor = "#11ff09"
            ckFakeTetraDose2.style.borderColor = "white"
            btTetraValenteDose2.checked = true
            somSucesso.play()
            somAtencao.pause()
            somSucesso.currentTime = 0

            ckFakeTetraDose1.style.pointerEvents = "none"
            ckFakeTetraDose2.style.pointerEvents = "none"
            ckFakeTetraDose3.style.pointerEvents = "none"
            ckFakeTetraDose4.style.pointerEvents = "none"
            setTimeout(function(){
                divinsereHorarioTetraDose2.style.display = "block"
                ckFakeTetraDose2.style.pointerEvents = ""
            }, 1300);
            dosesTetra.style.height = "calc(40vmax + 12vmin)"
        }else{
            ckFakeTetraDose2.style.backgroundColor = "red"
            ckFakeTetraDose2.style.borderColor = "#057fb7"
            btTetraValenteDose2.checked = false
            somAtencao.play()
            somSucesso.pause()
            somAtencao.currentTime = 0

            divinsereHorarioTetraDose2.style.display = "none"
            dosesTetra.style.height = "calc(20vmax + 10vmin)"
            ckFakeTetraDose1.style.pointerEvents = ""
            ckFakeTetraDose3.style.pointerEvents = ""
            ckFakeTetraDose4.style.pointerEvents = ""
        }
    }
})
var marcaDataTetraDose2 = document.getElementById("marcaDataTetraDose2")
marcaDataTetraDose2.addEventListener("click", function(){
    divinsereHorarioTetraDose2.style.display = "none"
    dosesTetra.style.height = "calc(20vmax + 10vmin)"
    ckFakeTetraDose1.style.pointerEvents = ""
    ckFakeTetraDose3.style.pointerEvents = ""
    ckFakeTetraDose4.style.pointerEvents = ""
})

var divinsereHorarioTetraDose3 = document.getElementById("insereHorarioTetraDose3")
ckFakeTetraDose3.addEventListener("click", function(){
    if(IdadeDoLogadoExterno < 6){
        alert("A terceira dose da Tetravalente não é adequada para a sua faixa etária !")
        btTetraValenteDose3.checked = false
    }else{
        if(ckFakeTetraDose3.style.backgroundColor == "red" || ckFakeTetraDose3.style.backgroundColor == ""){
            ckFakeTetraDose3.style.backgroundColor = "#11ff09"
            ckFakeTetraDose3.style.borderColor = "white"
            btTetraValenteDose3.checked = true
            somSucesso.play()
            somAtencao.pause()
            somSucesso.currentTime = 0

            ckFakeTetraDose1.style.pointerEvents = "none"
            ckFakeTetraDose2.style.pointerEvents = "none"
            ckFakeTetraDose3.style.pointerEvents = "none"
            ckFakeTetraDose4.style.pointerEvents = "none"
            setTimeout(function(){
                divinsereHorarioTetraDose3.style.display = "block"
                ckFakeTetraDose3.style.pointerEvents = ""
            }, 1300);
            dosesTetra.style.height = "calc(40vmax + 12vmin)"
        }else{
            ckFakeTetraDose3.style.backgroundColor = "red"
            ckFakeTetraDose3.style.borderColor = "#057fb7"
            btTetraValenteDose3.checked = false
            somAtencao.play()
            somSucesso.pause()
            somAtencao.currentTime = 0

            divinsereHorarioTetraDose3.style.display = "none"
            dosesTetra.style.height = "calc(20vmax + 10vmin)"
            ckFakeTetraDose1.style.pointerEvents = ""
            ckFakeTetraDose2.style.pointerEvents = ""
            ckFakeTetraDose4.style.pointerEvents = ""
        }
    }
})
var marcaDataTetraDose3 = document.getElementById("marcaDataTetraDose3")
marcaDataTetraDose3.addEventListener("click", function(){
    divinsereHorarioTetraDose3.style.display = "none"
    dosesTetra.style.height = "calc(20vmax + 10vmin)"
    ckFakeTetraDose1.style.pointerEvents = ""
    ckFakeTetraDose2.style.pointerEvents = ""
    ckFakeTetraDose4.style.pointerEvents = ""
})

var divinsereHorarioTetraDose4 = document.getElementById("insereHorarioTetraDose4")
ckFakeTetraDose4.addEventListener("click", function(){
    var AtualizaMomentaneamente = document.getElementById("dataDeReforcoDuplaAdulto")
    if(IdadeDoLogadoExterno < 15){
        alert("A quarta dose da Tetravalente não é adequada para a sua faixa etária !")
        btTetraValenteDose4.checked = false
    }else{
        if(ckFakeTetraDose4.style.backgroundColor == "red" || ckFakeTetraDose4.style.backgroundColor == ""){
            var dataMomento = dataAtualMarcaVacTetraDose4.value
            AtualizaMomentaneamente.textContent = "DATA DE REFORÇO: " + dataMomento.substring(8, 10) + "/" + dataMomento.substring(5, 7) + "/" + (parseInt (dataMomento.substring(0, 4)) + 10 )
            dataAtualMarcaVacTetraDose4.addEventListener("change", function(){
                dataMomento = dataAtualMarcaVacTetraDose4.value
                AtualizaMomentaneamente.textContent = "DATA DE REFORÇO: " + dataMomento.substring(8, 10) + "/" + dataMomento.substring(5, 7) + "/" + (parseInt (dataMomento.substring(0, 4)) + 10 )
                if(AtualizaMomentaneamente.textContent.substring(19, 22) == "NaN"){
                    AtualizaMomentaneamente.textContent = "DATA DE REFORÇO: " + "--/--/-----"
                }
            })
            
            ckFakeTetraDose4.style.backgroundColor = "#11ff09"
            ckFakeTetraDose4.style.borderColor = "white"
            btTetraValenteDose4.checked = true
            somSucesso.play()
            somAtencao.pause()
            somSucesso.currentTime = 0

            ckFakeTetraDose1.style.pointerEvents = "none"
            ckFakeTetraDose2.style.pointerEvents = "none"
            ckFakeTetraDose3.style.pointerEvents = "none"
            ckFakeTetraDose4.style.pointerEvents = "none"
            setTimeout(function(){
                divinsereHorarioTetraDose4.style.display = "block"
                ckFakeTetraDose4.style.pointerEvents = ""
            }, 1300);
            dosesTetra.style.height = "calc(40vmax + 12vmin)"
        }else{
            AtualizaMomentaneamente.textContent = "DATA DE REFORÇO: "
            ckFakeTetraDose4.style.backgroundColor = "red"
            ckFakeTetraDose4.style.borderColor = "#057fb7"
            btTetraValenteDose4.checked = false
            somAtencao.play()
            somSucesso.pause()
            somAtencao.currentTime = 0

            divinsereHorarioTetraDose4.style.display = "none"
            dosesTetra.style.height = "calc(20vmax + 10vmin)"
            ckFakeTetraDose1.style.pointerEvents = ""
            ckFakeTetraDose2.style.pointerEvents = ""
            ckFakeTetraDose3.style.pointerEvents = ""
        }
    }
})
var marcaDataTetraDose4 = document.getElementById("marcaDataTetraDose4")
marcaDataTetraDose4.addEventListener("click", function(){
    divinsereHorarioTetraDose4.style.display = "none"
    dosesTetra.style.height = "calc(20vmax + 10vmin)"
    ckFakeTetraDose1.style.pointerEvents = ""
    ckFakeTetraDose2.style.pointerEvents = ""
    ckFakeTetraDose3.style.pointerEvents = ""
})

var divinsereHorarioDuplaDose1 = document.getElementById("insereHorarioDuplaDose1")
ckFakeDuplaDose1.addEventListener("click", function(){
    if(IdadeDoLogadoExterno < 132){
        alert("A primeira dose da dupla adulto não é adequada para a sua faixa etária")
        btDuplaAdultoDose1.checked = false
    }else{
        if(ckFakeDuplaDose1.style.backgroundColor == "red" || ckFakeDuplaDose1.style.backgroundColor == ""){
            ckFakeDuplaDose1.style.backgroundColor = "#11ff09"
            ckFakeDuplaDose1.style.borderColor = "white"
            btDuplaAdultoDose1.checked = true
            somSucesso.play()
            somAtencao.pause()
            somSucesso.currentTime = 0

            ckFakeDuplaDose1.style.pointerEvents = "none"
            ckFakeDuplaDose2.style.pointerEvents = "none"
            ckFakeDuplaDose3.style.pointerEvents = "none"
            ckFakeDuplaDose4.style.pointerEvents = "none"
            setTimeout(function(){
                divinsereHorarioDuplaDose1.style.display = "block"
                ckFakeDuplaDose1.style.pointerEvents = ""
            }, 1300);
            dosesDupla.style.height = "calc(40vmax + 18vmin)"
        }else{
            ckFakeDuplaDose1.style.backgroundColor = "red"
            ckFakeDuplaDose1.style.borderColor = "#057fb7"
            btDuplaAdultoDose1.checked = false
            somAtencao.play()
            somSucesso.pause()
            somAtencao.currentTime = 0

            divinsereHorarioDuplaDose1.style.display = "none"
            dosesDupla.style.height = "calc(20vmax + 16vmin)"
            ckFakeDuplaDose2.style.pointerEvents = ""
            ckFakeDuplaDose3.style.pointerEvents = ""
            ckFakeDuplaDose4.style.pointerEvents = ""
        }
    }
})
var marcaDataDuplaDose1 = document.getElementById("marcaDataDuplaDose1")
marcaDataDuplaDose1.addEventListener("click", function(){
    divinsereHorarioDuplaDose1.style.display = "none"
    dosesDupla.style.height = "calc(20vmax + 16vmin)"
    ckFakeDuplaDose2.style.pointerEvents = ""
    ckFakeDuplaDose3.style.pointerEvents = ""
    ckFakeDuplaDose4.style.pointerEvents = ""
})

var divinsereHorarioDuplaDose2 = document.getElementById("insereHorarioDuplaDose2")
ckFakeDuplaDose2.addEventListener("click", function(){
    if(IdadeDoLogadoExterno < 132){
        alert("A segunda dose da dupla adulto não é adequada para a sua faixa etária")
        btDuplaAdultoDose2.checked = false
    }else{
        if(ckFakeDuplaDose2.style.backgroundColor == "red" || ckFakeDuplaDose2.style.backgroundColor == ""){
            ckFakeDuplaDose2.style.backgroundColor = "#11ff09"
            ckFakeDuplaDose2.style.borderColor = "white"
            btDuplaAdultoDose2.checked = true
            somSucesso.play()
            somAtencao.pause()
            somSucesso.currentTime = 0

            ckFakeDuplaDose1.style.pointerEvents = "none"
            ckFakeDuplaDose2.style.pointerEvents = "none"
            ckFakeDuplaDose3.style.pointerEvents = "none"
            ckFakeDuplaDose4.style.pointerEvents = "none"
            setTimeout(function(){
                divinsereHorarioDuplaDose2.style.display = "block"
                ckFakeDuplaDose2.style.pointerEvents = ""
            }, 1300);
            dosesDupla.style.height = "calc(40vmax + 18vmin)"
        }else{
            ckFakeDuplaDose2.style.backgroundColor = "red"
            ckFakeDuplaDose2.style.borderColor = "#057fb7"
            btDuplaAdultoDose2.checked = false
            somAtencao.play()
            somSucesso.pause()
            somAtencao.currentTime = 0

            divinsereHorarioDuplaDose2.style.display = "none"
            dosesDupla.style.height = "calc(20vmax + 16vmin)"
            ckFakeDuplaDose1.style.pointerEvents = ""
            ckFakeDuplaDose3.style.pointerEvents = ""
            ckFakeDuplaDose4.style.pointerEvents = ""
        }
    }
})
var marcaDataDuplaDose2 = document.getElementById("marcaDataDuplaDose2")
marcaDataDuplaDose2.addEventListener("click", function(){
    divinsereHorarioDuplaDose2.style.display = "none"
    dosesDupla.style.height = "calc(20vmax + 16vmin)"
    ckFakeDuplaDose1.style.pointerEvents = ""
    ckFakeDuplaDose3.style.pointerEvents = ""
    ckFakeDuplaDose4.style.pointerEvents = ""
})

var divinsereHorarioDuplaDose3 = document.getElementById("insereHorarioDuplaDose3")
ckFakeDuplaDose3.addEventListener("click", function(){
    var AtualizaMomentaneamente = document.getElementById("dataDeReforcoDuplaAdulto")
    if(IdadeDoLogadoExterno < 132){
        alert("A terceira dose da dupla adulto não é adequada para a sua faixa etária")
        btDuplaAdultoDose3.checked = false
    }else{
        if(ckFakeDuplaDose3.style.backgroundColor == "red" || ckFakeDuplaDose3.style.backgroundColor == ""){
            var dataMomento = dataAtualMarcaVacDuplaDose3.value
            AtualizaMomentaneamente.textContent = "DATA DE REFORÇO: " + dataMomento.substring(8, 10) + "/" + dataMomento.substring(5, 7) + "/" + (parseInt (dataMomento.substring(0, 4)) + 10 )
            dataAtualMarcaVacDuplaDose3.addEventListener("change", function(){
                dataMomento = dataAtualMarcaVacDuplaDose3.value
                AtualizaMomentaneamente.textContent = "DATA DE REFORÇO: " + dataMomento.substring(8, 10) + "/" + dataMomento.substring(5, 7) + "/" + (parseInt (dataMomento.substring(0, 4)) + 10 )
                if(AtualizaMomentaneamente.textContent.substring(19, 22) == "NaN"){
                    AtualizaMomentaneamente.textContent = "DATA DE REFORÇO: " + "--/--/-----"
                }
            })
            ckFakeDuplaDose3.style.backgroundColor = "#11ff09"
            ckFakeDuplaDose3.style.borderColor = "white"
            btDuplaAdultoDose3.checked = true
            somSucesso.play()
            somAtencao.pause()
            somSucesso.currentTime = 0

            ckFakeDuplaDose1.style.pointerEvents = "none"
            ckFakeDuplaDose2.style.pointerEvents = "none"
            ckFakeDuplaDose3.style.pointerEvents = "none"
            ckFakeDuplaDose4.style.pointerEvents = "none"
            setTimeout(function(){
                divinsereHorarioDuplaDose3.style.display = "block"
                ckFakeDuplaDose3.style.pointerEvents = ""
            }, 1300);
            dosesDupla.style.height = "calc(40vmax + 18vmin)"
        }else{
            AtualizaMomentaneamente.textContent = "DATA DE REFORÇO: "
            ckFakeDuplaDose3.style.backgroundColor = "red"
            ckFakeDuplaDose3.style.borderColor = "#057fb7"
            btDuplaAdultoDose3.checked = false
            somAtencao.play()
            somSucesso.pause()
            somAtencao.currentTime = 0

            divinsereHorarioDuplaDose3.style.display = "none"
            dosesDupla.style.height = "calc(20vmax + 16vmin)"
            ckFakeDuplaDose1.style.pointerEvents = ""
            ckFakeDuplaDose2.style.pointerEvents = ""
            ckFakeDuplaDose4.style.pointerEvents = ""
        }
    }
})
var marcaDataDuplaDose3 = document.getElementById("marcaDataDuplaDose3")
marcaDataDuplaDose3.addEventListener("click", function(){
    divinsereHorarioDuplaDose3.style.display = "none"
    dosesDupla.style.height = "calc(20vmax + 16vmin)"
    ckFakeDuplaDose1.style.pointerEvents = ""
    ckFakeDuplaDose2.style.pointerEvents = ""
    ckFakeDuplaDose4.style.pointerEvents = ""
})

var divinsereHorarioDuplaDose4 = document.getElementById("insereHorarioDuplaDose4")
ckFakeDuplaDose4.addEventListener("click", function(){
    var conteudoReforcoDuplaAdulto = document.getElementById("dataDeReforcoDuplaAdulto").innerHTML
    var anoRefDuplaAdulto = parseInt (conteudoReforcoDuplaAdulto.substring(23))
    var mesRefDuplaAdulto = parseInt (conteudoReforcoDuplaAdulto.substring(20))
    var diaRefDuplaAdulto = parseInt (conteudoReforcoDuplaAdulto.substring(17))
    if((btDuplaAdultoDose3.checked || btTetraValenteDose4.checked) && !statusDupla){
        alert("Impossível marcar a dose de reforço sem antes ter tomado a terceira dose da vacina dupla adulto ou a quarta dose da vacina tetravalente, marque uma das doses das vacina e clique no botão de concluir alterações")
    }
    else if(ckFakeDuplaDose4.style.backgroundColor == "red" || ckFakeDuplaDose4.style.backgroundColor == ""){
        if(conteudoReforcoDuplaAdulto.length <= 17){
            btDuplaAdultoDose4.checked = false
            ckFakeDuplaDose4.style.backgroundColor = "red"
            ckFakeDuplaDose4.style.borderColor = "#057fb7"
            alert("Não é possível marcar a dose de reforço sem antes ter tomado a terceira dose da dupla adulto ou a quarta dose da tetra valente")
        }else if(anoRefDuplaAdulto > anoAtual){
            btDuplaAdultoDose4.checked = false
            ckFakeDuplaDose4.style.backgroundColor = "red"
            ckFakeDuplaDose4.style.borderColor = "#057fb7"
            alert("Data inadequada para a aplicação do reforço da vacina dupla adulto, verifique a data de reforço acima!")
        }else if(anoRefDuplaAdulto == anoAtual){
            if(mesAtual == mesRefDuplaAdulto){ 
                if(diaAtual >= diaRefDuplaAdulto){
                    btDuplaAdultoDose4.checked = true
                    ckFakeDuplaDose4.style.backgroundColor = "#11ff09"
                    ckFakeDuplaDose4.style.borderColor = "white"
                    somSucesso.play()
                    somAtencao.pause()
                    somSucesso.currentTime = 0

                    ckFakeDuplaDose1.style.pointerEvents = "none"
                    ckFakeDuplaDose2.style.pointerEvents = "none"
                    ckFakeDuplaDose3.style.pointerEvents = "none"
                    ckFakeDuplaDose4.style.pointerEvents = "none"
                    setTimeout(function(){
                        divinsereHorarioDuplaDose4.style.display = "block"
                        ckFakeDuplaDose4.style.pointerEvents = ""
                    }, 1300);
                    dosesDupla.style.height = "calc(40vmax + 18vmin)"
                }else{
                    btDuplaAdultoDose4.checked = false
                    ckFakeDuplaDose4.style.backgroundColor = "red"
                    ckFakeDuplaDose4.style.borderColor = "#057fb7"
                    alert("Data inadequada para a aplicação do reforço da vacina dupla adulto, verifique a data de reforço acima!")
                    
                }
            }else if(mesAtual > mesRefDuplaAdulto){
                btDuplaAdultoDose4.checked = true
                ckFakeDuplaDose4.style.backgroundColor = "#11ff09"
                ckFakeDuplaDose4.style.borderColor = "white"
                somSucesso.play()
                somAtencao.pause()
                somSucesso.currentTime = 0

                ckFakeDuplaDose1.style.pointerEvents = "none"
                ckFakeDuplaDose2.style.pointerEvents = "none"
                ckFakeDuplaDose3.style.pointerEvents = "none"
                ckFakeDuplaDose4.style.pointerEvents = "none"
                setTimeout(function(){
                    divinsereHorarioDuplaDose4.style.display = "block"
                    ckFakeDuplaDose4.style.pointerEvents = ""
                }, 1300);
                dosesDupla.style.height = "calc(40vmax + 18vmin)"
            }else{
                btDuplaAdultoDose4.checked = false
                ckFakeDuplaDose4.style.backgroundColor = "red"
                ckFakeDuplaDose4.style.borderColor = "#057fb7"
                alert("Data inadequada para a aplicação do reforço da vacina dupla adulto, verifique a data de reforço acima!")
                
            }
        }else{
            btDuplaAdultoDose4.checked = true
            ckFakeDuplaDose4.style.backgroundColor = "#11ff09"
            ckFakeDuplaDose4.style.borderColor = "white"
            somSucesso.play()
            somAtencao.pause()
            somSucesso.currentTime = 0

            ckFakeDuplaDose1.style.pointerEvents = "none"
            ckFakeDuplaDose2.style.pointerEvents = "none"
            ckFakeDuplaDose3.style.pointerEvents = "none"
            ckFakeDuplaDose4.style.pointerEvents = "none"
            setTimeout(function(){
                divinsereHorarioDuplaDose4.style.display = "block"
                ckFakeDuplaDose4.style.pointerEvents = ""
            }, 1300);
            dosesDupla.style.height = "calc(40vmax + 18vmin)"
        }
    }else{
        ckFakeDuplaDose4.style.backgroundColor = "red"
        ckFakeDuplaDose4.style.borderColor = "#057fb7"
        btDuplaAdultoDose4.checked = false
        somAtencao.play()
        somSucesso.pause()
        somAtencao.currentTime = 0

        divinsereHorarioDuplaDose4.style.display = "none"
        dosesDupla.style.height = "calc(20vmax + 16vmin)"
        ckFakeDuplaDose1.style.pointerEvents = ""
        ckFakeDuplaDose2.style.pointerEvents = ""
        ckFakeDuplaDose3.style.pointerEvents = ""
    }

})
var marcaDataDuplaDose4 = document.getElementById("marcaDataDuplaDose4")
marcaDataDuplaDose4.addEventListener("click", function(){
    divinsereHorarioDuplaDose4.style.display = "none"
    dosesDupla.style.height = "calc(20vmax + 16vmin)"
    ckFakeDuplaDose1.style.pointerEvents = ""
    ckFakeDuplaDose2.style.pointerEvents = ""
    ckFakeDuplaDose3.style.pointerEvents = ""
})

var divinsereHorarioTripliceDose1 = document.getElementById("insereHorarioTripliceDose1")
ckFakeTriplice.addEventListener("click", function(){
    if(IdadeDoLogadoExterno < 12){
        alert("A dose unica da triplice viral não é adequda para a sua faixa etária")
        btTripliceViral.checked = false
    }else{
        if(ckFakeTriplice.style.backgroundColor == "red" || ckFakeTriplice.style.backgroundColor == ""){
            ckFakeTriplice.style.backgroundColor = "#11ff09"
            ckFakeTriplice.style.borderColor = "white"
            btTripliceViral.checked = true
            somSucesso.play()
            somAtencao.pause()
            somSucesso.currentTime = 0

            ckFakeTriplice.style.pointerEvents = "none"
            setTimeout(function(){
                divinsereHorarioTripliceDose1.style.display = "block"
                ckFakeTriplice.style.pointerEvents = ""
            }, 1100);
            dosesTriplice.style.height = "calc(26vmax + 4vmin)"
        }else{
            ckFakeTriplice.style.backgroundColor = "red"
            ckFakeTriplice.style.borderColor = "#057fb7"
            btTripliceViral.checked = false
            somAtencao.play()
            somSucesso.pause()
            somAtencao.currentTime = 0

            divinsereHorarioTripliceDose1.style.display = "none"
            dosesTriplice.style.height = "calc(5vmax + 4vmin)"
        }
    }
})
var marcaDataTripliceDose1 = document.getElementById("marcaDataTripliceDose1")
marcaDataTripliceDose1.addEventListener("click", function(){
    divinsereHorarioTripliceDose1.style.display = "none"
    dosesTriplice.style.height = "calc(5vmax + 4vmin)"
    ckFakeTriplice.style.pointerEvents = ""
})

var divinsereHorarioHepBDose1 = document.getElementById("insereHorarioHepBDose1") 
ckFakeHepaDose1.addEventListener("click", function(){
    if(ckFakeHepaDose1.style.backgroundColor == "red" || ckFakeHepaDose1.style.backgroundColor == ""){
        ckFakeHepaDose1.style.backgroundColor = "#11ff09"
        ckFakeHepaDose1.style.borderColor = "white"
        bthepatiteBDose1.checked = true
        somSucesso.play()
        somAtencao.pause()
        somSucesso.currentTime = 0

        ckFakeHepaDose1.style.pointerEvents = "none"
        ckFakeHepaDose2.style.pointerEvents = "none"
        ckFakeHepaDose3.style.pointerEvents = "none"
        setTimeout(function(){
            divinsereHorarioHepBDose1.style.display = "block"
            ckFakeHepaDose1.style.pointerEvents = ""
        }, 1300);
        dosesHepB.style.height = "calc(31vmax + 18vmin)"
    }else{
        ckFakeHepaDose1.style.backgroundColor = "red"
        ckFakeHepaDose1.style.borderColor = "#057fb7"
        bthepatiteBDose1.checked = false
        somAtencao.play()
        somSucesso.pause()
        somAtencao.currentTime = 0

        divinsereHorarioHepBDose1.style.display = "none"
        dosesHepB.style.height = "calc(16vmax + 6vmin)"
        ckFakeHepaDose2.style.pointerEvents = ""
        ckFakeHepaDose3.style.pointerEvents = ""
    }
})
var marcaDataHepBDose1 = document.getElementById("marcaDataHepBDose1")
marcaDataHepBDose1.addEventListener("click", function(){
    divinsereHorarioHepBDose1.style.display = "none"
    dosesHepB.style.height = "calc(16vmax + 6vmin)"
    ckFakeHepaDose2.style.pointerEvents = ""
    ckFakeHepaDose3.style.pointerEvents = ""
})

var divinsereHorarioHepBDose2 = document.getElementById("insereHorarioHepBDose2") 
ckFakeHepaDose2.addEventListener("click", function(){
    if(IdadeDoLogadoExterno < 1){
        alert("A segunda dose da hepatite B não é adequda para a sua faixa etária")
        bthepatiteBDose2.checked = false
    }else{
        if(ckFakeHepaDose2.style.backgroundColor == "red" || ckFakeHepaDose2.style.backgroundColor == ""){
            ckFakeHepaDose2.style.backgroundColor = "#11ff09"
            ckFakeHepaDose2.style.borderColor = "white"
            bthepatiteBDose2.checked = true
            somSucesso.play()
            somAtencao.pause()
            somSucesso.currentTime = 0

            ckFakeHepaDose1.style.pointerEvents = "none"
            ckFakeHepaDose2.style.pointerEvents = "none"
            ckFakeHepaDose3.style.pointerEvents = "none"
            setTimeout(function(){
                divinsereHorarioHepBDose2.style.display = "block"
                ckFakeHepaDose2.style.pointerEvents = ""
            }, 1300);
            dosesHepB.style.height = "calc(31vmax + 18vmin)"
        }else{
            ckFakeHepaDose2.style.backgroundColor = "red"
            ckFakeHepaDose2.style.borderColor = "#057fb7"
            bthepatiteBDose2.checked = false
            somAtencao.play()
            somSucesso.pause()
            somAtencao.currentTime = 0

            divinsereHorarioHepBDose2.style.display = "none"
            dosesHepB.style.height = "calc(16vmax + 6vmin)"
            ckFakeHepaDose1.style.pointerEvents = ""
            ckFakeHepaDose3.style.pointerEvents = ""
        }
    }
})
var marcaDataHepBDose2 = document.getElementById("marcaDataHepBDose2")
marcaDataHepBDose2.addEventListener("click", function(){
    divinsereHorarioHepBDose2.style.display = "none"
    dosesHepB.style.height = "calc(16vmax + 6vmin)"
    ckFakeHepaDose1.style.pointerEvents = ""
    ckFakeHepaDose3.style.pointerEvents = ""
})

var divinsereHorarioHepBDose3 = document.getElementById("insereHorarioHepBDose3") 
ckFakeHepaDose3.addEventListener("click", function(){
    if(IdadeDoLogadoExterno < 6){
        alert("A terceira dose da hepatite B não é adequda para a sua faixa etária")
        bthepatiteBDose3.checked = false
    }else{
        if(ckFakeHepaDose3.style.backgroundColor == "red" || ckFakeHepaDose3.style.backgroundColor == ""){
            ckFakeHepaDose3.style.backgroundColor = "#11ff09"
            ckFakeHepaDose3.style.borderColor = "white"
            bthepatiteBDose3.checked = true
            somSucesso.play()
            somAtencao.pause()
            somSucesso.currentTime = 0

            ckFakeHepaDose1.style.pointerEvents = "none"
            ckFakeHepaDose2.style.pointerEvents = "none"
            ckFakeHepaDose3.style.pointerEvents = "none"
            setTimeout(function(){
                divinsereHorarioHepBDose3.style.display = "block"
                ckFakeHepaDose3.style.pointerEvents = ""
            }, 1300);
            dosesHepB.style.height = "calc(31vmax + 18vmin)"
        }else{
            ckFakeHepaDose3.style.backgroundColor = "red"
            ckFakeHepaDose3.style.borderColor = "#057fb7"
            bthepatiteBDose3.checked = false
            somAtencao.play()
            somSucesso.pause()
            somAtencao.currentTime = 0

            divinsereHorarioHepBDose3.style.display = "none"
            dosesHepB.style.height = "calc(16vmax + 6vmin)"
            ckFakeHepaDose2.style.pointerEvents = ""
            ckFakeHepaDose3.style.pointerEvents = ""
        }
    }
})
var marcaDataHepBDose3 = document.getElementById("marcaDataHepBDose3")
marcaDataHepBDose3.addEventListener("click", function(){
    divinsereHorarioHepBDose3.style.display = "none"
    dosesHepB.style.height = "calc(16vmax + 6vmin)"
    ckFakeHepaDose1.style.pointerEvents = ""
    ckFakeHepaDose2.style.pointerEvents = ""
})

var divinsereHorarioFebreDose1 = document.getElementById("insereHorarioFebreDose1") 
ckFakeFebreDose1.addEventListener("click", function(){
    var AtualizaMomentaneamente = document.getElementById("dataDeReforcoFebreAmarela")
    var dataAtualMarcaVacFebreDose1 = document.getElementById("dataAtualMarcaVacFebreDose1")
    if(IdadeDoLogadoExterno < 6){
        alert("A dose da Febre Amarela não é adequda para a sua faixa etária")
        btFebreAmarelaDoseAtual.checked = false
    }else{
        if(ckFakeFebreDose1.style.backgroundColor == "red" || ckFakeFebreDose1.style.backgroundColor == ""){
            dataMomento = dataAtualMarcaVacFebreDose1.value
            AtualizaMomentaneamente.textContent = "DATA DE REFORÇO: " + dataMomento.substring(8, 10) + "/" + dataMomento.substring(5, 7) + "/" + (parseInt (dataMomento.substring(0, 4)) + 10 )
            dataAtualMarcaVacFebreDose1.addEventListener("change", function(){
                dataMomento = dataAtualMarcaVacFebreDose1.value
                AtualizaMomentaneamente.textContent = "DATA DE REFORÇO: " + dataMomento.substring(8, 10) + "/" + dataMomento.substring(5, 7) + "/" + (parseInt (dataMomento.substring(0, 4)) + 10 )
                if(AtualizaMomentaneamente.textContent.substring(19, 22) == "NaN"){
                    AtualizaMomentaneamente.textContent = "DATA DE REFORÇO: " + "--/--/-----"
                }
            })
            ckFakeFebreDose1.style.backgroundColor = "#11ff09"
            ckFakeFebreDose1.style.borderColor = "white"
            btFebreAmarelaDoseAtual.checked = true
            somSucesso.play()
            somAtencao.pause()
            somSucesso.currentTime = 0

            ckFakeFebreDose1.style.pointerEvents = "none"
            ckFakeFebreDose2.style.pointerEvents = "none"
            setTimeout(function(){
                divinsereHorarioFebreDose1.style.display = "block"
                ckFakeFebreDose1.style.pointerEvents = ""
            }, 1300);
            dosesFebre.style.height = "calc(28vmax + 18vmin)"
        }else{
            AtualizaMomentaneamente.textContent = "DATA DE REFORÇO: "
            ckFakeFebreDose1.style.backgroundColor = "red"
            ckFakeFebreDose1.style.borderColor = "#057fb7"
            btFebreAmarelaDoseAtual.checked = false
            somAtencao.play()
            somSucesso.pause()
            somAtencao.currentTime = 0

            divinsereHorarioFebreDose1.style.display = "none"
            dosesFebre.style.height = "calc(10vmax + 12vmin)"
            ckFakeFebreDose2.style.pointerEvents = ""
        }
    }
}) 
var marcaDataFebreDose1 = document.getElementById("marcaDataFebreDose1")
marcaDataFebreDose1.addEventListener("click", function(){
    divinsereHorarioFebreDose1.style.display = "none"
    dosesFebre.style.height = "calc(10vmax + 12vmin)"
    ckFakeFebreDose1.style.pointerEvents = ""
    ckFakeFebreDose2.style.pointerEvents = ""
})

var divinsereHorarioFebreDose2 = document.getElementById("insereHorarioFebreDose2")
ckFakeFebreDose2.addEventListener("click", async function(){
    var conteudoReforcoFebreAmarela = document.getElementById("dataDeReforcoFebreAmarela").innerText
    var anoRefFebreAmarela = parseInt (conteudoReforcoFebreAmarela.substring(23))
    var mesRefFebreAmarela = parseInt (conteudoReforcoFebreAmarela.substring(20))
    var diaRefFebreAmarela = parseInt (conteudoReforcoFebreAmarela.substring(17))
    if(btFebreAmarelaDoseAtual.checked && !statusAtualFebre){
        alert("Impossível marcar a dose de reforço sem antes ter tomado a dose atual da vacina da Febre Amarela, marque a vacina da febre amarela e clique no botão de concluir alterações")
    }
    else if(ckFakeFebreDose2.style.backgroundColor == "red" || ckFakeFebreDose2.style.backgroundColor == ""){
        if(conteudoReforcoFebreAmarela.length <= 17){
            febreAmarelaDose10Anos.checked = false
            ckFakeFebreDose2.style.backgroundColor = "red"
            ckFakeFebreDose2.style.borderColor = "#057fb7"
            alert("Não é possível marcar a dose de reforço sem antes ter tomado a dose atual!")
        }else if(anoRefFebreAmarela > anoAtual){
            febreAmarelaDose10Anos.checked = false
            ckFakeFebreDose2.style.backgroundColor = "red"
            ckFakeFebreDose2.style.borderColor = "#057fb7"
            alert("Data inadequada para a aplicação do reforço da vacina da febre amarela, verifique a data de reforço acima!")
        }else if(anoRefFebreAmarela == anoAtual){
            if(mesAtual == mesRefFebreAmarela){
                if(diaAtual >= diaRefFebreAmarela){
                    febreAmarelaDose10Anos.checked = true
                    ckFakeFebreDose2.style.backgroundColor = "#11ff09"
                    ckFakeFebreDose2.style.borderColor = "white"
                    somSucesso.play()
                    somAtencao.pause()
                    somSucesso.currentTime = 0

                    ckFakeFebreDose1.style.pointerEvents = "none"
                    ckFakeFebreDose2.style.pointerEvents = "none"
                    setTimeout(function(){
                        divinsereHorarioFebreDose2.style.display = "block"
                        ckFakeFebreDose2.style.pointerEvents = ""
                    }, 1300);
                    dosesFebre.style.height = "calc(28vmax + 18vmin)"
                }else{
                    febreAmarelaDose10Anos.checked = false
                    ckFakeFebreDose2.style.backgroundColor = "red"
                    ckFakeFebreDose2.style.borderColor = "#057fb7"
                    alert("Data inadequada para a aplicação do reforço da vacina da febre amarela, verifique a data de reforço acima!")
                }
            }else if(mesAtual > mesRefFebreAmarela){
                febreAmarelaDose10Anos.checked = true
                ckFakeFebreDose2.style.backgroundColor = "#11ff09"
                ckFakeFebreDose2.style.borderColor = "white"
                somSucesso.play()
                somAtencao.pause()
                somSucesso.currentTime = 0

                ckFakeFebreDose1.style.pointerEvents = "none"
                ckFakeFebreDose2.style.pointerEvents = "none"
                setTimeout(function(){
                    divinsereHorarioFebreDose2.style.display = "block"
                    ckFakeFebreDose2.style.pointerEvents = ""
                }, 1300);
                dosesFebre.style.height = "calc(28vmax + 18vmin)"
            }else{
                febreAmarelaDose10Anos.checked = false
                ckFakeFebreDose2.style.backgroundColor = "red"
                ckFakeFebreDose2.style.borderColor = "#057fb7"
                alert("Data inadequada para a aplicação do reforço da vacina da febre amarela, verifique a data de reforço acima!")
            }
        }else{
            febreAmarelaDose10Anos.checked = true
            ckFakeFebreDose2.style.backgroundColor = "#11ff09"
            ckFakeFebreDose2.style.borderColor = "white" 
            somSucesso.play()
            somAtencao.pause()
            somSucesso.currentTime = 0

            ckFakeFebreDose1.style.pointerEvents = "none"
            ckFakeFebreDose2.style.pointerEvents = "none"
            setTimeout(function(){
                divinsereHorarioFebreDose2.style.display = "block"
                ckFakeFebreDose2.style.pointerEvents = ""
            }, 1300);
            dosesFebre.style.height = "calc(28vmax + 18vmin)"
        }
    }else{
        febreAmarelaDose10Anos.checked = false
        ckFakeFebreDose2.style.backgroundColor = "red"
        ckFakeFebreDose2.style.borderColor = "#057fb7" 
        somAtencao.play()
        somSucesso.pause()
        somAtencao.currentTime = 0

        divinsereHorarioFebreDose2.style.display = "none"
        dosesFebre.style.height = "calc(10vmax + 12vmin)"
        ckFakeFebreDose1.style.pointerEvents = ""
    }
})
var marcaDataFebreDose2 = document.getElementById("marcaDataFebreDose2")
marcaDataFebreDose2.addEventListener("click", function(){
    divinsereHorarioFebreDose2.style.display = "none"
    dosesFebre.style.height = "calc(10vmax + 12vmin)"
    ckFakeFebreDose1.style.pointerEvents = ""
    ckFakeFebreDose2.style.pointerEvents = ""
})


var divinsereHorarioGripeDose1 = document.getElementById("insereHorarioGripeDose1")
ckFakeGripeDose1.addEventListener("click", function(){
    var AtualizaMomentaneamente = document.getElementById("dataDeReforcoGripe")
    if(IdadeDoLogadoExterno < 720){
        alert("A vacina da Gripe não é adequda para a sua faixa etária")
        btGripe.checked = false
    }else{
        if(ckFakeGripeDose1.style.backgroundColor == "red" || ckFakeGripeDose1.style.backgroundColor == ""){
            dataMomento = dataAtualMarcaVacGripeDose1.value
            AtualizaMomentaneamente.textContent = "DATA DE REFORÇO: " + dataMomento.substring(8, 10) + "/" + dataMomento.substring(5, 7) + "/" + (parseInt (dataMomento.substring(0, 4)) + 1 )
            dataAtualMarcaVacGripeDose1.addEventListener("change", function(){
                dataMomento = dataAtualMarcaVacGripeDose1.value
                AtualizaMomentaneamente.textContent = "DATA DE REFORÇO: " + dataMomento.substring(8, 10) + "/" + dataMomento.substring(5, 7) + "/" + (parseInt (dataMomento.substring(0, 4)) + 1 )
                if(AtualizaMomentaneamente.textContent.substring(19, 22) == "NaN"){
                    AtualizaMomentaneamente.textContent = "DATA DE REFORÇO: " + "--/--/-----"
                }
            })
            
            ckFakeGripeDose1.style.backgroundColor = "#11ff09"
            ckFakeGripeDose1.style.borderColor = "white"
            btGripe.checked = true
            somSucesso.play()
            somAtencao.pause()
            somSucesso.currentTime = 0

            ckFakeGripeDose1.style.pointerEvents = "none"
            ckFakeGripeDose2.style.pointerEvents = "none"
            setTimeout(function(){
                divinsereHorarioGripeDose1.style.display = "block"
                ckFakeGripeDose1.style.pointerEvents = ""
            }, 1300);
            dosesGripe.style.height = "calc(28vmax + 18vmin)"
        }else{
            AtualizaMomentaneamente.textContent = "DATA DE REFORÇO: "
            ckFakeGripeDose1.style.backgroundColor = "red"
            ckFakeGripeDose1.style.borderColor = "#057fb7"
            btGripe.checked = false
            somAtencao.play()
            somSucesso.pause()
            somAtencao.currentTime = 0

            divinsereHorarioGripeDose1.style.display = "none"
            dosesGripe.style.height = "calc(10vmax + 12vmin)"
            ckFakeGripeDose2.style.pointerEvents = ""
        }
    }
})
var marcaDataGripeDose1 = document.getElementById("marcaDataGripeDose1")
marcaDataGripeDose1.addEventListener("click", function(){
    divinsereHorarioGripeDose1.style.display = "none"
    dosesGripe.style.height = "calc(10vmax + 12vmin)"
    ckFakeGripeDose1.style.pointerEvents = ""
    ckFakeGripeDose2.style.pointerEvents = ""
})

var divinsereHorarioGripeDose2 = document.getElementById("insereHorarioGripeDose2")
ckFakeGripeDose2.addEventListener("click", function(){
    var conteudoGripeReforco = document.getElementById("dataDeReforcoGripe").innerHTML
    var anoRefGripe = parseInt (conteudoGripeReforco.substring(23))
    var mesRefGripe = parseInt (conteudoGripeReforco.substring(20))
    var diaRefGripe = parseInt (conteudoGripeReforco.substring(17))
    if(btGripe.checked && !statusGripe){
        alert("Impossível marcar a dose de reforço sem antes ter tomado a dose atual da vacina da Gripe, marque a vacina da Gripe e clique no botão de concluir alterações")
    }
    else if(ckFakeGripeDose2.style.backgroundColor == "red" || ckFakeGripeDose2.style.backgroundColor == ""){
        if(conteudoGripeReforco.length <= 17){
            gripeReforco.checked = false
            ckFakeGripeDose2.style.backgroundColor = "red"
            ckFakeGripeDose2.style.borderColor = "#057fb7"
            alert("Não é possível marcar a dose de reforço sem antes ter tomado a dose atual!")
        }else if(anoRefGripe > anoAtual){
            gripeReforco.checked = false
            ckFakeGripeDose2.style.backgroundColor = "red"
            ckFakeGripeDose2.style.borderColor = "#057fb7"
            alert("Data inadequada para a aplicação do reforço da vacina da gripe, verifique a data de reforço acima!")
        }else if(anoRefGripe == anoAtual){
            if(mesAtual == mesRefGripe){
                if(diaAtual >= diaRefGripe){
                    gripeReforco.checked = true
                    ckFakeGripeDose2.style.backgroundColor = "#11ff09"
                    ckFakeGripeDose2.style.borderColor = "white"
                    somSucesso.play()
                    somAtencao.pause()
                    somSucesso.currentTime = 0

                    ckFakeGripeDose1.style.pointerEvents = "none"
                    ckFakeGripeDose2.style.pointerEvents = "none"
                    setTimeout(function(){
                        divinsereHorarioGripeDose2.style.display = "block"
                        ckFakeGripeDose2.style.pointerEvents = ""
                    }, 1300);
                    dosesGripe.style.height = "calc(28vmax + 18vmin)"
                }else{
                    gripeReforco.checked = false
                    ckFakeGripeDose2.style.backgroundColor = "red"
                    ckFakeGripeDose2.style.borderColor = "#057fb7"
                    alert("Data inadequada para a aplicação do reforço da vacina da gripe, verifique a data de reforço acima!")
                }
            }else if(mesAtual > mesRefGripe){
                gripeReforco.checked = true
                ckFakeGripeDose2.style.backgroundColor = "#11ff09"
                ckFakeGripeDose2.style.borderColor = "white"
                somSucesso.play()
                somAtencao.pause()
                somSucesso.currentTime = 0

                ckFakeGripeDose1.style.pointerEvents = "none"
                ckFakeGripeDose2.style.pointerEvents = "none"
                setTimeout(function(){
                    divinsereHorarioGripeDose2.style.display = "block"
                    ckFakeGripeDose2.style.pointerEvents = ""
                }, 1300);
                dosesGripe.style.height = "calc(28vmax + 18vmin)"
            }else{
                gripeReforco.checked = false
                ckFakeGripeDose2.style.backgroundColor = "red"
                ckFakeGripeDose2.style.borderColor = "#057fb7"
                alert("Data inadequada para a aplicação do reforço da vacina da gripe verifique a data de reforço acima!")
            }
        }else{
            gripeReforco.checked = true
            ckFakeGripeDose2.style.backgroundColor = "#11ff09"
            ckFakeGripeDose2.style.borderColor = "white" 
            somSucesso.play()
            somAtencao.pause()
            somSucesso.currentTime = 0

            ckFakeGripeDose1.style.pointerEvents = "none"
            ckFakeGripeDose2.style.pointerEvents = "none"
            setTimeout(function(){
                divinsereHorarioGripeDose2.style.display = "block"
                ckFakeGripeDose2.style.pointerEvents = ""
            }, 1300);
            dosesGripe.style.height = "calc(28vmax + 18vmin)"
        }
    }else{
        gripeReforco.checked = false
        ckFakeGripeDose2.style.backgroundColor = "red"
        ckFakeGripeDose2.style.borderColor = "#057fb7" 
        somAtencao.play()
        somSucesso.pause()
        somAtencao.currentTime = 0

        divinsereHorarioGripeDose2.style.display = "none"
        dosesGripe.style.height = "calc(10vmax + 12vmin)"
        ckFakeGripeDose1.style.pointerEvents = ""
    }

})
var marcaDataGripeDose2 = document.getElementById("marcaDataGripeDose2")
marcaDataGripeDose2.addEventListener("click", function(){
    divinsereHorarioGripeDose2.style.display = "none"
    dosesGripe.style.height = "calc(10vmax + 12vmin)"
    ckFakeGripeDose1.style.pointerEvents = ""
    ckFakeGripeDose2.style.pointerEvents = ""
})

var divinsereHorarioPneuDose1 = document.getElementById("insereHorarioPneuDose1")
ckFakePneuDose1.addEventListener("click", function(){
    var AtualizaMomentaneamente = document.getElementById("dataDeReforcoPneumonia")
    if(IdadeDoLogadoExterno < 720){
        alert("A vacina da Pneumonia não é adequda para a sua faixa etária")
        btPneumoniaDose1.checked = false
    }else{
        if(ckFakePneuDose1.style.backgroundColor == "red" || ckFakePneuDose1.style.backgroundColor == ""){
            dataMomento = dataAtualMarcaVacPneuDose1.value
            AtualizaMomentaneamente.textContent = "DATA DE REFORÇO: " + dataMomento.substring(8, 10) + "/" + dataMomento.substring(5, 7) + "/" + (parseInt (dataMomento.substring(0, 4)) + 5 )
            dataAtualMarcaVacPneuDose1.addEventListener("change", function(){
                dataMomento = dataAtualMarcaVacPneuDose1.value
                AtualizaMomentaneamente.textContent = "DATA DE REFORÇO: " + dataMomento.substring(8, 10) + "/" + dataMomento.substring(5, 7) + "/" + (parseInt (dataMomento.substring(0, 4)) + 5 )
                if(AtualizaMomentaneamente.textContent.substring(19, 22) == "NaN"){
                    AtualizaMomentaneamente.textContent = "DATA DE REFORÇO: " + "--/--/-----"
                }
            })
            
            ckFakePneuDose1.style.backgroundColor = "#11ff09"
            ckFakePneuDose1.style.borderColor = "white"
            btPneumoniaDose1.checked = true
            somSucesso.play()
            somAtencao.pause()
            somSucesso.currentTime = 0

            ckFakePneuDose1.style.pointerEvents = "none"
            ckFakePneuDose2.style.pointerEvents = "none"
            setTimeout(function(){
                divinsereHorarioPneuDose1.style.display = "block"
                ckFakePneuDose1.style.pointerEvents = ""
            }, 1300);
            dosesPneu.style.height = "calc(28vmax + 18vmin)"
        }else{
            AtualizaMomentaneamente.textContent = "DATA DE REFORÇO: "
            ckFakePneuDose1.style.backgroundColor = "red"
            ckFakePneuDose1.style.borderColor = "#057fb7"
            btPneumoniaDose1.checked = false
            somAtencao.play()
            somSucesso.pause()
            somAtencao.currentTime = 0

            divinsereHorarioPneuDose1.style.display = "none"
            dosesPneu.style.height = "calc(10vmax + 12vmin)"
            ckFakePneuDose2.style.pointerEvents = ""
        }
    }
})
var marcaDataPneuDose1 = document.getElementById("marcaDataPneuDose1")
marcaDataPneuDose1.addEventListener("click", function(){
    divinsereHorarioPneuDose1.style.display = "none"
    dosesPneu.style.height = "calc(10vmax + 12vmin)"
    ckFakePneuDose1.style.pointerEvents = ""
    ckFakePneuDose2.style.pointerEvents = ""
})

var divinsereHorarioPneuDose2 = document.getElementById("insereHorarioPneuDose2")
ckFakePneuDose2.addEventListener("click", function(){
    var conteudoPneumoniaReforco = document.getElementById("dataDeReforcoPneumonia").innerHTML
    var anoRefPneu = parseInt (conteudoPneumoniaReforco.substring(23))
    var mesRefPneu = parseInt (conteudoPneumoniaReforco.substring(20))
    var diaRefPneu = parseInt (conteudoPneumoniaReforco.substring(17))
    if(btPneumoniaDose1.checked && !statusPneu){
        alert("Impossível marcar a dose de reforço sem antes ter tomado a dose atual da vacina da Pneumonia, marque a primeira dose da vacina da Pneumonia e clique no botão de concluir alterações")
    }
    else if(ckFakePneuDose2.style.backgroundColor == "red" || ckFakePneuDose2.style.backgroundColor == ""){
        if(conteudoPneumoniaReforco.length <= 17){
            pneumoniaReforco.checked = false
            ckFakePneuDose2.style.backgroundColor = "red"
            ckFakePneuDose2.style.borderColor = "#057fb7"
            alert("Não é possível marcar a dose de reforço sem antes ter tomado a dose atual!")
        }else if(anoRefPneu > anoAtual){
            alert("Data inadequada para a aplicação do reforço da vacina da pneumonia, verifique a data de reforço acima!")
            pneumoniaReforco.checked = false
            ckFakePneuDose2.style.backgroundColor = "red"
            ckFakePneuDose2.style.borderColor = "#057fb7"
        }else if(anoRefPneu == anoAtual){
            if(mesRefPneu == mesAtual){
                if(diaAtual >= diaRefPneu){
                    pneumoniaReforco.checked = true
                    ckFakePneuDose2.style.backgroundColor = "#11ff09"
                    ckFakePneuDose2.style.borderColor = "white"
                    somSucesso.play()
                    somAtencao.pause()
                    somSucesso.currentTime = 0

                    ckFakePneuDose1.style.pointerEvents = "none"
                    ckFakePneuDose2.style.pointerEvents = "none"
                    setTimeout(function(){
                        divinsereHorarioPneuDose2.style.display = "block"
                        ckFakePneuDose2.style.pointerEvents = ""
                    }, 1300);
                    dosesPneu.style.height = "calc(28vmax + 18vmin)"
                }else{
                    pneumoniaReforco.checked = false
                    ckFakePneuDose2.style.backgroundColor = "red"
                    ckFakePneuDose2.style.borderColor = "#057fb7"
                    alert("Data inadequada para a aplicação do reforço da vacina da pneumonia, verifique a data de reforço acima!")
                }
            }else if(mesAtual > mesRefPneu){
                pneumoniaReforco.checked = true
                ckFakePneuDose2.style.backgroundColor = "#11ff09"
                ckFakePneuDose2.style.borderColor = "white" 
                somSucesso.play()
                somAtencao.pause()
                somSucesso.currentTime = 0

                ckFakePneuDose1.style.pointerEvents = "none"
                ckFakePneuDose2.style.pointerEvents = "none"
                setTimeout(function(){
                    divinsereHorarioPneuDose2.style.display = "block"
                    ckFakePneuDose2.style.pointerEvents = ""
                }, 1300);
                dosesPneu.style.height = "calc(28vmax + 18vmin)"
            }else{
                alert("Data inadequada para a aplicação do reforço da vacina da pneumonia, verifique a data de reforço acima!")
                pneumoniaReforco.checked = false
                ckFakePneuDose2.style.backgroundColor = "red"
                ckFakePneuDose2.style.borderColor = "#057fb7"
            }
        }else{
            pneumoniaReforco.checked = true
            ckFakePneuDose2.style.backgroundColor = "#11ff09"
            ckFakePneuDose2.style.borderColor = "white"
            somSucesso.play()
            somAtencao.pause()
            somSucesso.currentTime = 0

            ckFakePneuDose1.style.pointerEvents = "none"
            ckFakePneuDose2.style.pointerEvents = "none"
            setTimeout(function(){
                divinsereHorarioPneuDose2.style.display = "block"
                ckFakePneuDose2.style.pointerEvents = ""
            }, 1300);
            dosesPneu.style.height = "calc(28vmax + 18vmin)"
        }
    }else{
        pneumoniaReforco.checked = false
        ckFakePneuDose2.style.backgroundColor = "red"
        ckFakePneuDose2.style.borderColor = "#057fb7"
        somAtencao.play()
        somSucesso.pause()
        somAtencao.currentTime = 0

        divinsereHorarioPneuDose2.style.display = "none"
        dosesPneu.style.height = "calc(10vmax + 12vmin)"
        ckFakePneuDose1.style.pointerEvents = ""
    }

})
var marcaDataPneuDose2 = document.getElementById("marcaDataPneuDose2")
marcaDataPneuDose2.addEventListener("click", function(){
    divinsereHorarioPneuDose2.style.display = "none"
    dosesPneu.style.height = "calc(10vmax + 12vmin)"
    ckFakePneuDose1.style.pointerEvents = ""
    ckFakePneuDose2.style.pointerEvents = ""
})


var btSubmit = document.getElementById("btSubmit")
var form = document.querySelector('form')
form.addEventListener('submit', exibeMensagem)
function exibeMensagem(event){
    event.preventDefault()
    alert("Alterações relizada com sucesso")
    form.submit()
}

function desabilitaNomeVac(vac1, vac2, vac3, vac4, vac5, vac6, vac7, vac8, vac9){
    vac1.style.pointerEvents = "none"
    vac2.style.pointerEvents = "none"
    vac3.style.pointerEvents = "none"
    vac4.style.pointerEvents = "none"
    vac5.style.pointerEvents = "none"
    vac6.style.pointerEvents = "none"
    vac7.style.pointerEvents = "none"
    vac8.style.pointerEvents = "none"
    vac9.style.pointerEvents = "none"
}
function habilitaNomeVac(vac1, vac2, vac3, vac4, vac5, vac6, vac7, vac8, vac9){
    vac1.style.pointerEvents = ""
    vac2.style.pointerEvents = ""
    vac3.style.pointerEvents = ""
    vac4.style.pointerEvents = ""
    vac5.style.pointerEvents = ""
    vac6.style.pointerEvents = ""
    vac7.style.pointerEvents = ""
    vac8.style.pointerEvents = ""
    vac9.style.pointerEvents = ""
}
function desabilitaBotoes(ckFake, btMarcaData, bordasInput, Submit, mensagemErro, divVac){
    ckFake.style.pointerEvents = "none"
    btMarcaData.style.pointerEvents = "none"
    bordasInput.style.borderColor = "red"
    btMarcaData.style.background = "grey"
    btMarcaData.disabled = true
    Submit.style.pointerEvents = "none"
    Submit.style.backgroundColor = "grey"
    mensagemErro.style.display = "block"
    divVac.style.pointerEvents = "none"
}
function habilitaBotoes(ckFake, btMarcaData, bordasInput, Submit, mensagemErro, divVac){
    ckFake.style.pointerEvents = ""
    btMarcaData.style.pointerEvents = ""
    bordasInput.style.borderColor = "black"
    btMarcaData.style.background = "#FFA500"
    btMarcaData.disabled = false
    Submit.style.pointerEvents = ""
    Submit.style.backgroundColor = "#11ff09"
    mensagemErro.style.display = "none"
    divVac.style.pointerEvents = ""
}

var dataAtualMarcaVac = document.getElementById("dataAtualMarcaVac")
dataAtualMarcaVac.value = anoAtual + "-" + mesAtual + "-" + diaAtual
var dtInvBCGDose1 = document.getElementById("dtInvBCGDose1")
var nomeVacBCG = document.getElementById("nomeVacBCG")
dataAtualMarcaVac.addEventListener("input", function(){
    var anoInput = parseInt(dataAtualMarcaVac.value.substring(0, 4))
    var mesInput = parseInt(dataAtualMarcaVac.value.substring(5, 7))
    var diaInput = parseInt(dataAtualMarcaVac.value.substring(8, 10))
    if(anoInput > anoAtual || dataAtualMarcaVac.value == ""){
        desabilitaBotoes(ckFakeBcgDose1, marcaDataBcgDose1, dataAtualMarcaVac, btSubmit, dtInvBCGDose1, setaBCG)
        desabilitaNomeVac(nomeVacBCG, nomeVacPolio, nomeVacTetra, nomeVacTriplice, nomeVacHepB, nomeVacFebre, nomeVacDupla, nomeVacGripe, nomeVacPneu)
        desabilitaNomeVac(setaBCG, setaPolio, setaTetra, setaTriplice, setaHepB, setaFebre, setaDupla, setaGripe, setaPneu)
    }else if(anoInput == anoAtual || dataAtualMarcaVac.value == ""){
        if(mesInput > mesAtual || dataAtualMarcaVac.value == ""){
            desabilitaBotoes(ckFakeBcgDose1, marcaDataBcgDose1, dataAtualMarcaVac, btSubmit, dtInvBCGDose1, setaBCG)
            desabilitaNomeVac(nomeVacBCG, nomeVacPolio, nomeVacTetra, nomeVacTriplice, nomeVacHepB, nomeVacFebre, nomeVacDupla, nomeVacGripe, nomeVacPneu)
            desabilitaNomeVac(setaBCG, setaPolio, setaTetra, setaTriplice, setaHepB, setaFebre, setaDupla, setaGripe, setaPneu)
        }else if(mesInput == mesAtual || dataAtualMarcaVac.value == ""){
            if(diaInput > diaAtual || dataAtualMarcaVac.value == ""){
                desabilitaBotoes(ckFakeBcgDose1, marcaDataBcgDose1, dataAtualMarcaVac, btSubmit, dtInvBCGDose1, setaBCG)
                desabilitaNomeVac(nomeVacBCG, nomeVacPolio, nomeVacTetra, nomeVacTriplice, nomeVacHepB, nomeVacFebre, nomeVacDupla, nomeVacGripe, nomeVacPneu)
                desabilitaNomeVac(setaBCG, setaPolio, setaTetra, setaTriplice, setaHepB, setaFebre, setaDupla, setaGripe, setaPneu)
            }else{
                habilitaBotoes(ckFakeBcgDose1, marcaDataBcgDose1, dataAtualMarcaVac, btSubmit, dtInvBCGDose1, setaBCG)
                habilitaNomeVac(nomeVacBCG, nomeVacPolio, nomeVacTetra, nomeVacTriplice, nomeVacHepB, nomeVacFebre, nomeVacDupla, nomeVacGripe, nomeVacPneu)
                habilitaNomeVac(setaBCG, setaPolio, setaTetra, setaTriplice, setaHepB, setaFebre, setaDupla, setaGripe, setaPneu)
            }
        }else{
            habilitaBotoes(ckFakeBcgDose1, marcaDataBcgDose1, dataAtualMarcaVac, btSubmit, dtInvBCGDose1, setaBCG)
            habilitaNomeVac(nomeVacBCG, nomeVacPolio, nomeVacTetra, nomeVacTriplice, nomeVacHepB, nomeVacFebre, nomeVacDupla, nomeVacGripe, nomeVacPneu)
            habilitaNomeVac(setaBCG, setaPolio, setaTetra, setaTriplice, setaHepB, setaFebre, setaDupla, setaGripe, setaPneu)
        }
    }else{
        habilitaBotoes(ckFakeBcgDose1, marcaDataBcgDose1, dataAtualMarcaVac, btSubmit, dtInvBCGDose1, setaBCG)
        habilitaNomeVac(nomeVacBCG, nomeVacPolio, nomeVacTetra, nomeVacTriplice, nomeVacHepB, nomeVacFebre, nomeVacDupla, nomeVacGripe, nomeVacPneu)
        habilitaNomeVac(setaBCG, setaPolio, setaTetra, setaTriplice, setaHepB, setaFebre, setaDupla, setaGripe, setaPneu)
    }
})

var dataAtualMarcaVacBcgDose2 = document.getElementById("dataAtualMarcaVacBcgDose2")
dataAtualMarcaVacBcgDose2.value = anoAtual + "-" + mesAtual + "-" + diaAtual
var dtInvBCGDose2 = document.getElementById("dtInvBCGDose2")
dataAtualMarcaVacBcgDose2.addEventListener("input", function(){
    var anoInput = parseInt(dataAtualMarcaVacBcgDose2.value.substring(0, 4))
    var mesInput = parseInt(dataAtualMarcaVacBcgDose2.value.substring(5, 7))
    var diaInput = parseInt(dataAtualMarcaVacBcgDose2.value.substring(8, 10))
    if(anoInput > anoAtual || dataAtualMarcaVacBcgDose2.value == ""){
        desabilitaBotoes(ckFakeBcgDose2, marcaDataBcgDose2, dataAtualMarcaVacBcgDose2, btSubmit, dtInvBCGDose2, setaBCG)
        desabilitaNomeVac(nomeVacBCG, nomeVacPolio, nomeVacTetra, nomeVacTriplice, nomeVacHepB, nomeVacFebre, nomeVacDupla, nomeVacGripe, nomeVacPneu)
        desabilitaNomeVac(setaBCG, setaPolio, setaTetra, setaTriplice, setaHepB, setaFebre, setaDupla, setaGripe, setaPneu)
    }else if(anoInput == anoAtual || dataAtualMarcaVacBcgDose2.value == ""){
        if(mesInput > mesAtual || dataAtualMarcaVacBcgDose2.value == ""){
            desabilitaBotoes(ckFakeBcgDose2, marcaDataBcgDose2, dataAtualMarcaVacBcgDose2, btSubmit, dtInvBCGDose2, setaBCG)
            desabilitaNomeVac(nomeVacBCG, nomeVacPolio, nomeVacTetra, nomeVacTriplice, nomeVacHepB, nomeVacFebre, nomeVacDupla, nomeVacGripe, nomeVacPneu)
            desabilitaNomeVac(setaBCG, setaPolio, setaTetra, setaTriplice, setaHepB, setaFebre, setaDupla, setaGripe, setaPneu)
        }else if(mesInput == mesAtual || dataAtualMarcaVacBcgDose2.value == ""){
            if(diaInput > diaAtual || dataAtualMarcaVacBcgDose2.value == ""){
                desabilitaBotoes(ckFakeBcgDose2, marcaDataBcgDose2, dataAtualMarcaVacBcgDose2, btSubmit, dtInvBCGDose2, setaBCG)
                desabilitaNomeVac(nomeVacBCG, nomeVacPolio, nomeVacTetra, nomeVacTriplice, nomeVacHepB, nomeVacFebre, nomeVacDupla, nomeVacGripe, nomeVacPneu)
                desabilitaNomeVac(setaBCG, setaPolio, setaTetra, setaTriplice, setaHepB, setaFebre, setaDupla, setaGripe, setaPneu)
            }else{
                habilitaBotoes(ckFakeBcgDose2, marcaDataBcgDose2, dataAtualMarcaVacBcgDose2, btSubmit, dtInvBCGDose2, setaBCG)
                habilitaNomeVac(nomeVacBCG, nomeVacPolio, nomeVacTetra, nomeVacTriplice, nomeVacHepB, nomeVacFebre, nomeVacDupla, nomeVacGripe, nomeVacPneu)
                habilitaNomeVac(setaBCG, setaPolio, setaTetra, setaTriplice, setaHepB, setaFebre, setaDupla, setaGripe, setaPneu)
            }
        }else{
            habilitaBotoes(ckFakeBcgDose2, marcaDataBcgDose2, dataAtualMarcaVacBcgDose2, btSubmit, dtInvBCGDose2, setaBCG)
            habilitaNomeVac(nomeVacBCG, nomeVacPolio, nomeVacTetra, nomeVacTriplice, nomeVacHepB, nomeVacFebre, nomeVacDupla, nomeVacGripe, nomeVacPneu)
            habilitaNomeVac(setaBCG, setaPolio, setaTetra, setaTriplice, setaHepB, setaFebre, setaDupla, setaGripe, setaPneu)
        }
    }else{
        habilitaBotoes(ckFakeBcgDose2, marcaDataBcgDose2, dataAtualMarcaVacBcgDose2, btSubmit, dtInvBCGDose2, setaBCG)
        habilitaNomeVac(nomeVacBCG, nomeVacPolio, nomeVacTetra, nomeVacTriplice, nomeVacHepB, nomeVacFebre, nomeVacDupla, nomeVacGripe, nomeVacPneu)
        habilitaNomeVac(setaBCG, setaPolio, setaTetra, setaTriplice, setaHepB, setaFebre, setaDupla, setaGripe, setaPneu)
    }
})


var dataAtualMarcaVacPolioDose1 = document.getElementById("dataAtualMarcaVacPolioDose1")
dataAtualMarcaVacPolioDose1.value = anoAtual + "-" + mesAtual + "-" + diaAtual
var dtInvPolioDose1 = document.getElementById("dtInvPolioDose1")
var nomeVacPolio = document.getElementById("nomeVacPolio")
dataAtualMarcaVacPolioDose1.addEventListener("input", function(){
    var anoInput = parseInt(dataAtualMarcaVacPolioDose1.value.substring(0, 4))
    var mesInput = parseInt(dataAtualMarcaVacPolioDose1.value.substring(5, 7))
    var diaInput = parseInt(dataAtualMarcaVacPolioDose1.value.substring(8, 10))
    if(anoInput > anoAtual || dataAtualMarcaVacPolioDose1.value == ""){
        desabilitaBotoes(ckFakePolioDose1, marcaDataPolioDose1, dataAtualMarcaVacPolioDose1, btSubmit, dtInvPolioDose1, setaPolio)
        desabilitaNomeVac(nomeVacBCG, nomeVacPolio, nomeVacTetra, nomeVacTriplice, nomeVacHepB, nomeVacFebre, nomeVacDupla, nomeVacGripe, nomeVacPneu)
        desabilitaNomeVac(setaBCG, setaPolio, setaTetra, setaTriplice, setaHepB, setaFebre, setaDupla, setaGripe, setaPneu)
    }else if(anoInput == anoAtual || dataAtualMarcaVacPolioDose1.value == ""){
        if(mesInput > mesAtual || dataAtualMarcaVacPolioDose1.value == ""){
            desabilitaBotoes(ckFakePolioDose1, marcaDataPolioDose1, dataAtualMarcaVacPolioDose1, btSubmit, dtInvPolioDose1, setaPolio)
            desabilitaNomeVac(nomeVacBCG, nomeVacPolio, nomeVacTetra, nomeVacTriplice, nomeVacHepB, nomeVacFebre, nomeVacDupla, nomeVacGripe, nomeVacPneu)
            desabilitaNomeVac(setaBCG, setaPolio, setaTetra, setaTriplice, setaHepB, setaFebre, setaDupla, setaGripe, setaPneu)
        }else if(mesInput == mesAtual || dataAtualMarcaVacPolioDose1.value == ""){
            if(diaInput > diaAtual || dataAtualMarcaVacPolioDose1.value == ""){
                desabilitaBotoes(ckFakePolioDose1, marcaDataPolioDose1, dataAtualMarcaVacPolioDose1, btSubmit, dtInvPolioDose1, setaPolio)
                desabilitaNomeVac(nomeVacBCG, nomeVacPolio, nomeVacTetra, nomeVacTriplice, nomeVacHepB, nomeVacFebre, nomeVacDupla, nomeVacGripe, nomeVacPneu)
                desabilitaNomeVac(setaBCG, setaPolio, setaTetra, setaTriplice, setaHepB, setaFebre, setaDupla, setaGripe, setaPneu)
            }else{
                habilitaBotoes(ckFakePolioDose1, marcaDataPolioDose1, dataAtualMarcaVacPolioDose1, btSubmit, dtInvPolioDose1, setaPolio)
                habilitaNomeVac(nomeVacBCG, nomeVacPolio, nomeVacTetra, nomeVacTriplice, nomeVacHepB, nomeVacFebre, nomeVacDupla, nomeVacGripe, nomeVacPneu)
                habilitaNomeVac(setaBCG, setaPolio, setaTetra, setaTriplice, setaHepB, setaFebre, setaDupla, setaGripe, setaPneu)
            }
        }else{
            habilitaBotoes(ckFakePolioDose1, marcaDataPolioDose1, dataAtualMarcaVacPolioDose1, btSubmit, dtInvPolioDose1, setaPolio)
            habilitaNomeVac(nomeVacBCG, nomeVacPolio, nomeVacTetra, nomeVacTriplice, nomeVacHepB, nomeVacFebre, nomeVacDupla, nomeVacGripe, nomeVacPneu)
            habilitaNomeVac(setaBCG, setaPolio, setaTetra, setaTriplice, setaHepB, setaFebre, setaDupla, setaGripe, setaPneu)
        }
    }else{
        habilitaBotoes(ckFakePolioDose1, marcaDataPolioDose1, dataAtualMarcaVacPolioDose1, btSubmit, dtInvPolioDose1, setaPolio)
        habilitaNomeVac(nomeVacBCG, nomeVacPolio, nomeVacTetra, nomeVacTriplice, nomeVacHepB, nomeVacFebre, nomeVacDupla, nomeVacGripe, nomeVacPneu)
        habilitaNomeVac(setaBCG, setaPolio, setaTetra, setaTriplice, setaHepB, setaFebre, setaDupla, setaGripe, setaPneu)
    }
})


var dataAtualMarcaVacPolioDose2 = document.getElementById("dataAtualMarcaVacPolioDose2")
dataAtualMarcaVacPolioDose2.value = anoAtual + "-" + mesAtual + "-" + diaAtual
var dtInvPolioDose2 = document.getElementById("dtInvPolioDose2")
dataAtualMarcaVacPolioDose2.addEventListener("input", function(){
    var anoInput = parseInt(dataAtualMarcaVacPolioDose2.value.substring(0, 4))
    var mesInput = parseInt(dataAtualMarcaVacPolioDose2.value.substring(5, 7))
    var diaInput = parseInt(dataAtualMarcaVacPolioDose2.value.substring(8, 10))
    if(anoInput > anoAtual || dataAtualMarcaVacPolioDose2.value == ""){
        desabilitaBotoes(ckFakePolioDose2, marcaDataPolioDose2, dataAtualMarcaVacPolioDose2, btSubmit, dtInvPolioDose2, setaPolio)
        desabilitaNomeVac(nomeVacBCG, nomeVacPolio, nomeVacTetra, nomeVacTriplice, nomeVacHepB, nomeVacFebre, nomeVacDupla, nomeVacGripe, nomeVacPneu)
        desabilitaNomeVac(setaBCG, setaPolio, setaTetra, setaTriplice, setaHepB, setaFebre, setaDupla, setaGripe, setaPneu)
    }else if(anoInput == anoAtual || dataAtualMarcaVacPolioDose2.value == ""){
        if(mesInput > mesAtual || dataAtualMarcaVacPolioDose2.value == ""){
            desabilitaBotoes(ckFakePolioDose2, marcaDataPolioDose2, dataAtualMarcaVacPolioDose2, btSubmit, dtInvPolioDose2, setaPolio)
            desabilitaNomeVac(nomeVacBCG, nomeVacPolio, nomeVacTetra, nomeVacTriplice, nomeVacHepB, nomeVacFebre, nomeVacDupla, nomeVacGripe, nomeVacPneu)
            desabilitaNomeVac(setaBCG, setaPolio, setaTetra, setaTriplice, setaHepB, setaFebre, setaDupla, setaGripe, setaPneu)
        }else if(mesInput == mesAtual || dataAtualMarcaVacPolioDose2.value == ""){
            if(diaInput > diaAtual || dataAtualMarcaVacPolioDose2.value == ""){
                desabilitaBotoes(ckFakePolioDose2, marcaDataPolioDose2, dataAtualMarcaVacPolioDose2, btSubmit, dtInvPolioDose2, setaPolio)
                desabilitaNomeVac(nomeVacBCG, nomeVacPolio, nomeVacTetra, nomeVacTriplice, nomeVacHepB, nomeVacFebre, nomeVacDupla, nomeVacGripe, nomeVacPneu)
                desabilitaNomeVac(setaBCG, setaPolio, setaTetra, setaTriplice, setaHepB, setaFebre, setaDupla, setaGripe, setaPneu)
            }else{
                habilitaBotoes(ckFakePolioDose2, marcaDataPolioDose2, dataAtualMarcaVacPolioDose2, btSubmit, dtInvPolioDose2, setaPolio)
                habilitaNomeVac(nomeVacBCG, nomeVacPolio, nomeVacTetra, nomeVacTriplice, nomeVacHepB, nomeVacFebre, nomeVacDupla, nomeVacGripe, nomeVacPneu)
                habilitaNomeVac(setaBCG, setaPolio, setaTetra, setaTriplice, setaHepB, setaFebre, setaDupla, setaGripe, setaPneu)
            }
        }else{
            habilitaBotoes(ckFakePolioDose2, marcaDataPolioDose2, dataAtualMarcaVacPolioDose2, btSubmit, dtInvPolioDose2, setaPolio)
            habilitaNomeVac(nomeVacBCG, nomeVacPolio, nomeVacTetra, nomeVacTriplice, nomeVacHepB, nomeVacFebre, nomeVacDupla, nomeVacGripe, nomeVacPneu)
            habilitaNomeVac(setaBCG, setaPolio, setaTetra, setaTriplice, setaHepB, setaFebre, setaDupla, setaGripe, setaPneu)
        }
    }else{
        habilitaBotoes(ckFakePolioDose2, marcaDataPolioDose2, dataAtualMarcaVacPolioDose2, btSubmit, dtInvPolioDose2, setaPolio)
        habilitaNomeVac(nomeVacBCG, nomeVacPolio, nomeVacTetra, nomeVacTriplice, nomeVacHepB, nomeVacFebre, nomeVacDupla, nomeVacGripe, nomeVacPneu)
        habilitaNomeVac(setaBCG, setaPolio, setaTetra, setaTriplice, setaHepB, setaFebre, setaDupla, setaGripe, setaPneu)
    }
})


var dataAtualMarcaVacPolioDose3 = document.getElementById("dataAtualMarcaVacPolioDose3")
dataAtualMarcaVacPolioDose3.value = anoAtual + "-" + mesAtual + "-" + diaAtual
var dtInvPolioDose3 = document.getElementById("dtInvPolioDose3")
dataAtualMarcaVacPolioDose3.addEventListener("input", function(){
    var anoInput = parseInt(dataAtualMarcaVacPolioDose3.value.substring(0, 4))
    var mesInput = parseInt(dataAtualMarcaVacPolioDose3.value.substring(5, 7))
    var diaInput = parseInt(dataAtualMarcaVacPolioDose3.value.substring(8, 10))
    if(anoInput > anoAtual || dataAtualMarcaVacPolioDose3.value == ""){
        desabilitaBotoes(ckFakePolioDose3, marcaDataPolioDose3, dataAtualMarcaVacPolioDose3, btSubmit, dtInvPolioDose3, setaPolio)
        desabilitaNomeVac(nomeVacBCG, nomeVacPolio, nomeVacTetra, nomeVacTriplice, nomeVacHepB, nomeVacFebre, nomeVacDupla, nomeVacGripe, nomeVacPneu)
        desabilitaNomeVac(setaBCG, setaPolio, setaTetra, setaTriplice, setaHepB, setaFebre, setaDupla, setaGripe, setaPneu)
    }else if(anoInput == anoAtual || dataAtualMarcaVacPolioDose3.value == ""){
        if(mesInput > mesAtual || dataAtualMarcaVacPolioDose3.value == ""){
            desabilitaBotoes(ckFakePolioDose3, marcaDataPolioDose3, dataAtualMarcaVacPolioDose3, btSubmit, dtInvPolioDose3, setaPolio)
            desabilitaNomeVac(nomeVacBCG, nomeVacPolio, nomeVacTetra, nomeVacTriplice, nomeVacHepB, nomeVacFebre, nomeVacDupla, nomeVacGripe, nomeVacPneu)
            desabilitaNomeVac(setaBCG, setaPolio, setaTetra, setaTriplice, setaHepB, setaFebre, setaDupla, setaGripe, setaPneu)
        }else if(mesInput == mesAtual || dataAtualMarcaVacPolioDose3.value == ""){
            if(diaInput > diaAtual || dataAtualMarcaVacPolioDose3.value == ""){
                desabilitaBotoes(ckFakePolioDose3, marcaDataPolioDose3, dataAtualMarcaVacPolioDose3, btSubmit, dtInvPolioDose3, setaPolio)
                desabilitaNomeVac(nomeVacBCG, nomeVacPolio, nomeVacTetra, nomeVacTriplice, nomeVacHepB, nomeVacFebre, nomeVacDupla, nomeVacGripe, nomeVacPneu)
                desabilitaNomeVac(setaBCG, setaPolio, setaTetra, setaTriplice, setaHepB, setaFebre, setaDupla, setaGripe, setaPneu)
            }else{
                habilitaBotoes(ckFakePolioDose3, marcaDataPolioDose3, dataAtualMarcaVacPolioDose3, btSubmit, dtInvPolioDose3, setaPolio)
                habilitaNomeVac(nomeVacBCG, nomeVacPolio, nomeVacTetra, nomeVacTriplice, nomeVacHepB, nomeVacFebre, nomeVacDupla, nomeVacGripe, nomeVacPneu)
                habilitaNomeVac(setaBCG, setaPolio, setaTetra, setaTriplice, setaHepB, setaFebre, setaDupla, setaGripe, setaPneu)
            }
        }else{
            habilitaBotoes(ckFakePolioDose3, marcaDataPolioDose3, dataAtualMarcaVacPolioDose3, btSubmit, dtInvPolioDose3, setaPolio)
            habilitaNomeVac(nomeVacBCG, nomeVacPolio, nomeVacTetra, nomeVacTriplice, nomeVacHepB, nomeVacFebre, nomeVacDupla, nomeVacGripe, nomeVacPneu)
            habilitaNomeVac(setaBCG, setaPolio, setaTetra, setaTriplice, setaHepB, setaFebre, setaDupla, setaGripe, setaPneu)
        }
    }else{
        habilitaBotoes(ckFakePolioDose3, marcaDataPolioDose3, dataAtualMarcaVacPolioDose3, btSubmit, dtInvPolioDose3, setaPolio)
        habilitaNomeVac(nomeVacBCG, nomeVacPolio, nomeVacTetra, nomeVacTriplice, nomeVacHepB, nomeVacFebre, nomeVacDupla, nomeVacGripe, nomeVacPneu)
        habilitaNomeVac(setaBCG, setaPolio, setaTetra, setaTriplice, setaHepB, setaFebre, setaDupla, setaGripe, setaPneu)
    }
})


var dataAtualMarcaVacPolioDose4 = document.getElementById("dataAtualMarcaVacPolioDose4")
dataAtualMarcaVacPolioDose4.value = anoAtual + "-" + mesAtual + "-" + diaAtual
var dtInvPolioDose4 = document.getElementById("dtInvPolioDose4")
dataAtualMarcaVacPolioDose4.addEventListener("input", function(){
    var anoInput = parseInt(dataAtualMarcaVacPolioDose4.value.substring(0, 4))
    var mesInput = parseInt(dataAtualMarcaVacPolioDose4.value.substring(5, 7))
    var diaInput = parseInt(dataAtualMarcaVacPolioDose4.value.substring(8, 10))
    if(anoInput > anoAtual || dataAtualMarcaVacPolioDose4.value == ""){
        desabilitaBotoes(ckFakePolioDose4, marcaDataPolioDose4, dataAtualMarcaVacPolioDose4, btSubmit, dtInvPolioDose4, setaPolio)
        desabilitaNomeVac(nomeVacBCG, nomeVacPolio, nomeVacTetra, nomeVacTriplice, nomeVacHepB, nomeVacFebre, nomeVacDupla, nomeVacGripe, nomeVacPneu)
        desabilitaNomeVac(setaBCG, setaPolio, setaTetra, setaTriplice, setaHepB, setaFebre, setaDupla, setaGripe, setaPneu)
    }else if(anoInput == anoAtual || dataAtualMarcaVacPolioDose4.value == ""){
        if(mesInput > mesAtual || dataAtualMarcaVacPolioDose4.value == ""){
            desabilitaBotoes(ckFakePolioDose4, marcaDataPolioDose4, dataAtualMarcaVacPolioDose4, btSubmit, dtInvPolioDose4, setaPolio)
            desabilitaNomeVac(nomeVacBCG, nomeVacPolio, nomeVacTetra, nomeVacTriplice, nomeVacHepB, nomeVacFebre, nomeVacDupla, nomeVacGripe, nomeVacPneu)
            desabilitaNomeVac(setaBCG, setaPolio, setaTetra, setaTriplice, setaHepB, setaFebre, setaDupla, setaGripe, setaPneu)
        }else if(mesInput == mesAtual || dataAtualMarcaVacPolioDose4.value == ""){
            if(diaInput > diaAtual || dataAtualMarcaVacPolioDose4.value == ""){
                desabilitaBotoes(ckFakePolioDose4, marcaDataPolioDose4, dataAtualMarcaVacPolioDose4, btSubmit, dtInvPolioDose4, setaPolio)
                desabilitaNomeVac(nomeVacBCG, nomeVacPolio, nomeVacTetra, nomeVacTriplice, nomeVacHepB, nomeVacFebre, nomeVacDupla, nomeVacGripe, nomeVacPneu)
                desabilitaNomeVac(setaBCG, setaPolio, setaTetra, setaTriplice, setaHepB, setaFebre, setaDupla, setaGripe, setaPneu)
            }else{
                habilitaBotoes(ckFakePolioDose4, marcaDataPolioDose4, dataAtualMarcaVacPolioDose4, btSubmit, dtInvPolioDose4, setaPolio)
                habilitaNomeVac(nomeVacBCG, nomeVacPolio, nomeVacTetra, nomeVacTriplice, nomeVacHepB, nomeVacFebre, nomeVacDupla, nomeVacGripe, nomeVacPneu)
                habilitaNomeVac(setaBCG, setaPolio, setaTetra, setaTriplice, setaHepB, setaFebre, setaDupla, setaGripe, setaPneu)
            }
        }else{
            habilitaBotoes(ckFakePolioDose4, marcaDataPolioDose4, dataAtualMarcaVacPolioDose4, btSubmit, dtInvPolioDose4, setaPolio)
            habilitaNomeVac(nomeVacBCG, nomeVacPolio, nomeVacTetra, nomeVacTriplice, nomeVacHepB, nomeVacFebre, nomeVacDupla, nomeVacGripe, nomeVacPneu)
            habilitaNomeVac(setaBCG, setaPolio, setaTetra, setaTriplice, setaHepB, setaFebre, setaDupla, setaGripe, setaPneu)
        }
    }else{
        habilitaBotoes(ckFakePolioDose4, marcaDataPolioDose4, dataAtualMarcaVacPolioDose4, btSubmit, dtInvPolioDose4, setaPolio)
        habilitaNomeVac(nomeVacBCG, nomeVacPolio, nomeVacTetra, nomeVacTriplice, nomeVacHepB, nomeVacFebre, nomeVacDupla, nomeVacGripe, nomeVacPneu)
        habilitaNomeVac(setaBCG, setaPolio, setaTetra, setaTriplice, setaHepB, setaFebre, setaDupla, setaGripe, setaPneu)
    }
})


var dataAtualMarcaVacTetraDose1 = document.getElementById("dataAtualMarcaVacTetraDose1")
dataAtualMarcaVacTetraDose1.value = anoAtual + "-" + mesAtual + "-" + diaAtual
var nomeVacTetra = document.getElementById("nomeVacTetra")
var dtInvTetraDose1 = document.getElementById("dtInvTetraDose1")
dataAtualMarcaVacTetraDose1.addEventListener("input", function(){
    var anoInput = parseInt(dataAtualMarcaVacTetraDose1.value.substring(0, 4))
    var mesInput = parseInt(dataAtualMarcaVacTetraDose1.value.substring(5, 7))
    var diaInput = parseInt(dataAtualMarcaVacTetraDose1.value.substring(8, 10))
    if(anoInput > anoAtual || dataAtualMarcaVacTetraDose1.value == ""){
        desabilitaBotoes(ckFakeTetraDose1, marcaDataTetraDose1, dataAtualMarcaVacTetraDose1, btSubmit, dtInvTetraDose1, setaTetra)
        desabilitaNomeVac(nomeVacBCG, nomeVacPolio, nomeVacTetra, nomeVacTriplice, nomeVacHepB, nomeVacFebre, nomeVacDupla, nomeVacGripe, nomeVacPneu)
        desabilitaNomeVac(setaBCG, setaPolio, setaTetra, setaTriplice, setaHepB, setaFebre, setaDupla, setaGripe, setaPneu)
    }else if(anoInput == anoAtual || dataAtualMarcaVacTetraDose1.value == ""){
        if(mesInput > mesAtual || dataAtualMarcaVacTetraDose1.value == ""){
            desabilitaBotoes(ckFakeTetraDose1, marcaDataTetraDose1, dataAtualMarcaVacTetraDose1, btSubmit, dtInvTetraDose1, setaTetra)
            desabilitaNomeVac(nomeVacBCG, nomeVacPolio, nomeVacTetra, nomeVacTriplice, nomeVacHepB, nomeVacFebre, nomeVacDupla, nomeVacGripe, nomeVacPneu)
            desabilitaNomeVac(setaBCG, setaPolio, setaTetra, setaTriplice, setaHepB, setaFebre, setaDupla, setaGripe, setaPneu)
        }else if(mesInput == mesAtual || dataAtualMarcaVacTetraDose1.value == ""){
            if(diaInput > diaAtual || dataAtualMarcaVacTetraDose1.value == ""){
                desabilitaBotoes(ckFakeTetraDose1, marcaDataTetraDose1, dataAtualMarcaVacTetraDose1, btSubmit, dtInvTetraDose1, setaTetra)
                desabilitaNomeVac(nomeVacBCG, nomeVacPolio, nomeVacTetra, nomeVacTriplice, nomeVacHepB, nomeVacFebre, nomeVacDupla, nomeVacGripe, nomeVacPneu)
                desabilitaNomeVac(setaBCG, setaPolio, setaTetra, setaTriplice, setaHepB, setaFebre, setaDupla, setaGripe, setaPneu)
            }else{
                habilitaBotoes(ckFakeTetraDose1, marcaDataTetraDose1, dataAtualMarcaVacTetraDose1, btSubmit, dtInvTetraDose1, setaTetra)
                habilitaNomeVac(nomeVacBCG, nomeVacPolio, nomeVacTetra, nomeVacTriplice, nomeVacHepB, nomeVacFebre, nomeVacDupla, nomeVacGripe, nomeVacPneu)
                habilitaNomeVac(setaBCG, setaPolio, setaTetra, setaTriplice, setaHepB, setaFebre, setaDupla, setaGripe, setaPneu)
            }
        }else{
            habilitaBotoes(ckFakeTetraDose1, marcaDataTetraDose1, dataAtualMarcaVacTetraDose1, btSubmit, dtInvTetraDose1, setaTetra)
            habilitaNomeVac(nomeVacBCG, nomeVacPolio, nomeVacTetra, nomeVacTriplice, nomeVacHepB, nomeVacFebre, nomeVacDupla, nomeVacGripe, nomeVacPneu)
            habilitaNomeVac(setaBCG, setaPolio, setaTetra, setaTriplice, setaHepB, setaFebre, setaDupla, setaGripe, setaPneu)
        }
    }else{
        habilitaBotoes(ckFakeTetraDose1, marcaDataTetraDose1, dataAtualMarcaVacTetraDose1, btSubmit, dtInvTetraDose1, setaTetra)
        habilitaNomeVac(nomeVacBCG, nomeVacPolio, nomeVacTetra, nomeVacTriplice, nomeVacHepB, nomeVacFebre, nomeVacDupla, nomeVacGripe, nomeVacPneu)
        habilitaNomeVac(setaBCG, setaPolio, setaTetra, setaTriplice, setaHepB, setaFebre, setaDupla, setaGripe, setaPneu)
    }
})

var dataAtualMarcaVacTetraDose2 = document.getElementById("dataAtualMarcaVacTetraDose2")
dataAtualMarcaVacTetraDose2.value = anoAtual + "-" + mesAtual + "-" + diaAtual
var dtInvTetraDose2 = document.getElementById("dtInvTetraDose2")
dataAtualMarcaVacTetraDose2.addEventListener("input", function(){
    var anoInput = parseInt(dataAtualMarcaVacTetraDose2.value.substring(0, 4))
    var mesInput = parseInt(dataAtualMarcaVacTetraDose2.value.substring(5, 7))
    var diaInput = parseInt(dataAtualMarcaVacTetraDose2.value.substring(8, 10))
    if(anoInput > anoAtual || dataAtualMarcaVacTetraDose2.value == ""){
        desabilitaBotoes(ckFakeTetraDose2, marcaDataTetraDose2, dataAtualMarcaVacTetraDose2, btSubmit, dtInvTetraDose2, setaTetra)
        desabilitaNomeVac(nomeVacBCG, nomeVacPolio, nomeVacTetra, nomeVacTriplice, nomeVacHepB, nomeVacFebre, nomeVacDupla, nomeVacGripe, nomeVacPneu)
        desabilitaNomeVac(setaBCG, setaPolio, setaTetra, setaTriplice, setaHepB, setaFebre, setaDupla, setaGripe, setaPneu)
    }else if(anoInput == anoAtual || dataAtualMarcaVacTetraDose2.value == ""){
        if(mesInput > mesAtual || dataAtualMarcaVacTetraDose2.value == ""){
            desabilitaBotoes(ckFakeTetraDose2, marcaDataTetraDose2, dataAtualMarcaVacTetraDose2, btSubmit, dtInvTetraDose2, setaTetra)
            desabilitaNomeVac(nomeVacBCG, nomeVacPolio, nomeVacTetra, nomeVacTriplice, nomeVacHepB, nomeVacFebre, nomeVacDupla, nomeVacGripe, nomeVacPneu)
            desabilitaNomeVac(setaBCG, setaPolio, setaTetra, setaTriplice, setaHepB, setaFebre, setaDupla, setaGripe, setaPneu)
        }else if(mesInput == mesAtual || dataAtualMarcaVacTetraDose2.value == ""){
            if(diaInput > diaAtual || dataAtualMarcaVacTetraDose2.value == ""){
                desabilitaBotoes(ckFakeTetraDose2, marcaDataTetraDose2, dataAtualMarcaVacTetraDose2, btSubmit, dtInvTetraDose2, setaTetra)
                desabilitaNomeVac(nomeVacBCG, nomeVacPolio, nomeVacTetra, nomeVacTriplice, nomeVacHepB, nomeVacFebre, nomeVacDupla, nomeVacGripe, nomeVacPneu)
                desabilitaNomeVac(setaBCG, setaPolio, setaTetra, setaTriplice, setaHepB, setaFebre, setaDupla, setaGripe, setaPneu)
            }else{
                habilitaBotoes(ckFakeTetraDose2, marcaDataTetraDose2, dataAtualMarcaVacTetraDose2, btSubmit, dtInvTetraDose2, setaTetra)
                habilitaNomeVac(nomeVacBCG, nomeVacPolio, nomeVacTetra, nomeVacTriplice, nomeVacHepB, nomeVacFebre, nomeVacDupla, nomeVacGripe, nomeVacPneu)
                habilitaNomeVac(setaBCG, setaPolio, setaTetra, setaTriplice, setaHepB, setaFebre, setaDupla, setaGripe, setaPneu)
            }
        }else{
            habilitaBotoes(ckFakeTetraDose2, marcaDataTetraDose2, dataAtualMarcaVacTetraDose2, btSubmit, dtInvTetraDose2, setaTetra)
            habilitaNomeVac(nomeVacBCG, nomeVacPolio, nomeVacTetra, nomeVacTriplice, nomeVacHepB, nomeVacFebre, nomeVacDupla, nomeVacGripe, nomeVacPneu)
            habilitaNomeVac(setaBCG, setaPolio, setaTetra, setaTriplice, setaHepB, setaFebre, setaDupla, setaGripe, setaPneu)
        }
    }else{
        habilitaBotoes(ckFakeTetraDose2, marcaDataTetraDose2, dataAtualMarcaVacTetraDose2, btSubmit, dtInvTetraDose2, setaTetra)
        habilitaNomeVac(nomeVacBCG, nomeVacPolio, nomeVacTetra, nomeVacTriplice, nomeVacHepB, nomeVacFebre, nomeVacDupla, nomeVacGripe, nomeVacPneu)
        habilitaNomeVac(setaBCG, setaPolio, setaTetra, setaTriplice, setaHepB, setaFebre, setaDupla, setaGripe, setaPneu)
    }
})

var dataAtualMarcaVacTetraDose3 = document.getElementById("dataAtualMarcaVacTetraDose3")
dataAtualMarcaVacTetraDose3.value = anoAtual + "-" + mesAtual + "-" + diaAtual
var dtInvTetraDose3 = document.getElementById("dtInvTetraDose3")
dataAtualMarcaVacTetraDose3.addEventListener("input", function(){
    var anoInput = parseInt(dataAtualMarcaVacTetraDose3.value.substring(0, 4))
    var mesInput = parseInt(dataAtualMarcaVacTetraDose3.value.substring(5, 7))
    var diaInput = parseInt(dataAtualMarcaVacTetraDose3.value.substring(8, 10))
    if(anoInput > anoAtual || dataAtualMarcaVacTetraDose3.value == ""){
        desabilitaBotoes(ckFakeTetraDose3, marcaDataTetraDose3, dataAtualMarcaVacTetraDose3, btSubmit, dtInvTetraDose3, setaTetra)
        desabilitaNomeVac(nomeVacBCG, nomeVacPolio, nomeVacTetra, nomeVacTriplice, nomeVacHepB, nomeVacFebre, nomeVacDupla, nomeVacGripe, nomeVacPneu)
        desabilitaNomeVac(setaBCG, setaPolio, setaTetra, setaTriplice, setaHepB, setaFebre, setaDupla, setaGripe, setaPneu)
    }else if(anoInput == anoAtual || dataAtualMarcaVacTetraDose3.value == ""){
        if(mesInput > mesAtual || dataAtualMarcaVacTetraDose3.value == ""){
            desabilitaBotoes(ckFakeTetraDose3, marcaDataTetraDose3, dataAtualMarcaVacTetraDose3, btSubmit, dtInvTetraDose3, setaTetra)
            desabilitaNomeVac(nomeVacBCG, nomeVacPolio, nomeVacTetra, nomeVacTriplice, nomeVacHepB, nomeVacFebre, nomeVacDupla, nomeVacGripe, nomeVacPneu)
            desabilitaNomeVac(setaBCG, setaPolio, setaTetra, setaTriplice, setaHepB, setaFebre, setaDupla, setaGripe, setaPneu)
        }else if(mesInput == mesAtual || dataAtualMarcaVacTetraDose3.value == ""){
            if(diaInput > diaAtual || dataAtualMarcaVacTetraDose3.value == ""){
                desabilitaBotoes(ckFakeTetraDose3, marcaDataTetraDose3, dataAtualMarcaVacTetraDose3, btSubmit, dtInvTetraDose3, setaTetra)
                desabilitaNomeVac(nomeVacBCG, nomeVacPolio, nomeVacTetra, nomeVacTriplice, nomeVacHepB, nomeVacFebre, nomeVacDupla, nomeVacGripe, nomeVacPneu)
                desabilitaNomeVac(setaBCG, setaPolio, setaTetra, setaTriplice, setaHepB, setaFebre, setaDupla, setaGripe, setaPneu)
            }else{
                habilitaBotoes(ckFakeTetraDose3, marcaDataTetraDose3, dataAtualMarcaVacTetraDose3, btSubmit, dtInvTetraDose3, setaTetra)
                habilitaNomeVac(nomeVacBCG, nomeVacPolio, nomeVacTetra, nomeVacTriplice, nomeVacHepB, nomeVacFebre, nomeVacDupla, nomeVacGripe, nomeVacPneu)
                habilitaNomeVac(setaBCG, setaPolio, setaTetra, setaTriplice, setaHepB, setaFebre, setaDupla, setaGripe, setaPneu)
            }
        }else{
            habilitaBotoes(ckFakeTetraDose3, marcaDataTetraDose3, dataAtualMarcaVacTetraDose3, btSubmit, dtInvTetraDose3, setaTetra)
            habilitaNomeVac(nomeVacBCG, nomeVacPolio, nomeVacTetra, nomeVacTriplice, nomeVacHepB, nomeVacFebre, nomeVacDupla, nomeVacGripe, nomeVacPneu)
            habilitaNomeVac(setaBCG, setaPolio, setaTetra, setaTriplice, setaHepB, setaFebre, setaDupla, setaGripe, setaPneu)
        }
    }else{
        habilitaBotoes(ckFakeTetraDose3, marcaDataTetraDose3, dataAtualMarcaVacTetraDose3, btSubmit, dtInvTetraDose3, setaTetra)
        habilitaNomeVac(nomeVacBCG, nomeVacPolio, nomeVacTetra, nomeVacTriplice, nomeVacHepB, nomeVacFebre, nomeVacDupla, nomeVacGripe, nomeVacPneu)
        habilitaNomeVac(setaBCG, setaPolio, setaTetra, setaTriplice, setaHepB, setaFebre, setaDupla, setaGripe, setaPneu)
    }
})

var dataAtualMarcaVacTetraDose4 = document.getElementById("dataAtualMarcaVacTetraDose4")
dataAtualMarcaVacTetraDose4.value = anoAtual + "-" + mesAtual + "-" + diaAtual
var dtInvTetraDose4 = document.getElementById("dtInvTetraDose4")
dataAtualMarcaVacTetraDose4.addEventListener("input", function(){
    var anoInput = parseInt(dataAtualMarcaVacTetraDose4.value.substring(0, 4))
    var mesInput = parseInt(dataAtualMarcaVacTetraDose4.value.substring(5, 7))
    var diaInput = parseInt(dataAtualMarcaVacTetraDose4.value.substring(8, 10))
    if(anoInput > anoAtual || dataAtualMarcaVacTetraDose4.value == ""){
        desabilitaBotoes(ckFakeTetraDose4, marcaDataTetraDose4, dataAtualMarcaVacTetraDose4, btSubmit, dtInvTetraDose4, setaTetra)
        desabilitaNomeVac(nomeVacBCG, nomeVacPolio, nomeVacTetra, nomeVacTriplice, nomeVacHepB, nomeVacFebre, nomeVacDupla, nomeVacGripe, nomeVacPneu)
        desabilitaNomeVac(setaBCG, setaPolio, setaTetra, setaTriplice, setaHepB, setaFebre, setaDupla, setaGripe, setaPneu)
    }else if(anoInput == anoAtual || dataAtualMarcaVacTetraDose4.value == ""){
        if(mesInput > mesAtual || dataAtualMarcaVacTetraDose4.value == ""){
            desabilitaBotoes(ckFakeTetraDose4, marcaDataTetraDose4, dataAtualMarcaVacTetraDose4, btSubmit, dtInvTetraDose4, setaTetra)
            desabilitaNomeVac(nomeVacBCG, nomeVacPolio, nomeVacTetra, nomeVacTriplice, nomeVacHepB, nomeVacFebre, nomeVacDupla, nomeVacGripe, nomeVacPneu)
            desabilitaNomeVac(setaBCG, setaPolio, setaTetra, setaTriplice, setaHepB, setaFebre, setaDupla, setaGripe, setaPneu)
        }else if(mesInput == mesAtual || dataAtualMarcaVacTetraDose4.value == ""){
            if(diaInput > diaAtual || dataAtualMarcaVacTetraDose4.value == ""){
                desabilitaBotoes(ckFakeTetraDose4, marcaDataTetraDose4, dataAtualMarcaVacTetraDose4, btSubmit, dtInvTetraDose4, setaTetra)
                desabilitaNomeVac(nomeVacBCG, nomeVacPolio, nomeVacTetra, nomeVacTriplice, nomeVacHepB, nomeVacFebre, nomeVacDupla, nomeVacGripe, nomeVacPneu)
                desabilitaNomeVac(setaBCG, setaPolio, setaTetra, setaTriplice, setaHepB, setaFebre, setaDupla, setaGripe, setaPneu)
            }else{
                habilitaBotoes(ckFakeTetraDose4, marcaDataTetraDose4, dataAtualMarcaVacTetraDose4, btSubmit, dtInvTetraDose4, setaTetra)
                habilitaNomeVac(nomeVacBCG, nomeVacPolio, nomeVacTetra, nomeVacTriplice, nomeVacHepB, nomeVacFebre, nomeVacDupla, nomeVacGripe, nomeVacPneu)
                habilitaNomeVac(setaBCG, setaPolio, setaTetra, setaTriplice, setaHepB, setaFebre, setaDupla, setaGripe, setaPneu)
            }
        }else{
            habilitaBotoes(ckFakeTetraDose4, marcaDataTetraDose4, dataAtualMarcaVacTetraDose4, btSubmit, dtInvTetraDose4, setaTetra)
            habilitaNomeVac(nomeVacBCG, nomeVacPolio, nomeVacTetra, nomeVacTriplice, nomeVacHepB, nomeVacFebre, nomeVacDupla, nomeVacGripe, nomeVacPneu)
            habilitaNomeVac(setaBCG, setaPolio, setaTetra, setaTriplice, setaHepB, setaFebre, setaDupla, setaGripe, setaPneu)
        }
    }else{
        habilitaBotoes(ckFakeTetraDose4, marcaDataTetraDose4, dataAtualMarcaVacTetraDose4, btSubmit, dtInvTetraDose4, setaTetra)
        habilitaNomeVac(nomeVacBCG, nomeVacPolio, nomeVacTetra, nomeVacTriplice, nomeVacHepB, nomeVacFebre, nomeVacDupla, nomeVacGripe, nomeVacPneu)
        habilitaNomeVac(setaBCG, setaPolio, setaTetra, setaTriplice, setaHepB, setaFebre, setaDupla, setaGripe, setaPneu)
    }
})


var dataAtualMarcaVacDuplaDose1 = document.getElementById("dataAtualMarcaVacDuplaDose1")
dataAtualMarcaVacDuplaDose1.value = anoAtual + "-" + mesAtual + "-" + diaAtual
var nomeVacDupla = document.getElementById("nomeVacDupla")
var dtInvDuplaDose1 = document.getElementById("dtInvDuplaDose1")
dataAtualMarcaVacDuplaDose1.addEventListener("input", function(){
    var anoInput = parseInt(dataAtualMarcaVacDuplaDose1.value.substring(0, 4))
    var mesInput = parseInt(dataAtualMarcaVacDuplaDose1.value.substring(5, 7))
    var diaInput = parseInt(dataAtualMarcaVacDuplaDose1.value.substring(8, 10))
    if(anoInput > anoAtual || dataAtualMarcaVacDuplaDose1.value == ""){
        desabilitaBotoes(ckFakeDuplaDose1, marcaDataDuplaDose1, dataAtualMarcaVacDuplaDose1, btSubmit, dtInvDuplaDose1, setaDupla)
        desabilitaNomeVac(nomeVacBCG, nomeVacPolio, nomeVacTetra, nomeVacTriplice, nomeVacHepB, nomeVacFebre, nomeVacDupla, nomeVacGripe, nomeVacPneu)
        desabilitaNomeVac(setaBCG, setaPolio, setaTetra, setaTriplice, setaHepB, setaFebre, setaDupla, setaGripe, setaPneu)
    }else if(anoInput == anoAtual || dataAtualMarcaVacDuplaDose1.value == ""){
        if(mesInput > mesAtual || dataAtualMarcaVacDuplaDose1.value == ""){
            desabilitaBotoes(ckFakeDuplaDose1, marcaDataDuplaDose1, dataAtualMarcaVacDuplaDose1, btSubmit, dtInvDuplaDose1, setaDupla)
            desabilitaNomeVac(nomeVacBCG, nomeVacPolio, nomeVacTetra, nomeVacTriplice, nomeVacHepB, nomeVacFebre, nomeVacDupla, nomeVacGripe, nomeVacPneu)
            desabilitaNomeVac(setaBCG, setaPolio, setaTetra, setaTriplice, setaHepB, setaFebre, setaDupla, setaGripe, setaPneu)
        }else if(mesInput == mesAtual || dataAtualMarcaVacDuplaDose1.value == ""){
            if(diaInput > diaAtual || dataAtualMarcaVacDuplaDose1.value == ""){
                desabilitaBotoes(ckFakeDuplaDose1, marcaDataDuplaDose1, dataAtualMarcaVacDuplaDose1, btSubmit, dtInvDuplaDose1, setaDupla)
                desabilitaNomeVac(nomeVacBCG, nomeVacPolio, nomeVacTetra, nomeVacTriplice, nomeVacHepB, nomeVacFebre, nomeVacDupla, nomeVacGripe, nomeVacPneu)
                desabilitaNomeVac(setaBCG, setaPolio, setaTetra, setaTriplice, setaHepB, setaFebre, setaDupla, setaGripe, setaPneu)
            }else{
                habilitaBotoes(ckFakeDuplaDose1, marcaDataDuplaDose1, dataAtualMarcaVacDuplaDose1, btSubmit, dtInvDuplaDose1, setaDupla)
                habilitaNomeVac(nomeVacBCG, nomeVacPolio, nomeVacTetra, nomeVacTriplice, nomeVacHepB, nomeVacFebre, nomeVacDupla, nomeVacGripe, nomeVacPneu)
                habilitaNomeVac(setaBCG, setaPolio, setaTetra, setaTriplice, setaHepB, setaFebre, setaDupla, setaGripe, setaPneu)
            }
        }else{
            habilitaBotoes(ckFakeDuplaDose1, marcaDataDuplaDose1, dataAtualMarcaVacDuplaDose1, btSubmit, dtInvDuplaDose1, setaDupla)
            habilitaNomeVac(nomeVacBCG, nomeVacPolio, nomeVacTetra, nomeVacTriplice, nomeVacHepB, nomeVacFebre, nomeVacDupla, nomeVacGripe, nomeVacPneu)
            habilitaNomeVac(setaBCG, setaPolio, setaTetra, setaTriplice, setaHepB, setaFebre, setaDupla, setaGripe, setaPneu)
        }
    }else{
        habilitaBotoes(ckFakeDuplaDose1, marcaDataDuplaDose1, dataAtualMarcaVacDuplaDose1, btSubmit, dtInvDuplaDose1, setaDupla)
        habilitaNomeVac(nomeVacBCG, nomeVacPolio, nomeVacTetra, nomeVacTriplice, nomeVacHepB, nomeVacFebre, nomeVacDupla, nomeVacGripe, nomeVacPneu)
        habilitaNomeVac(setaBCG, setaPolio, setaTetra, setaTriplice, setaHepB, setaFebre, setaDupla, setaGripe, setaPneu)
    }
})

var dataAtualMarcaVacDuplaDose2 = document.getElementById("dataAtualMarcaVacDuplaDose2")
dataAtualMarcaVacDuplaDose2.value = anoAtual + "-" + mesAtual + "-" + diaAtual
var dtInvDuplaDose2 = document.getElementById("dtInvDuplaDose2")
dataAtualMarcaVacDuplaDose2.addEventListener("input", function(){
    var anoInput = parseInt(dataAtualMarcaVacDuplaDose2.value.substring(0, 4))
    var mesInput = parseInt(dataAtualMarcaVacDuplaDose2.value.substring(5, 7))
    var diaInput = parseInt(dataAtualMarcaVacDuplaDose2.value.substring(8, 10))
    if(anoInput > anoAtual || dataAtualMarcaVacDuplaDose2.value == ""){
        desabilitaBotoes(ckFakeDuplaDose2, marcaDataDuplaDose2, dataAtualMarcaVacDuplaDose2, btSubmit, dtInvDuplaDose2, setaDupla)
        desabilitaNomeVac(nomeVacBCG, nomeVacPolio, nomeVacTetra, nomeVacTriplice, nomeVacHepB, nomeVacFebre, nomeVacDupla, nomeVacGripe, nomeVacPneu)
        desabilitaNomeVac(setaBCG, setaPolio, setaTetra, setaTriplice, setaHepB, setaFebre, setaDupla, setaGripe, setaPneu)
    }else if(anoInput == anoAtual || dataAtualMarcaVacDuplaDose2.value == ""){
        if(mesInput > mesAtual || dataAtualMarcaVacDuplaDose2.value == ""){
            desabilitaBotoes(ckFakeDuplaDose2, marcaDataDuplaDose2, dataAtualMarcaVacDuplaDose2, btSubmit, dtInvDuplaDose2, setaDupla)
            desabilitaNomeVac(nomeVacBCG, nomeVacPolio, nomeVacTetra, nomeVacTriplice, nomeVacHepB, nomeVacFebre, nomeVacDupla, nomeVacGripe, nomeVacPneu)
            desabilitaNomeVac(setaBCG, setaPolio, setaTetra, setaTriplice, setaHepB, setaFebre, setaDupla, setaGripe, setaPneu)
        }else if(mesInput == mesAtual || dataAtualMarcaVacDuplaDose2.value == ""){
            if(diaInput > diaAtual || dataAtualMarcaVacDuplaDose2.value == ""){
                desabilitaBotoes(ckFakeDuplaDose2, marcaDataDuplaDose2, dataAtualMarcaVacDuplaDose2, btSubmit, dtInvDuplaDose2, setaDupla)
                desabilitaNomeVac(nomeVacBCG, nomeVacPolio, nomeVacTetra, nomeVacTriplice, nomeVacHepB, nomeVacFebre, nomeVacDupla, nomeVacGripe, nomeVacPneu)
                desabilitaNomeVac(setaBCG, setaPolio, setaTetra, setaTriplice, setaHepB, setaFebre, setaDupla, setaGripe, setaPneu)
            }else{
                habilitaBotoes(ckFakeDuplaDose2, marcaDataDuplaDose2, dataAtualMarcaVacDuplaDose2, btSubmit, dtInvDuplaDose2, setaDupla)
                habilitaNomeVac(nomeVacBCG, nomeVacPolio, nomeVacTetra, nomeVacTriplice, nomeVacHepB, nomeVacFebre, nomeVacDupla, nomeVacGripe, nomeVacPneu)
                habilitaNomeVac(setaBCG, setaPolio, setaTetra, setaTriplice, setaHepB, setaFebre, setaDupla, setaGripe, setaPneu)
            }
        }else{
            habilitaBotoes(ckFakeDuplaDose2, marcaDataDuplaDose2, dataAtualMarcaVacDuplaDose2, btSubmit, dtInvDuplaDose2, setaDupla)
            habilitaNomeVac(nomeVacBCG, nomeVacPolio, nomeVacTetra, nomeVacTriplice, nomeVacHepB, nomeVacFebre, nomeVacDupla, nomeVacGripe, nomeVacPneu)
            habilitaNomeVac(setaBCG, setaPolio, setaTetra, setaTriplice, setaHepB, setaFebre, setaDupla, setaGripe, setaPneu)
        }
    }else{
        habilitaBotoes(ckFakeDuplaDose2, marcaDataDuplaDose2, dataAtualMarcaVacDuplaDose2, btSubmit, dtInvDuplaDose2, setaDupla)
        habilitaNomeVac(nomeVacBCG, nomeVacPolio, nomeVacTetra, nomeVacTriplice, nomeVacHepB, nomeVacFebre, nomeVacDupla, nomeVacGripe, nomeVacPneu)
        habilitaNomeVac(setaBCG, setaPolio, setaTetra, setaTriplice, setaHepB, setaFebre, setaDupla, setaGripe, setaPneu)
    }
})

var dataAtualMarcaVacDuplaDose3 = document.getElementById("dataAtualMarcaVacDuplaDose3")
dataAtualMarcaVacDuplaDose3.value = anoAtual + "-" + mesAtual + "-" + diaAtual
var dtInvDuplaDose3 = document.getElementById("dtInvDuplaDose3")
dataAtualMarcaVacDuplaDose3.addEventListener("input", function(){
    var anoInput = parseInt(dataAtualMarcaVacDuplaDose3.value.substring(0, 4))
    var mesInput = parseInt(dataAtualMarcaVacDuplaDose3.value.substring(5, 7))
    var diaInput = parseInt(dataAtualMarcaVacDuplaDose3.value.substring(8, 10))
    if(anoInput > anoAtual || dataAtualMarcaVacDuplaDose3.value == ""){
        desabilitaBotoes(ckFakeDuplaDose3, marcaDataDuplaDose3, dataAtualMarcaVacDuplaDose3, btSubmit, dtInvDuplaDose3, setaDupla)
        desabilitaNomeVac(nomeVacBCG, nomeVacPolio, nomeVacTetra, nomeVacTriplice, nomeVacHepB, nomeVacFebre, nomeVacDupla, nomeVacGripe, nomeVacPneu)
        desabilitaNomeVac(setaBCG, setaPolio, setaTetra, setaTriplice, setaHepB, setaFebre, setaDupla, setaGripe, setaPneu)
    }else if(anoInput == anoAtual || dataAtualMarcaVacDuplaDose3.value == ""){
        if(mesInput > mesAtual || dataAtualMarcaVacDuplaDose3.value == ""){
            desabilitaBotoes(ckFakeDuplaDose3, marcaDataDuplaDose3, dataAtualMarcaVacDuplaDose3, btSubmit, dtInvDuplaDose3, setaDupla)
            desabilitaNomeVac(nomeVacBCG, nomeVacPolio, nomeVacTetra, nomeVacTriplice, nomeVacHepB, nomeVacFebre, nomeVacDupla, nomeVacGripe, nomeVacPneu)
            desabilitaNomeVac(setaBCG, setaPolio, setaTetra, setaTriplice, setaHepB, setaFebre, setaDupla, setaGripe, setaPneu)
        }else if(mesInput == mesAtual || dataAtualMarcaVacDuplaDose3.value == ""){
            if(diaInput > diaAtual || dataAtualMarcaVacDuplaDose3.value == ""){
                desabilitaBotoes(ckFakeDuplaDose3, marcaDataDuplaDose3, dataAtualMarcaVacDuplaDose3, btSubmit, dtInvDuplaDose3, setaDupla)
                desabilitaNomeVac(nomeVacBCG, nomeVacPolio, nomeVacTetra, nomeVacTriplice, nomeVacHepB, nomeVacFebre, nomeVacDupla, nomeVacGripe, nomeVacPneu)
                desabilitaNomeVac(setaBCG, setaPolio, setaTetra, setaTriplice, setaHepB, setaFebre, setaDupla, setaGripe, setaPneu)
            }else{
                habilitaBotoes(ckFakeDuplaDose3, marcaDataDuplaDose3, dataAtualMarcaVacDuplaDose3, btSubmit, dtInvDuplaDose3, setaDupla)
                habilitaNomeVac(nomeVacBCG, nomeVacPolio, nomeVacTetra, nomeVacTriplice, nomeVacHepB, nomeVacFebre, nomeVacDupla, nomeVacGripe, nomeVacPneu)
                habilitaNomeVac(setaBCG, setaPolio, setaTetra, setaTriplice, setaHepB, setaFebre, setaDupla, setaGripe, setaPneu)
            }
        }else{
            habilitaBotoes(ckFakeDuplaDose3, marcaDataDuplaDose3, dataAtualMarcaVacDuplaDose3, btSubmit, dtInvDuplaDose3, setaDupla)
            habilitaNomeVac(nomeVacBCG, nomeVacPolio, nomeVacTetra, nomeVacTriplice, nomeVacHepB, nomeVacFebre, nomeVacDupla, nomeVacGripe, nomeVacPneu)
            habilitaNomeVac(setaBCG, setaPolio, setaTetra, setaTriplice, setaHepB, setaFebre, setaDupla, setaGripe, setaPneu)
        }
    }else{
        habilitaBotoes(ckFakeDuplaDose3, marcaDataDuplaDose3, dataAtualMarcaVacDuplaDose3, btSubmit, dtInvDuplaDose3, setaDupla)
        habilitaNomeVac(nomeVacBCG, nomeVacPolio, nomeVacTetra, nomeVacTriplice, nomeVacHepB, nomeVacFebre, nomeVacDupla, nomeVacGripe, nomeVacPneu)
        habilitaNomeVac(setaBCG, setaPolio, setaTetra, setaTriplice, setaHepB, setaFebre, setaDupla, setaGripe, setaPneu)
    }
})

var dataAtualMarcaVacDuplaDose4 = document.getElementById("dataAtualMarcaVacDuplaDose4")
dataAtualMarcaVacDuplaDose4.value = anoAtual + "-" + mesAtual + "-" + diaAtual
var dtInvDuplaDose4 = document.getElementById("dtInvDuplaDose4")
dataAtualMarcaVacDuplaDose4.addEventListener("input", function(){
    var anoInput = parseInt(dataAtualMarcaVacDuplaDose4.value.substring(0, 4))
    var mesInput = parseInt(dataAtualMarcaVacDuplaDose4.value.substring(5, 7))
    var diaInput = parseInt(dataAtualMarcaVacDuplaDose4.value.substring(8, 10))
    if(anoInput > anoAtual || dataAtualMarcaVacDuplaDose4.value == ""){
        desabilitaBotoes(ckFakeDuplaDose4, marcaDataDuplaDose4, dataAtualMarcaVacDuplaDose4, btSubmit, dtInvDuplaDose4, setaDupla)
        desabilitaNomeVac(nomeVacBCG, nomeVacPolio, nomeVacTetra, nomeVacTriplice, nomeVacHepB, nomeVacFebre, nomeVacDupla, nomeVacGripe, nomeVacPneu)
        desabilitaNomeVac(setaBCG, setaPolio, setaTetra, setaTriplice, setaHepB, setaFebre, setaDupla, setaGripe, setaPneu)
    }else if(anoInput == anoAtual || dataAtualMarcaVacDuplaDose4.value == ""){
        if(mesInput > mesAtual || dataAtualMarcaVacDuplaDose4.value == ""){
            desabilitaBotoes(ckFakeDuplaDose4, marcaDataDuplaDose4, dataAtualMarcaVacDuplaDose4, btSubmit, dtInvDuplaDose4, setaDupla)
            desabilitaNomeVac(nomeVacBCG, nomeVacPolio, nomeVacTetra, nomeVacTriplice, nomeVacHepB, nomeVacFebre, nomeVacDupla, nomeVacGripe, nomeVacPneu)
            desabilitaNomeVac(setaBCG, setaPolio, setaTetra, setaTriplice, setaHepB, setaFebre, setaDupla, setaGripe, setaPneu)
        }else if(mesInput == mesAtual || dataAtualMarcaVacDuplaDose4.value == ""){
            if(diaInput > diaAtual || dataAtualMarcaVacDuplaDose4.value == ""){
                desabilitaBotoes(ckFakeDuplaDose4, marcaDataDuplaDose4, dataAtualMarcaVacDuplaDose4, btSubmit, dtInvDuplaDose4, setaDupla)
                desabilitaNomeVac(nomeVacBCG, nomeVacPolio, nomeVacTetra, nomeVacTriplice, nomeVacHepB, nomeVacFebre, nomeVacDupla, nomeVacGripe, nomeVacPneu)
                desabilitaNomeVac(setaBCG, setaPolio, setaTetra, setaTriplice, setaHepB, setaFebre, setaDupla, setaGripe, setaPneu)
            }else{
                habilitaBotoes(ckFakeDuplaDose4, marcaDataDuplaDose4, dataAtualMarcaVacDuplaDose4, btSubmit, dtInvDuplaDose4, setaDupla)
                habilitaNomeVac(nomeVacBCG, nomeVacPolio, nomeVacTetra, nomeVacTriplice, nomeVacHepB, nomeVacFebre, nomeVacDupla, nomeVacGripe, nomeVacPneu)
                habilitaNomeVac(setaBCG, setaPolio, setaTetra, setaTriplice, setaHepB, setaFebre, setaDupla, setaGripe, setaPneu)
            }
        }else{
            habilitaBotoes(ckFakeDuplaDose4, marcaDataDuplaDose4, dataAtualMarcaVacDuplaDose4, btSubmit, dtInvDuplaDose4, setaDupla)
            habilitaNomeVac(nomeVacBCG, nomeVacPolio, nomeVacTetra, nomeVacTriplice, nomeVacHepB, nomeVacFebre, nomeVacDupla, nomeVacGripe, nomeVacPneu)
            habilitaNomeVac(setaBCG, setaPolio, setaTetra, setaTriplice, setaHepB, setaFebre, setaDupla, setaGripe, setaPneu)
        }
    }else{
        habilitaBotoes(ckFakeDuplaDose4, marcaDataDuplaDose4, dataAtualMarcaVacDuplaDose4, btSubmit, dtInvDuplaDose4, setaDupla)
        habilitaNomeVac(nomeVacBCG, nomeVacPolio, nomeVacTetra, nomeVacTriplice, nomeVacHepB, nomeVacFebre, nomeVacDupla, nomeVacGripe, nomeVacPneu)
        habilitaNomeVac(setaBCG, setaPolio, setaTetra, setaTriplice, setaHepB, setaFebre, setaDupla, setaGripe, setaPneu)
    }
})



var dataAtualMarcaVacTripliceDose1 = document.getElementById("dataAtualMarcaVacTripliceDose1")
dataAtualMarcaVacTripliceDose1.value = anoAtual + "-" + mesAtual + "-" + diaAtual
var nomeVacTriplice = document.getElementById("nomeVacTriplice")
var dtInvTripliceDose1 = document.getElementById("dtInvTripliceDose1")
dataAtualMarcaVacTripliceDose1.addEventListener("input", function(){
    var anoInput = parseInt(dataAtualMarcaVacTripliceDose1.value.substring(0, 4))
    var mesInput = parseInt(dataAtualMarcaVacTripliceDose1.value.substring(5, 7))
    var diaInput = parseInt(dataAtualMarcaVacTripliceDose1.value.substring(8, 10))
    if(anoInput > anoAtual || dataAtualMarcaVacTripliceDose1.value == ""){
        desabilitaBotoes(ckFakeTriplice, marcaDataTripliceDose1, dataAtualMarcaVacTripliceDose1, btSubmit, dtInvTripliceDose1, setaTriplice)
        desabilitaNomeVac(nomeVacBCG, nomeVacPolio, nomeVacTetra, nomeVacTriplice, nomeVacHepB, nomeVacFebre, nomeVacDupla, nomeVacGripe, nomeVacPneu)
        desabilitaNomeVac(setaBCG, setaPolio, setaTetra, setaTriplice, setaHepB, setaFebre, setaDupla, setaGripe, setaPneu)
    }else if(anoInput == anoAtual || dataAtualMarcaVacTripliceDose1.value == ""){
        if(mesInput > mesAtual || dataAtualMarcaVacTripliceDose1.value == ""){
            desabilitaBotoes(ckFakeTriplice, marcaDataTripliceDose1, dataAtualMarcaVacTripliceDose1, btSubmit, dtInvTripliceDose1, setaTriplice)
            desabilitaNomeVac(nomeVacBCG, nomeVacPolio, nomeVacTetra, nomeVacTriplice, nomeVacHepB, nomeVacFebre, nomeVacDupla, nomeVacGripe, nomeVacPneu)
            desabilitaNomeVac(setaBCG, setaPolio, setaTetra, setaTriplice, setaHepB, setaFebre, setaDupla, setaGripe, setaPneu)
        }else if(mesInput == mesAtual || dataAtualMarcaVacTripliceDose1.value == ""){
            if(diaInput > diaAtual || dataAtualMarcaVacTripliceDose1.value == ""){
                desabilitaBotoes(ckFakeTriplice, marcaDataTripliceDose1, dataAtualMarcaVacTripliceDose1, btSubmit, dtInvTripliceDose1, setaTriplice)
                desabilitaNomeVac(nomeVacBCG, nomeVacPolio, nomeVacTetra, nomeVacTriplice, nomeVacHepB, nomeVacFebre, nomeVacDupla, nomeVacGripe, nomeVacPneu)
                desabilitaNomeVac(setaBCG, setaPolio, setaTetra, setaTriplice, setaHepB, setaFebre, setaDupla, setaGripe, setaPneu)
            }else{
                habilitaBotoes(ckFakeTriplice, marcaDataTripliceDose1, dataAtualMarcaVacTripliceDose1, btSubmit, dtInvTripliceDose1, setaTriplice)
                habilitaNomeVac(nomeVacBCG, nomeVacPolio, nomeVacTetra, nomeVacTriplice, nomeVacHepB, nomeVacFebre, nomeVacDupla, nomeVacGripe, nomeVacPneu)
                habilitaNomeVac(setaBCG, setaPolio, setaTetra, setaTriplice, setaHepB, setaFebre, setaDupla, setaGripe, setaPneu)
            }
        }else{
            habilitaBotoes(ckFakeTriplice, marcaDataTripliceDose1, dataAtualMarcaVacTripliceDose1, btSubmit, dtInvTripliceDose1, setaTriplice)
            habilitaNomeVac(nomeVacBCG, nomeVacPolio, nomeVacTetra, nomeVacTriplice, nomeVacHepB, nomeVacFebre, nomeVacDupla, nomeVacGripe, nomeVacPneu)
            habilitaNomeVac(setaBCG, setaPolio, setaTetra, setaTriplice, setaHepB, setaFebre, setaDupla, setaGripe, setaPneu)
        }
    }else{
        habilitaBotoes(ckFakeTriplice, marcaDataTripliceDose1, dataAtualMarcaVacTripliceDose1, btSubmit, dtInvTripliceDose1, setaTriplice)
        habilitaNomeVac(nomeVacBCG, nomeVacPolio, nomeVacTetra, nomeVacTriplice, nomeVacHepB, nomeVacFebre, nomeVacDupla, nomeVacGripe, nomeVacPneu)
        habilitaNomeVac(setaBCG, setaPolio, setaTetra, setaTriplice, setaHepB, setaFebre, setaDupla, setaGripe, setaPneu)
    }
})


var dataAtualMarcaVacHepBDose1 = document.getElementById("dataAtualMarcaVacHepBDose1")
dataAtualMarcaVacHepBDose1.value = anoAtual + "-" + mesAtual + "-" + diaAtual
var nomeVacHepB = document.getElementById("nomeVacHepB")
var dtInvHepBDose1 = document.getElementById("dtInvHepBDose1")
dataAtualMarcaVacHepBDose1.addEventListener("input", function(){
    var anoInput = parseInt(dataAtualMarcaVacHepBDose1.value.substring(0, 4))
    var mesInput = parseInt(dataAtualMarcaVacHepBDose1.value.substring(5, 7))
    var diaInput = parseInt(dataAtualMarcaVacHepBDose1.value.substring(8, 10))
    if(anoInput > anoAtual || dataAtualMarcaVacHepBDose1.value == ""){
        desabilitaBotoes(ckFakeHepaDose1, marcaDataHepBDose1, dataAtualMarcaVacHepBDose1, btSubmit, dtInvHepBDose1, setaHepB)
        desabilitaNomeVac(nomeVacBCG, nomeVacPolio, nomeVacTetra, nomeVacTriplice, nomeVacHepB, nomeVacFebre, nomeVacDupla, nomeVacGripe, nomeVacPneu)
        desabilitaNomeVac(setaBCG, setaPolio, setaTetra, setaTriplice, setaHepB, setaFebre, setaDupla, setaGripe, setaPneu)
    }else if(anoInput == anoAtual || dataAtualMarcaVacHepBDose1.value == ""){
        if(mesInput > mesAtual || dataAtualMarcaVacHepBDose1.value == ""){
            desabilitaBotoes(ckFakeHepaDose1, marcaDataHepBDose1, dataAtualMarcaVacHepBDose1, btSubmit, dtInvHepBDose1, setaHepB)
            desabilitaNomeVac(nomeVacBCG, nomeVacPolio, nomeVacTetra, nomeVacTriplice, nomeVacHepB, nomeVacFebre, nomeVacDupla, nomeVacGripe, nomeVacPneu)
            desabilitaNomeVac(setaBCG, setaPolio, setaTetra, setaTriplice, setaHepB, setaFebre, setaDupla, setaGripe, setaPneu)
        }else if(mesInput == mesAtual || dataAtualMarcaVacHepBDose1.value == ""){
            if(diaInput > diaAtual || dataAtualMarcaVacHepBDose1.value == ""){
                desabilitaBotoes(ckFakeHepaDose1, marcaDataHepBDose1, dataAtualMarcaVacHepBDose1, btSubmit, dtInvHepBDose1, setaHepB)
                desabilitaNomeVac(nomeVacBCG, nomeVacPolio, nomeVacTetra, nomeVacTriplice, nomeVacHepB, nomeVacFebre, nomeVacDupla, nomeVacGripe, nomeVacPneu)
                desabilitaNomeVac(setaBCG, setaPolio, setaTetra, setaTriplice, setaHepB, setaFebre, setaDupla, setaGripe, setaPneu)
            }else{
                habilitaBotoes(ckFakeHepaDose1, marcaDataHepBDose1, dataAtualMarcaVacHepBDose1, btSubmit, dtInvHepBDose1, setaHepB)
                habilitaNomeVac(nomeVacBCG, nomeVacPolio, nomeVacTetra, nomeVacTriplice, nomeVacHepB, nomeVacFebre, nomeVacDupla, nomeVacGripe, nomeVacPneu)
                habilitaNomeVac(setaBCG, setaPolio, setaTetra, setaTriplice, setaHepB, setaFebre, setaDupla, setaGripe, setaPneu)
            }
        }else{
            habilitaBotoes(ckFakeHepaDose1, marcaDataHepBDose1, dataAtualMarcaVacHepBDose1, btSubmit, dtInvHepBDose1, setaHepB)
            habilitaNomeVac(nomeVacBCG, nomeVacPolio, nomeVacTetra, nomeVacTriplice, nomeVacHepB, nomeVacFebre, nomeVacDupla, nomeVacGripe, nomeVacPneu)
            habilitaNomeVac(setaBCG, setaPolio, setaTetra, setaTriplice, setaHepB, setaFebre, setaDupla, setaGripe, setaPneu)
        }
    }else{
        habilitaBotoes(ckFakeHepaDose1, marcaDataHepBDose1, dataAtualMarcaVacHepBDose1, btSubmit, dtInvHepBDose1, setaHepB)
        habilitaNomeVac(nomeVacBCG, nomeVacPolio, nomeVacTetra, nomeVacTriplice, nomeVacHepB, nomeVacFebre, nomeVacDupla, nomeVacGripe, nomeVacPneu)
        habilitaNomeVac(setaBCG, setaPolio, setaTetra, setaTriplice, setaHepB, setaFebre, setaDupla, setaGripe, setaPneu)
    }
})

var dataAtualMarcaVacHepBDose2 = document.getElementById("dataAtualMarcaVacHepBDose2")
dataAtualMarcaVacHepBDose2.value = anoAtual + "-" + mesAtual + "-" + diaAtual
var dtInvHepBDose2 = document.getElementById("dtInvHepBDose2")
dataAtualMarcaVacHepBDose2.addEventListener("input", function(){
    var anoInput = parseInt(dataAtualMarcaVacHepBDose2.value.substring(0, 4))
    var mesInput = parseInt(dataAtualMarcaVacHepBDose2.value.substring(5, 7))
    var diaInput = parseInt(dataAtualMarcaVacHepBDose2.value.substring(8, 10))
    if(anoInput > anoAtual || dataAtualMarcaVacHepBDose2.value == ""){
        desabilitaBotoes(ckFakeHepaDose2, marcaDataHepBDose2, dataAtualMarcaVacHepBDose2, btSubmit, dtInvHepBDose2, setaHepB)
        desabilitaNomeVac(nomeVacBCG, nomeVacPolio, nomeVacTetra, nomeVacTriplice, nomeVacHepB, nomeVacFebre, nomeVacDupla, nomeVacGripe, nomeVacPneu)
        desabilitaNomeVac(setaBCG, setaPolio, setaTetra, setaTriplice, setaHepB, setaFebre, setaDupla, setaGripe, setaPneu)
    }else if(anoInput == anoAtual || dataAtualMarcaVacHepBDose2.value == ""){
        if(mesInput > mesAtual || dataAtualMarcaVacHepBDose2.value == ""){
            desabilitaBotoes(ckFakeHepaDose2, marcaDataHepBDose2, dataAtualMarcaVacHepBDose2, btSubmit, dtInvHepBDose2, setaHepB)
            desabilitaNomeVac(nomeVacBCG, nomeVacPolio, nomeVacTetra, nomeVacTriplice, nomeVacHepB, nomeVacFebre, nomeVacDupla, nomeVacGripe, nomeVacPneu)
            desabilitaNomeVac(setaBCG, setaPolio, setaTetra, setaTriplice, setaHepB, setaFebre, setaDupla, setaGripe, setaPneu)
        }else if(mesInput == mesAtual || dataAtualMarcaVacHepBDose2.value == ""){
            if(diaInput > diaAtual || dataAtualMarcaVacHepBDose2.value == ""){
                desabilitaBotoes(ckFakeHepaDose2, marcaDataHepBDose2, dataAtualMarcaVacHepBDose2, btSubmit, dtInvHepBDose2, setaHepB)
                desabilitaNomeVac(nomeVacBCG, nomeVacPolio, nomeVacTetra, nomeVacTriplice, nomeVacHepB, nomeVacFebre, nomeVacDupla, nomeVacGripe, nomeVacPneu)
                desabilitaNomeVac(setaBCG, setaPolio, setaTetra, setaTriplice, setaHepB, setaFebre, setaDupla, setaGripe, setaPneu)
            }else{
                habilitaBotoes(ckFakeHepaDose2, marcaDataHepBDose2, dataAtualMarcaVacHepBDose2, btSubmit, dtInvHepBDose2, setaHepB)
                habilitaNomeVac(nomeVacBCG, nomeVacPolio, nomeVacTetra, nomeVacTriplice, nomeVacHepB, nomeVacFebre, nomeVacDupla, nomeVacGripe, nomeVacPneu)
                habilitaNomeVac(setaBCG, setaPolio, setaTetra, setaTriplice, setaHepB, setaFebre, setaDupla, setaGripe, setaPneu)
            }
        }else{
            habilitaBotoes(ckFakeHepaDose2, marcaDataHepBDose2, dataAtualMarcaVacHepBDose2, btSubmit, dtInvHepBDose2, setaHepB)
            habilitaNomeVac(nomeVacBCG, nomeVacPolio, nomeVacTetra, nomeVacTriplice, nomeVacHepB, nomeVacFebre, nomeVacDupla, nomeVacGripe, nomeVacPneu)
            habilitaNomeVac(setaBCG, setaPolio, setaTetra, setaTriplice, setaHepB, setaFebre, setaDupla, setaGripe, setaPneu)
        }
    }else{
        habilitaBotoes(ckFakeHepaDose2, marcaDataHepBDose2, dataAtualMarcaVacHepBDose2, btSubmit, dtInvHepBDose2, setaHepB)
        habilitaNomeVac(nomeVacBCG, nomeVacPolio, nomeVacTetra, nomeVacTriplice, nomeVacHepB, nomeVacFebre, nomeVacDupla, nomeVacGripe, nomeVacPneu)
        habilitaNomeVac(setaBCG, setaPolio, setaTetra, setaTriplice, setaHepB, setaFebre, setaDupla, setaGripe, setaPneu)
    }
})


var dataAtualMarcaVacHepBDose3 = document.getElementById("dataAtualMarcaVacHepBDose3")
dataAtualMarcaVacHepBDose3.value = anoAtual + "-" + mesAtual + "-" + diaAtual
var dtInvHepBDose3 = document.getElementById("dtInvHepBDose3")
dataAtualMarcaVacHepBDose3.addEventListener("input", function(){
    var anoInput = parseInt(dataAtualMarcaVacHepBDose3.value.substring(0, 4))
    var mesInput = parseInt(dataAtualMarcaVacHepBDose3.value.substring(5, 7))
    var diaInput = parseInt(dataAtualMarcaVacHepBDose3.value.substring(8, 10))
    if(anoInput > anoAtual || dataAtualMarcaVacHepBDose3.value == ""){
        desabilitaBotoes(ckFakeHepaDose3, marcaDataHepBDose3, dataAtualMarcaVacHepBDose3, btSubmit, dtInvHepBDose3, setaHepB)
        desabilitaNomeVac(nomeVacBCG, nomeVacPolio, nomeVacTetra, nomeVacTriplice, nomeVacHepB, nomeVacFebre, nomeVacDupla, nomeVacGripe, nomeVacPneu)
        desabilitaNomeVac(setaBCG, setaPolio, setaTetra, setaTriplice, setaHepB, setaFebre, setaDupla, setaGripe, setaPneu)
    }else if(anoInput == anoAtual || dataAtualMarcaVacHepBDose3.value == ""){
        if(mesInput > mesAtual || dataAtualMarcaVacHepBDose3.value == ""){
            desabilitaBotoes(ckFakeHepaDose3, marcaDataHepBDose3, dataAtualMarcaVacHepBDose3, btSubmit, dtInvHepBDose3, setaHepB)
            desabilitaNomeVac(nomeVacBCG, nomeVacPolio, nomeVacTetra, nomeVacTriplice, nomeVacHepB, nomeVacFebre, nomeVacDupla, nomeVacGripe, nomeVacPneu)
            desabilitaNomeVac(setaBCG, setaPolio, setaTetra, setaTriplice, setaHepB, setaFebre, setaDupla, setaGripe, setaPneu)
        }else if(mesInput == mesAtual || dataAtualMarcaVacHepBDose3.value == ""){
            if(diaInput > diaAtual || dataAtualMarcaVacHepBDose3.value == ""){
                desabilitaBotoes(ckFakeHepaDose3, marcaDataHepBDose3, dataAtualMarcaVacHepBDose3, btSubmit, dtInvHepBDose3, setaHepB)
                desabilitaNomeVac(nomeVacBCG, nomeVacPolio, nomeVacTetra, nomeVacTriplice, nomeVacHepB, nomeVacFebre, nomeVacDupla, nomeVacGripe, nomeVacPneu)
                desabilitaNomeVac(setaBCG, setaPolio, setaTetra, setaTriplice, setaHepB, setaFebre, setaDupla, setaGripe, setaPneu)
            }else{
                habilitaBotoes(ckFakeHepaDose3, marcaDataHepBDose3, dataAtualMarcaVacHepBDose3, btSubmit, dtInvHepBDose3, setaHepB)
                habilitaNomeVac(nomeVacBCG, nomeVacPolio, nomeVacTetra, nomeVacTriplice, nomeVacHepB, nomeVacFebre, nomeVacDupla, nomeVacGripe, nomeVacPneu)
                habilitaNomeVac(setaBCG, setaPolio, setaTetra, setaTriplice, setaHepB, setaFebre, setaDupla, setaGripe, setaPneu)
            }
        }else{
            habilitaBotoes(ckFakeHepaDose3, marcaDataHepBDose3, dataAtualMarcaVacHepBDose3, btSubmit, dtInvHepBDose3, setaHepB)
            habilitaNomeVac(nomeVacBCG, nomeVacPolio, nomeVacTetra, nomeVacTriplice, nomeVacHepB, nomeVacFebre, nomeVacDupla, nomeVacGripe, nomeVacPneu)
            habilitaNomeVac(setaBCG, setaPolio, setaTetra, setaTriplice, setaHepB, setaFebre, setaDupla, setaGripe, setaPneu)
        }
    }else{
        habilitaBotoes(ckFakeHepaDose3, marcaDataHepBDose3, dataAtualMarcaVacHepBDose3, btSubmit, dtInvHepBDose3, setaHepB)
        habilitaNomeVac(nomeVacBCG, nomeVacPolio, nomeVacTetra, nomeVacTriplice, nomeVacHepB, nomeVacFebre, nomeVacDupla, nomeVacGripe, nomeVacPneu)
        habilitaNomeVac(setaBCG, setaPolio, setaTetra, setaTriplice, setaHepB, setaFebre, setaDupla, setaGripe, setaPneu)
    }
})



var dataAtualMarcaVacFebreDose1 = document.getElementById("dataAtualMarcaVacFebreDose1")
dataAtualMarcaVacFebreDose1.value = anoAtual + "-" + mesAtual + "-" + diaAtual
var nomeVacFebre = document.getElementById("nomeVacFebre")
var dtInvFebreDose1 = document.getElementById("dtInvFebreDose1")
dataAtualMarcaVacFebreDose1.addEventListener("input", function(){
    var anoInput = parseInt(dataAtualMarcaVacFebreDose1.value.substring(0, 4))
    var mesInput = parseInt(dataAtualMarcaVacFebreDose1.value.substring(5, 7))
    var diaInput = parseInt(dataAtualMarcaVacFebreDose1.value.substring(8, 10))
    if(anoInput > anoAtual || dataAtualMarcaVacFebreDose1.value == ""){
        desabilitaBotoes(ckFakeFebreDose1, marcaDataFebreDose1, dataAtualMarcaVacFebreDose1, btSubmit, dtInvFebreDose1, setaFebre)
        desabilitaNomeVac(nomeVacBCG, nomeVacPolio, nomeVacTetra, nomeVacTriplice, nomeVacHepB, nomeVacFebre, nomeVacDupla, nomeVacGripe, nomeVacPneu)
        desabilitaNomeVac(setaBCG, setaPolio, setaTetra, setaTriplice, setaHepB, setaFebre, setaDupla, setaGripe, setaPneu)
    }else if(anoInput == anoAtual || dataAtualMarcaVacFebreDose1.value == ""){
        if(mesInput > mesAtual || dataAtualMarcaVacFebreDose1.value == ""){
            desabilitaBotoes(ckFakeFebreDose1, marcaDataFebreDose1, dataAtualMarcaVacFebreDose1, btSubmit, dtInvFebreDose1, setaFebre)
            desabilitaNomeVac(nomeVacBCG, nomeVacPolio, nomeVacTetra, nomeVacTriplice, nomeVacHepB, nomeVacFebre, nomeVacDupla, nomeVacGripe, nomeVacPneu)
            desabilitaNomeVac(setaBCG, setaPolio, setaTetra, setaTriplice, setaHepB, setaFebre, setaDupla, setaGripe, setaPneu)
        }else if(mesInput == mesAtual || dataAtualMarcaVacFebreDose1.value == ""){
            if(diaInput > diaAtual || dataAtualMarcaVacFebreDose1.value == ""){
                desabilitaBotoes(ckFakeFebreDose1, marcaDataFebreDose1, dataAtualMarcaVacFebreDose1, btSubmit, dtInvFebreDose1, setaFebre)
                desabilitaNomeVac(nomeVacBCG, nomeVacPolio, nomeVacTetra, nomeVacTriplice, nomeVacHepB, nomeVacFebre, nomeVacDupla, nomeVacGripe, nomeVacPneu)
                desabilitaNomeVac(setaBCG, setaPolio, setaTetra, setaTriplice, setaHepB, setaFebre, setaDupla, setaGripe, setaPneu)
            }else{
                habilitaBotoes(ckFakeFebreDose1, marcaDataFebreDose1, dataAtualMarcaVacFebreDose1, btSubmit, dtInvFebreDose1, setaFebre)
                habilitaNomeVac(nomeVacBCG, nomeVacPolio, nomeVacTetra, nomeVacTriplice, nomeVacHepB, nomeVacFebre, nomeVacDupla, nomeVacGripe, nomeVacPneu)
                habilitaNomeVac(setaBCG, setaPolio, setaTetra, setaTriplice, setaHepB, setaFebre, setaDupla, setaGripe, setaPneu)
            }
        }else{
            habilitaBotoes(ckFakeFebreDose1, marcaDataFebreDose1, dataAtualMarcaVacFebreDose1, btSubmit, dtInvFebreDose1, setaFebre)
            habilitaNomeVac(nomeVacBCG, nomeVacPolio, nomeVacTetra, nomeVacTriplice, nomeVacHepB, nomeVacFebre, nomeVacDupla, nomeVacGripe, nomeVacPneu)
            habilitaNomeVac(setaBCG, setaPolio, setaTetra, setaTriplice, setaHepB, setaFebre, setaDupla, setaGripe, setaPneu)
        }
    }else{
        habilitaBotoes(ckFakeFebreDose1, marcaDataFebreDose1, dataAtualMarcaVacFebreDose1, btSubmit, dtInvFebreDose1, setaFebre)
        habilitaNomeVac(nomeVacBCG, nomeVacPolio, nomeVacTetra, nomeVacTriplice, nomeVacHepB, nomeVacFebre, nomeVacDupla, nomeVacGripe, nomeVacPneu)
        habilitaNomeVac(setaBCG, setaPolio, setaTetra, setaTriplice, setaHepB, setaFebre, setaDupla, setaGripe, setaPneu)
    }
})

var dataAtualMarcaVacFebreDose2 = document.getElementById("dataAtualMarcaVacFebreDose2")
dataAtualMarcaVacFebreDose2.value = anoAtual + "-" + mesAtual + "-" + diaAtual
var dtInvFebreDose2 = document.getElementById("dtInvFebreDose2")
dataAtualMarcaVacFebreDose2.addEventListener("input", function(){
    var anoInput = parseInt(dataAtualMarcaVacFebreDose2.value.substring(0, 4))
    var mesInput = parseInt(dataAtualMarcaVacFebreDose2.value.substring(5, 7))
    var diaInput = parseInt(dataAtualMarcaVacFebreDose2.value.substring(8, 10))
    if(anoInput > anoAtual || dataAtualMarcaVacFebreDose2.value == ""){
        desabilitaBotoes(ckFakeFebreDose2, marcaDataFebreDose2, dataAtualMarcaVacFebreDose2, btSubmit, dtInvFebreDose2, setaFebre)
        desabilitaNomeVac(nomeVacBCG, nomeVacPolio, nomeVacTetra, nomeVacTriplice, nomeVacHepB, nomeVacFebre, nomeVacDupla, nomeVacGripe, nomeVacPneu)
        desabilitaNomeVac(setaBCG, setaPolio, setaTetra, setaTriplice, setaHepB, setaFebre, setaDupla, setaGripe, setaPneu)
    }else if(anoInput == anoAtual || dataAtualMarcaVacFebreDose2.value == ""){
        if(mesInput > mesAtual || dataAtualMarcaVacFebreDose2.value == ""){
            desabilitaBotoes(ckFakeFebreDose2, marcaDataFebreDose2, dataAtualMarcaVacFebreDose2, btSubmit, dtInvFebreDose2, setaFebre)
            desabilitaNomeVac(nomeVacBCG, nomeVacPolio, nomeVacTetra, nomeVacTriplice, nomeVacHepB, nomeVacFebre, nomeVacDupla, nomeVacGripe, nomeVacPneu)
            desabilitaNomeVac(setaBCG, setaPolio, setaTetra, setaTriplice, setaHepB, setaFebre, setaDupla, setaGripe, setaPneu)
        }else if(mesInput == mesAtual || dataAtualMarcaVacFebreDose2.value == ""){
            if(diaInput > diaAtual || dataAtualMarcaVacFebreDose2.value == ""){
                desabilitaBotoes(ckFakeFebreDose2, marcaDataFebreDose2, dataAtualMarcaVacFebreDose2, btSubmit, dtInvFebreDose2, setaFebre)
                desabilitaNomeVac(nomeVacBCG, nomeVacPolio, nomeVacTetra, nomeVacTriplice, nomeVacHepB, nomeVacFebre, nomeVacDupla, nomeVacGripe, nomeVacPneu)
                desabilitaNomeVac(setaBCG, setaPolio, setaTetra, setaTriplice, setaHepB, setaFebre, setaDupla, setaGripe, setaPneu)
            }else{
                habilitaBotoes(ckFakeFebreDose2, marcaDataFebreDose2, dataAtualMarcaVacFebreDose2, btSubmit, dtInvFebreDose2, setaFebre)
                habilitaNomeVac(nomeVacBCG, nomeVacPolio, nomeVacTetra, nomeVacTriplice, nomeVacHepB, nomeVacFebre, nomeVacDupla, nomeVacGripe, nomeVacPneu)
                habilitaNomeVac(setaBCG, setaPolio, setaTetra, setaTriplice, setaHepB, setaFebre, setaDupla, setaGripe, setaPneu)
            }
        }else{
            habilitaBotoes(ckFakeFebreDose2, marcaDataFebreDose2, dataAtualMarcaVacFebreDose2, btSubmit, dtInvFebreDose2, setaFebre)
            habilitaNomeVac(nomeVacBCG, nomeVacPolio, nomeVacTetra, nomeVacTriplice, nomeVacHepB, nomeVacFebre, nomeVacDupla, nomeVacGripe, nomeVacPneu)
            habilitaNomeVac(setaBCG, setaPolio, setaTetra, setaTriplice, setaHepB, setaFebre, setaDupla, setaGripe, setaPneu)
        }
    }else{
        habilitaBotoes(ckFakeFebreDose2, marcaDataFebreDose2, dataAtualMarcaVacFebreDose2, btSubmit, dtInvFebreDose2, setaFebre)
        habilitaNomeVac(nomeVacBCG, nomeVacPolio, nomeVacTetra, nomeVacTriplice, nomeVacHepB, nomeVacFebre, nomeVacDupla, nomeVacGripe, nomeVacPneu)
        habilitaNomeVac(setaBCG, setaPolio, setaTetra, setaTriplice, setaHepB, setaFebre, setaDupla, setaGripe, setaPneu)
    }
})


var dataAtualMarcaVacGripeDose1 = document.getElementById("dataAtualMarcaVacGripeDose1")
dataAtualMarcaVacGripeDose1.value = anoAtual + "-" + mesAtual + "-" + diaAtual
var nomeVacGripe = document.getElementById("nomeVacGripe")
var dtInvGripeDose1 = document.getElementById("dtInvGripeDose1")
dataAtualMarcaVacGripeDose1.addEventListener("input", function(){
    var anoInput = parseInt(dataAtualMarcaVacGripeDose1.value.substring(0, 4))
    var mesInput = parseInt(dataAtualMarcaVacGripeDose1.value.substring(5, 7))
    var diaInput = parseInt(dataAtualMarcaVacGripeDose1.value.substring(8, 10))
    if(anoInput > anoAtual || dataAtualMarcaVacGripeDose1.value == ""){
        desabilitaBotoes(ckFakeGripeDose1, marcaDataGripeDose1, dataAtualMarcaVacGripeDose1, btSubmit, dtInvGripeDose1, setaGripe)
        desabilitaNomeVac(nomeVacBCG, nomeVacPolio, nomeVacTetra, nomeVacTriplice, nomeVacHepB, nomeVacFebre, nomeVacDupla, nomeVacGripe, nomeVacPneu)
        desabilitaNomeVac(setaBCG, setaPolio, setaTetra, setaTriplice, setaHepB, setaFebre, setaDupla, setaGripe, setaPneu)
    }else if(anoInput == anoAtual || dataAtualMarcaVacGripeDose1.value == ""){
        if(mesInput > mesAtual || dataAtualMarcaVacGripeDose1.value == ""){
            desabilitaBotoes(ckFakeGripeDose1, marcaDataGripeDose1, dataAtualMarcaVacGripeDose1, btSubmit, dtInvGripeDose1, setaGripe)
            desabilitaNomeVac(nomeVacBCG, nomeVacPolio, nomeVacTetra, nomeVacTriplice, nomeVacHepB, nomeVacFebre, nomeVacDupla, nomeVacGripe, nomeVacPneu)
            desabilitaNomeVac(setaBCG, setaPolio, setaTetra, setaTriplice, setaHepB, setaFebre, setaDupla, setaGripe, setaPneu)
        }else if(mesInput == mesAtual || dataAtualMarcaVacGripeDose1.value == ""){
            if(diaInput > diaAtual || dataAtualMarcaVacGripeDose1.value == ""){
                desabilitaBotoes(ckFakeGripeDose1, marcaDataGripeDose1, dataAtualMarcaVacGripeDose1, btSubmit, dtInvGripeDose1, setaGripe)
                desabilitaNomeVac(nomeVacBCG, nomeVacPolio, nomeVacTetra, nomeVacTriplice, nomeVacHepB, nomeVacFebre, nomeVacDupla, nomeVacGripe, nomeVacPneu)
                desabilitaNomeVac(setaBCG, setaPolio, setaTetra, setaTriplice, setaHepB, setaFebre, setaDupla, setaGripe, setaPneu)
            }else{
                habilitaBotoes(ckFakeGripeDose1, marcaDataGripeDose1, dataAtualMarcaVacGripeDose1, btSubmit, dtInvGripeDose1, setaGripe)
                habilitaNomeVac(nomeVacBCG, nomeVacPolio, nomeVacTetra, nomeVacTriplice, nomeVacHepB, nomeVacFebre, nomeVacDupla, nomeVacGripe, nomeVacPneu)
                habilitaNomeVac(setaBCG, setaPolio, setaTetra, setaTriplice, setaHepB, setaFebre, setaDupla, setaGripe, setaPneu)
            }
        }else{
            habilitaBotoes(ckFakeGripeDose1, marcaDataGripeDose1, dataAtualMarcaVacGripeDose1, btSubmit, dtInvGripeDose1, setaGripe)
            habilitaNomeVac(nomeVacBCG, nomeVacPolio, nomeVacTetra, nomeVacTriplice, nomeVacHepB, nomeVacFebre, nomeVacDupla, nomeVacGripe, nomeVacPneu)
            habilitaNomeVac(setaBCG, setaPolio, setaTetra, setaTriplice, setaHepB, setaFebre, setaDupla, setaGripe, setaPneu)
        }
    }else{
        habilitaBotoes(ckFakeGripeDose1, marcaDataGripeDose1, dataAtualMarcaVacGripeDose1, btSubmit, dtInvGripeDose1, setaGripe)
        habilitaNomeVac(nomeVacBCG, nomeVacPolio, nomeVacTetra, nomeVacTriplice, nomeVacHepB, nomeVacFebre, nomeVacDupla, nomeVacGripe, nomeVacPneu)
        habilitaNomeVac(setaBCG, setaPolio, setaTetra, setaTriplice, setaHepB, setaFebre, setaDupla, setaGripe, setaPneu)
    }
})

var dataAtualMarcaVacGripeDose2 = document.getElementById("dataAtualMarcaVacGripeDose2")
dataAtualMarcaVacGripeDose2.value = anoAtual + "-" + mesAtual + "-" + diaAtual
var dtInvGripeDose2 = document.getElementById("dtInvGripeDose2")
dataAtualMarcaVacGripeDose2.addEventListener("input", function(){
    var anoInput = parseInt(dataAtualMarcaVacGripeDose2.value.substring(0, 4))
    var mesInput = parseInt(dataAtualMarcaVacGripeDose2.value.substring(5, 7))
    var diaInput = parseInt(dataAtualMarcaVacGripeDose2.value.substring(8, 10))
    if(anoInput > anoAtual || dataAtualMarcaVacGripeDose2.value == ""){
        desabilitaBotoes(ckFakeGripeDose2, marcaDataGripeDose2, dataAtualMarcaVacGripeDose2, btSubmit, dtInvGripeDose2, setaGripe)
        desabilitaNomeVac(nomeVacBCG, nomeVacPolio, nomeVacTetra, nomeVacTriplice, nomeVacHepB, nomeVacFebre, nomeVacDupla, nomeVacGripe, nomeVacPneu)
        desabilitaNomeVac(setaBCG, setaPolio, setaTetra, setaTriplice, setaHepB, setaFebre, setaDupla, setaGripe, setaPneu)
    }else if(anoInput == anoAtual || dataAtualMarcaVacGripeDose2.value == ""){
        if(mesInput > mesAtual || dataAtualMarcaVacGripeDose2.value == ""){
            desabilitaBotoes(ckFakeGripeDose2, marcaDataGripeDose2, dataAtualMarcaVacGripeDose2, btSubmit, dtInvGripeDose2, setaGripe)
            desabilitaNomeVac(nomeVacBCG, nomeVacPolio, nomeVacTetra, nomeVacTriplice, nomeVacHepB, nomeVacFebre, nomeVacDupla, nomeVacGripe, nomeVacPneu)
            desabilitaNomeVac(setaBCG, setaPolio, setaTetra, setaTriplice, setaHepB, setaFebre, setaDupla, setaGripe, setaPneu)
        }else if(mesInput == mesAtual || dataAtualMarcaVacGripeDose2.value == ""){
            if(diaInput > diaAtual || dataAtualMarcaVacGripeDose2.value == ""){
                desabilitaBotoes(ckFakeGripeDose2, marcaDataGripeDose2, dataAtualMarcaVacGripeDose2, btSubmit, dtInvGripeDose2, setaGripe)
                desabilitaNomeVac(nomeVacBCG, nomeVacPolio, nomeVacTetra, nomeVacTriplice, nomeVacHepB, nomeVacFebre, nomeVacDupla, nomeVacGripe, nomeVacPneu)
                desabilitaNomeVac(setaBCG, setaPolio, setaTetra, setaTriplice, setaHepB, setaFebre, setaDupla, setaGripe, setaPneu)
            }else{
                habilitaBotoes(ckFakeGripeDose2, marcaDataGripeDose2, dataAtualMarcaVacGripeDose2, btSubmit, dtInvGripeDose2, setaGripe)
                habilitaNomeVac(nomeVacBCG, nomeVacPolio, nomeVacTetra, nomeVacTriplice, nomeVacHepB, nomeVacFebre, nomeVacDupla, nomeVacGripe, nomeVacPneu)
                habilitaNomeVac(setaBCG, setaPolio, setaTetra, setaTriplice, setaHepB, setaFebre, setaDupla, setaGripe, setaPneu)
            }
        }else{
            habilitaBotoes(ckFakeGripeDose2, marcaDataGripeDose2, dataAtualMarcaVacGripeDose2, btSubmit, dtInvGripeDose2, setaGripe)
            habilitaNomeVac(nomeVacBCG, nomeVacPolio, nomeVacTetra, nomeVacTriplice, nomeVacHepB, nomeVacFebre, nomeVacDupla, nomeVacGripe, nomeVacPneu)
            habilitaNomeVac(setaBCG, setaPolio, setaTetra, setaTriplice, setaHepB, setaFebre, setaDupla, setaGripe, setaPneu)
        }
    }else{
        habilitaBotoes(ckFakeGripeDose2, marcaDataGripeDose2, dataAtualMarcaVacGripeDose2, btSubmit, dtInvGripeDose2, setaGripe)
        habilitaNomeVac(nomeVacBCG, nomeVacPolio, nomeVacTetra, nomeVacTriplice, nomeVacHepB, nomeVacFebre, nomeVacDupla, nomeVacGripe, nomeVacPneu)
        habilitaNomeVac(setaBCG, setaPolio, setaTetra, setaTriplice, setaHepB, setaFebre, setaDupla, setaGripe, setaPneu)
    }
})


var dataAtualMarcaVacPneuDose1 = document.getElementById("dataAtualMarcaVacPneuDose1")
dataAtualMarcaVacPneuDose1.value = anoAtual + "-" + mesAtual + "-" + diaAtual
var nomeVacPneu = document.getElementById("nomeVacPneu")
var dtInvPneuDose1 = document.getElementById("dtInvPneuDose1")
dataAtualMarcaVacPneuDose1.addEventListener("input", function(){
    var anoInput = parseInt(dataAtualMarcaVacPneuDose1.value.substring(0, 4))
    var mesInput = parseInt(dataAtualMarcaVacPneuDose1.value.substring(5, 7))
    var diaInput = parseInt(dataAtualMarcaVacPneuDose1.value.substring(8, 10))
    if(anoInput > anoAtual || dataAtualMarcaVacPneuDose1.value == ""){
        desabilitaBotoes(ckFakePneuDose1, marcaDataPneuDose1, dataAtualMarcaVacPneuDose1, btSubmit, dtInvPneuDose1, setaPneu)
        desabilitaNomeVac(nomeVacBCG, nomeVacPolio, nomeVacTetra, nomeVacTriplice, nomeVacHepB, nomeVacFebre, nomeVacDupla, nomeVacGripe, nomeVacPneu)
        desabilitaNomeVac(setaBCG, setaPolio, setaTetra, setaTriplice, setaHepB, setaFebre, setaDupla, setaGripe, setaPneu)
    }else if(anoInput == anoAtual || dataAtualMarcaVacPneuDose1.value == ""){
        if(mesInput > mesAtual || dataAtualMarcaVacPneuDose1.value == ""){
            desabilitaBotoes(ckFakePneuDose1, marcaDataPneuDose1, dataAtualMarcaVacPneuDose1, btSubmit, dtInvPneuDose1, setaPneu)
            desabilitaNomeVac(nomeVacBCG, nomeVacPolio, nomeVacTetra, nomeVacTriplice, nomeVacHepB, nomeVacFebre, nomeVacDupla, nomeVacGripe, nomeVacPneu)
            desabilitaNomeVac(setaBCG, setaPolio, setaTetra, setaTriplice, setaHepB, setaFebre, setaDupla, setaGripe, setaPneu)
        }else if(mesInput == mesAtual || dataAtualMarcaVacPneuDose1.value == ""){
            if(diaInput > diaAtual || dataAtualMarcaVacPneuDose1.value == ""){
                desabilitaBotoes(ckFakePneuDose1, marcaDataPneuDose1, dataAtualMarcaVacPneuDose1, btSubmit, dtInvPneuDose1, setaPneu)
                desabilitaNomeVac(nomeVacBCG, nomeVacPolio, nomeVacTetra, nomeVacTriplice, nomeVacHepB, nomeVacFebre, nomeVacDupla, nomeVacGripe, nomeVacPneu)
                desabilitaNomeVac(setaBCG, setaPolio, setaTetra, setaTriplice, setaHepB, setaFebre, setaDupla, setaGripe, setaPneu)
            }else{
                habilitaBotoes(ckFakePneuDose1, marcaDataPneuDose1, dataAtualMarcaVacPneuDose1, btSubmit, dtInvPneuDose1, setaPneu)
                habilitaNomeVac(nomeVacBCG, nomeVacPolio, nomeVacTetra, nomeVacTriplice, nomeVacHepB, nomeVacFebre, nomeVacDupla, nomeVacGripe, nomeVacPneu)
                habilitaNomeVac(setaBCG, setaPolio, setaTetra, setaTriplice, setaHepB, setaFebre, setaDupla, setaGripe, setaPneu)
            }
        }else{
            habilitaBotoes(ckFakePneuDose1, marcaDataPneuDose1, dataAtualMarcaVacPneuDose1, btSubmit, dtInvPneuDose1, setaPneu)
            habilitaNomeVac(nomeVacBCG, nomeVacPolio, nomeVacTetra, nomeVacTriplice, nomeVacHepB, nomeVacFebre, nomeVacDupla, nomeVacGripe, nomeVacPneu)
            habilitaNomeVac(setaBCG, setaPolio, setaTetra, setaTriplice, setaHepB, setaFebre, setaDupla, setaGripe, setaPneu)
        }
    }else{
        habilitaBotoes(ckFakePneuDose1, marcaDataPneuDose1, dataAtualMarcaVacPneuDose1, btSubmit, dtInvPneuDose1, setaPneu)
        habilitaNomeVac(nomeVacBCG, nomeVacPolio, nomeVacTetra, nomeVacTriplice, nomeVacHepB, nomeVacFebre, nomeVacDupla, nomeVacGripe, nomeVacPneu)
        habilitaNomeVac(setaBCG, setaPolio, setaTetra, setaTriplice, setaHepB, setaFebre, setaDupla, setaGripe, setaPneu)
    }
})


var dataAtualMarcaVacPneuDose2 = document.getElementById("dataAtualMarcaVacPneuDose2")
dataAtualMarcaVacPneuDose2.value = anoAtual + "-" + mesAtual + "-" + diaAtual
var dtInvPneuDose2 = document.getElementById("dtInvPneuDose2")
dataAtualMarcaVacPneuDose2.addEventListener("input", function(){
    var anoInput = parseInt(dataAtualMarcaVacPneuDose2.value.substring(0, 4))
    var mesInput = parseInt(dataAtualMarcaVacPneuDose2.value.substring(5, 7))
    var diaInput = parseInt(dataAtualMarcaVacPneuDose2.value.substring(8, 10))
    if(anoInput > anoAtual || dataAtualMarcaVacPneuDose1.value == ""){
        desabilitaBotoes(ckFakePneuDose2, marcaDataPneuDose2, dataAtualMarcaVacPneuDose2, btSubmit, dtInvPneuDose2, setaPneu)
        desabilitaNomeVac(nomeVacBCG, nomeVacPolio, nomeVacTetra, nomeVacTriplice, nomeVacHepB, nomeVacFebre, nomeVacDupla, nomeVacGripe, nomeVacPneu)
        desabilitaNomeVac(setaBCG, setaPolio, setaTetra, setaTriplice, setaHepB, setaFebre, setaDupla, setaGripe, setaPneu)
    }else if(anoInput == anoAtual || dataAtualMarcaVacPneuDose2.value == ""){
        if(mesInput > mesAtual || dataAtualMarcaVacPneuDose2.value == ""){
            desabilitaBotoes(ckFakePneuDose2, marcaDataPneuDose2, dataAtualMarcaVacPneuDose2, btSubmit, dtInvPneuDose2, setaPneu)
            desabilitaNomeVac(nomeVacBCG, nomeVacPolio, nomeVacTetra, nomeVacTriplice, nomeVacHepB, nomeVacFebre, nomeVacDupla, nomeVacGripe, nomeVacPneu)
            desabilitaNomeVac(setaBCG, setaPolio, setaTetra, setaTriplice, setaHepB, setaFebre, setaDupla, setaGripe, setaPneu)
        }else if(mesInput == mesAtual || dataAtualMarcaVacPneuDose2.value == ""){
            if(diaInput > diaAtual || dataAtualMarcaVacPneuDose2.value == ""){
                desabilitaBotoes(ckFakePneuDose2, marcaDataPneuDose2, dataAtualMarcaVacPneuDose2, btSubmit, dtInvPneuDose2, setaPneu)
                desabilitaNomeVac(nomeVacBCG, nomeVacPolio, nomeVacTetra, nomeVacTriplice, nomeVacHepB, nomeVacFebre, nomeVacDupla, nomeVacGripe, nomeVacPneu)
                desabilitaNomeVac(setaBCG, setaPolio, setaTetra, setaTriplice, setaHepB, setaFebre, setaDupla, setaGripe, setaPneu)
            }else{
                habilitaBotoes(ckFakePneuDose2, marcaDataPneuDose2, dataAtualMarcaVacPneuDose2, btSubmit, dtInvPneuDose2, setaPneu)
                habilitaNomeVac(nomeVacBCG, nomeVacPolio, nomeVacTetra, nomeVacTriplice, nomeVacHepB, nomeVacFebre, nomeVacDupla, nomeVacGripe, nomeVacPneu)
                habilitaNomeVac(setaBCG, setaPolio, setaTetra, setaTriplice, setaHepB, setaFebre, setaDupla, setaGripe, setaPneu)
            }
        }else{
            habilitaBotoes(ckFakePneuDose2, marcaDataPneuDose2, dataAtualMarcaVacPneuDose2, btSubmit, dtInvPneuDose2, setaPneu)
            habilitaNomeVac(nomeVacBCG, nomeVacPolio, nomeVacTetra, nomeVacTriplice, nomeVacHepB, nomeVacFebre, nomeVacDupla, nomeVacGripe, nomeVacPneu)
            habilitaNomeVac(setaBCG, setaPolio, setaTetra, setaTriplice, setaHepB, setaFebre, setaDupla, setaGripe, setaPneu)
        }
    }else{
        habilitaBotoes(ckFakePneuDose2, marcaDataPneuDose2, dataAtualMarcaVacPneuDose2, btSubmit, dtInvPneuDose2, setaPneu)
        habilitaNomeVac(nomeVacBCG, nomeVacPolio, nomeVacTetra, nomeVacTriplice, nomeVacHepB, nomeVacFebre, nomeVacDupla, nomeVacGripe, nomeVacPneu)
        habilitaNomeVac(setaBCG, setaPolio, setaTetra, setaTriplice, setaHepB, setaFebre, setaDupla, setaGripe, setaPneu)
    }
})
