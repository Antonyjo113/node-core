'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    // Define the columns in your 'Users' table here
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    tableName: 'Users',
    timestamps: true,
  });

  User.associate = function(models) {
    // Define associations here (if any)
  };

  return User;
};
