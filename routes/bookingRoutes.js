const express = require('express');
const { bookActivity, getUserBookings } = require('../controllers/bookingController');

const router = express.Router();

// Route for booking an activity
router.post('/', bookActivity); // userId in the params

// Route for getting all bookings of a user
router.get('/', getUserBookings); // userId in the params

module.exports = router;
