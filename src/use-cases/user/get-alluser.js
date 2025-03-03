const makeGetAllUserData = ({ UserDb }) => {
    return async function get() {
      
      const allUserData = await UserDb.getAllUserData(data.username);
    console.log('allUserData', allUserData);
      
    };
  };
  module.exports = makeGetAllUserData;
  