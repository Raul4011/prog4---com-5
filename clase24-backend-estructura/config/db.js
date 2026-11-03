const mysql = require('mysql');
const dotenv = require('dotenv');

dotenv.config();

const conection = mysql.createConnection({
     host: process.env.DB_HOST ,
    user: process.env.DB_USER,
    password: process.env.PASSWORD,
    database: process.env.DB_NAME,
})


module.exports = conection;