const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Messages extends Model {}

Messages.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        message_text: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                len: [10, 120],
              },
        },  
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
        },
        room_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'room',
                key: 'id'
            }
        }
      }, {
        sequelize,
        freezeTableName: true,
        timestamps: true,
        modelName: 'messages'
      });
        

      module.exports = Messages;

