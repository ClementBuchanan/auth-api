'use strict';

const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./auth/routes.js');

const app = express();

app.use(express.json());
app.use(authRoutes);

module.exports = {
  server: app,
  start: (port) => {
    if(!port) throw new Error('no port provided');
    app.listen(port, () => {
      console.log(`server up on port ${port}`);
    });
  }
};

