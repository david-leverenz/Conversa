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
        res.render('login', {newRoomData});
    } catch (error) {
        res.status(500).json(error)
    };
});

router.get('/chat', async (req, res) => {
    try {

        res.render('chat');
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

// router.get('/sessions', async (req, res) => {
//     try {
//         const sessions = req.session.userName;
//         // Respond with the fetched sessions
//         res.json(sessions);
//     } catch (error) {
//         // Handle any errors that occurred during the database operation
//         console.error('Error retrieving sessions:', error);
//         res.status(500).json({ error: 'Failed to retrieve sessions' });
//     }
// });





module.exports = router;