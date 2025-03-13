// netlify/functions/webhookHandler.js

require('dotenv').config();

const { Telegraf } = require('telegraf');
const BOT_TOKEN = process.env.BOT_TOKEN;
const bot = new Telegraf(BOT_TOKEN);

if (!bot) {
    console.error('Bot initialization failed');
} else {
    console.log('Bot initialized successfully');
}

// Функция для обработки webhook
exports.handler = async (event, context) => {
  try {
    const update = JSON.parse(event.body);
    await bot.handleUpdate(update);
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Webhook processed successfully' }),
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Error processing webhook' }),
    };
  }
};