require('dotenv').config()
const {bot} = require("../../connections/token.connection")
const getUserLanguage = require('../../common/sequelize/user/getUserLanguage')
const checkForAdmin = require('../../common/sequelize/user/checkForAdmin')
const checkIfUserInSupportQueue = require('../../common/sequelize/supportRequest/checkIfUserInSupportQueue')
const createSupportRequest = require('../../common/sequelize/supportRequest/createSupportRequest')
const setInitMsgId = require('../../common/sequelize/supportRequest/setInitMsgId')
const getIntFromStr = require('../utils/getIntFromStr')
const getUserInitMsgId = require('../../common/sequelize/supportRequest/getUserInitMsgId')
const closeSupportRequest = require('../../common/sequelize/supportRequest/closeSupportRequest')
const setReviewer = require('../../common/sequelize/supportRequest/setReviewer')

const contactLogic = async(ctx) => {
    try {
        const chatId = String(ctx.message.chat.id)
        const username = ctx.message.chat.username
        const chatType = await ctx.message.chat.type
        const message = ctx.message.text
        const supportChannel = process.env.TG_SUPPORT_CHANNEL
        const supportGroup = process.env.TG_SUPPORT_GROUP
        if (chatType === 'private') {
            const admin = await checkForAdmin(chatId)
            const language = await getUserLanguage(chatId)
            const isInSupportRequestsQueue = await checkIfUserInSupportQueue(chatId)
            if (isInSupportRequestsQueue) {
                if (ctx.message.sticker || ctx.message.photo || ctx.message.file) {
                    const msgId = ctx.message.message_id
                    return await ctx.telegram.copyMessage(supportGroup, chatId, msgId)
                }
                const initMsgId = await getUserInitMsgId(chatId)
                return await bot.telegram.sendMessage(supportGroup, `#${chatId}: ${message}`, {reply_to_message_id: initMsgId})
            }
            const req = await createSupportRequest(chatId, username, language)
            const bot_message = await bot.telegram.sendMessage(supportChannel,
                `Request #${req.dataValues._id}\nChat id: ${chatId}\nUsername: @${username}\nPreferred language: ${language === 'ru' ? 'Русский' : language === 'en' ? 'English' : 'Azәrbaycan'}\n\n${message}`)
            if (!admin) {
                switch(language) {
                    case 'ru':
                        ctx.reply('С вами свяжутся в ближайшее время, благодарим за ожидание')
                        break
                    case 'az':
                        ctx.reply('Tezliklə sizinlə əlaqə saxlanılacaq, gözlədiyiniz üçün təşəkkür edirik')
                        break
                    case 'en':
                        ctx.reply('You will be contacted shortly, thank you for waiting')
                        break
                }
            }
        }
        
        if (chatType === 'supergroup') {
            const id = String(ctx.message.message_id)
            if (ctx.message.from?.is_bot === false && !ctx.message.reply_to_message?.from.is_bot === true) {
                const chatId = getIntFromStr(ctx.message.text)
                await setInitMsgId(chatId, id)
                await ctx.telegram.sendMessage(supportGroup, `#${chatId}: Пожалуйста, ответьте на любое сообщение бота для ответа пользователю\n`, { reply_to_message_id: id})
                return
            }
            if (ctx.message.reply_to_message.from.is_bot === true) {
                const replyToTxt = ctx.message.reply_to_message.text.split(' ')[0]
                const chatId = replyToTxt.match(/\d/g).join("")
                const initMsgId = await getUserInitMsgId(chatId)
                const msgId = ctx.message.message_id
                if (message === '/r') {
                    await ctx.telegram.sendMessage(chatId, 'Сеанс завершен')
                    await ctx.telegram.sendMessage(chatId, 'Пожалуйста, оцените работу оператора', {
                        reply_markup: {
                            inline_keyboard: [
                                [
                                    { text: '1', callback_data: 'set_reviewer_1' },
                                    { text: '2', callback_data: 'set_reviewer_2' },
                                    { text: '3', callback_data: 'set_reviewer_3' },
                                    { text: '4', callback_data: 'set_reviewer_4' },
                                    { text: '5', callback_data: 'set_reviewer_5' },
                                ],
                            ],
                        },
                    })
                    return closeSupportRequest(chatId)
                }
                const reviewer = ctx.message.from.id
                await setReviewer(chatId, reviewer)
                return await ctx.telegram.copyMessage(chatId, supportGroup, msgId)
            }
        }
    } catch (e) {
        console.log(e)
    }
}


module.exports = bot.hears(['Contact', 'Связаться', 'Əlaqə'], ctx => contactLogic(ctx))
module.exports = bot.on('message', async(ctx) => contactLogic(ctx))
