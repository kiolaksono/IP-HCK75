'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Vehicle extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Vehicle.hasMany(models.Transaction)
    }
  }
  Vehicle.init({
    name: {
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        notNull:{
          msg:"Name is required"
        },
        notEmpty:{
          msg:"Name is required"
        }
      }
    },
    colour: DataTypes.STRING,
    cc: {
      type:DataTypes.INTEGER,
      allowNull:false,
      validate:{
        notNull:{
          msg:"Cylinder Capacity (CC) is required"
        },
        notEmpty:{
          msg:"Cylinder Capacity (CC) is required"
        },
      }
    },
    productionYear: DataTypes.STRING,
    image: {
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        notNull:{
          msg:"Image vehicle is required"
        },
        notEmpty:{
          msg:"Image vehicle is required"
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Vehicle',
  });
  return Vehicle;
};