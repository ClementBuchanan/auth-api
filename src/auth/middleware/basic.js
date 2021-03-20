'use strict';

const base64 = require('base-64');
const users = require('../models/users.js');

module.exports = async(req, res, next) => {
    if (!req.header.authorization) throw new Error('no authorization');

    let basic = req.headers.authorization.split(' ').pop();
    let [user, pass] = base64.decode(basic).split(':');

    user.authenticateBasic(user, pass)
    .then(validUser => {
        req.user = validUser;
        next();
    })
}

