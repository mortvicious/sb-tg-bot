const {Scenes, Markup} = require('telegraf')
const Keyboard = require("telegraf-keyboard");
const {getAdminKeyboard} = require("../../../keyboards");
const getFirstUserInQueue = require('../../../common/sequelize/queue/getFirstUserInQueue')
const getQueueCount = require('../../../common/sequelize/queue/getQueueCount')
const establishQueueConnection = require('../../../common/sequelize/admin/establishQueueConnection')

class SupportSceneGenerator {
    generateAdminSupportScene() {
        const adminSupport = new Scenes.BaseScene('admin_support_scene')

        adminSupport.enter(async(ctx) => {
            try {
                await ctx.reply(
                    'You entered support mode. Here you can handle users in queue, which are waiting your response', 
                    Markup.keyboard(['Start chat', 'Queue count', 'Exit support mode']))
            } catch (e) {
                console.log(e)
            }
        })

        adminSupport.hears('Exit support mode', async(ctx) => {
            try {
                await ctx.scene.leave()
                await ctx.reply('Back to normal mode', Markup.keyboard(getAdminKeyboard()))          
            } catch (e) {
                console.log(e)
            }
        })
        
        adminSupport.hears('Start chat', (ctx) => {
            try {
                //get first userId in queue
                const userId = getFirstUserInQueue()
                //get adminId
                //establish connection (adminId, userId) > enter establishedScene
                establishQueueConnection()
                //1. delete user from queue
                //2. add to user "connectedTo" : adminId
                //3. add to admin "connectedTo" : userId
            } catch (e) {
                
            }
        })

        adminSupport.on('text', async(ctx) => {
            //adminSupport.on text = if user.notAdmin > messages to admin, if admin.isAdmin > messages to user
        })

        return adminSupport
    }
}

module.exports = SupportSceneGenerator