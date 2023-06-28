const router = require('express').Router();
const loginRoutes = require('./loginRoutes');
const signupRoutes = require('./signupRoutes');
const chatRoutes = require('./chatRoutes');

router.use('/login', loginRoutes);
router.use('/signup', signupRoutes);
router.use('/chat', chatRoutes);


module.exports = router;