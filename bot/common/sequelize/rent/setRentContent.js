const db = require('../../../connections/db.connection')
const RentContent = require('../../../models/rent.model')

module.exports = async(language, content) => {
    try {
        await db.sync()

        let res

        switch(language) {
            case 'ru':
                res = await RentContent.update(
                    {
                        content_ru: content
                    },
                    {
                        where: {_id: 1}
                    })
                break
            case 'en':
                res = await RentContent.update(
                    {
                        content_en: content
                    },
                    {
                        where: {_id: 1}
                    })
                break
            case 'az':
                res = await RentContent.update(
                    {
                        content_az: content
                    },
                    {
                        where: {_id: 1}
                    })
                break
        }

        return res
    } catch (e) {
        console.log(e)
    }
}