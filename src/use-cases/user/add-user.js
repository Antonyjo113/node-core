const makeAddUserData = ({ UserDb, makeAddUserField }) => {
    return async function post(info) {
      
      let entityObj = await makeAddUserField(info); // entity
      console.log("entityObj:", entityObj);
  
      let data = {      
        name: entityObj.getName(),      
        email: entityObj.getEmail(),
        createdAt: entityObj.getCreatedAt(),
        updatedAt: entityObj.getUpdatedAt()

      };

    try {
      const newUser = await UserDb.addUser(data);
      return {
        statusCode: 201, // Status code for successful creation
        body: { message: "User created successfully", user: newUser },
      };

    } catch (error) {
      console.error("Error adding user:", error);
      return {
        statusCode: 500,
        body: { error: "An error occurred while creating the user" },
      };
    }
    };



      // const username = await UserDb.getUsername(data.username);
  
      // if(!username || username === null) {
      //   return result = {
      //     success: false,
      //     message: `Please Enter Valid Username`
      //   };
      // }
  
      // const userAccountStatus = await UserDb.userAccountStatus(data);
  
      // if(userAccountStatus) {
      //   let res = {
      //     success: userAccountStatus.success,
      //     message: userAccountStatus.message,
      //   }
      //   return res;
      // }
  };
  module.exports = makeAddUserData;
  