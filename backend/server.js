const express = require('express');
const mongoose = require('mongoose');

const bodyParser = require('body-parser');
const cors = require('cors');

const PORT = 4000

mongoose.connect('mongodb://mongodb', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(error => {
  console.log(error);
  process.exit(1);
});

const commentsRouter = require('./routes.js/routes');

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/comment', commentsRouter);

app.listen(PORT => {
  console.log('NodeJS and Express Started.')
});