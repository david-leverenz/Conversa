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

Messages.belongsToOne (User, {
    foreignKey: 'user_id'
});

Messages.belongsToOne (Room, {
    foreignKey: 'room_id'
});

User.belongsToOne (Room, {
    foreignKey: 'room_id'
});

module.exports = {User, Room, Messages };