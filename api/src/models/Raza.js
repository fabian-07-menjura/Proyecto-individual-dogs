const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
// ID *
// Nombre *
// Altura *
// Peso *
// Años de vida
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "raza",
    {
      id: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      height: {
        type: DataTypes.DECIMAL,
        allowNull: false,
      },
      weight: {
        type: DataTypes.DECIMAL,
        allowNull: false,
      },
      life_span: {
        type: DataTypes.INTEGER,
        get() {
          return this.getDataValue("life_span") + " years";
        },
      },
      origin: {
        type: DataTypes.STRING,
      },
      image: {
        type: DataTypes.STRING,
      },
    },
    {
      timestamps: false,
      createdAt: false, //quitamos la columna de creacion
      updatedAt: false, // cambiamos el nombre da la columna donde aparece la fecha de actualizacion por la palabra "actualizacion"
    }
  );
};
