'use strict';
const {
  Model
} = require('sequelize');
const { hashPass } = require('../helpers/hash');
module.exports = (sequelize, DataTypes) => {
  class Customer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Customer.hasMany(models.Transaction)
    }
  }
  Customer.init({
    fullName: {
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
    email: {
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        notNull:{
          msg:"Email is required"
        },
        notEmpty:{
          msg:"Email is required"
        },
        isEmail:{
          msg: "Invalid email format"
        }
    }
    },
    password: {
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        notNull:{
          msg:"Password is required"
        },
        notEmpty:{
          msg:"Password is required"
        },
        len:{
          args:[8],
          msg:"Length minimum of password is 8"
        }
      }
    },
    avatar: {
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        notNull:{
          msg:"Avatar is required"
        },
        notEmpty:{
          msg:"Avatar is required"
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Customer',
  });

  Customer.beforeCreate(customer=>{
    customer.password = hashPass(customer.password)
  })
  
  return Customer;
};