const db = require('../../../connections/db.connection')
const EstateContent = require('../../../models/estate.model')

module.exports = async(language) => {
    const content = await EstateContent.findAll()

    if (language === 'az') return content[0].dataValues.content_az
    if (language === 'en') return content[0].dataValues.content_en
    if (language === 'ru') return content[0].dataValues.content_ru
}