'use strict';

const base64 = require('base-64');
const users = require('../../models/users.js');

module.exports = async (req, res, next) => {
    try {
        if (!req.headers.authorization) throw new Error('no authorization');

        let basic = req.headers.authorization.split(' ').pop();
        let [user, pass] = base64.decode(basic).split(':');
        const validUser = await users.authenticateBasic(user, pass)
        if (validUser) {
            // .then(validUser => {
            req.user = validUser;
            next();
            // })
        }
        // res.status(403).send('invalid');

    }
    catch (e) {
        res.status(403).send('invalid');
    }
}

