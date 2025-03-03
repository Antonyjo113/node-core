const { encrypt, decrypt } = require("../../functions/app");

const buildMakeAddUserField = require("./make-user");

const makeAddUserField = buildMakeAddUserField({ encrypt });

const UserEntityServices = Object.freeze({ makeAddUserField });

module.exports = UserEntityServices;
module.exports = { makeAddUserField };