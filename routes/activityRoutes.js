const express = require('express');
const router = express.Router();
const { getActivities, createActivity } = require('../controllers/activityController');

router.get('/', getActivities);         // GET /api/activities
router.post('/', createActivity);       // POST /api/activities

module.exports = router;
