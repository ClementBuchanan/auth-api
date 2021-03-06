'use strict';

const mongoose = require('mongoose');
const server = require('./src/server.js');
require('dotenv').config();
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/auth-demo-cool';

const mongooseOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
};

mongoose.connect(MONGODB_URI, mongooseOptions)
  .then(() => {
    server.start(process.env.PORT);
  });
