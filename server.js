/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */
const express = require('express');
const path = require('path');

const app = express();

require('dotenv').config();

/** LOGGER FUNCTION */
const logger = (req, res, next) => {
  const date = new Date().toISOString();
  const { method, url } = req;
  console.log(`${date} ===> ${method}: ${url}`);
  next();
};

/** MIDDLEWARE */
app.use(logger);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/** Setting folder views */
app.set('views', path.join(__dirname, 'src/views'));
app.use(express.static('src/assets'));
app.set('view engine', 'ejs');

const biodataRouter = require('./src/routes/biodata.router');

/** ROUTER ENDPOINT */
app.get('/', (req, res) => {
  res.render('home');
});
app.use('/api', biodataRouter);

/** SET UP SERVER */
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running at http://127.0.0.1/${PORT}`);
});
