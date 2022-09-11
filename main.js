require('dotenv').config()

//START COMMAND / STARTUP
require('./bot/middleware/commands/start.commands')

//INIT ADMIN SCENES
require('./bot/scenesInit')

//MAIN COMMANDS
require('./bot/middleware/commands/main.commands')

//BACK COMMAND
require('./bot/middleware/commands/back.command')

//INFRASTRUCTURE COMMAND
require('./bot/middleware/commands/infrastructure.commands')

//LANGUAGE COMMAND
require('./bot/middleware/commands/language.commands')

//ADMIN
require('./bot/middleware/commands/admin/admin.commands')
require('./bot/middleware/commands/admin/admin.rent.commands')

//DEBUG
require('./bot/middleware/commands/debug.command')

//SUPPORT REVIEWER CONTROL
require('./bot/middleware/commands/setReviewer.command')

//CONTACT CONTROL
require('./bot/middleware/commands/contact.commands')

//CONNECTION
require('./bot/connections/local.connection')
// const {Scenes} = require("telegraf");
// const {bot} = require("./bot/connections/token.connection");
console.log('Bot Launched')








