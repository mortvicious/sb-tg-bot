const db = require('../../../connections/db.connection')
const SupportRequest = require('../../../models/supportRequest.model')

module.exports = async(chatId) => {
    try {
        const supportRequest = await SupportRequest.findOne({
            where: {
                chatId: chatId,
                status: 'opened'
            },
            attributes: ['init_msg_id']
        })

        return supportRequest.init_msg_id
    } catch (e) {
        console.log(e)
    }
}