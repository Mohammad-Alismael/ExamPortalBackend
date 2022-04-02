const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
require("dotenv").config();

router.delete('/logout', (req, res) => {
    // removing refresh tokens from db table
    // refreshTokens = refreshTokens.filter(token => token !== req.body.token)
    res.sendStatus(204)
})
module.exports = router;