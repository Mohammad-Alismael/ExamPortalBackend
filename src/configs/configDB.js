require("dotenv").config();
const {Sequelize} = require("sequelize");

exports.sequelize =  new Sequelize(process.env.DATABASE_NAME,
    process.env.DATABASE_USERNAME,
    process.env.DATABASE_PASSWORD,
    {
    host: 'localhost',
    dialect: 'mysql'
});