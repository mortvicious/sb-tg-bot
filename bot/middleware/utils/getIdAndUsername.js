module.exports = (ctx) => {
    const chatId = String(ctx.message.chat.id)
    const username = ctx.message.chat.username
    return {
        chatId,
        username
    }
}

