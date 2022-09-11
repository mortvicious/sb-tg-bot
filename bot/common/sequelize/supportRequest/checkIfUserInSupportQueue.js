const db = require('../../../connections/db.connection')
const SupportRequest = require('../../../models/supportRequest.model')

module.exports = async(chatId) => {
    try {
        const supportRequest = await SupportRequest.findOne({
            where: {
                chatId: chatId,
                status: 'opened'
            }
        })
        
        if (supportRequest) return true
        if (!supportRequest) return false
    } catch (e) {
        console.log(e)
    }
}