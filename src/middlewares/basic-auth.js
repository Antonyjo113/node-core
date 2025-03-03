
const myAuth = ({ msal, dotenv }) => {
    return async function auths(req, res, next) {
  
      // if(!req.cookies.accessToken){
      //   return res.sendStatus(403);
      // }
      
      //date expiry  10 Minutes to expire
  
      
  /** Cookie code begins */
      // const config = {
      //     auth: {
      //         clientId: process.env.AUTH_CLIENT_ID,
      //         authority: process.env.AUTH_AUTHORITY,
      //         clientSecret: process.env.AUTH_REDIRECT, // do silent callback url 
      //         // Just set the vlaue in cookie
      //     },
      //     system: {
      //         loggerOptions: {
      //             loggerCallback(loglevel, message, containsPii) {
      //                 console.log(message);
      //             },
      //             piiLoggingEnabled: false,
      //             logLevel: msal.LogLevel.Verbose,
      //         }
      //     }
      // };
  
  
  
      // Create msal application object
  
      // const cca = new msal.ConfidentialClientApplication(config);
  
      //   const response = await cca.acquireTokenSilent({
      //     scopes: process.env.OAUTH_SCOPES.split(','),
      //     redirectUri: process.env.OAUTH_REDIRECT_URI,
      //     account: account
      //   });
        /** Cookie code ends */
      
      next();
    };
  };
  
  module.exports = myAuth;