const db = require('../../../connections/db.connection')
const SupportRequest = require('../../../models/supportRequest.model')

module.exports = async(chatId, username, language) => {
    try {
        await db.sync()
        const request = await SupportRequest.create({chatId, username, language})
        return request
    } catch (e) {
        console.log(e)
    }
}