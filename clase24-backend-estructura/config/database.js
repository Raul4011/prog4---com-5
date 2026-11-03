const mysql = require('mysql2/promise');
const dotenv = require('dotenv');

dotenv.config();

const getConection = async () => {
    const conection = await mysql.createPool({
        host: process.env.DB_HOST ,
        user: process.env.DB_USER,
        password: process.env.PASSWORD,
        database: process.env.DB_NAME,
    })
    return conection;
}   

module.exports = { getConection };