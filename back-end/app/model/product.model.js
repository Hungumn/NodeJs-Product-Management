const { DataTypes } = require("sequelize");


const createProductModel = (sequelize) => {
    return sequelize.define("Product",{
        fullName:{
            type : DataTypes.STRING(200), // varchar(200)
            allowNull: false,
        },
        amount:{
            type : DataTypes.INTEGER,
            allowNull: false,
        },
        price:{
            type : DataTypes.FLOAT,
            allowNull: false,
        },
        sale:{
            type : DataTypes.FLOAT,
            allowNull:false,
        },
    },{
        tableName: "Products",
        timestamps:true,
    })
  };
module.exports = {
    createProductModel,
};