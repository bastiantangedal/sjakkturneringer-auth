/* eslint-disable import/newline-after-import */
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

// Import routes
const authRoute = require('./routes/auth');

// Route middlewares
app.use('/api/user', authRoute);

app.listen(3000, () => console.log('Server up and running.'));
