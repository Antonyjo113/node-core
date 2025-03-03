const { encrypt, decrypt } = require("../../functions/app");

const buildMakeAuthenticate = require("./make-user-authenticate");

const makeAuthenticate = buildMakeAuthenticate({ encrypt });

const UserEntityServices = Object.freeze({ makeAuthenticate });

module.exports = UserEntityServices;
module.exports = { makeAuthenticate };