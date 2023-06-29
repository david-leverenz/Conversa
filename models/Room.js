const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Room extends Model {}

Room.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
       name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },{
        sequelize,
        freezeTableName: true,
        timestamps: true,
        modelName: 'messages'
      });

module.exports = Room;