const { Room } = require('../models');

const roomData = [
    { "name": "Solarbreeze", "description": "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem." },
    { "name": "Veribet", "description": "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio." },
    { "name": "Cardify", "description": "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh." },
    { "name": "Lotstring", "description": "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros." },
    { "name": "Namfix", "description": "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem." }
];

const seedRooms = () => Room.bulkCreate(roomData);

module.exports = seedRooms;