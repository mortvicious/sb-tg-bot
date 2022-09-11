const {Scenes, Markup} = require('telegraf')
const Keyboard = require("telegraf-keyboard")
const {getAdminKeyboard} = require('../../../keyboards')

class SceneGenerator {
    
    generateEntitiesEditingScene() {
        
        //INIT
        const entitiesEditing = new Scenes.BaseScene('entities_editing')
        
        //ENTER
        entitiesEditing.enter(async(ctx) => {
            const keyboard = new Keyboard({inline: true});
            keyboard
                .add('Change infrastructure entities:adm_change_infrastructure')
                .add('Change rent entities:adm_change_rent')
                .add('Change real estate entities:adm_change_estate')
            await ctx.reply('Entered entities editing mode', Markup.keyboard(['Exit edit mode']))
            await ctx.reply('Choose entity', keyboard.draw())
        })
        
        //RENT
        entitiesEditing.action('adm_change_rent', async(ctx) => {
            try {
                const keyboard = new Keyboard({inline: true});
                keyboard
                    .add('Change Russian rent content:adm_change_rent_ru')
                    .add('Change English rent content:adm_change_rent_en')
                    .add('Change Azerbaijani rent content:adm_change_rent_az')

                await ctx.reply('Choose language for changing rent entity', keyboard.draw())
            } catch (e) {
                console.log(e)
            }
        })
        
        entitiesEditing.action('adm_change_rent_en', async(ctx) => {
            try {
                await ctx.scene.leave()
                await ctx.scene.enter('entities_editing_rent_en')
            } catch (e) {
                console.log(e)
            }
        })
        entitiesEditing.action('adm_change_rent_ru', async(ctx) => {
            try {
                await ctx.scene.leave()
                await ctx.scene.enter('entities_editing_rent_ru')
            } catch (e) {
                console.log(e)
            }
        })
        entitiesEditing.action('adm_change_rent_az', async(ctx) => {
            try {
                await ctx.scene.leave()
                await ctx.scene.enter('entities_editing_rent_az')
            } catch (e) {
                console.log(e)
            }
        })
        
        //ESTATE
        entitiesEditing.action('adm_change_estate', async(ctx) => {
            try {
                const keyboard = new Keyboard({inline: true});
                keyboard
                    .add('Change Russian estate content:adm_change_estate_ru')
                    .add('Change English estate content:adm_change_estate_en')
                    .add('Change Azerbaijani estate content:adm_change_estate_az')

                ctx.reply('Choose language for changing estate entity', keyboard.draw())
            } catch (e) {
                console.log(e)
            }
        })

        //INFRASTRUCTURE
        entitiesEditing.action('adm_change_infrastructure', async(ctx) => {
            try {
                const keyboard = new Keyboard({inline: true});
                keyboard
                    .add('Change Russian infrastructure content:adm_change_infrastructure_ru')
                    .add('Change English infrastructure content:adm_change_infrastructure_en')
                    .add('Change Azerbaijani infrastructure content:adm_change_infrastructure_az')

                ctx.reply('Choose language for changing infrastructure entity', keyboard.draw())
            } catch (e) {
                console.log(e)
            }
        })
        
        //EXIT
        entitiesEditing.hears('Exit edit mode', async(ctx) => {
            try {
                await ctx.reply('Back to normal mode', Markup.keyboard(getAdminKeyboard()))
                await ctx.scene.leave()
            } catch (e) {
                console.log(e)
            }
        })

        
        return entitiesEditing
    }
    
}

module.exports = SceneGenerator