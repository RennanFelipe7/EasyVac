async function marcaVacinaVermOuVerde(chavePrimaria){    
    var vacinasBDEstado = await retornaVacBD(chavePrimaria)
    return vacinasBDEstado;
    
}
async function retornaVacBD(chavePrimaria){
    const OperacaoComBDMySqlVacina = require('../../ConexaoBDMySqlVacina')
    const vacinasBD = await OperacaoComBDMySqlVacina.findByPk(chavePrimaria)
    return vacinasBD
}

module.exports = marcaVacinaVermOuVerde  