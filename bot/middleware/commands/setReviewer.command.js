const {bot} = require("../../connections/token.connection")
const Keyboard = require("telegraf-keyboard")
const setUserLanguage = require('../../common/sequelize/user/setUserLanguage')
const {Markup} = require("telegraf")
const {getKeyboard} = require("../../keyboards")
const getReviewer = require('../../common/sequelize/supportRequest/getReviewer')
const setReviewerRating = require('../../common/sequelize/supportRequest/setReviewerRating')
const checkIfRated = require('../../common/sequelize/supportRequest/checkIfRated')

const setReviewerLogic = async(ctx, rating) => {
    try {
        const chatId = String(ctx.update.callback_query.message.chat.id)
        const rated = await checkIfRated(chatId)
        console.log(rated)
        if (!rated) {
            await setReviewerRating(chatId, `${rating}`)
            return await ctx.reply(`Вы оценили качество обслуживания на ${rating}, благодарим`)            
        }
        return await ctx.reply(`Вы уже выставили оценку данному сеансу`)
    } catch(e) {
        console.log(e)
    }    
}

bot.action('set_reviewer_1', async (ctx) => setReviewerLogic(ctx, '1'))
bot.action('set_reviewer_2', async (ctx) => setReviewerLogic(ctx, '2'))
bot.action('set_reviewer_3', async (ctx) => setReviewerLogic(ctx, '3'))
bot.action('set_reviewer_4', async (ctx) => setReviewerLogic(ctx, '4'))
bot.action('set_reviewer_5', async (ctx) => setReviewerLogic(ctx, '5'))