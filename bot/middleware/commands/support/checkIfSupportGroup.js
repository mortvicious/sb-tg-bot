require('dotenv').config()
const supportGroup = process.env.TG_SUPPORT_GROUP

module.exports = (ctx) => {
    if (ctx.message.chat.id === supportGroup) return true 
    
}