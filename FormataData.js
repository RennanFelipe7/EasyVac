function formataData(string){
    var vetor, stringRetorno
    vetor = string.split("-", 3)
    stringRetorno = vetor[2] + "/" + vetor[1] + "/" + vetor[0]
    return stringRetorno
}
module.exports = formataData
