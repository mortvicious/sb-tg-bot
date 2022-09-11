const db = require('../../../connections/db.connection')
const Queue = require('../../../models/queue.model')

module.exports = async(chatId, username) => {
    try {
        await db.sync()

        let res

        const user = await Queue.findOne({where: {chatId: chatId}})
        
        if (!user) {
            res = await Queue.create({chatId, username})
        }
        
        if (user) {
            return console.log('User already in queue')
        }

        return res
    } catch (e) {
        console.log(e)
    }
}