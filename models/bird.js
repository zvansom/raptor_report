'use strict';
module.exports = (sequelize, DataTypes) => {
  var bird = sequelize.define('bird', {
    name: DataTypes.STRING,
    scientific_name: DataTypes.STRING,
    family: DataTypes.STRING,
    location: DataTypes.STRING,
    notes: DataTypes.TEXT,
    userId: DataTypes.INTEGER
  }, {});
  bird.associate = function(models) {
    // associations can be defined here
    models.bird.belongsTo(models.user);
  };
  return bird;
};