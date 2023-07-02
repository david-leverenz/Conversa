// Uses "auth" to prevent direct route access.  First route gets all room and associated user data. Login and signup routes render the login and signup handlebars pages.  Chat and profile routes are commented out.  Chat is handled in "chatRoutes" file.  Not sure if "profile" is needed.  I am leaving them here in case we need them later.  Need to remove them if they are not going to be used.
const router = require('express').Router();
const { User, Messages, Room} = require('../models');
const auth = require('../utils/auth')

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
// router.get('/',(req,res)=>{
//     res.redirect('/chat')
// })
// router.get('/chat', (req, res) => {
//     res.render('chat')
// })
// // com
router.get('/login', async (req, res) => {
    try {

        res.render('login');
    } catch (error) {
        res.status(500).json(error)
    };
});

router.get('/signup', async (req,res) => {
    try {
        res.render('signup');
    } catch (error) {
        res.status(500).json(error);
    }
})

// router.get('/profile', async (req, res) => {
//     try {

//         res.render('profile');
//     } catch (error) {
//         res.status(500).json(error)
//     };
// });



module.exports = router;