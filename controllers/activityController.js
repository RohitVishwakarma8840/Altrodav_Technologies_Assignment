const Activity = require('../models/Activity');

// List Activities (GET)
const getActivities = async (req, res) => {
  try {
    const activities = await Activity.find();
    res.status(200).json(activities);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create Activity (POST)
const createActivity = async (req, res) => {
    try {
      const { title, description, location, date, time } = req.body;
  
      const newActivity = new Activity({
        title,
        description,
        location,
        date,
        time
      });
  
      await newActivity.save();
      res.status(201).json(newActivity);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  


module.exports = {
  getActivities,
  createActivity
};
