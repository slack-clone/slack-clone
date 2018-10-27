const Sequelize = require('sequelize');

const db = new Sequelize('postgres://localhost:5432/slack-clone', { logging: false });

module.exports = db;
