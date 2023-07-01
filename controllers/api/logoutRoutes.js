// It was decided to handle user routes in three separate files: "loginRoutes", "logoutRoutes" and "signupRoutes".
// This is the logout route.  I don't think we need the "const { User }" line because it is not reference in the route.  I will remove this before submitting the final project.
const router = require('express').Router();
const { User } = require('../../models');

router.post('/', (req, res) => {
    if (req.session.logged_in) { 
      req.session.destroy(() => {
        res.json({ message: 'Goodbye!' });
        res.status(204).end();
      });
    } else {
      res.status(404).end();
    }
  });
  
module.exports = router;