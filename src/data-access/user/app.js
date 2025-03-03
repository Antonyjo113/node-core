const { connects } = require("./app");
const models = require("../sequelize/models");
var _ = require('lodash');
const { Op } = require('sequelize');

// ######
const query = require("./query");
// ######
const userDb = query({ connects, models, Op, _ });
// ######

module.exports = userDb;