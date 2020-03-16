/**
 * 数据库连接池
 */
const mysql = require('mysql');
const config = require('../config');

// 创建数据库连接池
const pool = mysql.createPool(config.mysql);

pool.on('acquire', function (connection) {
    console.log(`获取数据库连接 [${connection.threadId}]`);
});
pool.on('connection', function (connection) {
    console.log(`创建数据库连接 [${connection.threadId}]`);
});
pool.on('enqueue', function () {
    console.log('正在等待可用数据库连接');
});
pool.on('release', function (connection) {
    console.log(`数据库连接 [${connection.threadId}] 已释放`);
});

module.exports = pool;