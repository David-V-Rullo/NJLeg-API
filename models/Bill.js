const { Model, DataTypes } = require('sequelize')
const db = require('../config/connection').default

class Bill extends Model {}

Bill.init({}, {
    modelName: 'bill',
    tableName: 'mainbill',
    sequelize,
})

module.exports = Bill