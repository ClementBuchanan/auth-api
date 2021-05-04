'use strict';

const express = require('express');

const User = require('../models/users.js');
const basicAuth = require('../auth/middleware/basic.js');
const bearerAuth = require('../auth/middleware/bearer.js');
const permissions = require('../auth/middleware/acl.js');

const auth = express.Router();

// user is attached to req.body
auth.post('/signup', async (req, res) => {
    let user = await new User(req.body);
    const record = await user.save();
    // const token = User.generateToken();
    res.status(201).json({ user: record, token: record.token }); // we are sending this back now so that we can see/test the user
});

auth.post('/signin', basicAuth, (req, res) => {
    let userDetails = {
        user: req.user,
        token: req.user.token
    }

    res.status(200).json(userDetails);
});

auth.get('/users', bearerAuth, (req, res) => {
    res.status(200).send('you were able to access this because you have a token');
});

auth.get('/protected-route', bearerAuth, permissions('read'), (req, res) => {
    res.status(200).send('you are signed in and have proper permissions');
});

module.exports = auth;