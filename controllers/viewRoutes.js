const router = require('express').Router();
const { User, Messages, Room} = require('../models');
const auth = require('../../utils/auth')

<<<<<<< HEAD
router.get('/', auth, async (req, res) => {
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

=======
// router.get('/', async (req, res) => {
//     try {
//         const roomData = await Room.findAll({
//             include: [{
//                 model: User,
//                 through: Messages,
//             }]
//         });
//         const newRoomData = roomData.map(room => room.get ({ plain:true }));
//         console.log(newRoomData);
//         res.render('chat', {newRoomData});
//     } catch (error) {
//         res.status(500).json(error)
//     };
// });
router.get('/',(req,res)=>{
    res.redirect('/chat')
})
router.get('/chat', (req, res) => {
    res.render('chat')
})
// com
>>>>>>> 166b471af3a6c5d9317703400eca9736ca902f56
router.get('/login', async (req, res) => {
    try {

        res.render('login');
    } catch (error) {
        res.status(500).json(error)
    };
});

<<<<<<< HEAD
// router.get('/profile', async (req, res) => {
//     try {
       
//         res.render('profile');
//     } catch (error) {
//         res.status(500).json(error)
//     };
// });
// not sure what this is doing:)
=======
router.get('/profile', async (req, res) => {
    try {

        res.render('profile');
    } catch (error) {
        res.status(500).json(error)
    };
});

>>>>>>> 166b471af3a6c5d9317703400eca9736ca902f56


module.exports = router;