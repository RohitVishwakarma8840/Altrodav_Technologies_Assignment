const Booking = require('../models/Booking');
const Activity = require('../models/Activity');

// Book an Activity
const bookActivity = async (req, res) => {
  const { activityId, userId } = req.body;

  try {
    // Check if activity exists
    const activity = await Activity.findById(activityId);
    if (!activity) {
      return res.status(404).json({ message: 'Activity not found' });
    }

    // Create booking
    const booking = new Booking({
      activity: activityId,
      user: userId,
    });

    // Save booking to the database
    await booking.save();
    res.status(201).json({ message: 'Activity booked successfully', booking });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all bookings for a user
const getUserBookings = async (req, res) => {
  const { userId } = req.body;

  try {
    const bookings = await Booking.find({ user: userId }).populate('activity');
    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { bookActivity, getUserBookings };
