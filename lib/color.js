const chalk = require('chalk')

const color = (text, color) => {
    return !color ? chalk.green(text) : chalk.keyword(color)(text)
}

const bgcolor = (text, bgcolor) => {
	return !bgcolor ? chalk.green(text) : chalk.bgKeyword(bgcolor)(text)
}

const Riy04Log = (text, color) => {
	return !color ? chalk.greenBright('[ RIY 04 ] ') + chalk.magentaBright(text) : chalk.greenBright('[ RIY 04 ] ') + chalk.keyword(color)(text)
}

module.exports = {
	color,
	bgcolor,
    Riy04Log
}
