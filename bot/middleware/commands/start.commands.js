const {bot} = require('../../connections/token.connection')
const {Markup, Telegraf, session} = require("telegraf")
const Keyboard = require("telegraf-keyboard")
const {saveUser} = require("../../common/sequelize/user/saveUser")
const getIdAndUsername = require('../utils/getIdAndUsername')
const checkForAdmin = require('../../common/sequelize/user/checkForAdmin')
const {getAdminKeyboard} = require('../../keyboards')
const {checkIfUserExists} = require('../../common/sequelize/user/checkIfUserExists')
const getUserLanguage = require('../../common/sequelize/user/getUserLanguage')
const {getKeyboard} = require('../../keyboards')

bot.use(Telegraf.log())
// bot.use(session)

module.exports = bot.start(async(ctx) => {
    try {
        const {chatId, username} = getIdAndUsername(ctx)
        const user = await checkIfUserExists(chatId)
        if (user) {
            const language = await getUserLanguage(chatId)
            const admin = await checkForAdmin(chatId)
            if (!admin) ctx.reply(language === 'ru' ? 'Добро пожаловать в Sea Breeze Bot!' : language === 'en' ? 'Welcome to Sea Breeze Bot!' : 'Sea Breeze Bot-a xoş gəlmisiniz', Markup.keyboard(getKeyboard(language)))
            if (admin) ctx.reply(language === 'ru' ? 'Добро пожаловать в Sea Breeze Bot, админ!' : language === 'en' ? 'Welcome to Sea Breeze Bot, admin!' : 'Sea Breeze Bot-a xoş gəlmisiniz, admin', Markup.keyboard(getAdminKeyboard(language)))
            const keyboard = new Keyboard({inline: true});
            keyboard.add('Azerbaijani:az', 'English:en', 'Русский:ru')
            return await ctx.reply(language === 'ru' ? 'Вы можете сменить язык' : language === 'en' ? 'You can change your language' : 'Dili dəyişə bilərsiniz', keyboard.draw())
        }
        if (!user) {
            await ctx.reply('Welcome to Sea Breeze Bot!', Markup.keyboard(['Real Estate', 'Rent', 'Infrastructure', 'Contact']))

            const keyboard = new Keyboard({inline: true});
            keyboard.add('Azerbaijani:az', 'English:en', 'Русский:ru')
            await ctx.reply('Choose language:', keyboard.draw())

            return await saveUser(chatId, username)
        }
    } catch (e) {
        console.log(e)
    }
})

