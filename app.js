const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const { errorHandler } = require('./middlewares/errorHandler');


dotenv.config();


connectDB();

const app = express();
app.use(express.json());


app.use('/worko/user', userRoutes);

app.use(errorHandler);

module.exports = app;
