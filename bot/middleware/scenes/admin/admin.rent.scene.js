const {Scenes, Markup} = require('telegraf')
const Keyboard = require("telegraf-keyboard");
const {getAdminKeyboard} = require("../../../keyboards");
const setRentContent = require("../../../common/sequelize/rent/setRentContent");

class RentSceneGenerator {
    generateEntitiesRentEditEnScene() {
        const rentEntitiesEditing = new Scenes.BaseScene('entities_editing_rent_en')

        rentEntitiesEditing.enter(async(ctx) => {
            try {
                await ctx.reply('Please, provide content')
            } catch (e) {
                console.log(e)
            }
        })

        rentEntitiesEditing.hears('Exit edit mode', async(ctx) => {
            await ctx.scene.leave()
            await ctx.reply('Back to normal mode', Markup.keyboard(getAdminKeyboard()))
        })

        rentEntitiesEditing.on('text', async(ctx) => {
            const content = await ctx.message.text
            await setRentContent('en',content)
            await ctx.reply('Rent entity for english language has been updated')
        })

        return rentEntitiesEditing
    }
    generateEntitiesRentEditRuScene() {
        const rentEntitiesEditing = new Scenes.BaseScene('entities_editing_rent_ru')

        rentEntitiesEditing.enter(async(ctx) => {
            try {
                await ctx.reply('Please, provide content:')
            } catch (e) {
                console.log(e)
            }
        })

        rentEntitiesEditing.hears('Exit edit mode', async(ctx) => {
            await ctx.scene.leave()
            await ctx.reply('Back to normal mode', Markup.keyboard(getAdminKeyboard()))
        })

        rentEntitiesEditing.on('text', async(ctx) => {
            const content = await ctx.message.text
            await setRentContent('ru',content)
            await ctx.reply('Rent entity for russian language has been updated')
        })

        return rentEntitiesEditing
    }

    generateEntitiesRentEditAzScene() {
        const rentEntitiesEditing = new Scenes.BaseScene('entities_editing_rent_az')

        rentEntitiesEditing.enter(async(ctx) => {
            try {
                await ctx.reply('Please, provide content:')
            } catch (e) {
                console.log(e)
            }
        })

        rentEntitiesEditing.hears('Exit edit mode', async(ctx) => {
            await ctx.scene.leave()
            await ctx.reply('Back to normal mode', Markup.keyboard(getAdminKeyboard()))
        })

        rentEntitiesEditing.on('text', async(ctx) => {
            const content = await ctx.message.text
            await setRentContent('az',content)
            await ctx.reply('Rent entity for azerbaijani language has been updated')
        })

        return rentEntitiesEditing
    }
}

module.exports = RentSceneGenerator