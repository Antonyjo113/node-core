// const auth = require("basic-auth");
const dotenv = require("dotenv").config();

const msal = require('@azure/msal-node');


// #############
const myAuth = require("./basic-auth");
// #############

 
const validateAuth = myAuth({ msal, dotenv });

// #############
const services = Object.freeze({
  validateAuth
});

module.exports = services;
module.exports = {
  validateAuth
};