/**
 * 数据库连接
 */
const mysql = require('mysql');
const config = require('../config');
const connection = mysql.createConnection(config.mysql);

// 创建数据库连接
function getConnection () {
    // return mysql.createConnection(config.mysql);
    return connection;
}

module.exports = {
    getConnection
};