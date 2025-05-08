const express = require('express');
const { registerUser, loginUser } = require('../controllers/authController');
const { validateRegistration, validateLogin } = require('../validators/authValidator');

const router = express.Router();

// Register route
router.post('/register', validateRegistration, registerUser);

// Login route
router.post('/login', validateLogin, loginUser);

module.exports = router;
