const {bot} = require("../../connections/token.connection")
const Keyboard = require("telegraf-keyboard")
const setUserLanguage = require('../../common/sequelize/user/setUserLanguage')
const {Markup} = require("telegraf");
const {getKeyboard} = require("../../keyboards")
const checkForAdmin = require('../../common/sequelize/user/checkForAdmin')
const {getAdminKeyboard} = require('../../keyboards')

bot.action('az', async (ctx) => {
    try {
        const chatId = String(ctx.update.callback_query.message.chat.id)
        const admin = checkForAdmin(chatId)
        await setUserLanguage(chatId, 'az')
        if (admin) {
            return ctx.reply('Siz Azərbaycan dilini seçmisiniz', Markup.keyboard(getAdminKeyboard('az')))
        }
        return ctx.reply('Siz Azərbaycan dilini seçmisiniz', Markup.keyboard(getKeyboard('az')))
    } catch(e) {
        console.log(e)
    }
})
bot.action('ru', async(ctx) => {
    try {
        const chatId =  String(ctx.update.callback_query.message.chat.id)
        const admin = checkForAdmin(chatId)
        await setUserLanguage(chatId, 'ru')
        if (admin) {
            return ctx.reply('Вы выбрали Русский язык', Markup.keyboard(getAdminKeyboard('ru')))
        }
        ctx.reply('Вы выбрали Русский язык', Markup.keyboard(getKeyboard('ru')))
    } catch (e) {
        console.log(e)
    }
})
bot.action('en', async(ctx) => {
    const chatId =  String(ctx.update.callback_query.message.chat.id)
    const admin = checkForAdmin(chatId)
    await setUserLanguage(chatId, 'en')
    if (admin) {
        return ctx.reply('You have chosen English language', Markup.keyboard(getAdminKeyboard('en')))
    }
    ctx.reply('You have chosen English language', Markup.keyboard(getKeyboard('en')))
})

module.exports = bot.hears('Language', (ctx) => {
    const options = {
        inline: true,
    }
    const keyboard = new Keyboard(options);
    keyboard.add('Azerbaijani:az', 'English:en', 'Русский:ru')
    ctx.reply('Choose language:', keyboard.draw())
})