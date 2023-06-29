const router = require('express').Router();
const { User, Messages, Room} = require('../models');

router.get('/', async (req, res) => {
    try {
        const roomData = await Room.findAll({
            include: [{
                model: User,
                through: Messages,
            }]
        });
        const newRoomData = roomData.map(room => room.get ({ plain:true }));
        console.log(newRoomData);
        res.render('chat', {newRoomData});
    } catch (error) {
        res.status(500).json(error)
    };
});



module.exports = router;