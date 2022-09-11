const {bot} = require("../../connections/token.connection")
const {Markup} = require("telegraf")
const getUserLanguage = require('../../common/sequelize/user/getUserLanguage')
const {getKeyboard} = require('../../keyboards')

module.exports = bot.hears(['Back', 'Назад', 'Geri'], async(ctx) => {
    const chatId = String(ctx.message.chat.id)
    const language = await getUserLanguage(chatId)
    const back = language === 'ru' ? 'Назад в главное меню' : language === 'az' ? 'Əsas menyuya qayıt' : language === 'en' ? 'Back to main menu' : ''
    ctx.reply(back, Markup.keyboard(getKeyboard(language)))
})