const db = require('../../../connections/db.connection')
const SupportRequest = require('../../../models/supportRequest.model')

module.exports = async(chatId) => {
    try {
        const req = await SupportRequest.findOne(
            {
                where: {chatId: chatId},
                attributes: ['reviewer'],
                order: [[ 'createdAt', 'DESC' ]]
            })
        return req.reviewer
    } catch (e) {
        console.log(e)
    }
}