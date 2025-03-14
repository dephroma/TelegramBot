const mongoose = require('mongoose');
require('dotenv').config();

// Схема для пользователя
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    default: null, // null для отсутствующих данных
  },
  userId: {
    type: Number, // ID пользователя Telegram
    default: null, // null, если ID недоступен
  },
  phoneNumber: {
    type: String,
    default: null, // null для отсутствующих данных
  },
  firstContactDate: {
    type: Date,
    default: Date.now, // Дата первого обращения всегда записывается
  },
});

// Модель пользователя
const User = mongoose.model('User', userSchema);

module.exports = User;