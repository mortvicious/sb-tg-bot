const {bot} = require("../../connections/token.connection");
const {Markup} = require("telegraf");
const getEstateContent = require('../../common/sequelize/estate/getEstateContent')
const getRentContent = require('../../common/sequelize/rent/getRentContent')
const getUserLanguage = require('../../common/sequelize/user/getUserLanguage')
const {getKeyboardBack} = require("../../keyboards");

exports.buy = bot.hears(['Недвижимость', 'Real Estate', 'Daşınmaz əmlak'], async(ctx) => {
    const chatId = String(ctx.message.chat.id)
    const language = await getUserLanguage(chatId)
    const response = await getEstateContent(language)
    await ctx.reply('Вы выбрали недвижимость', Markup.keyboard(getKeyboardBack(language)))
    await ctx.reply(response)
})
exports.rent = bot.hears(['Аренда', 'Rent', 'İcarə'], async(ctx) => {
    const chatId = String(ctx.message.chat.id)
    const language = await getUserLanguage(chatId)
    const response = await getRentContent(language)
    await ctx.reply('Вы выбрали аренду', Markup.keyboard(getKeyboardBack(language)))
    await ctx.reply(response)
})

