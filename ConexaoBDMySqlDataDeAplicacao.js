const Sequelize = require('sequelize');

const sequelizeConexao = new Sequelize('name','user','password',{
    host: "host",
    dialect: 'mysql',
    port: 3306
})
const DataDeAplicacao = sequelizeConexao.define('dataDeAplicacao', {
    dt_bcgDose1:{
        type: Sequelize.DATEONLY,
        allowNull: false
    },
    dt_bcgDose2:{
        type: Sequelize.DATEONLY,
        allowNull: false
    },
    dt_poliomieliteDose1:{
        type: Sequelize.DATEONLY,
        allowNull: false
    },
    dt_poliomieliteDose2:{
        type: Sequelize.DATEONLY,
        allowNull: false
    },
    dt_poliomieliteDose3:{
        type: Sequelize.DATEONLY,
        allowNull: false
    },
    dt_poliomieliteDose4:{
        type: Sequelize.DATEONLY,
        allowNull: false
    },
    dt_tetraValenteDose1:{
        type: Sequelize.DATEONLY,
        allowNull: false
    },
    dt_tetraValenteDose2:{
        type: Sequelize.DATEONLY,
        allowNull: false
    },
    dt_tetraValenteDose3:{
        type: Sequelize.DATEONLY,
        allowNull: false
    },
    dt_tetraValenteDose4:{
        type: Sequelize.DATEONLY,
        allowNull: false
    },
    dt_tripliceViral:{
        type: Sequelize.DATEONLY,
        allowNull: false
    },
    dt_hepatiteBDose1:{
        type: Sequelize.DATEONLY,
        allowNull: false
    },
    dt_hepatiteBDose2:{
        type: Sequelize.DATEONLY,
        allowNull: false
    },
    dt_hepatiteBDose3:{
        type: Sequelize.DATEONLY,
        allowNull: false
    },
    dt_febreAmarelaDoseAtual:{
        type: Sequelize.DATEONLY,
        allowNull: false
    },
    dt_febreAmarelaDose10Anos:{
        type: Sequelize.DATEONLY,
        allowNull: false
    },
    dt_duplaAdultoDose1:{
        type: Sequelize.DATEONLY,
        allowNull: false
    },
    dt_duplaAdultoDose2:{
        type: Sequelize.DATEONLY,
        allowNull: false
    },
    dt_duplaAdultoDose3:{
        type: Sequelize.DATEONLY,
        allowNull: false
    },
    dt_duplaAdultoDose10Anos:{
        type: Sequelize.DATEONLY,
        allowNull: false
    },
    dt_gripeDose1:{
        type: Sequelize.DATEONLY,
        allowNull: false
    },
    dt_gripeDose1Ano:{
        type: Sequelize.DATEONLY,
        allowNull: false
    },
    dt_pneumoniaDose1:{
        type: Sequelize.DATEONLY,
        allowNull: false
    },
    dt_pneumoniaDose5Anos:{
        type: Sequelize.DATEONLY,
        allowNull: false
    },
    fk_VacinaDataDeAplicacao:{
        type: Sequelize.STRING(50), 
        allowNull: false,
        references: {model: 'vacinas', key: 'identificador'}
    }
})

module.exports = DataDeAplicacao;