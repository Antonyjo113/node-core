// const { addAuthenticate, getAllUserData } = require("../../use-cases/user/app");

// const makePostAuthenticate = require("./post-authenticate");
// const makeGetAllUsers = require("./get-allusers");


// const postAuthenticate = makePostAuthenticate({ addAuthenticate });
// const postGetAllUser = makeGetAllUsers({ getAllUserData });


// const UserStatusController = Object.freeze({
//   postAuthenticate, postGetAllUser
// });

// module.exports = UserStatusController;
// module.exports = { postAuthenticate, postGetAllUser };


const { addAuthenticate, makeAllUserData } = require("../../use-cases/user/app");

const makePostAuthenticate = require("./post-authenticate");
const makeGetAllUsers = require("./get-allusers");

const postAuthenticate = makePostAuthenticate({ addAuthenticate });
const getUsers = makeGetAllUsers({ makeAllUserData });

const UserStatusController = Object.freeze({
  postAuthenticate, 
  getUsers
});

module.exports = UserStatusController;  // Export everything as an object
