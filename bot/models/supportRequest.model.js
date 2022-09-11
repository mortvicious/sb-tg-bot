const db = require('../connections/db.connection')
const {DataTypes} = require('sequelize')

module.exports = db.define(
    "support_request", {
        _id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            unique: true,
            primaryKey: true
        },
        chatId: {
            type: DataTypes.STRING,
            allowNull: false
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        status: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: 'opened'
        },
        init_msg_id: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '-1'
        },
        rating: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: 0
        },
        rated: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        reviewer: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: ''
        },
        language: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        timestamps: true,
        updatedAt: false
    })