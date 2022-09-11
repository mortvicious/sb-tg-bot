const db = require('../../../connections/db.connection')
const InfrastructureContent = require('../../../models/infrastructure.model')

const titles = {
    
}

module.exports = async(language, title, content) => {
    try {
        await db.sync()

        let res

        switch(language) {
            case 'ru':
                res = await InfrastructureContent.update(
                    {
                        content_ru: content
                    },
                    {
                        where: {title: title}
                    })
                break
            case 'en':
                res = await InfrastructureContent.update(
                    {
                        content_en: content
                    },
                    {
                        where: {title: title}
                    })
                break
            case 'az':
                res = await InfrastructureContent.update(
                    {
                        content_az: content
                    },
                    {
                        where: {title: title}
                    })
                break
        }

        return res
    } catch (e) {
        console.log(e)
    }
}