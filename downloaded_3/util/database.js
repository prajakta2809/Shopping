// const mysql = require('mysql2');

// const pool = mysql.createPool({
//     host: 'localhost',
//     user:'root',
//     database:'node-complete',
//     password:'TusharMinche@2003'

// })

// module.exports=pool.promise();

const Sequelize = require('sequelize');
const sequelize = new Sequelize('node-complete','root','TusharMinche@2003',{dialect:'mysql',host:'localhost'});

module.exports=sequelize;