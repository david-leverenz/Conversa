const { Room } = require('../models');

const roomData = [
    { "room_name": "Solarbreeze", "room_description": "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem." },
    { "room_name": "Veribet", "room_description": "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio." },
    { "room_name": "Cardify", "room_description": "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh." },
    { "room_name": "Lotstring", "room_description": "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros." },
    { "room_name": "Namfix", "room_description": "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem." }
];

const seedRooms = () => Room.bulkCreate(roomData);

module.exports = seedRooms;