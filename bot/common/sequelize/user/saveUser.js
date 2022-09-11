const db = require('../../../connections/db.connection')
const User = require('../../../models/user.model')
const {checkIfUserExists} = require('../../sequelize/user/checkIfUserExists')

exports.saveUser = async(chatId, username) => {
    const afterSavingLog = `User @${username} from chat ${chatId} is saved`
    const afterUpdateLog = `User @${username} from chat ${chatId} has been updated`
    const userExistsLog = `User @${username} from chat ${chatId} already exists`
    
    await db.sync()
    
    // const user = await User.findOne({ where: {chatId} })
    const user = await checkIfUserExists(chatId)
    if (!user) {
        await User.create({chatId, username})
        return afterSavingLog
    }
    if (user.username !== username) {
        await User.update({username}, {where: {username}})
        return afterUpdateLog
    }
    
    return userExistsLog
}