// backend/routes/authRoutes.js
const express = require('express');
const router = express.Router();

// Import the controller where the login function is defined
const authController = require('../controllers/authController');  // Correct path to the controller file

// POST request to '/login' should call authController.login
router.post('/login', authController.login);

module.exports = router;
