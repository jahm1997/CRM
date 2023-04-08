const { DataTypes } = require("sequelize");

module.exports = (database) => {
  database.define(
    "product",
    {
      id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      name: DataTypes.STRING,
      image: {
        type: DataTypes.BLOB("long"),
        allowNull: false,
      },
      quantity: DataTypes.INTEGER,
      enable: DataTypes.BOOLEAN,
      cost_price: DataTypes.NUMERIC,
      sale_price: DataTypes.NUMERIC,
      discount: DataTypes.NUMERIC,
      category: DataTypes.STRING,
    },
    {
      timestamps: false,
    }
  );
};
