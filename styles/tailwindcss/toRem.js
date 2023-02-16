module.exports = (px, important = false) =>
    `${px / 16}rem ${important ? '!important' : ''}`