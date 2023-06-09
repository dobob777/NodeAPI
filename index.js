const express = require('express');
const app = express();

// JSON enabled
const { json } = require('express');
app.use(json());

// Cors Enabled
const cors = require('cors');
app.use(cors());

// Data base Add--
require('./DB/connection');

// API add
app.use('/api', require('./API/todoAPI'));

app.listen(8855, () => {
    console.log('started...')
});