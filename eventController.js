const Event = require('../models/Event');

// Create Event
const createEvent = async (req, res) => {
  const { name, description, date, location, price, category } = req.body;
  try {
    const newEvent = new Event({ name, description, date, location, price, category });
    await newEvent.save();
    res.status(201).json({ message: 'Event created successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Get All Events
const getAllEvents = async (req, res) => {
  try {
    const events = await Event.find();
    res.status(200).json(events);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Update Event
const updateEvent = async (req, res) => {
  const { id } = req.params;
  const { name, description, date, location, price, category } = req.body;
  try {
    const event = await Event.findByIdAndUpdate(id, { name, description, date, location, price, category }, { new: true });
    res.status(200).json(event);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Delete Event
const deleteEvent = async (req, res) => {
  const { id } = req.params;
  try {
    await Event.findByIdAndDelete(id);
    res.status(200).json({ message: 'Event deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { createEvent, getAllEvents, updateEvent, deleteEvent };
