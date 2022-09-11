require('dotenv').config()
const {bot} = require("../../../connections/token.connection")
const checkForAdmin = require('../../../common/sequelize/user/checkForAdmin')
// const {Scenes} = require("telegraf");


module.exports = bot.hears(['Edit entities'], async(ctx) => {
    try {
        const chatId = String(ctx.message.chat.id)
        const admin = await checkForAdmin(chatId)

        // if (admin) {
        // const adminScene = new SceneGenerator()
        //
        // const mainAdminScene = adminScene.generateEntitiesEditingScene()
        // console.log(mainAdminScene)
        // const stage = new Scenes.Stage([mainAdminScene])
        // bot.use(stage.middleware())
        await ctx.scene.enter('entities_editing')
            //enter scene
        // }

    } catch (e) {
        console.log(e)
    }
})




