const db = require('../connections/db.connection')
const {DataTypes, UUIDV4} = require('sequelize')

module.exports = db.define(
    "estate", {
        _id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            unique: true, 
            primaryKey: true
        },
        content_en: {
            type: DataTypes.TEXT,
            allowNull: true,
            defaultValue: "EN: Перевести"
        },
        content_az: {
            type: DataTypes.TEXT,
            allowNull: true,
            defaultValue: "AZ: Перевести"
        },
        content_ru: {
            type: DataTypes.TEXT,
            allowNull: true,
            defaultValue: "В первую очередь, хотим поблагодарить Вас за проявленный интерес к нашим проектам.\n\n\nSea Breeze предлагает недвижимость различного типа как с отделкой, так и без отделки: апартаменты, коттеджи, виллы.\nМинимальная цена за кв.м. составляет  $1 400.\nМинимальная квадратура - 53 кв.м.\n\n\nФинансовые условия:\n- беспроцентная внутренняя рассрочка, различается в зависимости от проекта\n- ипотека до 20 лет, первоначальный взнос - 20-30%, от 6% годовых.\n\n\nhttps://bit.ly/seabreeze_catalog_ru \n\n\nНомера для связи:\n\n\nБаку: +994 12 310 42 42\nМосква: +7 800 101-03-39"
        },
    }, {
        timestamps: true,
        updatedAt: false
    })