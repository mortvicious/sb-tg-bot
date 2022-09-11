const db = require('../../../connections/db.connection')
const User = require('../../../models/user.model')

exports.checkIfUserExists = async(chatId) => {
    const user = await User.findOne({ where: {chatId} })

    return user
}