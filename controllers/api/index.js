const router = require('express').Router();
const loginRoutes = require('./loginRoutes');
const logoutRoutes = require('./logoutRoutes');
const signupRoutes = require('./signupRoutes');
const chatRoutes = require('./chatRoutes');
//requiring all route paths in api folder

router.use('/login', loginRoutes);
router.use('/logout', logoutRoutes);
router.use('/signup', signupRoutes);
router.use('/', chatRoutes);
//using routes for each file in the api folder

module.exports = router;
//exporting routes