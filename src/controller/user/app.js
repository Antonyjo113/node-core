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


const { makeUserData, makeAllUserData } = require("../../use-cases/user/app");

const makePostUser = require("./post-user");
const makeGetAllUsers = require("./get-allusers");

const postUser = makePostUser({ makeUserData });
const getUsers = makeGetAllUsers({ makeAllUserData });

const UserStatusController = Object.freeze({
  postUser, 
  getUsers
});

module.exports = UserStatusController;  // Export everything as an object
