const makeAddAuthenticate = ({ UserDb, makeAuthenticate }) => {
    return async function post(info) {
      
      let entityObj = await makeAuthenticate(info); // entity
  
      let data = {      
        username: entityObj.getUsername(),      
        password: entityObj.getPassword(),
        createdAt:entityObj.getCreatedAt()
      };

      const username = await UserDb.getUsername(data.username);
  
      if(!username || username === null) {
        return result = {
          success: false,
          message: `Please Enter Valid Username`
        };
      }
  
      const userAccountStatus = await UserDb.userAccountStatus(data);
  
      if(userAccountStatus) {
        let res = {
          success: userAccountStatus.success,
          message: userAccountStatus.message,
        }
        return res;
      }
    };
  };
  module.exports = makeAddAuthenticate;
  