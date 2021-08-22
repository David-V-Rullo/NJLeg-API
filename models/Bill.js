const { Model, DataTypes, Sequelize } = require('sequelize')
const sequelize = require('../config/connection')

class Bill extends Model {}

Bill.init({}, {
    modelName: 'bill',
    tableName: 'mainbill',
    sequelize
})

module.exports = Bill