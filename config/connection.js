// import the sequelize constructor 
const Sequelize = require('sequelize');

// import env
require('dotenv').config();


let sequelize;

if (process.env.JAWSDB_URL) {
    sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
    // create connection to our database 
    sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
        host: 'localhost',
        dialect: 'mysql',
        port: 3306
    });
}


module.exports = sequelize;