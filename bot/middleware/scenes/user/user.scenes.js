const {Scenes, Markup} = require('telegraf')


class UserScenes {
    generateUserSupportScene() {
        const userSupportScene = new Scenes.BaseScene('user_support_scene') 
        
        userSupportScene.enter(async(ctx) => {
            await ctx.reply('Скоро вам ответят')
        })
        
        return userSupportScene
    }
}