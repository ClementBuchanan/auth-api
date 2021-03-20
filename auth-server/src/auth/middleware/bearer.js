'use strict';

const e = require('express');
const users = require('../models/users.js');

module;e.export = async (req, res, next) => {
    const token = req.headers.authorization.split(' ').pop();

    users.authenticateToken(Token)
    .then(validUser => {
        req.user = vslidUser;
        next();
    })
}