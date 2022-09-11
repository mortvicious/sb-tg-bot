const db = require('../../../connections/db.connection')
const SupportRequest = require('../../../models/supportRequest.model')

module.exports = async(chatId) => {
    try {
        const {rated} = await SupportRequest.findOne(
            {
                where: {chatId},
                attributes: ['rated'],
                order: [[ 'createdAt', 'DESC' ]]
            })

        return rated
    } catch (e) {
        console.log(e)
    }
}