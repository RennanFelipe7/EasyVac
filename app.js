const express = require("express");
const { engine } = require ('express-handlebars');
const res = require("express/lib/response");
const app = express();
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt')
const nodemailer = require('nodemailer')
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
const session = require('express-session'); 

const OperacaoComBDMySql = require('./ConexaoComBancoDeDadosMysql');
const OperacaoComBDMySqlTabVacina = require('./ConexaoBDMySqlVacina')
const OperacaoComBDMySqlTabDataDeAplicacao= require('./ConexaoBDMySqlDataDeAplicacao')
const vacinasTomadas = require('./Operacoes') 
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set("views", "./views");  
const Sequelize = require('sequelize');
const { DATE } = require("sequelize");


app.use(session({secret: '***********', resave : true, saveUninitialized: true})) 

app.use(express.static(__dirname + '/views')); 

app.post('/Login', function(solicita, resposta){ 
    var encontrou = false;
    var login;
    OperacaoComBDMySql.findAll({attributes: ['senha', 'email', 'nomeCompleto', 'numeroDoRegistroDeNascimento']}).then(function(usuariosBD){
        for(const obj of usuariosBD){
            if(bcrypt.compareSync(solicita.body.senha, obj.senha) === true && obj.email === solicita.body.login){
                encontrou = true;
                login = obj.email
                solicita.session.nomeLogado = obj.nomeCompleto.split(' ').slice(0, 2).join(' ')
                solicita.session.chavePrimariaLog = obj.numeroDoRegistroDeNascimento
                
                break
            }
            
        }
        if(encontrou){  
            solicita.session.login = login;
            resposta.redirect('TelaInicialDaAplicacao')
        }else{
            resposta.render('TelaDeLogin', {logou : 0})
        } 
    })
    
})
app.get("/Login", function(solicita, resposta){ 
    if(solicita.session.login && !solicita.session.veioDeAposOCadastro){
        async function calculaPorcentagemVacTomada(){
            var porcentagemVacTomada
            porcentagemVacTomada = await vacinasTomadas(solicita.session.chavePrimariaLog)
            resposta.render('TelaInicialDaAplicacao', {nome: solicita.session.nomeLogado, pocentagemTomada: porcentagemVacTomada} )
        }
        calculaPorcentagemVacTomada()
    }else{
        resposta.render('TelaDeLogin')
    }
})

app.get('/Cadastro', function(solicita, resposta){ 
    if(solicita.session.login && solicita.session.veioDoCadastro){
        resposta.redirect('TelaInicialDaAplicacao')
    }else{
        resposta.render('TelaDeCadastro')
    }
})

app.get('/Sair', function(solicita, resposta){
    solicita.session.destroy();
    resposta.redirect('/Login')
})
const SMTP_CONFIG = require("./nodemailer")
function geraNumeroAleatorio(){
    var numeroAleatorio = ''
    for(var i = 0; i < 6; i++){
        numeroAleatorio += String((Math.floor(Math.random() * (9 - 1 + 1) + 1)))
    }
    return numeroAleatorio
}
const transporter = nodemailer.createTransport({
    host: SMTP_CONFIG.host,
    port: SMTP_CONFIG.port,
    secure: false,
    auth: {
        user: SMTP_CONFIG.user,
        pass: SMTP_CONFIG.pass
    },
    tls: {
        rejectUnauthorized: false
    }
})  
async function valida(texto, assunto, email, codigo){
    await transporter.sendMail({
        text: texto + ' ' + codigo, 
        subject: assunto,
        from: 'EasyVac <easyvac7@gmail.com>',
        to: email,
        html: '<html> <body> <h2 style="color: black;">' + texto + " " +  '<p style="color: blue;">' + codigo + '</p> </h2> </body> </html>'
    })
}
app.post('/addDadosFormulario', function(solicita, resposta){
    if(solicita.body.senha == solicita.body.senhaConfirm){
        if(solicita.body.senha.length >= 8){
            OperacaoComBDMySql.findAll({attributes: ['numeroDoRegistroDeNascimento', 'email']}).then(function(jaExiste){
                var existeUsuario = false
                for(obj of jaExiste){
                    if(obj.email == solicita.body.email || obj.numeroDoRegistroDeNascimento == solicita.body.NumeroRegNasc){
                        existeUsuario = true
                        if (obj.numeroDoRegistroDeNascimento == solicita.body.NumeroRegNasc){ 
                            solicita.session.oQueExiste = 3
                        }else if(obj.email == solicita.body.email){
                            solicita.session.oQueExiste = 4
                        }
                        break
                    }
                }
                solicita.session.avNomeLog = solicita.body.nomeCompleto
                solicita.session.avDataDeNascimentoLog = solicita.body.dataDeNascimento
                solicita.session.avNumeroRegisLog = solicita.body.NumeroRegNasc
                solicita.session.avGeneroLog = solicita.body.genero
                solicita.session.avEmailLog = solicita.body.email
                solicita.session.avSenhaLog = solicita.body.senha
                solicita.session.veioDaValidacao = true
                if(! existeUsuario){
                    (async () => {
                        solicita.session.codConfirmacao = geraNumeroAleatorio()
                        await valida('Aqui está seu código de validação:', 'Código de validação', solicita.body.email, solicita.session.codConfirmacao)
                    })();
                    resposta.redirect('/ValidaEmail')
                }else{
                    resposta.render('TelaDeCadastro', {diferente: solicita.session.oQueExiste})
                }
            })
        }else{
            resposta.render('TelaDeCadastro', {diferente: 2})    
        }
    }else{
        resposta.render('TelaDeCadastro', {diferente: 1})
    }
})


