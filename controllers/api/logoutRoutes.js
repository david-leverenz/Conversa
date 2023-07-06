// It was decided to handle user routes in three separate files: "loginRoutes", "logoutRoutes" and "signupRoutes".

const router = require('express').Router();

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