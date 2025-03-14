require('dotenv').config();
const { Telegraf } = require('telegraf');

// Загрузка токена из переменных окружения
const BOT_TOKEN = process.env.BOT_TOKEN;

if (!BOT_TOKEN) {
    console.error("Ошибка: BOT_TOKEN не найден в переменных окружения!");
    process.exit(1); // Завершаем выполнение, если токен отсутствует
}

console.log("Инициализация бота..."); // Логируем инициализацию бота
const bot = new Telegraf(BOT_TOKEN);

//! Установка вебхука
bot.telegram.setWebhook('https://telegrambotdag.netlify.app/.netlify/functions/main')
    .then(() => {
        console.log("Webhook успешно установлен!"); // Логируем успешную установку вебхука
    })
    .catch(err => {
        console.error("Ошибка при установке вебхука:", err); // Логируем ошибку установки вебхука
    });

//! Обработчик вебхука
const handleWebhook = async (event, context) => {
    console.log("Получено событие:", JSON.stringify(event, null, 2)); // Логируем полное событие для отладки

    let body;
    try {
        if (event.body) {
            body = JSON.parse(event.body); // Если есть тело запроса, парсим его
            console.log("Успешно распарсено тело запроса:", JSON.stringify(body, null, 2)); // Логируем тело запроса после парсинга
        } else {
            console.warn("Тело запроса пустое!"); // Логируем предупреждение, если тело запроса пустое
            return {
                statusCode: 400,
                body: JSON.stringify({ message: "Empty request body" })
            };
        }

        // Обработка обновления через Telegraf
        console.log("Передача данных в Telegraf для обработки...");
        await bot.handleUpdate(body);
        console.log("Обновление успешно обработано!");

        // Возвращаем успешный ответ Telegram
        console.log("Возвращаем успешный HTTP-ответ Telegram.");
        return {
            statusCode: 200,
            body: JSON.stringify({ message: "Webhook processed successfully" })
        };
    } catch (error) {
        console.error("Произошла ошибка при обработке webhook:", error); // Логируем ошибку обработки вебхука
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Error handling webhook' })
        };
    }
};

module.exports = { bot, handleWebhook };