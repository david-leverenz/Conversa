const User = require('./User');
const Room = require('./Room');
const Messages = require('./Messages');

Room.hasMany (User, {
    foreignKey: 'room_id',
    onDelete: 'CASCADE'
});

User.hasMany (Messages, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Messages.belongsTo (User, {
    foreignKey: 'user_id'
});

Messages.belongsTo (Room, {
    foreignKey: 'room_id'
});

User.belongsTo (Room, {
    foreignKey: 'room_id'
});

module.exports = {User, Room, Messages }