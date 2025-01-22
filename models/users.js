const { DataTypes } = require('sequelize');
const sequelize = require('../db/dbconnect');


const User = sequelize.define('students', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
   
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
    type: DataTypes.ENUM('admin', 'user'),
  
  },
}, {
  timestamps: true,  
});


module.exports = User;
