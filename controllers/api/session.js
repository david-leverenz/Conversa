const router = require('express').Router();

router.get('/', async (req, res) => {
    try {
        const sessions = req.session.userName;
        // Respond with the fetched sessions
        res.json(sessions);
    } catch (error) {
        // Handle any errors that occurred during the database operation
        console.error('Error retrieving sessions:', error);
        res.status(500).json({ error: 'Failed to retrieve sessions' });
    }
});

module.exports = router;