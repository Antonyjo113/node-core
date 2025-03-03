// const express = require("express");
// const router = express.Router();
// const makeExpressCallback = require("../../express-callback/app");

// const UserRoutes = require("./routes");

// const { validateAuth } = require("../../middlewares/app"); // basic authh validation

// //#########
// const routers = UserRoutes({ router, makeExpressCallback, validateAuth });

// const UserRouters = Object.freeze({
//   routers,
// });

// module.exports = UserRouters;

// module.exports = routers;

// module.exports = router;



// routes/app.js
const express = require("express");
const router = express.Router();
const makeExpressCallback = require("../../express-callback/app");

const UserRoutes = require("./routes"); // This should be the actual route logic

// Assuming validateAuth is a middleware function
const { validateAuth } = require("../../middlewares/app");

// Create the routes using the user route logic
const userRoute = UserRoutes({ router, makeExpressCallback, validateAuth });

// Export the router correctly
module.exports = userRoute;  // Export the final router here


// const express = require("express");
// const router = express.Router();
// const makeExpressCallback = require("../../express-callback/app");

// const { validateAuth } = require("../../middlewares/app");
// const UserRoutes = require("./routes");

// // Define routes
// UserRoutes({ router, makeExpressCallback, validateAuth });

// module.exports = router;