const { redirect } = require("express/lib/response");
app.post('/atualizaBancoDeDados', function(solicita, resposta){
    var chavePrimariaLogVar = solicita.session.chavePrimariaLog
    if(solicita.session.login){
        var statusAtualDasVacinas
        async function statusVacPassado(chavePrimariaLogVar){
            statusAtualDasVacinas = await OperacaoComBDMySqlTabVacina.findByPk(solicita.session.chavePrimariaLog)
        }
        (async () => {
            await statusVacPassado(solicita.session.chavePrimariaLog);
            if(solicita.body.bcgDose1Ck && statusAtualDasVacinas.bcgDose1 == false){
                await OperacaoComBDMySqlTabVacina.update({bcgDose1: 1}, {
                    where:{
                        fk_UsuarioVac: solicita.session.chavePrimariaLog
                    }
                })
                await OperacaoComBDMySqlTabDataDeAplicacao.update({dt_bcgDose1: solicita.body.DtMbcgDose1},{
                    where:{
                        fk_VacinaDataDeAplicacao: solicita.session.chavePrimariaLog
                    }
                })
            }else if(! solicita.body.bcgDose1Ck && statusAtualDasVacinas.bcgDose1 == true){
                await OperacaoComBDMySqlTabVacina.update({bcgDose1: 0}, {
                    where:{
                        fk_UsuarioVac: solicita.session.chavePrimariaLog
                    }
                })
                await OperacaoComBDMySqlTabDataDeAplicacao.update({dt_bcgDose1: "0000-01-01"},{
                    where:{
                        fk_VacinaDataDeAplicacao: solicita.session.chavePrimariaLog
                    }
                })
            }
            if(solicita.body.bcgDose2Ck && statusAtualDasVacinas.bcgDose2 == false){
                await OperacaoComBDMySqlTabVacina.update({bcgDose2: 1}, {
                    where:{
                        fk_UsuarioVac: solicita.session.chavePrimariaLog
                    }
                })
                await OperacaoComBDMySqlTabDataDeAplicacao.update({dt_bcgDose2: solicita.body.DtMbcgDose2},{
                    where:{
                        fk_VacinaDataDeAplicacao: solicita.session.chavePrimariaLog
                    }
                })
            }else if(! solicita.body.bcgDose2Ck && statusAtualDasVacinas.bcgDose2 == true){
                await OperacaoComBDMySqlTabVacina.update({bcgDose2: 0}, {
                    where:{
                        fk_UsuarioVac: solicita.session.chavePrimariaLog
                    }
                })
                await OperacaoComBDMySqlTabDataDeAplicacao.update({dt_bcgDose2: "0000-01-01"},{
                    where:{
                        fk_VacinaDataDeAplicacao: solicita.session.chavePrimariaLog
                    }
                })
            }
            if(solicita.body.poliomieliteDose1Ck && statusAtualDasVacinas.poliomieliteDose1 == false){
                await OperacaoComBDMySqlTabVacina.update({poliomieliteDose1: 1}, {
                    where:{
                        fk_UsuarioVac: solicita.session.chavePrimariaLog
                    }
                })
                await OperacaoComBDMySqlTabDataDeAplicacao.update({dt_poliomieliteDose1: solicita.body.DtMPolioDose1},{
                    where:{
                        fk_VacinaDataDeAplicacao: solicita.session.chavePrimariaLog
                    }
                })
            }else if (! solicita.body.poliomieliteDose1Ck && statusAtualDasVacinas.poliomieliteDose1 == true){
                await OperacaoComBDMySqlTabVacina.update({poliomieliteDose1: 0}, {
                    where:{
                        fk_UsuarioVac: solicita.session.chavePrimariaLog
                    }
                })
                await OperacaoComBDMySqlTabDataDeAplicacao.update({dt_poliomieliteDose1: "0000-01-01"},{
                    where:{
                        fk_VacinaDataDeAplicacao: solicita.session.chavePrimariaLog
                    }
                })
            }
            if(solicita.body.poliomieliteDose2Ck && statusAtualDasVacinas.poliomieliteDose2 == false){
                await OperacaoComBDMySqlTabVacina.update({poliomieliteDose2: 1}, {
                    where:{
                        fk_UsuarioVac: solicita.session.chavePrimariaLog
                    }
                })
                await OperacaoComBDMySqlTabDataDeAplicacao.update({dt_poliomieliteDose2: solicita.body.DtMPolioDose2},{
                    where:{
                        fk_VacinaDataDeAplicacao: solicita.session.chavePrimariaLog
                    }
                })
            }else if (! solicita.body.poliomieliteDose2Ck && statusAtualDasVacinas.poliomieliteDose2 == true){
                await OperacaoComBDMySqlTabVacina.update({poliomieliteDose2: 0}, {
                    where:{
                        fk_UsuarioVac: solicita.session.chavePrimariaLog
                    }
                })
                await OperacaoComBDMySqlTabDataDeAplicacao.update({dt_poliomieliteDose2: "0000-01-01"},{
                    where:{
                        fk_VacinaDataDeAplicacao: solicita.session.chavePrimariaLog
                    }
                })
            }
            if(solicita.body.poliomieliteDose3Ck && statusAtualDasVacinas.poliomieliteDose3 == false){
                await OperacaoComBDMySqlTabVacina.update({poliomieliteDose3: 1}, {
                    where:{
                        fk_UsuarioVac: solicita.session.chavePrimariaLog
                    }
                })
                await OperacaoComBDMySqlTabDataDeAplicacao.update({dt_poliomieliteDose3: solicita.body.DtMPolioDose3},{
                    where:{
                        fk_VacinaDataDeAplicacao: solicita.session.chavePrimariaLog
                    }
                })
            }else if (! solicita.body.poliomieliteDose3Ck && statusAtualDasVacinas.poliomieliteDose3 == true){
                await OperacaoComBDMySqlTabVacina.update({poliomieliteDose3: 0}, {
                    where:{
                        fk_UsuarioVac: solicita.session.chavePrimariaLog
                    }
                })
                await OperacaoComBDMySqlTabDataDeAplicacao.update({dt_poliomieliteDose3: "0000-01-01"},{
                    where:{
                        fk_VacinaDataDeAplicacao: solicita.session.chavePrimariaLog
                    }
                })
            }
            if(solicita.body.poliomieliteDose4Ck && statusAtualDasVacinas.poliomieliteDose4 == false){
                await OperacaoComBDMySqlTabVacina.update({poliomieliteDose4: 1}, {
                    where:{
                        fk_UsuarioVac: solicita.session.chavePrimariaLog
                    }
                })
                await OperacaoComBDMySqlTabDataDeAplicacao.update({dt_poliomieliteDose4: solicita.body.DtMPolioDose4},{
                    where:{
                        fk_VacinaDataDeAplicacao: solicita.session.chavePrimariaLog
                    }
                })
            }else if (! solicita.body.poliomieliteDose4Ck && statusAtualDasVacinas.poliomieliteDose4 == true){
                await OperacaoComBDMySqlTabVacina.update({poliomieliteDose4: 0}, {
                    where:{
                        fk_UsuarioVac: solicita.session.chavePrimariaLog
                    }
                })
                await OperacaoComBDMySqlTabDataDeAplicacao.update({dt_poliomieliteDose4: "0000-01-01"},{
                    where:{
                        fk_VacinaDataDeAplicacao: solicita.session.chavePrimariaLog
                    }
                })
            }
            if(solicita.body.tetraValenteDose1Ck && statusAtualDasVacinas.tetraValenteDose1 == false){
                await OperacaoComBDMySqlTabVacina.update({tetraValenteDose1: 1}, {
                    where:{
                        fk_UsuarioVac: solicita.session.chavePrimariaLog
                    }
                })
                await OperacaoComBDMySqlTabDataDeAplicacao.update({dt_tetraValenteDose1: solicita.body.DtMTetraDose1},{
                    where:{
                        fk_VacinaDataDeAplicacao: solicita.session.chavePrimariaLog
                    }
                })
            }else if (! solicita.body.tetraValenteDose1Ck && statusAtualDasVacinas.tetraValenteDose1 == true){
                await OperacaoComBDMySqlTabVacina.update({tetraValenteDose1: 0}, {
                    where:{
                        fk_UsuarioVac: solicita.session.chavePrimariaLog
                    }
                })
                await OperacaoComBDMySqlTabDataDeAplicacao.update({dt_tetraValenteDose1: "0000-01-01"},{
                    where:{
                        fk_VacinaDataDeAplicacao: solicita.session.chavePrimariaLog
                    }
                })
            }
            if(solicita.body.tetraValenteDose2Ck && statusAtualDasVacinas.tetraValenteDose2 == false){
                await OperacaoComBDMySqlTabVacina.update({tetraValenteDose2: 1}, {
                    where:{
                        fk_UsuarioVac: solicita.session.chavePrimariaLog
                    }
                })
                await OperacaoComBDMySqlTabDataDeAplicacao.update({dt_tetraValenteDose2: solicita.body.DtMTetraDose2},{
                    where:{
                        fk_VacinaDataDeAplicacao: solicita.session.chavePrimariaLog
                    }
                })
            }else if (! solicita.body.tetraValenteDose2Ck && statusAtualDasVacinas.tetraValenteDose2 == true){
                await OperacaoComBDMySqlTabVacina.update({tetraValenteDose2: 0}, {
                    where:{
                        fk_UsuarioVac: solicita.session.chavePrimariaLog
                    }
                })
                await OperacaoComBDMySqlTabDataDeAplicacao.update({dt_tetraValenteDose2: "0000-01-01"},{
                    where:{
                        fk_VacinaDataDeAplicacao: solicita.session.chavePrimariaLog
                    }
                })
            }
            if(solicita.body.tetraValenteDose3Ck && statusAtualDasVacinas.tetraValenteDose3 == false){
                await OperacaoComBDMySqlTabVacina.update({tetraValenteDose3: 1}, {
                    where:{
                        fk_UsuarioVac: solicita.session.chavePrimariaLog
                    }
                })
                await OperacaoComBDMySqlTabDataDeAplicacao.update({dt_tetraValenteDose3: solicita.body.DtMTetraDose3},{
                    where:{
                        fk_VacinaDataDeAplicacao: solicita.session.chavePrimariaLog
                    }
                })
            }else if (! solicita.body.tetraValenteDose3Ck && statusAtualDasVacinas.tetraValenteDose3 == true){
                await OperacaoComBDMySqlTabVacina.update({tetraValenteDose3: 0}, {
                    where:{
                        fk_UsuarioVac: solicita.session.chavePrimariaLog
                    }
                })
                await OperacaoComBDMySqlTabDataDeAplicacao.update({dt_tetraValenteDose3: "0000-01-01"},{
                    where:{
                        fk_VacinaDataDeAplicacao: solicita.session.chavePrimariaLog
                    }
                })
            }
            if(solicita.body.tetraValenteDose4Ck && statusAtualDasVacinas.tetraValenteDose4 == false){
                await OperacaoComBDMySqlTabVacina.update({tetraValenteDose4: 1, duplaAdultoDose1: 1, duplaAdultoDose2: 1, duplaAdultoDose3: 1}, {
                    where:{
                        fk_UsuarioVac: solicita.session.chavePrimariaLog
                    }
                })
                await OperacaoComBDMySqlTabDataDeAplicacao.update({dt_tetraValenteDose4: solicita.body.DtMTetraDose4, dt_duplaAdultoDose1: solicita.body.DtMTetraDose4, dt_duplaAdultoDose2: solicita.body.DtMTetraDose4, dt_duplaAdultoDose3: solicita.body.DtMTetraDose4},{
                    where:{
                        fk_VacinaDataDeAplicacao: solicita.session.chavePrimariaLog
                    }
                })
            }else if (! solicita.body.tetraValenteDose4Ck && statusAtualDasVacinas.tetraValenteDose4 == true){
                await OperacaoComBDMySqlTabVacina.update({tetraValenteDose4: 0, duplaAdultoDose1: 0, duplaAdultoDose2: 0, duplaAdultoDose3: 0}, {
                    where:{
                        fk_UsuarioVac: solicita.session.chavePrimariaLog
                    }
                })
                await OperacaoComBDMySqlTabDataDeAplicacao.update({dt_tetraValenteDose4: "0000-01-01", dt_duplaAdultoDose1: "0000-01-01", dt_duplaAdultoDose2: "0000-01-01", dt_duplaAdultoDose3: "0000-01-01"},{
                    where:{
                        fk_VacinaDataDeAplicacao: solicita.session.chavePrimariaLog
                    }
                })
            }
            
            if(solicita.body.tripliceViralCk && statusAtualDasVacinas.tripliceViral == false){
                await OperacaoComBDMySqlTabVacina.update({tripliceViral : 1}, {
                    where: {
                        fk_UsuarioVac: solicita.session.chavePrimariaLog
                    }
                })
                await OperacaoComBDMySqlTabDataDeAplicacao.update({dt_tripliceViral: solicita.body.DtMTripliceDose1},{
                    where:{
                        fk_VacinaDataDeAplicacao: solicita.session.chavePrimariaLog
                    }
                })
            }else if(! solicita.body.tripliceViralCk && statusAtualDasVacinas.tripliceViral == true){
                await OperacaoComBDMySqlTabVacina.update({tripliceViral: 0}, {
                    where:{
                        fk_UsuarioVac: solicita.session.chavePrimariaLog
                    }
                })
                await OperacaoComBDMySqlTabDataDeAplicacao.update({dt_tripliceViral: "0000-01-01"},{
                    where:{
                        fk_VacinaDataDeAplicacao: solicita.session.chavePrimariaLog
                    }
                })
            }
            if(solicita.body.hepatiteBDose1Ck && statusAtualDasVacinas.hepatiteBDose1 == false){
                await OperacaoComBDMySqlTabVacina.update({hepatiteBDose1 : 1}, {
                    where:{
                        fk_UsuarioVac: solicita.session.chavePrimariaLog 
                    }
                })
                await OperacaoComBDMySqlTabDataDeAplicacao.update({dt_hepatiteBDose1: solicita.body.DtMHepBDose1},{
                    where:{
                        fk_VacinaDataDeAplicacao: solicita.session.chavePrimariaLog
                    }
                })
            }else if(! solicita.body.hepatiteBDose1Ck && statusAtualDasVacinas.hepatiteBDose1 == true){
                await OperacaoComBDMySqlTabVacina.update({hepatiteBDose1: 0}, {
                    where:{
                        fk_UsuarioVac: solicita.session.chavePrimariaLog
                    }
                })
                await OperacaoComBDMySqlTabDataDeAplicacao.update({dt_hepatiteBDose1: "0000-01-01"},{
                    where:{
                        fk_VacinaDataDeAplicacao: solicita.session.chavePrimariaLog
                    }
                })
            }
            if(solicita.body.hepatiteBDose2Ck && statusAtualDasVacinas.hepatiteBDose2 == false){
                await OperacaoComBDMySqlTabVacina.update({hepatiteBDose2 : 1}, {
                    where:{
                        fk_UsuarioVac: solicita.session.chavePrimariaLog 
                    }
                })
                await OperacaoComBDMySqlTabDataDeAplicacao.update({dt_hepatiteBDose2: solicita.body.DtMHepBDose2},{
                    where:{
                        fk_VacinaDataDeAplicacao: solicita.session.chavePrimariaLog
                    }
                })
            }else if(! solicita.body.hepatiteBDose2Ck && statusAtualDasVacinas.hepatiteBDose2 == true){
                await OperacaoComBDMySqlTabVacina.update({hepatiteBDose2: 0}, {
                    where:{
                        fk_UsuarioVac: solicita.session.chavePrimariaLog
                    }
                })
                await OperacaoComBDMySqlTabDataDeAplicacao.update({dt_hepatiteBDose2: "0000-01-01"},{
                    where:{
                        fk_VacinaDataDeAplicacao: solicita.session.chavePrimariaLog
                    }
                })
            }
            if(solicita.body.hepatiteBDose3Ck && statusAtualDasVacinas.hepatiteBDose3 == false){
                await OperacaoComBDMySqlTabVacina.update({hepatiteBDose3 : 1}, {
                    where:{
                        fk_UsuarioVac: solicita.session.chavePrimariaLog 
                    }
                })
                await OperacaoComBDMySqlTabDataDeAplicacao.update({dt_hepatiteBDose3: solicita.body.DtMHepBDose3},{
                    where:{
                        fk_VacinaDataDeAplicacao: solicita.session.chavePrimariaLog
                    }
                })
            }else if(! solicita.body.hepatiteBDose3Ck && statusAtualDasVacinas.hepatiteBDose3 == true){
                await OperacaoComBDMySqlTabVacina.update({hepatiteBDose3: 0}, {
                    where:{
                        fk_UsuarioVac: solicita.session.chavePrimariaLog
                    }
                })
                await OperacaoComBDMySqlTabDataDeAplicacao.update({dt_hepatiteBDose3: "0000-01-01"},{
                    where:{
                        fk_VacinaDataDeAplicacao: solicita.session.chavePrimariaLog
                    }
                })
            }
            if(solicita.body.febreAmarelaDoseAtualCk && statusAtualDasVacinas.febreAmarelaDoseAtual == false){
                await OperacaoComBDMySqlTabVacina.update({febreAmarelaDoseAtual: 1},{
                    where :{
                        fk_UsuarioVac: solicita.session.chavePrimariaLog
                    }
                })
                await OperacaoComBDMySqlTabDataDeAplicacao.update({dt_febreAmarelaDoseAtual: solicita.body.DtMFebreDose1},{
                    where: {
                        fk_VacinaDataDeAplicacao: solicita.session.chavePrimariaLog
                    }
                })
            }else if(! solicita.body.febreAmarelaDoseAtualCk && statusAtualDasVacinas.febreAmarelaDoseAtual == true){
                await OperacaoComBDMySqlTabVacina.update({febreAmarelaDoseAtual: 0},{
                    where:{
                        fk_UsuarioVac : solicita.session.chavePrimariaLog
                    }
                })
                await OperacaoComBDMySqlTabDataDeAplicacao.update({dt_febreAmarelaDoseAtual: "0000-01-01"},{
                    where:{
                        fk_VacinaDataDeAplicacao: solicita.session.chavePrimariaLog
                    }
                })
            }
            if(solicita.body.febreAmarelaDose10AnosCk){
                await OperacaoComBDMySqlTabVacina.update({febreAmarelaDoseAtual: 1},{
                    where: {
                        fk_UsuarioVac: solicita.session.chavePrimariaLog
                    }
                })
                await OperacaoComBDMySqlTabDataDeAplicacao.update({dt_febreAmarelaDoseAtual:  solicita.body.DtMFebreDose2},{
                    where: {
                        fk_VacinaDataDeAplicacao: solicita.session.chavePrimariaLog
                    }
                })
            }
            if(solicita.body.duplaAdultoDose10AnosCk){
                await OperacaoComBDMySqlTabVacina.update({duplaAdultoDose10Anos: 1}, {
                    where: {
                        fk_UsuarioVac : solicita.session.chavePrimariaLog
                    }
                })
                await OperacaoComBDMySqlTabDataDeAplicacao.update({dt_duplaAdultoDose10Anos: solicita.body.DtMDuplaDose4},{
                    where:{
                        fk_VacinaDataDeAplicacao: solicita.session.chavePrimariaLog 
                    }
                })
            }else if(! solicita.body.duplaAdultoDose10AnosCk && ! solicita.body.tetraValenteDose4Ck){
                await OperacaoComBDMySqlTabVacina.update({duplaAdultoDose10Anos: 0}, {
                    where: {
                        fk_UsuarioVac : solicita.session.chavePrimariaLog
                    }
                })
                await OperacaoComBDMySqlTabDataDeAplicacao.update({dt_duplaAdultoDose10Anos: "0000-01-01"},{
                    where:{
                        fk_VacinaDataDeAplicacao: solicita.session.chavePrimariaLog 
                    }
                })
            }
            if(solicita.body.duplaAdultoDose1Ck && statusAtualDasVacinas.duplaAdultoDose1 == false){
                await OperacaoComBDMySqlTabVacina.update({duplaAdultoDose1: 1}, {
                    where:{
                        fk_UsuarioVac: solicita.session.chavePrimariaLog
                    }
                })
                await OperacaoComBDMySqlTabDataDeAplicacao.update({dt_duplaAdultoDose1: solicita.body.DtMDuplaDose1},{
                    where:{
                        fk_VacinaDataDeAplicacao: solicita.session.chavePrimariaLog
                    }
                })
            }else if(! solicita.body.duplaAdultoDose1Ck && statusAtualDasVacinas.duplaAdultoDose1 == true){
                await OperacaoComBDMySqlTabVacina.update({duplaAdultoDose1: 0}, {
                    where:{
                        fk_UsuarioVac: solicita.session.chavePrimariaLog
                    }
                })
                await OperacaoComBDMySqlTabDataDeAplicacao.update({dt_duplaAdultoDose1: "0000-01-01"},{
                    where:{
                        fk_VacinaDataDeAplicacao: solicita.session.chavePrimariaLog
                    }
                })
            }
            if(solicita.body.duplaAdultoDose2Ck && statusAtualDasVacinas.duplaAdultoDose2 == false){
                await OperacaoComBDMySqlTabVacina.update({duplaAdultoDose2: 1}, {
                    where:{
                        fk_UsuarioVac: solicita.session.chavePrimariaLog
                    }
                })
                await OperacaoComBDMySqlTabDataDeAplicacao.update({dt_duplaAdultoDose2: solicita.body.DtMDuplaDose2},{
                    where:{
                        fk_VacinaDataDeAplicacao: solicita.session.chavePrimariaLog
                    }
                })
            }else if(! solicita.body.duplaAdultoDose2Ck && statusAtualDasVacinas.duplaAdultoDose2 == true){
                await OperacaoComBDMySqlTabVacina.update({duplaAdultoDose2: 0}, {
                    where:{
                        fk_UsuarioVac: solicita.session.chavePrimariaLog
                    }
                })
                await OperacaoComBDMySqlTabDataDeAplicacao.update({dt_duplaAdultoDose2: "0000-01-01"},{
                    where:{
                        fk_VacinaDataDeAplicacao: solicita.session.chavePrimariaLog
                    }
                })
            }
            if(solicita.body.duplaAdultoDose3Ck && statusAtualDasVacinas.duplaAdultoDose3 == false){
                await OperacaoComBDMySqlTabVacina.update({duplaAdultoDose3: 1}, {
                    where:{
                        fk_UsuarioVac: solicita.session.chavePrimariaLog
                    }
                })
                await OperacaoComBDMySqlTabDataDeAplicacao.update({dt_duplaAdultoDose3: solicita.body.DtMDuplaDose3},{
                    where:{
                        fk_VacinaDataDeAplicacao: solicita.session.chavePrimariaLog
                    }
                })
            }else if(! solicita.body.duplaAdultoDose3Ck && statusAtualDasVacinas.duplaAdultoDose3 == true){
                await OperacaoComBDMySqlTabVacina.update({duplaAdultoDose3: 0}, {
                    where:{
                        fk_UsuarioVac: solicita.session.chavePrimariaLog
                    }
                })
                await OperacaoComBDMySqlTabDataDeAplicacao.update({dt_duplaAdultoDose3: "0000-01-01"},{
                    where:{
                        fk_VacinaDataDeAplicacao: solicita.session.chavePrimariaLog
                    }
                })
            }
            if(solicita.body.gripeCk && statusAtualDasVacinas.gripeDose1 == false){
                await OperacaoComBDMySqlTabVacina.update({gripeDose1: 1},{
                    where :{
                        fk_UsuarioVac: solicita.session.chavePrimariaLog
                    }
                })
                await OperacaoComBDMySqlTabDataDeAplicacao.update({dt_gripeDose1: solicita.body.DtMGripeDose1},{
                    where: {
                        fk_VacinaDataDeAplicacao: solicita.session.chavePrimariaLog
                    }
                })
            }else if(! solicita.body.gripeCk && statusAtualDasVacinas.gripeDose1 == true){
                await OperacaoComBDMySqlTabVacina.update({gripeDose1: 0},{
                    where:{
                        fk_UsuarioVac : solicita.session.chavePrimariaLog
                    }
                })
                await OperacaoComBDMySqlTabDataDeAplicacao.update({dt_gripeDose1: "0000-01-01"},{
                    where:{
                        fk_VacinaDataDeAplicacao: solicita.session.chavePrimariaLog
                    }
                })
            }
            if(solicita.body.gripeReforcoCk){
                await OperacaoComBDMySqlTabVacina.update({gripeDose1: 1},{
                    where: {
                        fk_UsuarioVac: solicita.session.chavePrimariaLog
                    }
                })
                await OperacaoComBDMySqlTabDataDeAplicacao.update({dt_gripeDose1: solicita.body.DtMGripeDose2},{
                    where: {
                        fk_VacinaDataDeAplicacao: solicita.session.chavePrimariaLog
                    }
                })
            }

            if(solicita.body.pneumoniaCk && statusAtualDasVacinas.pneumoniaDose1 == false){
                await OperacaoComBDMySqlTabVacina.update({pneumoniaDose1: 1},{
                    where: {
                        fk_UsuarioVac: solicita.session.chavePrimariaLog
                    }
                })
                await OperacaoComBDMySqlTabDataDeAplicacao.update({dt_pneumoniaDose1: solicita.body.DtMPneuDose1},{
                    where: {
                        fk_VacinaDataDeAplicacao: solicita.session.chavePrimariaLog
                    }
                })
            }else if(! solicita.body.pneumoniaCk && statusAtualDasVacinas.pneumoniaDose1 == true){
                await OperacaoComBDMySqlTabVacina.update({pneumoniaDose1: 0},{
                    where: {
                        fk_UsuarioVac: solicita.session.chavePrimariaLog
                    }
                })
                await OperacaoComBDMySqlTabDataDeAplicacao.update({dt_pneumoniaDose1: "0000-01-01"},{
                    where: {
                        fk_VacinaDataDeAplicacao: solicita.session.chavePrimariaLog
                    }
                })
            }

            if(solicita.body.pneumoniaReforcoCk && statusAtualDasVacinas.pneumoniaDose5Anos == false){
                await OperacaoComBDMySqlTabVacina.update({pneumoniaDose5Anos: 1},{
                    where: {
                        fk_UsuarioVac: solicita.session.chavePrimariaLog
                    }
                })
                await OperacaoComBDMySqlTabDataDeAplicacao.update({dt_pneumoniaDose5Anos: solicita.body.DtMPneuDose2},{
                    where: {
                        fk_VacinaDataDeAplicacao: solicita.session.chavePrimariaLog
                    }
                })
            }else if(! solicita.body.pneumoniaReforcoCk && statusAtualDasVacinas.pneumoniaDose5Anos == true){
                await OperacaoComBDMySqlTabVacina.update({pneumoniaDose5Anos: 0},{
                    where: {
                        fk_UsuarioVac: solicita.session.chavePrimariaLog
                    }
                })
                await OperacaoComBDMySqlTabDataDeAplicacao.update({dt_pneumoniaDose5Anos: "0000-01-01"},{
                    where: {
                        fk_VacinaDataDeAplicacao: solicita.session.chavePrimariaLog
                    }
                })
            }
        })().then(function(){
            resposta.redirect('TelaInicialDaAplicacao')
        }).catch(function(erro){
            resposta.send("Não foi possivel realizar as alterações nas VACINAS, PQ = ", erro)
        })
    }else{
        resposta.redirect('Login')
    }
})
app.get('/ValidaEmail', function(solicita, resposta){
    if(solicita.session.login){
        resposta.redirect('TelaInicialDaAplicacao')
    }else if(solicita.session.veioDaValidacao){
        resposta.render('ValidaEmail')
    }else{
        resposta.redirect('/Login')
    }
})
app.post('/CadastraUsuario', function(solicita, resposta){
    if(solicita.body.numeroDoUsuario == solicita.session.codConfirmacao){
        function insereNoBanco(){
            return new Promise((resolveu, rejeitou) => {
                resolveu(
                    (async () => {
                        var senhaCriptografada = await bcrypt.hash(solicita.session.avSenhaLog, 10)
                        await OperacaoComBDMySql.create({
                                nomeCompleto: solicita.session.avNomeLog,
                                dataDeNascimento: solicita.session.avDataDeNascimentoLog,
                                numeroDoRegistroDeNascimento: String(solicita.session.avNumeroRegisLog), 
                                genero: solicita.session.avGeneroLog,
                                email: solicita.session.avEmailLog,
                                senha: senhaCriptografada 
                            })
                        await  OperacaoComBDMySqlTabVacina.create({
                                bcgDose1: 0,
                                bcgDose2: 0,
                                poliomieliteDose1: 0, 
                                poliomieliteDose2: 0, 
                                poliomieliteDose3: 0, 
                                poliomieliteDose4: 0,
                                tetraValenteDose1: 0, 
                                tetraValenteDose2: 0, 
                                tetraValenteDose3: 0, 
                                tetraValenteDose4: 0, 
                                tripliceViral: 0, 
                                hepatiteBDose1: 0, 
                                hepatiteBDose2: 0, 
                                hepatiteBDose3: 0,
                                febreAmarelaDoseAtual: 0, 
                                febreAmarelaDose10Anos: 0, 
                                duplaAdultoDose1: 0, 
                                duplaAdultoDose2: 0, 
                                duplaAdultoDose3: 0, 
                                duplaAdultoDose10Anos: 0, 
                                gripeDose1: 0, 
                                gripeDose1Ano: 0, 
                                pneumoniaDose1: 0, 
                                pneumoniaDose5Anos: 0,
                                fk_UsuarioVac: String(solicita.session.avNumeroRegisLog),
                                identificador: String(solicita.session.avNumeroRegisLog)
                            })
                        await    OperacaoComBDMySqlTabDataDeAplicacao.create({
                                dt_bcgDose1: "0000-01-01",
                                dt_bcgDose2: "0000-01-01",
                                dt_poliomieliteDose1: "0000-01-01", 
                                dt_poliomieliteDose2: "0000-01-01", 
                                dt_poliomieliteDose3: "0000-01-01", 
                                dt_poliomieliteDose4: "0000-01-01",
                                dt_tetraValenteDose1: "0000-01-01", 
                                dt_tetraValenteDose2: "0000-01-01", 
                                dt_tetraValenteDose3: "0000-01-01", 
                                dt_tetraValenteDose4: "0000-01-01", 
                                dt_tripliceViral: "0000-01-01", 
                                dt_hepatiteBDose1: "0000-01-01", 
                                dt_hepatiteBDose2: "0000-01-01", 
                                dt_hepatiteBDose3: "0000-01-01",
                                dt_febreAmarelaDoseAtual: "0000-01-01", 
                                dt_febreAmarelaDose10Anos: "0000-01-01", 
                                dt_duplaAdultoDose1: "0000-01-01", 
                                dt_duplaAdultoDose2: "0000-01-01", 
                                dt_duplaAdultoDose3: "0000-01-01", 
                                dt_duplaAdultoDose10Anos: "0000-01-01", 
                                dt_gripeDose1: "0000-01-01", 
                                dt_gripeDose1Ano: "0000-01-01", 
                                dt_pneumoniaDose1: "0000-01-01", 
                                dt_pneumoniaDose5Anos: "0000-01-01",
                                fk_VacinaDataDeAplicacao: String (solicita.session.avNumeroRegisLog)
                            }).then(function(){
                                solicita.session.veioDoCadastro = true
                                solicita.session.veioDaValidacao = false
                            }).catch(function(erro){
                                resposta.send("Nao foi possivel realizar o cadastro porque: "+ erro)
                            });
                    })()
                )
            })
        }
        insereNoBanco().then(function(){
            resposta.redirect('/aposOCadastro')
        })
    }else{
        resposta.render('ValidaEmail', {codigoIgual: 0})
    }
})
app.get('/aposOCadastro', function(solicita, resposta){
    if(solicita.session.login){
        resposta.redirect('TelaInicialDaAplicacao')
    }else if(solicita.session.veioDoCadastro){
        resposta.render('aposOCadastro')
        solicita.session.veioDoCadastro = false
        solicita.session.login = solicita.session.avEmailLog
        solicita.session.chavePrimariaLog = solicita.session.avNumeroRegisLog
        solicita.session.nomeLogado = solicita.session.avNomeLog.split(' ').slice(0, 2).join(' ');
        solicita.session.veioDeAposOCadastro = true
    }else{
        resposta.redirect('Login')
    }
})
app.get('/TelaInicialDaAplicacao', function(solicita, resposta){
    if(solicita.session.login){
        async function calculaPorcentagemVacTomada(){
            var porcentagemVacTomada
            porcentagemVacTomada = await vacinasTomadas(solicita.session.chavePrimariaLog)
            resposta.render('TelaInicialDaAplicacao', {nome: solicita.session.nomeLogado, pocentagemTomada: porcentagemVacTomada} )
        }
        calculaPorcentagemVacTomada()
        
    }else{
        resposta.render('TelaDeLogin') 
    }
}) 

