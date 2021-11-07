const PORT = process.env.PORT || 8888;
const express = require('express');
const app = express();

const connection = require('./data/db.config');
connection.once('open', () => console.log('Database connected successfuly.\n'));
connection.on('erorr', () => console.log('Database connection error.'));

app.use(express.json());
app.use('/api/', require('./routes/url'));
app.use('/', require('./routes/redirect'));
app.use('/', require('./routes/home'));

app.listen(PORT, () => console.log(`Listening ${PORT} port.\nRunning locally? Check http://localhost:8888.\n`));
