const db = require('../../../connections/db.connection')
const Queue = require('../../../models/queue.model')

module.exports = async(chatId, username) => {
    try {
        await db.sync()

        const user = await Queue.findOne({where: {chatId: chatId}})

        return !!user
    } catch (e) {
        console.log(e)
    }
}