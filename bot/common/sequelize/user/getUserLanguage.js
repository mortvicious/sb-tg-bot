const db = require('../../../connections/db.connection')
const User = require('../../../models/user.model')

module.exports = async(chatId) => {
    const {language} = await User.findOne({ where: {chatId}, attributes: ['language'] })

    return language
}