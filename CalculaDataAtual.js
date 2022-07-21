const moment= require('moment')
var data1 = new Date() 
var dataAtual = moment(new Date(data1)).format('YYYY-MM-DD')
module.exports = dataAtual