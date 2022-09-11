const db = require('../connections/db.connection')
const {DataTypes, UUIDV4} = require('sequelize')

const title_example = {
    _id: 3,
    name: 'rent',
    type: 'title',
    content_en: 'English content',
    content_az: 'Azerbaijani content',
    content_ru: 'Russian content',
}

const content_example = {
    _id: 7,
    name: 'rent',
    type: 'content',
    content_en: 'English content',
    content_az: 'Azerbaijani content',
    content_ru: 'Russian content',
}

const title_model = {
    _id: 3,
    name: 'rent || estate || infrastructure',
    type: 'title',
    is_submenu: false,
    content_en: 'English content',
    content_az: 'Azerbaijani content',
    content_ru: 'Russian content',
}
const content_model = {
    _id: 7,
    name: 'rent || estate || infrastructure',
    type: 'content',
    title_id: 3,
    content_en: 'English content',
    content_az: 'Azerbaijani content',
    content_ru: 'Russian content',
}

module.exports = db.define(
    "rent", {
        _id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            unique: true,
            primaryKey: true
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
          defaultValue: ''  
        },
        type: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: ''
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
            defaultValue: "Курортный комплекс Sea Breeze Resort & Residences расположен в 30 минутах езды от центра Баку. К услугам гостей 2 км пляжной зоны, бассейны, фуд-корты и рестораны, круглосуточная стойка регистрации, фитнес-зал, спа-зона, салон красоты, спасательные и медицинские службы, игровые зоны для детей, теннисный корт, баскетбольная площадка, мини-футбольное поле, маркет 24/7, большое количество парковочных мест.\n" +
                "\n" +
                "Номера 5-звездочного отеля оснащены кондиционером, бесплатным Wi-Fi, шкафом, телевизором с плоским экраном и собственной ванной комнатой. Осуществляется доставка еды и напитков в номер и обмен валюты.\n" +
                "Вы также можете арендовать квартиру или коттедж.\n" +
                "Минимальная стоимость в сезон:\n" +
                "$ 175 (будни) 205 (пт-вс) на двоих в сутки или от $ 3000 в месяц.\n" +
                "\n" +
                "\n" +
                "Номера для связи:\n" +
                "+994 12 310 22 22"
        },
    }, {
        timestamps: true,
        updatedAt: false
    })