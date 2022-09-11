require('dotenv').config()
const keyboardEn = ['Real Estate', 'Rent', 'Infrastructure', 'Contact']
const keyboardRu = ['Недвижимость', 'Аренда', 'Инфраструктура', 'Связаться']
const keyboardAz = ['Daşınmaz əmlak', 'İcarə', 'İnfrastruktur', 'Əlaqə']

const keyboardEnAdmin = ['Real Estate', 'Rent', 'Infrastructure', 'Contact', `Edit entities`]
const keyboardRuAdmin = ['Недвижимость', 'Аренда', 'Инфраструктура', 'Связаться', `Режим администратора`]
const keyboardAzAdmin = ['Daşınmaz əmlak', 'İcarə', 'İnfrastruktur', 'Əlaqə', `Administrator rejimi`]



const keyboardBackEn = ['Back']
const keyboardBackRu = ['Назад']
const keyboardBackAz = ['Geri']

const admMainChangeKeyboardCallbacks = ['adm_infra_entities', 'adm_rent_entities', 'adm_estate_entities']
const admMainChangeKeyboard = [
    `Infrastructure entities:${admMainChangeKeyboardCallbacks[0]}`, 
    `Rent entities:${admMainChangeKeyboardCallbacks[1]}`,
    `Real Estate entities:${admMainChangeKeyboardCallbacks[2]}`,
]
exports.adminMainChangeInlineKeyboard = admMainChangeKeyboard

exports.getKeyboard = (language) => {
    let keyboard = []
    switch (language) {
        case 'ru':
            keyboard = keyboardRu
            break
        case 'en':
            keyboard = keyboardEn
            break
        case 'az':
            keyboard = keyboardAz
            break
        default:
            keyboard = keyboardEn
    }
    return keyboard
}

exports.getAdminKeyboard = (language) => {
    let keyboard = []
    switch (language) {
        case 'ru':
            keyboard = keyboardRuAdmin
            break
        case 'en':
            keyboard = keyboardEnAdmin
            break
        case 'az':
            keyboard = keyboardAzAdmin
            break
        default:
            keyboard = keyboardEnAdmin
    }
    return keyboard
}

exports.getKeyboardBack = (language) => {
    let keyboard = []
    switch (language) {
        case 'ru':
            keyboard = keyboardBackRu
            break
        case 'en':
            keyboard = keyboardBackEn
            break
        case 'az':
            keyboard = keyboardBackAz
            break
        default:
            keyboard = keyboardBackEn
    }
    return keyboard
}