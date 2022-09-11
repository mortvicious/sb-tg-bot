const db = require('../../../connections/db.connection')
const SupportRequest = require('../../../models/supportRequest.model')
const User = require("../../../models/user.model");

module.exports = async(chatId, initMsgId) => {
    try {
        return await SupportRequest.update(
            {
                init_msg_id: initMsgId
            },
            {
                where: {chatId: chatId, status: 'opened'}
            })
    } catch (e) {
        console.log(e)
    }
}