const db = require('../../../connections/db.connection')
const User = require('../../../models/user.model')

module.exports = async(chatId, language) => {
    try {
        const user = await User.findOne({ where: {chatId} })
        if (user) {
            await User.update({language}, {where: {chatId}})
            console.log(`Language of user ${chatId} has been updated to ${language}`)
        }
    } catch (e) {
        console.log(e)
    }
}