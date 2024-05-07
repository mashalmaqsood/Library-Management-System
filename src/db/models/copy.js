"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Copy extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Loan, {
        foreignKey: "copyId",
        as: "copyloans",
      });
      this.belongsTo(models.Book, {
        foreignKey: "bookId",
        as: "book",
      });
      this.belongsTo(models.Transaction, {
        foreignKey: "copyId",
        as: "copytransaction",
      });
    }
  }
  Copy.init(
    {
      status: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      bookId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Copy",
    }
  );
  return Copy;
};
