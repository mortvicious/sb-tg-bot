const db = require('../../../connections/db.connection')
const SupportRequest = require('../../../models/supportRequest.model')

module.exports = async(chatId) => {
    try {
        const request = await SupportRequest.findOne({
        where: {
            chatId, status: 'opened'
        }
        })
        if (request) {
            await SupportRequest.update(
                {status: 'closed'},
                {where: {chatId, status: 'opened'}}
            )
        }
        return request
    } catch (e) {
        console.log(e)
    }
}