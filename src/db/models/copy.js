'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Copy extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Loan,{
        foreignKey : 'copyId',
        as : "copyloans"
      })
      this.belongsTo(models.Book,{
        foreignKey: "copyId",
        as: "book"
      })
      this.belongsTo(models.Member,{
        foreignKey: "memberId",
        as: "member"
      })
    }
  }
  Copy.init({
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Copy',
  });
  return Copy;
};