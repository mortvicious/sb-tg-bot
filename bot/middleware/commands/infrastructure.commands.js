const {bot} = require("../../connections/token.connection");
const Keyboard = require("telegraf-keyboard");
const {Markup} = require("telegraf");
const getUserLanguage = require('../../common/sequelize/user/getUserLanguage')
const {getKeyboardBack} = require('../../keyboards')

module.exports = bot.hears(['Infrastructure', 'Инфраструктура', 'İnfrastruktur'], async(ctx) => {
    try {
        const chatId = String(ctx.message.chat.id)
        const language = await getUserLanguage(chatId)
        const options = {
            inline: true,
        }
        const keyboard = new Keyboard(options);
        keyboard
            .add('Бронь в Event Hall')
            .add('Бронь в Shore House')
            .add('Бронь в Fish Box')
            .add('Бронь в Rose Bar Beach')
            .add('Sea Breeze Beach Club')
            .add('Crocus Fitness')
            .add('Landau School')
        await ctx.reply('You choose infrastructure', Markup.keyboard(getKeyboardBack(language)))
        await ctx.reply('Choose topic:', keyboard.draw()) 
    } catch (e) {
        console.log(e)
    }
})

