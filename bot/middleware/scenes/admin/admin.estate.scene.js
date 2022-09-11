const {Scenes, Markup} = require('telegraf')
const Keyboard = require("telegraf-keyboard");
const {getAdminKeyboard} = require("../../../keyboards");
const setEstateContent = require("../../../common/sequelize/estate/setEstateContent");

class EstateSceneGenerator {
    generateEntitiesEstateEditEnScene() {
        const estateEntitiesEditing = new Scenes.BaseScene('entities_editing_estate_en')

        estateEntitiesEditing.enter(async(ctx) => {
            try {
                await ctx.reply('Please, provide content')
            } catch (e) {
                console.log(e)
            }
        })

        estateEntitiesEditing.hears('Exit edit mode', async(ctx) => {
            await ctx.scene.leave()
            await ctx.reply('Back to normal mode', Markup.keyboard(getAdminKeyboard()))
        })

        estateEntitiesEditing.on('text', async(ctx) => {
            const content = await ctx.message.text
            await setEstateContent('en',content)
            await ctx.reply('Rent entity for english language has been updated')
        })

        return estateEntitiesEditing
    }
    generateEntitiesRentEditRuScene() {
        const estateEntitiesEditing = new Scenes.BaseScene('entities_editing_estate_ru')

        estateEntitiesEditing.enter(async(ctx) => {
            try {
                await ctx.reply('Please, provide content:')
            } catch (e) {
                console.log(e)
            }
        })

        estateEntitiesEditing.hears('Exit edit mode', async(ctx) => {
            await ctx.scene.leave()
            await ctx.reply('Back to normal mode', Markup.keyboard(getAdminKeyboard()))
        })
        
        estateEntitiesEditing.on('text', async(ctx) => {
            const content = await ctx.message.text
            await setEstateContent('ru',content)
            await ctx.reply('Rent entity for russian language has been updated')
        })

        return estateEntitiesEditing
    }

    generateEntitiesRentEditAzScene() {
        const estateEntitiesEditing = new Scenes.BaseScene('entities_editing_estate_az')

        estateEntitiesEditing.enter(async(ctx) => {
            try {
                await ctx.reply('Please, provide content')
            } catch (e) {
                console.log(e)
            }
        })

        estateEntitiesEditing.hears('Exit edit mode', async(ctx) => {
            await ctx.scene.leave()
            await ctx.reply('Back to normal mode', Markup.keyboard(getAdminKeyboard()))
        })

        estateEntitiesEditing.on('text', async(ctx) => {
            const content = await ctx.message.text
            await setEstateContent('az', content)
            await ctx.reply('Rent entity for azerbaijani language has been updated')
        })

        return estateEntitiesEditing
    }
}

module.exports = EstateSceneGenerator