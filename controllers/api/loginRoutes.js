// It was decided to handle user routes in three separate files: "loginRoutes", "logoutRoutes" and "signupRoutes".
// This is the login route.  It finds the user and then validates the password with the checkPassword call.
const router = require('express').Router();
const { User } = require('../../models');
const auth = require('../../utils/auth')

router.post('/', auth, async (req, res) => {
    try {
        const userData = await User.findOne({ where: { username: req.body.username } });
        if (!userData) {
            res
                .status(400)
                .json({ message: 'Incorrect email or password, please try again' });
            return;
        }

        const validPassword = await userData.checkPassword(req.body.password);

        if (!validPassword) {
            res
                .status(400)
                .json({ message: 'Incorrect email or password, please try again' });
            return;
        }

        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;

            res.json({ user: userData, message: 'You are now logged in!' });
        });

    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;