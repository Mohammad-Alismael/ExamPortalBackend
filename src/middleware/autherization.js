const jwt = require('jsonwebtoken');
require("dotenv").config();
exports.authorize = function (req, res, next) {
    const authHeader = req.headers.authorization;
    const token = authHeader.split(' ')[1];
    jwt.verify(token,process.env.ACCESS_TOKEN_SECRET,(err, data) =>{
        if (err) return res.status(403).json({message: 'invalid or expired token'})
        const {user_id,role_id} = data
        req.user_id = user_id;
        req.role_id = role_id;
        next()
    });
}