app.get('/CadernetaDeVacinacao', function(solicita, resposta){
    if(solicita.session.login){
        var bcgDose1, bcgDose2, poliomieliteDose1, poliomieliteDose2, poliomieliteDose3,
        poliomieliteDose4, tetraValenteDose1, tetraValenteDose2, tetraValenteDose3,tetraValenteDose4, tripliceViral,
        hepatiteBDose1, hepatiteBDose2, hepatiteBDose3, febreAmarelaDoseAtual, duplaAdultoDose1, duplaAdultoDose2, duplaAdultoDose3,
        gripe, pneumoniaDose1, pneumoniaDose5Anos

        var dt_febreAmarelaDose10Anos, dt_duplaAdultoDose10Anos, gripeReforco, pneumoniaReforco 
        const atualizaStatusVac = require('./views/JavaScript/OperacoesBDTabVac')
        async function calculaIdadeLogado(chavePrimaria){
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
                solicita.session.idadeLogado = ano - anoNascLogado
                solicita.session.idadeLogado = solicita.session.idadeLogado * 12
                if(mes >= mesNascLogado){
                    if(dia >= diaNascLogado){
                        solicita.session.idadeLogado += (mes - mesNascLogado) 
                    }else{
                        solicita.session.idadeLogado += (mes - mesNascLogado) - 1
                    }
                }else{ 
                    solicita.session.idadeLogado -= 12
                    if(dia >= diaNascLogado){
                        solicita.session.idadeLogado += 12 - (mesNascLogado - mes)
                    }else{
                        solicita.session.idadeLogado += 12 - (mesNascLogado - mes ) - 1
                    }
                }
            })
        }

        async function atualizaStatusVacHTML(chavePrimaria){
            await calculaIdadeLogado(chavePrimaria)
            await atualizaStatusVac(chavePrimaria).then(vac => { 
                bcgDose1 = vac.bcgDose1
                bcgDose2 = vac.bcgDose2
                poliomieliteDose1 = vac.poliomieliteDose1
                poliomieliteDose2 = vac.poliomieliteDose2
                poliomieliteDose3 = vac.poliomieliteDose3
                poliomieliteDose4 = vac.poliomieliteDose4
                tetraValenteDose1 = vac.tetraValenteDose1
                tetraValenteDose2 = vac.tetraValenteDose2
                tetraValenteDose3 = vac.tetraValenteDose3
                tetraValenteDose4 = vac.tetraValenteDose4
                tripliceViral = vac.tripliceViral
                hepatiteBDose1 = vac.hepatiteBDose1
                hepatiteBDose2 = vac.hepatiteBDose2
                hepatiteBDose3 = vac.hepatiteBDose3
                febreAmarelaDoseAtual = vac.febreAmarelaDoseAtual
                duplaAdultoDose1 = vac.duplaAdultoDose1
                duplaAdultoDose2 = vac.duplaAdultoDose2
                duplaAdultoDose3 = vac.duplaAdultoDose3
                gripe = vac.gripeDose1
                pneumoniaDose1 = vac.pneumoniaDose1
                pneumoniaDose5Anos = vac.pneumoniaDose5Anos
            })
                
            await OperacaoComBDMySqlTabDataDeAplicacao.findAll({where: {fk_VacinaDataDeAplicacao : solicita.session.chavePrimariaLog}, attributes: ['dt_febreAmarelaDoseAtual', "dt_duplaAdultoDose3", "dt_duplaAdultoDose10Anos", "dt_gripeDose1", "dt_pneumoniaDose1"]}).then(function(datasDeAplicacao){
                for(obj of datasDeAplicacao){
                    if(obj.dt_febreAmarelaDoseAtual != "0000-01-01"){
                        var febreAmarela10Anos = obj.dt_febreAmarelaDoseAtual.substr(8, 2)+ "/" + obj.dt_febreAmarelaDoseAtual.substr(5, 2)+"/" + (parseInt(obj.dt_febreAmarelaDoseAtual.substr(0, 4)) + 10)
                    }
                    if(obj.dt_duplaAdultoDose10Anos != "0000-01-01"){
                        var duplaAdulto10Anos = obj.dt_duplaAdultoDose10Anos.substr(8, 2)+ "/" + obj.dt_duplaAdultoDose10Anos.substr(5, 2)+"/" + (parseInt(obj.dt_duplaAdultoDose10Anos.substr(0, 4)) + 10)
                    }else{
                        if(obj.dt_duplaAdultoDose3 != "0000-01-01"){
                            var duplaAdulto10Anos = obj.dt_duplaAdultoDose3.substr(8, 2)+ "/" + obj.dt_duplaAdultoDose3.substr(5, 2)+"/" + (parseInt(obj.dt_duplaAdultoDose3.substr(0, 4)) + 10)
                        }
                    }
                    if(obj.dt_gripeDose1 != "0000-01-01"){
                        gripeReforco = obj.dt_gripeDose1.substr(8, 2)+ "/" + obj.dt_gripeDose1.substr(5, 2)+"/" + (parseInt(obj.dt_gripeDose1.substr(0, 4)) + 1)
                    }
                    if(obj.dt_pneumoniaDose1 != "0000-01-01"){
                        pneumoniaReforco = obj.dt_pneumoniaDose1.substr(8, 2)+ "/" + obj.dt_pneumoniaDose1.substr(5, 2)+"/" + (parseInt(obj.dt_pneumoniaDose1.substr(0, 4)) + 5)
                    }
                }
                dt_febreAmarelaDose10Anos = febreAmarela10Anos
                dt_duplaAdultoDose10Anos = duplaAdulto10Anos
            })

            resposta.render('CadernetaDeVacinacao', {bcgDose1: bcgDose1, bcgDose2: bcgDose2, poliomieliteDose1: poliomieliteDose1,
                poliomieliteDose2: poliomieliteDose2, poliomieliteDose3: poliomieliteDose3
                ,poliomieliteDose4: poliomieliteDose4, tetraValenteDose1: tetraValenteDose1,
                tetraValenteDose2: tetraValenteDose2, tetraValenteDose3: tetraValenteDose3,
                tetraValenteDose4: tetraValenteDose4, tripliceViral: tripliceViral, hepatiteBDose1: hepatiteBDose1,
                hepatiteBDose2: hepatiteBDose2, hepatiteBDose3: hepatiteBDose3, febreAmarelaDoseAtual: febreAmarelaDoseAtual, 
                duplaAdultoDose1: duplaAdultoDose1, duplaAdultoDose2: duplaAdultoDose2, duplaAdultoDose3: duplaAdultoDose3,
                gripe: gripe, pneumoniaDose1: pneumoniaDose1, pneumoniaDose5Anos: pneumoniaDose5Anos,

                idade: solicita.session.idadeLogado, dt_febreAmarelaDose10Anos: dt_febreAmarelaDose10Anos, dt_duplaAdultoDose10Anos: dt_duplaAdultoDose10Anos,
                gripeReforco: gripeReforco, pneumoniaReforco: pneumoniaReforco})
        }
        atualizaStatusVacHTML(solicita.session.chavePrimariaLog)
        
    }else{
        resposta.render('TelaDeLogin')
    }
})
app.get('/CalendarioDeVacinacao', function(solicita, resposta){
    if(solicita.session.login){
        resposta.render('CalendarioDeVacinacao')
    }else{
        resposta.render('TelaDeLogin')
    }
})

