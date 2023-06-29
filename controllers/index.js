const router = require('express').Router();
const apiRoutes = require('./api');
const viewRoutes = require('./viewRoutes');

router.use('/api', apiRoutes);
router.use('/view', viewRoutes)

module.exports = router;