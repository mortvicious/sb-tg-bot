const db = require('../../../connections/db.connection')
const SupportRequest = require('../../../models/supportRequest.model')

module.exports = async(chatId, reviewer) => {
    try {
        return await SupportRequest.update(
            {
                reviewer: reviewer
            },
            {
                where: {chatId: chatId, status: 'opened'}
            })
    } catch (e) {
        console.log(e)
    }
}