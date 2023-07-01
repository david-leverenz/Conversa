const router = require('express').Router();
const {Messages, User, Room} = require('../../models')

// router.get('/', async (req, res) => {
//     try {
//         const roomData = await Room.findByPk(req.params.id, {
//             include:[{model:User, through:Messages}],
//         });

//         console.log(roomData);
//         res.json(roomData)


//     } catch (err) {
//         res.status(400).json(err);
//     }
// });

module.exports = router;