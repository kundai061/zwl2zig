const { Sequelize } = require("sequelize")
let db = require("../db");
let Account = db.define('account', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  zwl: {
    type: Sequelize.FLOAT
  }
})
module.exports = Account;