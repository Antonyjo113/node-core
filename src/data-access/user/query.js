var jwt = require("jsonwebtoken");
var bcrypt = require("bcrypt");
var salt = bcrypt.genSaltSync(10);

const query = ({ connects, models, Op, _ }) => {
    return Object.freeze({
        userLogin,
        getAllUserData,
    });

    async function userLogin() {
        try {
        const res = await models.User.findOne({
            where: {
            username: username,
            password: password,
            },
        });
        return res;
        } catch (e) {
        console.log("Error: ", e);
        }
    }
    async function getAllUserData() {
        try {
            const users = await models.User.findAll();
            return res.status(200).json(users);
          } catch (error) {
            console.error('Error fetching users:', error);
            return res.status(500).json({
              message: 'Error fetching users',
              error: error.message
            });
          }
    }
};

module.exports = query;