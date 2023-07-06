const User = require('./User');
const Room = require('./Room');
const Messages = require('./Messages');

Room.belongsToMany (User, {
    foreignKey: 'room_id',
    through:{
        model: Messages,
        unique: false
    }
});

User.belongsToMany (Room, {
    foreignKey: 'user_id',
    through:{
        model: Messages,
        unique: false
    }
});

module.exports = {User, Room, Messages }