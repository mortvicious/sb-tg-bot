const db = require('../connections/db.connection')
const {DataTypes, UUIDV4} = require('sequelize')

module.exports = db.define(
    "user", {
    _id: {
        type: DataTypes.UUID,
        defaultValue: UUIDV4,
        primaryKey: true,
        unique: true,
        allowNull: false
    },
    chatId: {
        type: DataTypes.STRING,
        allowNull: false
    },
    username: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    admin: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: false
    },
    connectedTo: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: ''
    },
    language: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: 'en'
    }
    }, {
    timestamps: true,
    updatedAt: false
})