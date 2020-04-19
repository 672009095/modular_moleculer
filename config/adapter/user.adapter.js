"use strict";

const Sequelize = require("sequelize");
// database configuration
const seq = new Sequelize('FGI_User', 'root', 'kosong',{
    host: 'localhost',
    dialect: "mysql",
    port: 3306,
});

// connect to database
seq
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = ('sequelize', seq);
