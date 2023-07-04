// This is the jumping off route for the api routes.
const router = require('express').Router();
const loginRoutes = require('./loginRoutes');
const logoutRoutes = require('./logoutRoutes');
const signupRoutes = require('./signupRoutes');
const chatRoutes = require('./chatRoutes');
const sessionRoutes = require('./session');

//requiring all route paths in api folder

router.use('/login', loginRoutes);
router.use('/logout', logoutRoutes);
router.use('/signup', signupRoutes);
router.use('/session', sessionRoutes);
router.use('/', chatRoutes);

//using routes for each file in the api folder

module.exports = router;
//exporting routes