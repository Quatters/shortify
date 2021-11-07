const mongoose = require('mongoose');

const DB_URI = process.env.MONGODB_URI + '/shortify' || 'mongodb://localhost:27017/shortify';

mongoose.connect(DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;

module.exports = connection;
