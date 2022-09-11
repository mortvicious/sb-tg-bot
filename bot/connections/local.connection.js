const {bot} = require('./token.connection')

const tunnel = 'https://good-ears-visit-194-135-155-184.loca.lt'

module.exports = bot.launch({
    // webhook: {
    //     domain: tunnel,
    //     port: 8000
    // }
    polling: true
})