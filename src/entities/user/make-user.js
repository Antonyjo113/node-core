const buildMakeAuthenticate = ({ encrypt }) => {
    return function makeAuthenticate({
      name,
      email,
      createdAt = Date.now(),
      updatedAt = Date.now()
      } = {}) {
      
  
      if (!name) {
        throw new Error('Email Id is required')
      }
  
      if (!email) {
        throw new Error('Password is required')
      }
  
      return Object.freeze({
          getName: () => name,      
          getEmail: () => email,
          getCreatedAt: () => createdAt,       
          getUpdatedAt: () => updatedAt
      });
    };
  };
  
  module.exports = buildMakeAuthenticate;
  