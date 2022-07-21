async function retornaDatas(chavePrimaria){    
    var datasBDEstado = await retornaDatasBD(chavePrimaria)
    return datasBDEstado; 
    
}
async function retornaDatasBD(chavePrimaria){
    const OperacaoComBDMySqlTabDataDeAplicacao = require('../../ConexaoBDMySqlDataDeAplicacao')
    const datasBD = await OperacaoComBDMySqlTabDataDeAplicacao.findOne({ where: { fk_VacinaDataDeAplicacao: chavePrimaria } })
    return datasBD
}
module.exports = retornaDatas  