const express = require('express');
const router = express.Router();
const analyticsController = require('../controllers/analyticsController');
const passport = require('../config/passport');

// Middleware function for protected routes
const authenticateJWT = passport.authenticate('jwt', { session: false });

// Get analytics data for the logged-in user
router.get('/analytics', authenticateJWT, analyticsController.getUserAnalytics);

module.exports = router;
