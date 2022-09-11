const db = require('../../../connections/db.connection')
const SupportRequest = require('../../../models/supportRequest.model')

module.exports = async(chatId) => {
    try {
        const req = await SupportRequest.findOne(
            {
                where: {chatId: chatId},
                order: [[ 'createdAt', 'DESC' ]]
            })
        req.rated = true
        await req.save()
    } catch (e) {
        console.log(e)
    }
}