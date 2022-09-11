module.exports = async(ctx, chatType) => {
    if (chatType === 'supergroup') return await ctx.message.message_id
}