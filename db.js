let Sequlize = require('sequelize');
const db = new Sequlize('zig', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});
module.exports = db;