const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("mercadolibre", {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey:true
    },
    title:{
        type: DataTypes.STRING,
        allowNull:false
    },
    price: {
      type: DataTypes.INTEGER,
    },
    currency_id:{
       type: DataTypes.STRING
    },
    available_quantity:{
        type:DataTypes.INTEGER
    },
    thumbnail:{
        type:DataTypes.STRING
    },
    condition:{
        type:DataTypes.STRING
    }
  });
};