app.get('/Historico', function(solicita, resposta){
    if(solicita.session.login){
        var chavePrimariaLogVar = solicita.session.chavePrimariaLog
        var formataData = require("./FormataData")
        var dt_bcgDose1, dt_bcgDose2, dt_poliomieliteDose1, dt_poliomieliteDose2,
        dt_poliomieliteDose3, dt_poliomieliteDose4, dt_tetraValenteDose1, dt_tetraValenteDose2,
        dt_tetraValenteDose3, dt_tetraValenteDose4, dt_tripliceViral, dt_hepatiteBDose1,
        dt_hepatiteBDose2, dt_hepatiteBDose3, dt_febreAmarelaDoseAtual, dt_duplaAdultoDose1, dt_duplaAdultoDose2, dt_duplaAdultoDose3,
        dt_duplaAdultoDoseReforco, dt_gripe, dt_pneumoniaDose1, dt_pneumoniaDose2
        var datasDeAplicacao = require('./views/JavaScript/OperacoesBDTabDatasAplicacao')
        async function retornaDatasDeAplicacao(chavePrimariaLogVar){
            await datasDeAplicacao(solicita.session.chavePrimariaLog).then(datas =>{
                dt_bcgDose1 = formataData(datas.dt_bcgDose1)
                dt_bcgDose2 = formataData (datas.dt_bcgDose2)
                dt_poliomieliteDose1 = formataData (datas.dt_poliomieliteDose1)
                dt_poliomieliteDose2 = formataData (datas.dt_poliomieliteDose2)
                dt_poliomieliteDose3 = formataData (datas.dt_poliomieliteDose3)
                dt_poliomieliteDose4 = formataData (datas.dt_poliomieliteDose4)
                dt_tetraValenteDose1 = formataData (datas.dt_tetraValenteDose1)
                dt_tetraValenteDose2 = formataData (datas.dt_tetraValenteDose2)
                dt_tetraValenteDose3 = formataData (datas.dt_tetraValenteDose3)
                dt_tetraValenteDose4 = formataData (datas.dt_tetraValenteDose4)
                dt_tripliceViral = formataData (datas.dt_tripliceViral)
                dt_hepatiteBDose1 = formataData (datas.dt_hepatiteBDose1)
                dt_hepatiteBDose2 = formataData (datas.dt_hepatiteBDose2)
                dt_hepatiteBDose3 = formataData (datas.dt_hepatiteBDose3)
                dt_febreAmarelaDoseAtual = formataData (datas.dt_febreAmarelaDoseAtual)
                dt_duplaAdultoDose1 = formataData(datas.dt_duplaAdultoDose1)
                dt_duplaAdultoDose2 = formataData(datas.dt_duplaAdultoDose2)
                dt_duplaAdultoDose3 = formataData(datas.dt_duplaAdultoDose3) 
                dt_duplaAdultoDoseReforco = formataData(datas.dt_duplaAdultoDose10Anos)
                dt_gripe = formataData(datas.dt_gripeDose1)
                dt_pneumoniaDose1 = formataData(datas.dt_pneumoniaDose1)
                dt_pneumoniaDose2 = formataData(datas.dt_pneumoniaDose5Anos)
                if(dt_bcgDose1 == "01/01/0000"){
                    dt_bcgDose1 = "--/--/----"
                }
                if(dt_bcgDose2 == "01/01/0000"){
                    dt_bcgDose2 = "--/--/----"
                }
                if(dt_poliomieliteDose1 == "01/01/0000"){
                    dt_poliomieliteDose1 = "--/--/----"
                }
                if(dt_poliomieliteDose2 == "01/01/0000"){
                    dt_poliomieliteDose2 = "--/--/----"
                }
                if(dt_poliomieliteDose3 == "01/01/0000"){
                    dt_poliomieliteDose3 = "--/--/----"
                }
                if(dt_poliomieliteDose4 == "01/01/0000"){
                    dt_poliomieliteDose4 = "--/--/----"
                }
                if(dt_tetraValenteDose1 == "01/01/0000"){
                    dt_tetraValenteDose1 = "--/--/----"
                }
                if(dt_tetraValenteDose2 == "01/01/0000"){
                    dt_tetraValenteDose2 = "--/--/----"
                }
                if(dt_tetraValenteDose3 == "01/01/0000"){
                    dt_tetraValenteDose3 = "--/--/----"
                }
                if(dt_tetraValenteDose4 == "01/01/0000"){
                    dt_tetraValenteDose4 = "--/--/----"
                }
                if(dt_tripliceViral == "01/01/0000"){
                    dt_tripliceViral = "--/--/----"
                }
                if(dt_hepatiteBDose1 == "01/01/0000"){
                    dt_hepatiteBDose1 = "--/--/----"
                }
                if(dt_hepatiteBDose2 == "01/01/0000"){
                    dt_hepatiteBDose2 = "--/--/----"
                }
                if(dt_hepatiteBDose3 == "01/01/0000"){
                    dt_hepatiteBDose3 = "--/--/----"
                }
                if(dt_febreAmarelaDoseAtual == "01/01/0000"){
                    dt_febreAmarelaDoseAtual = "--/--/----"
                }
                if(dt_duplaAdultoDose1 == "01/01/0000"){
                    dt_duplaAdultoDose1 = "--/--/----"
                }
                if(dt_duplaAdultoDose2 == "01/01/0000"){
                    dt_duplaAdultoDose2 = "--/--/----"
                }
                if(dt_duplaAdultoDose3 == "01/01/0000"){
                    dt_duplaAdultoDose3 = "--/--/----"
                }
                if(dt_duplaAdultoDoseReforco == "01/01/0000"){
                    dt_duplaAdultoDoseReforco = "--/--/----"
                }
                if(dt_gripe == "01/01/0000"){
                    dt_gripe = "--/--/----"
                }
                if(dt_pneumoniaDose1 == "01/01/0000"){
                    dt_pneumoniaDose1 = "--/--/----"
                }
                if(dt_pneumoniaDose2 == "01/01/0000"){
                    dt_pneumoniaDose2 = "--/--/----"
                }
            }).then(function(){
                resposta.render('Historico', {dt_bcgDose1: dt_bcgDose1, dt_bcgDose2: dt_bcgDose2, dt_poliomieliteDose1: dt_poliomieliteDose1,
                dt_poliomieliteDose2: dt_poliomieliteDose2, dt_poliomieliteDose3: dt_poliomieliteDose3,
                dt_poliomieliteDose4: dt_poliomieliteDose4, dt_tetraValenteDose1: dt_tetraValenteDose1, dt_tetraValenteDose2: dt_tetraValenteDose2,
                dt_tetraValenteDose3: dt_tetraValenteDose3, dt_tetraValenteDose4: dt_tetraValenteDose4, dt_hepatiteBDose1: dt_hepatiteBDose1,
                dt_hepatiteBDose2: dt_hepatiteBDose2, dt_hepatiteBDose3: dt_hepatiteBDose3, dt_tripliceViral: dt_tripliceViral, 
                dt_febreAmarelaDoseAtual: dt_febreAmarelaDoseAtual, dt_duplaAdultoDose1: dt_duplaAdultoDose1,
                dt_duplaAdultoDose2: dt_duplaAdultoDose2, dt_duplaAdultoDose3: dt_duplaAdultoDose3, dt_duplaAdultoDoseReforco: dt_duplaAdultoDoseReforco,
                dt_gripe: dt_gripe, dt_pneumoniaDose1: dt_pneumoniaDose1, dt_pneumoniaDose2: dt_pneumoniaDose2})
            }).catch(function(erro){
                resposta.send("ERRO = " + erro)
            })
        }
        retornaDatasDeAplicacao(solicita.session.chavePrimariaLog)
    }else{
        resposta.render('TelaDeLogin')
    }
})

