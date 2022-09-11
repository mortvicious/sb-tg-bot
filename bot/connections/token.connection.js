require('dotenv').config()
const {Telegraf} = require('telegraf')
exports.bot = new Telegraf(process.env.TG_TOKEN)