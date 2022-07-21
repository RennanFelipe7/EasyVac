const Sequelize = require('sequelize');

const sequelizeConexao = new Sequelize('name','user','password',{ 
    host: "buewccawa8rlfgxujfw6-mysql.services.clever-cloud.com",
    dialect: 'mysql',
    port: 3306
})
sequelizeConexao.authenticate().then(function(){
    
}).catch(function(erro){
    
})
const Usuario = sequelizeConexao.define('usuarios', {
    nomeCompleto: {
        type: Sequelize.STRING(50), 
        allowNull: false
    },
    dataDeNascimento:{
        type: Sequelize.DATEONLY, 
        allowNull: false
    },
    numeroDoRegistroDeNascimento:{
        type: Sequelize.STRING(50), 
        allowNull: false,
        primaryKey: true 
    },
    genero: {
        type: Sequelize.STRING(10),
        allowNull: false
    },
    email: {
        type: Sequelize.STRING(320),
        allowNull: false
    },
    senha: {
        type: Sequelize.STRING(200),
        allowNull: false 
    }
})

module.exports = Usuario;