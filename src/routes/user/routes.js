// const {
//     getUsers,
//     postAuthenticate,
// } = require("../../controller/user/app");

// const routers = ({ router, makeExpressCallback, validateAuth }) => {
//     // GET
//     router.get("/getUserDetails/:buId", validateAuth,makeExpressCallback(getUsers));

//     // POST
//     router.post("/authenticate", validateAuth, makeExpressCallback(postAuthenticate));

//     // update User
//     // router.patch("/:id", validateAuth, makeExpressCallback(patchUser));

//     return router;
// };

// module.exports = routers;

// // routes/routes.js
// const {
//     getUsers,
//     postAuthenticate,
//   } = require("../../controller/user/app");
  
//   const routers = ({ router, makeExpressCallback, validateAuth }) => {
//     // Define routes for your API
//     router.get("/getUserDetails/:buId", validateAuth, makeExpressCallback(getUsers));
//     router.post("/authenticate", validateAuth, makeExpressCallback(postAuthenticate));
  
//     return router;
//   };
  
//   module.exports = routers;
  


// const {
//     getUsers,
//     postAuthenticate,
//   } = require("../../controller/user/app");
  
//   const routers = ({ router, makeExpressCallback, validateAuth }) => {
//     // GET
//     router.get("/getUserDetails/:buId", validateAuth, makeExpressCallback(getUsers));
  
//     // POST
//     router.post("/authenticate", validateAuth, makeExpressCallback(postAuthenticate));
  
//     return router;
//   };
  
//   module.exports = routers;


const { getUsers, postAuthenticate } = require("../../controller/user/app");

const routers = ({ router, makeExpressCallback, validateAuth }) => {
  // Ensure these routes are defined correctly:
  router.get("/", validateAuth, makeExpressCallback(getUsers));
//   router.post("/authenticate", validateAuth, makeExpressCallback(postAuthenticate));

  return router;
};

module.exports = routers;

  