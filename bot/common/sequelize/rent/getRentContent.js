const db = require('../../../connections/db.connection')
const RentContent = require('../../../models/rent.model')

module.exports = async(language) => {
    await db.sync()
    
    const content = await RentContent.findAll()

    const en = content[0].dataValues.content_en
    const ru = content[0].dataValues.content_ru
    const az = content[0].dataValues.content_az
    
    if (language === 'az') return az
    if (language === 'en') return en
    if (language === 'ru') return ru
}