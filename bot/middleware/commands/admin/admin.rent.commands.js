require('dotenv').config()
const {bot} = require("../../../connections/token.connection")
const {Markup} = require("telegraf")
const getUserLanguage = require('../../../common/sequelize/user/getUserLanguage')
const {getKeyboard, adminMainChangeInlineKeyboard} = require('../../../keyboards')
const checkForAdmin = require('../../../common/sequelize/user/checkForAdmin')
const Keyboard = require("telegraf-keyboard")
const setRentContent = require('../../../common/sequelize/rent/setRentContent')

module.exports = bot.action('adm_change_rent_ru', async(ctx) => {
    try {
        const chatId = String(ctx.update.callback_query.message.chat.id)
        const admin = await checkForAdmin(chatId)
        if (admin) {
            ctx.reply('Please, provide content to update Russian rent entities')
        } else {
            return
        }
    } catch (e) {
        
    }
})

module.exports = bot.action('adm_change_rent_en', async(ctx) => {

})

module.exports = bot.action('adm_change_rent_az', async(ctx) => {

})