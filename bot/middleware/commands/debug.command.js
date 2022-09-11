require('dotenv').config()
const {bot} = require("../../connections/token.connection")
const {Markup} = require('telegraf')
const getUserLanguage = require('../../common/sequelize/user/getUserLanguage')
const {getKeyboard} = require('../../keyboards')
const checkForAdmin = require('../../common/sequelize/user/checkForAdmin')
const getEstateContent = require('../../common/sequelize/estate/getEstateContent')
const getRentContent = require('../../common/sequelize/rent/getRentContent')
const SceneGenerator = require('../scenes/admin/admin.scenes')


module.exports = bot.hears('DEBUG', async(ctx) => {
    try {
        const chatId = String(ctx.message.chat.id)
        const language = await getUserLanguage(chatId)
        const admin = await checkForAdmin(chatId)
        const supportChannel = process.env.TG_SUPPORT_CHANNEL
        
        await bot.telegram.sendMessage(supportChannel, 'azaza')
        await ctx.reply(`DEBUG: User: ${ctx.message.chat.username}, chat: ${chatId}, language: ${language}, is admin: ${admin}`)
        //set content
    } catch (e) {
        console.log(e)
    }
})