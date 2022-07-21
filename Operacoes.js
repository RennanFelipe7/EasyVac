const OperacaoComBDMySqlVacina = require('./ConexaoBDMySqlVacina')
const OperacaoComBDMySql = require ('./ConexaoComBancoDeDadosMysql')
async function retornaPocemtagemVacTomadas(chavePrimaria){
    var porcentagemVacTomada = await calculaPocemtagemVacTomadas(chavePrimaria)
    return porcentagemVacTomada;
}

async function calculaIdadeLogado(chavePrimaria){
    var IdadeDoLogado
    await OperacaoComBDMySql.findByPk(chavePrimaria, {attributes:['dataDeNascimento']})
    .then(function(dtDeNasciemnto){
        var data = new Date();
        var dia = String(data.getDate()).padStart(2, '0');
        var mes = String(data.getMonth() + 1).padStart(2, '0');
        var ano = data.getFullYear();
        dataAtual = ano + '/' + mes + '/' + dia;
        var anoNascLogado = parseInt(dtDeNasciemnto.dataDeNascimento.substr(0,4))
        var mesNascLogado = parseInt(dtDeNasciemnto.dataDeNascimento.substr(5,2))
        var diaNascLogado = parseInt(dtDeNasciemnto.dataDeNascimento.substr(8,2))
        IdadeDoLogado = ano - anoNascLogado
        IdadeDoLogado = IdadeDoLogado * 12
        if(mes >= mesNascLogado){
            if(dia >= diaNascLogado){
                IdadeDoLogado += (mes - mesNascLogado) 
            }else{
                IdadeDoLogado += (mes - mesNascLogado) - 1
            }
        }else{
            IdadeDoLogado -= 12
            if(dia >= diaNascLogado){
                IdadeDoLogado += 12 - (mesNascLogado - mes)
            }else{
                IdadeDoLogado += 12 - (mesNascLogado - mes ) - 1
            }
        }
    })
    return IdadeDoLogado
}


async function calculaPocemtagemVacTomadas(chavePrimaria){
    var idadeDoLogado = await calculaIdadeLogado(chavePrimaria)
    var quantidadeDeVacinas = 0
    if(idadeDoLogado >= 720){
        quantidadeDeVacinas = 19
    }else if(idadeDoLogado >= 132){
        quantidadeDeVacinas = 17
    }else if(idadeDoLogado >= 15){
        quantidadeDeVacinas = 14
    }else if(idadeDoLogado >= 12){
        quantidadeDeVacinas = 12
    }else if(idadeDoLogado >= 6){
        quantidadeDeVacinas = 11
    }else if(idadeDoLogado >= 4){
        quantidadeDeVacinas = 7
    }else if(idadeDoLogado >= 2){
        quantidadeDeVacinas = 5
    }else if(idadeDoLogado >= 1){
        quantidadeDeVacinas = 3
    }else{
        quantidadeDeVacinas = 2
    }
    var vacinasTomadas = 0;
    const vacinasBD = await OperacaoComBDMySqlVacina.findByPk(chavePrimaria)
    if(vacinasBD.bcgDose1 === true){
        vacinasTomadas++
    }
    if(vacinasBD.poliomieliteDose1 === true){
        vacinasTomadas++
    }
    if(vacinasBD.poliomieliteDose2 === true){
        vacinasTomadas++
    }
    if(vacinasBD.poliomieliteDose3 === true){
        vacinasTomadas++
    }
    if(vacinasBD.poliomieliteDose4 === true){
        vacinasTomadas++
    }
    if(vacinasBD.tetraValenteDose1 === true){
        vacinasTomadas++
    }
    if(vacinasBD.tetraValenteDose2 === true){
        vacinasTomadas++
    }
    if(vacinasBD.tetraValenteDose3 === true){
        vacinasTomadas++
    }
    if(vacinasBD.tetraValenteDose4 === true){
        vacinasTomadas++
    }
    if(vacinasBD.tripliceViral === true){
        vacinasTomadas++
    }
    if(vacinasBD.hepatiteBDose1 === true){
        vacinasTomadas++
    }
    if(vacinasBD.hepatiteBDose2 === true){
        vacinasTomadas++
    }
    if(vacinasBD.hepatiteBDose3 === true){
        vacinasTomadas++
    }
    if(vacinasBD.febreAmarelaDoseAtual === true){
        vacinasTomadas++
    }
    if(vacinasBD.duplaAdultoDose1 === true){
        vacinasTomadas++
    }
    if(vacinasBD.duplaAdultoDose2 === true){
        vacinasTomadas++
    }
    if(vacinasBD.duplaAdultoDose3 === true){
        vacinasTomadas++
    }
    if(vacinasBD.gripeDose1 === true){
        vacinasTomadas++
    }
    if(vacinasBD.pneumoniaDose1 === true){
        vacinasTomadas++
    }
    if(vacinasBD.pneumoniaDose5Anos === true){
        vacinasTomadas++
    }
    return ((vacinasTomadas / quantidadeDeVacinas) * 100).toFixed(2)
}

module.exports = retornaPocemtagemVacTomadas 