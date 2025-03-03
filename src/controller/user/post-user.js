// const makePostUser = ({ makeUserData }) => {
//     return async function postAuthenticate(httpRequest) {
      
//       try {
//         const { source = {}, ...info } = httpRequest.body;
  
       
//         source.ip = httpRequest.ip;
//         source.browser = httpRequest.headers["User-Agent"];
//         if (httpRequest.headers["Referer"]) {
//           source.referrer = httpRequest.headers["Referer"];
//         }
  
//         console.log('11111111', ...info,  source );
//         const posted = await makeUserData({
//           ...info,
//           source,
//         });
//         return {
//           headers: {
//             "Content-Type": "application/json",
//           },
//           statusCode: 201,
//           body: { posted },
//         };
//       } catch (e) {
//         // TODO: Error logging
//         console.log(e);
//         return {
//           headers: {
//             "Content-Type": "application/json",
//           },
//           statusCode: 400,
//           body: {
//             error: e.message,
//           },
//         };
//       }
//     };
//   };
  
//   module.exports = makePostUser;
  


const makePostUser = ({ makeUserData }) => {
  return async function postAuthenticate(httpRequest) {
    try {
      console.log("httpRequest.body:", httpRequest.body); // Log body

      const { source = {}, ...info } = httpRequest.body;

      source.ip = httpRequest.ip;
      source.browser = httpRequest.headers["User-Agent"];
      if (httpRequest.headers["Referer"]) {
        source.referrer = httpRequest.headers["Referer"];
      }

      console.log("info:", info);
      console.log("source:", source);

      const posted = await makeUserData({
        ...info,
        source,
      });

      return {
        headers: {
          "Content-Type": "application/json",
        },
        statusCode: 201,
        body: { posted },
      };
    } catch (e) {
      // TODO: Error logging
      console.log(e);
      return {
        headers: {
          "Content-Type": "application/json",
        },
        statusCode: 400,
        body: {
          error: e.message,
        },
      };
    }
  };
};

module.exports = makePostUser;
