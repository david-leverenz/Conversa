const router = require('express').Router();
const { User } = require('../../models');
const auth = require('../../utils/auth')



router.post('/', auth, async (req, res) => {
    console.log(req.body);
    // console.log(res);
    console.log("here at post!");
    try {
        const userData = await User.findOne({ where: { username: req.body.username } });
        console.log('userData');
        console.log(userData);
        if (!userData) {
            res
                .status(400)
                .json({ message: 'Incorrect Username or password, please try again' });
            return;
        }

        const validPassword = await userData.checkPassword(req.body.password);
        console.log('validPassword');

        console.log(validPassword);

        if (!validPassword) {
            res
                .status(400)
                .json({ message: 'Incorrect Username or password, please try again' });
            return;
        }

        req.session.save(() => {
            req.session.userName = userData.username;
            req.session.user_id = userData.id;
            req.session.logged_in = true;

            res.json({ user: userData, message: 'You are now logged in!' });


        });

        console.log('req.session on log in');
        console.log(req.session);


    } catch (err) {
        console.log(err);

        res.status(400).json(err);
    }
});

module.exports = router;