app.get('/RecuperaSenha', function(solicita, resposta){
    if(solicita.session.login){
        resposta.redirect('/TelaInicialDaAplicacao')
    }else{
        resposta.render('RecuperaSenha')
    }
})

app.post('/Recupera', function(solicita, resposta){
    var emailDeRecuperacao, achouEmail = false
    solicita.session.emailEncontrado = false
    OperacaoComBDMySql.findAll({attributes: ['email']}).then(function(emailBD){
        for (objEmail of emailBD){
            if(solicita.body.emailDigitado == objEmail.email){
                emailDeRecuperacao = objEmail.email
                achouEmail = true
                solicita.session.emailDeMudar = objEmail.email
                break
            }
        }
        if(achouEmail){
            (async () => {
                solicita.session.emailEncontrado = true
                solicita.session.codigoRecuperaSenha = geraNumeroAleatorio()
                await valida('Aqui está seu código de validação:', 'Recuperar senha', emailDeRecuperacao, solicita.session.codigoRecuperaSenha)
                resposta.redirect('/Codigo')
            })()
        }else{
            resposta.render('RecuperaSenha', {achou: 0})
        }
    })
})
app.get('/Codigo', function(solicita, resposta){
    if(!solicita.session.login && !solicita.session.emailEncontrado){
        resposta.redirect('/Login')
    }else if(solicita.session.login){
        resposta.redirect('/TelaInicialDaAplicacao')
    }else{
        resposta.render('Codigo')
    }
})
app.post('/ValidaCodigo', function(solicita, resposta){
    solicita.session.validouCodigo = false
    if(solicita.body.numeroDoUsuarioSenha == solicita.session.codigoRecuperaSenha){
        solicita.session.validouCodigo = true
        resposta.redirect('/AlteraSenha')
    }else{
        resposta.render('Codigo', {mesmoCodigo: 0})
    }
})
app.get('/AlteraSenha', function(solicita, resposta){
    if(!solicita.session.login && !solicita.session.validouCodigo){
        resposta.redirect('/Login')
    }else if(solicita.session.login){
        resposta.redirect('/TelaInicialDaAplicacao')
    }else{
        resposta.render('AlteraSenhaH')
    }
})
app.post('/mudaSenha', function(solicita, resposta){
    if(solicita.body.senha == solicita.body.confirSenha){
        if(solicita.body.senha.length >= 8){
            (async () =>{
                await OperacaoComBDMySql.update({senha: await bcrypt.hash(solicita.body.senha, 10)}, {
                    where:{
                        email: solicita.session.emailDeMudar
                    }
                })
            })()
            resposta.render('SenhaAlterada')
        }else{
            resposta.render('AlteraSenhaH', {senhasIguais: 2})    
        }
    }else{
        resposta.render('AlteraSenhaH', {senhasIguais: 1})
    }
})

