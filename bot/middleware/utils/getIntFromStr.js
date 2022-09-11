module.exports = (str) => {
    const splittedStr = str.split(' ')
    const strLine = splittedStr[3]
    let numb = strLine.match(/\d/g)
    return numb.join("")
}