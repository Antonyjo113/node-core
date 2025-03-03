const buildMakeAuthenticate = ({ encrypt }) => {
    return function makeAuthenticate({
      username,
      password,
      createdAt = Date.now(),
      updatedAt = Date.now()    
      } = {}) {
      
  
      // if (!username) {
      //   throw new Error('Email Id is required')
      // }
  
      // if (!password) {
      //   throw new Error('Password is required')
      // }
  
      return Object.freeze({
          getUsername: () => username,      
          getPassword: () => password,
          getCreatedAt: () => createdAt,       
          getUpdatedAt: () => updatedAt
      });
    };
  };
  
  module.exports = buildMakeAuthenticate;
  