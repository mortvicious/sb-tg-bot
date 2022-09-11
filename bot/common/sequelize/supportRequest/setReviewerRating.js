const db = require('../../../connections/db.connection')
const SupportRequest = require('../../../models/supportRequest.model')
const setRated = require('./setRated')

module.exports = async(chatId, rating) => {
    try {
        const req = await SupportRequest.findOne(
            {
                where: {chatId: chatId},
                order: [[ 'createdAt', 'DESC' ]]
            })
        req.rating = rating
        await req.save()
        await setRated(chatId)
    } catch (e) {
        console.log(e)
    }
}