'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Transaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Transaction.belongsTo(models.Customer)
      Transaction.belongsTo(models.Vehicle)
    }
  }
  Transaction.init({
    CustomerId: {
      type:DataTypes.INTEGER,
      allowNull:false,
      validate:{
        notNull:{
          msg:"You must login first!"
        },
        notEmpty:{
          msg:"You must login first!"
        }
      }
    },
    VehicleId: {
      type:DataTypes.INTEGER,
      allowNull:false,
      validate:{
        notNull:{
          msg:"Vehicle Id is required"
        },
        notEmpty:{
          msg:"Vehicle Id is required"
        }
      }
    },
    EmployeeId: {
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        notNull:{
          msg:"Employee Id is required"
        },
        notEmpty:{
          msg:"Employee Id is required"
        }
      }
    },
    price: {
      type:DataTypes.INTEGER,
      allowNull:false,
      validate:{
        notNull:{
          msg:"Price is required"
        },
        notEmpty:{
          msg:"Price is required"
        }
      }
    },
    status: {
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        notNull:{
          msg:"Status is required"
        },
        notEmpty:{
          msg:"Status is required"
        }
    }
  }
  }, {
    sequelize,
    modelName: 'Transaction',
  });

  Transaction.beforeValidate(el=>{
    el.status = "Paid"
  })
  
  return Transaction;
};