app.get('/***********', function(solicita, resposta){
    async function calculaIdadeLogado(chavePrimaria){
        var idadeDoLogado 
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
            idadeDoLogado = ano - anoNascLogado
            idadeDoLogado = idadeDoLogado * 12
            if(mes >= mesNascLogado){
                if(dia >= diaNascLogado){
                    idadeDoLogado += (mes - mesNascLogado) 
                }else{
                    idadeDoLogado += (mes - mesNascLogado) - 1
                }
            }else{
                idadeDoLogado -= 12
                if(dia >= diaNascLogado){
                    idadeDoLogado += 12 - (mesNascLogado - mes)
                }else{
                    idadeDoLogado += 12 - (mesNascLogado - mes ) - 1
                }
            }
        })
        return idadeDoLogado
    }
    
    var matriz = []
    var matrizComIdade = []
    var vacinas = []
    async function obtemVacAtrasadas(matrizUsuarios){
        let vacina = []
        for(var j = 0; j < matrizUsuarios.length; j++){
            await OperacaoComBDMySqlTabVacina.findAll({where: {fk_UsuarioVac : matrizUsuarios[j][3]}}).then(function(vacinasBD){
                for(const vac of vacinasBD){
                    if(vac.bcgDose1 == false && matrizUsuarios[j][4] >= 0){
                        vacinas.push("BCG Dose 1")
                    }
                    if(vac.poliomieliteDose1 == false && matrizUsuarios[j][4] >= 2){
                        vacinas.push("Poliomielite Dose 1")
                    }
                    if(vac.poliomieliteDose2 == false && matrizUsuarios[j][4] >= 4){
                        vacinas.push("Poliomielite Dose 2")
                    }
                    if(vac.poliomieliteDose3 == false && matrizUsuarios[j][4] >= 6){
                        vacinas.push("Poliomielite Dose 3")
                    }
                    if(vac.poliomieliteDose4 == false && matrizUsuarios[j][4] >= 15){
                        vacinas.push("Poliomielite Dose 4")
                    }
                    if(vac.tetraValenteDose1 == false && matrizUsuarios[j][4] >= 2){
                        vacinas.push("Tetravalente Dose 1")
                    }
                    if(vac.tetraValenteDose2 == false && matrizUsuarios[j][4] >= 4){
                        vacinas.push("Tetravalente Dose 2")
                    }
                    if(vac.tetraValenteDose3 == false && matrizUsuarios[j][4] >= 6){
                        vacinas.push("Tetravalente Dose 3")
                    }
                    if(vac.tetraValenteDose4 == false && matrizUsuarios[j][4] >= 15){
                        vacinas.push("Tetravalente Dose 4")
                    }
                    if(vac.tripliceViral == false && matrizUsuarios[j][4] >= 12){
                        vacinas.push("Tripliceviral Dose Única")
                    }
                    if(vac.hepatiteBDose1 == false && matrizUsuarios[j][4] >= 0){
                        vacinas.push("Hepatite B Dose 1")
                    }
                    if(vac.hepatiteBDose2 == false && matrizUsuarios[j][4] >= 1){
                        vacinas.push("Hepatite B Dose 2")
                    }
                    if(vac.hepatiteBDose3 == false && matrizUsuarios[j][4] >= 6){
                        vacinas.push("Hepatite B Dose 3")
                    }
                    if(vac.febreAmarelaDoseAtual == false && matrizUsuarios[j][4] >= 6){
                        vacinas.push("Febre Amarela")
                    }
                    if(vac.duplaAdultoDose1 == false && matrizUsuarios[j][4] >= 132){
                        vacinas.push("Dupla Adulto Dose 1")
                    }
                    if(vac.duplaAdultoDose2 == false && matrizUsuarios[j][4] >= 132){
                        vacinas.push("Dupla Adulto Dose 2")
                    }
                    if(vac.duplaAdultoDose3 == false && matrizUsuarios[j][4] >= 132){
                        vacinas.push("Dupla Adulto Dose 3")
                    }
                    if(vac.gripeDose1 == false && matrizUsuarios[j][4] >= 720){
                        vacinas.push("Gripe")
                    }
                    if(vac.pneumoniaDose1 == false && matrizUsuarios[j][4] >= 720){
                        vacinas.push("Pneumonia Dose 1")
                    }
                }
                if(vacinas.length > 0){
                    var vacinasEmail = ''
                    for(var v = 0; v < vacinas.length; v++){
                        if(v == 0){
                            vacinasEmail = vacinasEmail + " " + vacinas[v]
                        }else{
                            vacinasEmail = vacinasEmail + ", " + vacinas[v]
                        }
                    }
                    (async () => {
                        await valida("Aqui estão as vacinas em atraso: ", "Vacinas em atraso", matrizUsuarios[j], vacinasEmail)
                    })();
                }
                
                vacinas = []
            })
            
        }
    }

    async function calculaIdade(matrizUsuarios){
        var dados = []
        var tamanhoMatriz = matrizUsuarios.length 
        for(var i = 0; i < tamanhoMatriz; i++){
            var idadeDoUsuario = await calculaIdadeLogado(matrizUsuarios[i][3])
            dados.push(matrizUsuarios[i][0])
            dados.push(matrizUsuarios[i][1])
            dados.push(matrizUsuarios[i][2])
            dados.push(matrizUsuarios[i][3])
            dados.push(idadeDoUsuario)
            matrizComIdade.push(dados)
            dados = []
        }
        obtemVacAtrasadas(matrizComIdade)
       
    }

    async function ObtemUsuarios(){
        await OperacaoComBDMySql.findAll({attributes: ['email', 'nomeCompleto', 'dataDeNascimento', 'numeroDoRegistroDeNascimento']}).then(function(usuariosBD){
            var dados = []
            for(const obj of usuariosBD){
                dados.push(obj.email)
                dados.push(obj.nomeCompleto)
                dados.push(obj.dataDeNascimento)
                dados.push(obj.numeroDoRegistroDeNascimento)
                matriz.push(dados)
                dados = []
            }
        })
        calculaIdade(matriz)
    }
    (async () => {
        matriz = []
        matrizComIdade = []
        vacinas = []
        ObtemUsuarios()
    })().then(function(){
    }).catch(function(erro){
    })
})


const PORT = process.env.PORT || 8089; 
app.listen(PORT, function(){  
    
});