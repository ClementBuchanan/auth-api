'use strict';

const users = require('../../models/users.js');

module.exports = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ').pop();
        const validUser = await users.authenticateToken(token)
        if (validUser) {
            // .then(validUser => {
            req.user = validUser;
            return next();
            // })
        }
        res.status(403).send('invalid');

    }
    catch (e) {
        console.log(e);
        res.status(403).send('invalid');
    }

}