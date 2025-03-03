// const {
//     makeAuthenticate,
// } = require("../../entities/user/app");
  
//   const UserDb = require("../../data-access/user/app");
  
//   const { encrypt, decrypt } = require("../../functions/app");
  
//   // #########
//   const makeAddAuthenticate = require("./add-authenticate");
//   const makeGetAllUserData = require("./get-alluser");

  
//   // #########
//   const addAuthenticate = makeAddAuthenticate({ UserDb, makeAuthenticate });
//   const makeAllUserData = makeGetAllUserData({ UserDb });

  
//   // #########
//   const UsersServices = Object.freeze({
//     addAuthenticate, makeAllUserData
//   });
  
//   module.exports = UsersServices;
//   module.exports = {
//     addAuthenticate,
//     makeAllUserData
//   };


const { makeAuthenticate } = require("../../entities/user/app");
const UserDb = require("../../data-access/user/app");
// const { encrypt, decrypt } = require("../../functions/app");

const makeAddAuthenticate = require("./add-authenticate");
const makeGetAllUserData = require("./get-alluser");

const addAuthenticate = makeAddAuthenticate({ UserDb, makeAuthenticate });
const makeAllUserData = makeGetAllUserData({ UserDb });

const UsersServices = Object.freeze({
  addAuthenticate, 
  makeAllUserData
});

module.exports = UsersServices;  // Export everything as an object
