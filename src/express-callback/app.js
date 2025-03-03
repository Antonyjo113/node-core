// const makeExpressCallback = (controller) => {
//     return (req, res) => {
//      const httpRequest = {
//         file: req.files,
//         body: req.body,
//         query: req.query,
//         params: req.params,
//         ip: req.ip,
//         method: req.method,
//         path: req.path,
//         cookies:req.cookies, //Only for 0365 purpose only
//         headers: {
//           "Content-Type": req.get("Content-Type"),
//           Referer: req.get("referer"),
//           "User-Agent": req.get("User-Agent"),
//           Cookie: req.get("Authorization"),
//           "Access-Control-Allow-Origin": process.env.AUTH_URL,
//           "Access-Control-Allow-Credentials": true
//         },
//       }     
  
//       controller(httpRequest)
//         .then((httpResponse) => {
//           console.log('makeExpressCallback ---------  Antony');
//           if(httpResponse.setCookie) {// Only used for authentication - Begins
//             res.cookie("accessToken", httpResponse.body.data.accessToken, {
//                 // httpOnly: process.env.NODE_ENV === "development" ? false : true,
//                 sameSite: process.env.NODE_ENV === "development" ? true : "none",
//                 secure: process.env.NODE_ENV === "development" ? false : true,
//                 domain: process.env.NODE_ENV === "development" ? 'localhost' : process.env.AUTH_DOMAIN
//             });
//             res.cookie("idToken", httpResponse.body.data.idToken, {
//                 // httpOnly: process.env.NODE_ENV === "development" ? false : true,
//                 sameSite: process.env.NODE_ENV === "development" ? true : "none",
//                 secure: process.env.NODE_ENV === "development" ? false : true,
//                 domain: process.env.NODE_ENV === "development" ? 'localhost' : process.env.AUTH_DOMAIN
//             });
//             res.cookie("homeAccountId", httpResponse.body.data.homeAccountId, {
//                 // httpOnly: process.env.NODE_ENV === "development" ? false : true,
//                 sameSite: process.env.NODE_ENV === "development" ? true : "none",
//                 secure: process.env.NODE_ENV === "development" ? false : true,
//                 domain: process.env.NODE_ENV === "development" ? 'localhost' : process.env.AUTH_DOMAIN
//             });
//             res.cookie("username", httpResponse.body.data.username, {
//                 // httpOnly: process.env.NODE_ENV === "development" ? false : true,
//                 sameSite: process.env.NODE_ENV === "development" ? true : "none",
//                 secure: process.env.NODE_ENV === "development" ? false : true,
//                 domain: process.env.NODE_ENV === "development" ? 'localhost' : process.env.AUTH_DOMAIN
//             });
//             res.redirect(process.env.AUTH_URL);
//           } 
//           else if(httpResponse.loggedOut) {
//             res.cookie('accessToken', 'none', {
//               domain: process.env.NODE_ENV === "development" ? 'localhost' : process.env.AUTH_DOMAIN
//             })
//             res.cookie('idToken', 'none', {
//               domain: process.env.NODE_ENV === "development" ? 'localhost' : process.env.AUTH_DOMAIN
//             })
//             res.cookie('homeAccountId', 'none', {
//               domain: process.env.NODE_ENV === "development" ? 'localhost' : process.env.AUTH_DOMAIN
//             })
//             res.cookie('email', 'none', {
//               domain: process.env.NODE_ENV === "development" ? 'localhost' : process.env.AUTH_DOMAIN
//             })
//             res.status(200).json({ success: true, message: 'User logged out successfully' });
//           } else{ // Only used for authentication - Ends
//             if (httpResponse.headers) {
//               res.set("Access-Control-Allow-Origin", process.env.AUTH_URL);
//               res.set("Access-Control-Allow-Credentials", true);
//               res.set(httpResponse.headers);
//             }
//             res.type("json");
//             res.status(httpResponse.statusCode).send(httpResponse.body);
//           }
           
//         }).catch((e) => {console.log(e); res.sendStatus(500)});
//     };
//   };
  
//   module.exports = makeExpressCallback;

// express-callback/app.js
const makeExpressCallback = (controllerFunction) => {
  return async (req, res) => {
    try {
      console.log('Checking the makeExpressCallback'); // This will now be logged
      const response = await controllerFunction({
        body: req.body,
        query: req.query,
        params: req.params,
        headers: req.headers,
        // ip: req.ip,
      });

      res.status(response.statusCode).json(response.body);
    } catch (error) {
      console.error('Error in makeExpressCallback:', error);
      res.status(500).json({ error: error.message });
    }
  };
};

module.exports = makeExpressCallback;

