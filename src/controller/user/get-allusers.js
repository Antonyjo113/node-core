const makeGetAllUsers = ({ getAllUserData }) => {
    return async function getAllUserss(httpRequest) {
      try {
        // Extract query parameters from the request
        const { source = {}, ...info } = httpRequest.query;  // Now using query instead of body
        
        // Adding information from headers and other request attributes
        source.ip = httpRequest.ip;
        source.browser = httpRequest.headers["User-Agent"];
        if (httpRequest.headers["Referer"]) {
          source.referrer = httpRequest.headers["Referer"];
        }
  
        console.log('GET Request:', info, source);
  
        // Assuming getAllUsers handles the request
        const fetched = await getAllUserData({
          ...info,
          source,
        });
  
        return {
          headers: {
            "Content-Type": "application/json",
          },
          statusCode: 200,  // Typically, GET requests return status code 200 (OK)
          body: { fetched },
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
  
  module.exports = makeGetAllUsers;
  