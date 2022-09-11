const db = require('../../../connections/db.connection')
const User = require('../../../models/user.model')

module.exports = async(chatId) => {
    const {admin} = await User.findOne({ where: {chatId}, attributes: ['admin'] })

    return admin
}