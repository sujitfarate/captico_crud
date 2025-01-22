const { DataTypes } = require('sequelize');
const sequelize = require('../db/dbconnect');

const Course = sequelize.define('courses', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  duration: {
    type: DataTypes.STRING(50),
    allowNull: true, 
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  }
},{
    timestamps: true,  
  });

module.exports = Course;
