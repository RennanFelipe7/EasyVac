const Sequelize = require('sequelize');

const sequelizeConexao = new Sequelize('name','user','password',{
    host: "buewccawa8rlfgxujfw6-mysql.services.clever-cloud.com",
    dialect: 'mysql',
    port: 3306
})

const Vacina = sequelizeConexao.define('vacinas', {
    bcgDose1:{
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
    bcgDose2:{
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
    poliomieliteDose1:{
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
    poliomieliteDose2:{
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
    poliomieliteDose3:{
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
    poliomieliteDose4:{
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
    tetraValenteDose1:{
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
    tetraValenteDose2:{
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
    tetraValenteDose3:{
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
    tetraValenteDose4:{
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
    tripliceViral:{
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
    hepatiteBDose1:{
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
    hepatiteBDose2:{
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
    hepatiteBDose3:{
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
    febreAmarelaDoseAtual:{
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
    febreAmarelaDose10Anos:{
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
    duplaAdultoDose1:{
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
    duplaAdultoDose2:{
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
    duplaAdultoDose3:{
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
    duplaAdultoDose10Anos:{
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
    gripeDose1:{
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
    gripeDose1Ano:{
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
    pneumoniaDose1:{
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
    pneumoniaDose5Anos:{
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
    fk_UsuarioVac:{
        type: Sequelize.STRING(50), 
        allowNull: false,
        references: {model: 'usuarios', key: 'numeroDoRegistroDeNascimento'}
    },
    identificador:{
        type: Sequelize.STRING(50), 
        allowNull: false,
        primaryKey: true,
    }
})

module.exports = Vacina;