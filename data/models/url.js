const mongoose = require('mongoose');

const UrlSchema = new mongoose.Schema({
  urlCode: String,
  longUrl: String,
  shortUrl: String,
  // TODO: переименовать в lifetime
  date: {
    type: String,
    default: Date.now,
  },
  // TODO: добавить поле expires
});

module.exports = mongoose.model('Url', UrlSchema);
