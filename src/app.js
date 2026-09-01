const express = require('express');
const cors = require('cors');
const urlRouter = require('./routes/url.routes');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('URL Shortener API is running...');
});

app.use('/api/urls', urlRouter);

module.exports = app;